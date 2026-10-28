import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import sharp from 'sharp';
import { hotel } from '../src/data/hotel.ts';
import { rooms } from '../src/data/rooms.ts';
import { bookingUrls, isValidBookingUrl } from '../src/data/booking.ts';
import { imageAlt, publishedLocales } from '../src/i18n/config.ts';

const missing: string[] = [];
if (Object.values(bookingUrls).some(url => !isValidBookingUrl(url))) missing.push('언어별로 확인된 Booking.com 호텔 URL');
for (const [key, label] of [['address', '도로명주소'], ['phone', '대표 전화']] as const) if (!hotel[key].trim()) missing.push(label);
if (!hotel.emails.length || hotel.emails.some(email => !email.trim())) missing.push('공식 이메일');
const imageGroups = [
  { label: '호텔 히어로', images: hotel.heroImage ? [hotel.heroImage] : [] },
  { label: '프리미엄 스피커', images: hotel.soundImage ? [hotel.soundImage] : [] },
  { label: '지하 프라이빗 욕장', images: hotel.bathImages },
  ...rooms.map(room => ({ label: room.name, images: room.images })),
];
for (const group of imageGroups) {
  if (!group.images.length) missing.push(`${group.label} 실제 사진`);
  for (const image of group.images) {
    const file = resolve('public', image.src);
    const publicRoot = resolve('public');
    if (!file.startsWith(publicRoot + '\\') && !file.startsWith(publicRoot + '/')) missing.push(`${group.label}: 사진 경로는 public 내부여야 합니다`);
    else if (!existsSync(file) || publishedLocales.some(locale => !imageAlt(image, locale).trim()) || image.width <= 0 || image.height <= 0) missing.push(`${group.label}: 사진 파일/다국어 설명/크기 확인`);
    else {
      try {
        const metadata = await sharp(file).metadata();
        if (metadata.width !== image.width || metadata.height !== image.height) missing.push(`${group.label}: 사진의 실제 크기와 데이터 불일치`);
        for (const variant of image.variants ?? []) {
          const variantFile = resolve('public', variant.src);
          if (!variantFile.startsWith(publicRoot + '\\') && !variantFile.startsWith(publicRoot + '/')) { missing.push(`${group.label}: 반응형 사진 경로 확인`); continue; }
          const variantMetadata = await sharp(variantFile).metadata();
          if (variantMetadata.width !== variant.width) missing.push(`${group.label}: 반응형 사진 크기 불일치`);
        }
      } catch { missing.push(`${group.label}: 이미지 디코딩 실패 또는 반응형 파일 누락`); }
    }
  }
}
const provenance = JSON.parse(readFileSync('docs/PHOTO_ASSETS.json', 'utf8')) as { images: { fullSizeWebp: string; roomType?: string }[] };
for (const room of rooms) for (const image of room.images) {
  if (provenance.images.find(item => item.fullSizeWebp === image.src)?.roomType !== room.slug) missing.push(`${room.name}: 확인된 객실 유형과 사진 분류 불일치`);
}
if (missing.length) {
  console.error(`공개 배포 전 다음 자료를 등록하세요:\n${missing.map(item => `- ${item}`).join('\n')}`);
  process.exitCode = 1;
} else console.log('출시 필수 자료가 등록되었습니다. 운영 정보와 사진 사용 권한을 검수한 뒤 배포하세요.');
