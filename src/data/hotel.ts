export type Locale = 'ko' | 'zh-CN' | 'en' | 'ja';
export type Localized<T> = { ko: T } & Partial<Record<Exclude<Locale, 'ko'>, T>>;
export type HotelImage = { src: string; alt: string; width: number; height: number };

export const hotel = {
  name: '누베르 호텔 앤 스파 종로점',
  englishName: 'NOUVER HOTEL & SPA JONGNO',
  region: '서울 종로5가',
  totalRooms: 30,
  address: '',
  phone: '',
  email: '',
  mapsUrl: '',
  speakerModel: '',
  speakerRoomScope: '',
  heroImage: null as HotelImage | null,
  soundImage: null as HotelImage | null,
  bathImages: [] as HotelImage[],
};

// Only publish locales with complete, reviewed translations.
export const publishedLocales: Locale[] = ['ko'];
export const copy: Localized<{ headline: string; subtitle: string }> = {
  ko: {
    headline: '도심 속 휴식, 트렌디함을 입힌 하루',
    subtitle: '고즈넉한 종로 한복판에서 누리는 프리미엄 안식처',
  },
};
