import { photos } from './photos.ts';

export type Locale = 'ko' | 'zh-CN' | 'en' | 'ja';
export type Localized<T> = { ko: T } & Partial<Record<Exclude<Locale, 'ko'>, T>>;
export type HotelImage = { src: string; alt: string; width: number; height: number; variants?: { src: string; width: number }[] };

export const siteTitle = 'Nouvelle Hotel and Spa';

export const hotel = {
  name: '누베르 호텔 앤 스파 종로점',
  englishName: siteTitle,
  region: '서울 종로5가',
  totalRooms: 30,
  address: '서울 종로구 종로31길 46-8',
  phone: '02-747-3002',
  emails: ['resumet@naver.com', 'narasysj@naver.com'] as string[],
  mapsUrl: '',
  speakerModel: '',
  speakerRoomScope: '',
  heroImage: photos.roomBathBedroom as HotelImage,
  lobbyImage: photos.lobby as HotelImage,
  soundImage: photos.premiumSound as HotelImage,
  bathImages: [photos.privateBathOverview, photos.privateBathGuest, photos.privateSaunaGuest, photos.privateBathFaucet, photos.privateBathSide, photos.privateBathEntry, photos.privateBathChanging] as HotelImage[],
};

export const telephoneHref = `tel:${hotel.phone.replace(/[^\d]/g, '').replace(/^0/, '+82')}`;

// Confirmed by the hotel operator on 2026-10-28. Walking times are approximate.
export const directions = {
  walking: [
    { name: '종로5가역', minutes: 5 },
    { name: '종묘', minutes: 6 },
    { name: '종로3가역', minutes: 11 },
    { name: '을지로4가역', minutes: 11 },
  ],
  busStop: '종로5가 광장시장',
  busRoutes: ['101', '103', '201', '260', '370', '7212', '9301'],
  subwayStation: '종로5가역',
  subwayWalkMinutes: 5,
  navigationQuery: '누베르 호텔 앤 스파 서울종로점',
};

// Only publish locales with complete, reviewed translations.
export const publishedLocales: Locale[] = ['ko'];
export const copy: Localized<{ headline: string; subtitle: string }> = {
  ko: {
    headline: '도심 속 휴식, 트렌디함을 입힌 하루',
    subtitle: '고즈넉한 종로 한복판에서 누리는 프리미엄 안식처',
  },
};
