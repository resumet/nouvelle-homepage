import type { HotelImage, Localized } from './hotel';
import { photos } from './photos.ts';

export type Room = {
  slug: 'deluxe' | 'premium-suite';
  name: string;
  bookingName: string;
  bed: string;
  copy: Localized<{ title: string; description: string }>;
  area: number;
  count: number;
  feature: string;
  images: HotelImage[];
};

export const rooms: Room[] = [
  {
    slug: 'deluxe', name: 'Deluxe Room', bookingName: '디럭스 더블룸', bed: '더블침대 1개', area: 25, count: 27,
    feature: '객실 내 원형 욕조',
    copy: { ko: { title: '감각적인 편안함, 디럭스 룸', description: '도시의 하루를 마무리하는 나만의 공간. 따뜻한 목재 인테리어와 객실 안의 원형 욕조에서 여유로운 휴식을 만나보세요.' } },
    images: [photos.deluxeBedroom, photos.deluxeBed, photos.deluxeBathtub, photos.deluxeSound, photos.deluxeDetail],
  },
  {
    slug: 'premium-suite', name: 'Suite Room', bookingName: '스위트룸', bed: '더블침대 1개', area: 25, count: 3,
    feature: '객실 내 원형 욕조',
    copy: { ko: { title: '오롯이 머무는 특별한 하루', description: '취향을 담은 인테리어와 차분한 분위기. 객실 안의 원형 욕조에서 일상의 속도를 늦추고 나를 위한 시간을 보내보세요.' } },
    images: [photos.roomBathBedroom, photos.roomBathWide, photos.roomBathTub, photos.roomBathBed, photos.roomBathBathroom],
  },
];
