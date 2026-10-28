import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { hotel } from '../src/data/hotel.ts';
import { rooms } from '../src/data/rooms.ts';
import { bookingUrl, isValidBookingUrl } from '../src/data/booking.ts';

const missing: string[] = [];
if (!isValidBookingUrl(bookingUrl)) missing.push('확인된 Booking.com 호텔 URL');
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
    else if (!existsSync(file) || !image.alt.trim() || image.width <= 0 || image.height <= 0) missing.push(`${group.label}: 사진 파일/설명/크기 확인`);
  }
}
if (missing.length) {
  console.error(`공개 배포 전 다음 자료를 등록하세요:\n${missing.map(item => `- ${item}`).join('\n')}`);
  process.exitCode = 1;
} else console.log('출시 필수 자료가 등록되었습니다. 운영 정보와 사진 사용 권한을 검수한 뒤 배포하세요.');
