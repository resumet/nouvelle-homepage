import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join, extname } from 'node:path';
import assert from 'node:assert/strict';
import { bookingUrlForLocale, canBook } from '../src/data/booking.ts';

const root = resolve('dist');
const base = '/';
const site = 'https://nouvellehotelandspa.com';
const paths = ['', 'rooms/', 'rooms/deluxe/', 'rooms/premium-suite/', 'facilities/', 'location/', 'explore/', 'contact/', 'privacy/', 'terms/'];
const localeConfigs = [
  { locale: 'ko', prefix: '', lang: 'ko' },
  { locale: 'en', prefix: 'en/', lang: 'en' },
  { locale: 'zh-CN', prefix: 'zh-cn/', lang: 'zh-CN' },
];
const pages = [
  ...localeConfigs.flatMap(config => paths.map(path => ({ file: `${config.prefix}${path}index.html`, path: `${config.prefix}${path}`, ...config }))),
  { file: '404.html', path: '404.html', locale: 'ko', prefix: '', lang: 'ko', is404: true },
];
const titles = new Set();
let links = 0;
const urls = new Set();
for (const page of pages) {
  const { file } = page;
  const html = await readFile(join(root, file), 'utf8');
  const bookingUrl = bookingUrlForLocale(page.locale);
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${file}: exactly one H1`);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title && !titles.has(title), `${file}: unique page title`);
  titles.add(title);
  assert.ok(html.includes(`<html lang="${page.lang}"`), `${file}: document language`);
  assert.match(html, /name="description" content="[^"]+"/, `${file}: description`);
  const expected = `${site}${base}${page.path}`;
  assert.ok(html.includes(`rel="canonical" href="${expected}"`), `${file}: correct canonical`);
  if (page.is404) assert.match(html, /noindex, follow/);
  else {
    const contentPath = page.path.replace(/^(?:en|zh-cn)\//, '');
    for (const config of localeConfigs) {
      const alternate = `${site}${base}${config.prefix}${contentPath}`;
      assert.ok(html.includes(`hreflang="${config.lang}" href="${alternate}"`), `${file}: ${config.lang} alternate`);
    }
    assert.ok(html.includes(`hreflang="x-default" href="${site}${base}${contentPath}"`), `${file}: x-default alternate`);
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (url.startsWith('//')) throw new Error(`${file}: protocol-relative URL ${url}`);
    if (!url.startsWith('/')) continue;
    assert.ok(url.startsWith(base), `${file}: base prefix missing: ${url}`);
    urls.add(url.split(/[?#]/)[0]); links++;
  }
  for (const match of html.matchAll(/\bsrcset="([^"]+)"/g)) {
    for (const candidate of match[1].split(',')) {
      const url = candidate.trim().split(/\s+/)[0];
      assert.ok(url.startsWith(base), `${file}: responsive image base prefix missing: ${url}`);
      urls.add(url); links++;
    }
  }
  for (const match of html.matchAll(/<a\b[^>]*href="(https:\/\/[^\"]*booking\.com[^\"]*)"[^>]*>/g)) {
    assert.match(match[0], /target="_blank"/);
    assert.match(match[0], /rel="noopener noreferrer"/);
    assert.match(match[1], /https:\/\/(?:www\.)?booking\.com\/hotel\//);
    assert.ok(canBook, `${file}: booking links must stay hidden without a valid hotel URL`);
    assert.equal(match[1].replaceAll('&amp;', '&'), bookingUrl, `${file}: all booking links must use the configured hotel URL`);
  }
  if (canBook) {
    assert.ok(html.includes(`href="${bookingUrl.replaceAll('&', '&amp;')}"`), `${file}: active booking link is missing`);
    assert.ok(!html.includes('booking-pending'), `${file}: reservation controls must activate together`);
  }
  assert.doesNotMatch(html, /googletagmanager|google-analytics|gtag\(/i);
}
for (const url of urls) {
  let target = resolve(root, decodeURI(url.slice(base.length)));
  assert.ok(target === root || target.startsWith(root + '\\') || target.startsWith(root + '/'));
  if (url.endsWith('/')) target = join(target, 'index.html');
  const info = await stat(target).catch(() => null);
  assert.ok(info?.isFile(), `Missing asset or route: ${url}`);
}
async function checkCss(folder) {
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    const path = join(folder, entry.name);
    if (entry.isDirectory()) await checkCss(path);
    else if (extname(path) === '.css') {
      const css = await readFile(path, 'utf8');
      for (const match of css.matchAll(/url\((?:["']?)([^)"']+)(?:["']?)\)/g)) {
        if (match[1].startsWith('data:') || match[1].startsWith('http')) continue;
        const target = match[1].startsWith(base) ? resolve(root, match[1].slice(base.length)) : resolve(folder, match[1]);
        assert.ok((await stat(target).catch(() => null))?.isFile(), `Missing CSS asset: ${match[1]}`);
      }
    }
  }
}
await checkCss(root);
const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
for (const config of localeConfigs) for (const path of paths) assert.ok(sitemap.includes(`<loc>${site}${base}${config.prefix}${path}</loc>`), `Sitemap missing ${config.prefix}${path}`);
assert.ok(!sitemap.includes('404'));
assert.match(sitemap, /xmlns:xhtml="http:\/\/www\.w3\.org\/1999\/xhtml"/);
assert.match(await readFile(join(root, 'robots.txt'), 'utf8'), /Sitemap: https:\/\/nouvellehotelandspa.com\/sitemap.xml/);
console.log(`Verified ${pages.length} pages across 3 languages, ${links} internal references, canonical and hreflang URLs, sitemap, structured data, CSS/font assets, and booking link attributes.`);
