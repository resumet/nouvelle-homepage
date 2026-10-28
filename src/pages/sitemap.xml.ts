import type { APIRoute } from 'astro';
import { withBase } from '../utils/paths';
export const GET: APIRoute = ({ site }) => {
  const paths = ['', 'rooms/', 'rooms/deluxe/', 'rooms/premium-suite/', 'facilities/', 'location/', 'explore/', 'contact/', 'privacy/', 'terms/'];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${new URL(withBase(path), site).href}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
