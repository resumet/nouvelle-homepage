import type { HotelImage, Localized } from './hotel';

export type Room = {
  slug: 'deluxe' | 'premium-suite';
  name: string;
  copy: Localized<{ title: string; description: string }>;
  area: number;
  count: number;
  feature: string;
  images: HotelImage[];
};

export const rooms: Room[] = [
  {
    slug: 'deluxe', name: 'Deluxe Room', area: 25, count: 27,
    feature: '시티뷰',
    copy: { ko: { title: '감각적인 편안함, 디럭스 룸', description: '도시의 하루를 마무리하는 나만의 공간. 세련된 인테리어와 편안한 분위기 속에서 여유로운 휴식을 만나보세요.' } },
    images: [],
  },
  {
    slug: 'premium-suite', name: 'Premium Suite', area: 48, count: 3,
    feature: '객실 내 2인용 욕탕',
    copy: { ko: { title: '공간의 여유가 만드는 특별한 하루', description: '한층 넓은 공간에 담긴 여유. 객실 안의 2인용 욕탕에서 오롯이 머무는 시간에 집중해 보세요.' } },
    images: [],
  },
];
