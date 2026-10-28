import sharp from 'sharp';
await sharp('public/images/og.svg').png().toFile('public/images/og.png');
console.log('Generated 1200×630 brand preview image.');
