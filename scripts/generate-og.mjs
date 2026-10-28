import sharp from 'sharp';
import { hotel } from '../src/data/hotel.ts';

if (hotel.heroImage) {
  const overlay = Buffer.from(`<svg width="1200" height="630"><defs><linearGradient id="shade"><stop stop-color="#10130f" stop-opacity=".88"/><stop offset="1" stop-color="#10130f" stop-opacity=".2"/></linearGradient></defs><rect width="1200" height="630" fill="url(#shade)"/><text x="85" y="300" font-family="Arial,sans-serif" font-size="96" font-weight="600" letter-spacing="10" fill="#fff">NOUVER.</text><text x="90" y="355" font-family="Arial,sans-serif" font-size="21" letter-spacing="5" fill="#e4c06a">HOTEL &amp; SPA JONGNO</text><text x="90" y="510" font-family="Arial,sans-serif" font-size="17" letter-spacing="3" fill="#fff">URBAN RETREAT, ELEVATED COMFORT</text></svg>`);
  await sharp(`public/${hotel.heroImage.src}`).resize(1200, 630, { fit: 'cover' }).composite([{ input: overlay }]).png().toFile('public/images/og.png');
} else await sharp('public/images/og.svg').png().toFile('public/images/og.png');
console.log('Generated 1200×630 hotel preview image.');
