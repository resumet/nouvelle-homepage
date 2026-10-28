import type { HotelImage, Localized } from './hotel';
import { photos } from './photos.ts';

export type Room = {
  slug: 'deluxe' | 'premium-suite';
  name: string;
  bookingName: Localized<string>;
  bed: Localized<string>;
  copy: Localized<{ title: string; description: string }>;
  area: number;
  count: number;
  feature: Localized<string>;
  images: HotelImage[];
};

export const rooms: Room[] = [
  {
    slug: 'deluxe', name: 'Deluxe Room', bookingName: { ko: '디럭스 더블룸', en: 'Deluxe Double Room', 'zh-CN': '豪华双人间' }, bed: { ko: '더블침대 1개', en: '1 double bed', 'zh-CN': '1张双人床' }, area: 25, count: 27,
    feature: { ko: '객실 내 원형 욕조', en: 'Private round bathtub', 'zh-CN': '客房内圆形浴缸' },
    copy: {
      ko: { title: '감각적인 편안함, 디럭스 룸', description: '도시의 하루를 마무리하는 나만의 공간. 따뜻한 목재 인테리어와 객실 안의 원형 욕조에서 여유로운 휴식을 만나보세요.' },
      en: { title: 'Refined comfort in the Deluxe Room', description: 'A private space to unwind after a day in the city. Warm wood interiors and a round bathtub in the room invite you to slow down.' },
      'zh-CN': { title: '豪华客房，精致而舒适', description: '结束城市漫游后，回到属于自己的安静空间。在温润的木质内饰与客房圆形浴缸中放慢节奏。' },
    },
    images: [photos.deluxeBedroom, photos.deluxeBed, photos.deluxeBathtub, photos.deluxeSound, photos.deluxeDetail],
  },
  {
    slug: 'premium-suite', name: 'Suite Room', bookingName: { ko: '스위트룸', en: 'Suite Room', 'zh-CN': '套房' }, bed: { ko: '더블침대 1개', en: '1 double bed', 'zh-CN': '1张双人床' }, area: 25, count: 3,
    feature: { ko: '객실 내 원형 욕조', en: 'Private round bathtub', 'zh-CN': '客房内圆形浴缸' },
    copy: {
      ko: { title: '오롯이 머무는 특별한 하루', description: '취향을 담은 인테리어와 차분한 분위기. 객실 안의 원형 욕조에서 일상의 속도를 늦추고 나를 위한 시간을 보내보세요.' },
      en: { title: 'A day made entirely your own', description: 'Thoughtful interiors and a calm atmosphere set the tone. Slow the pace in the room’s round bathtub and enjoy time that is yours alone.' },
      'zh-CN': { title: '专属于你的特别一天', description: '富有品位的内饰与沉静氛围相映成趣。在客房圆形浴缸中放慢日常节奏，享受属于自己的时光。' },
    },
    images: [photos.roomBathBedroom, photos.roomBathWide, photos.roomBathTub, photos.roomBathBed, photos.roomBathBathroom],
  },
];
