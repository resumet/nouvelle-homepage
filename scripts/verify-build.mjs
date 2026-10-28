import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join, extname } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve('dist');
const base = '/nouvelle-homepage/';
const site = 'https://resumet.github.io';
const paths = ['', 'rooms/', 'rooms/deluxe/', 'rooms/premium-suite/', 'facilities/', 'location/', 'explore/', 'contact/', 'privacy/', 'terms/'];
const pages = [...paths.map(path => `${path}index.html`), '404.html'];
const titles = new Set();
let links = 0;
const urls = new Set();
for (const file of pages) {
  const html = await readFile(join(root, file), 'utf8');
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${file}: exactly one H1`);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title && !titles.has(title), `${file}: unique page title`);
  titles.add(title);
  assert.match(html, /<html lang="ko"/, `${file}: document language`);
  assert.match(html, /name="description" content="[^"]+"/, `${file}: description`);
  const expected = file === '404.html' ? `${site}${base}404.html` : `${site}${base}${file.replace(/index\.html$/, '')}`;
  assert.ok(html.includes(`rel="canonical" href="${expected}"`), `${file}: correct canonical`);
  if (file === '404.html') assert.match(html, /noindex, follow/);
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (url.startsWith('//')) throw new Error(`${file}: protocol-relative URL ${url}`);
    if (!url.startsWith('/')) continue;
    assert.ok(url.startsWith(base), `${file}: base prefix missing: ${url}`);
    urls.add(url.split(/[?#]/)[0]); links++;
  }
  for (const match of html.matchAll(/<a\b[^>]*href="(https:\/\/[^\"]*booking\.com[^\"]*)"[^>]*>/g)) {
    assert.match(match[0], /target="_blank"/);
    assert.match(match[0], /rel="noopener noreferrer"/);
    assert.match(match[1], /https:\/\/(?:www\.)?booking\.com\/hotel\//);
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
for (const path of paths) assert.ok(sitemap.includes(`<loc>${site}${base}${path}</loc>`), `Sitemap missing ${path}`);
assert.ok(!sitemap.includes('404'));
assert.match(await readFile(join(root, 'robots.txt'), 'utf8'), /Sitemap: https:\/\/resumet.github.io\/nouvelle-homepage\/sitemap.xml/);
console.log(`Verified ${pages.length} pages, ${links} internal references, canonical URLs, sitemap, structured data, CSS/font assets, and booking link attributes.`);
