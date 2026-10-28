import type { APIRoute } from 'astro';
import { localeMeta, localePath, publishedLocales } from '../i18n/config';
export const GET: APIRoute = ({ site }) => {
  const paths = ['', 'rooms/', 'rooms/deluxe/', 'rooms/premium-suite/', 'facilities/', 'location/', 'explore/', 'contact/', 'privacy/', 'terms/'];
  const alternateLinks = (path: string) => `${publishedLocales.map(locale => `<xhtml:link rel="alternate" hreflang="${localeMeta[locale].htmlLang}" href="${new URL(localePath(locale, path), site).href}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${new URL(localePath('ko', path), site).href}"/>`;
  const urls = publishedLocales.flatMap(locale => paths.map(path => `<url><loc>${new URL(localePath(locale, path), site).href}</loc>${alternateLinks(path)}</url>`)).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
