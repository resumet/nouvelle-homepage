import { photos } from './photos.ts';
import type { Localized } from '../i18n/config';
export type { Locale, Localized } from '../i18n/config';

export type HotelImage = { src: string; alt: string | Localized<string>; width: number; height: number; variants?: { src: string; width: number }[] };

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

export const hotelText: Localized<{ name: string; region: string; address: string }> = {
  ko: { name: '누베르 호텔 앤 스파 종로점', region: '서울 종로5가', address: '서울 종로구 종로31길 46-8' },
  en: { name: 'Nouvelle Hotel and Spa Seoul Jongno', region: 'Jongno 5-ga, Seoul', address: '46-8, Jong-ro 31-gil, Jongno-gu, Seoul, Republic of Korea' },
  'zh-CN': { name: '首尔钟路 Nouvelle 酒店及水疗中心', region: '首尔钟路5街', address: '韩国首尔特别市钟路区钟路31街46-8' },
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

export const directionsText: Localized<{
  walking: { name: string; minutes: number }[];
  busStop: string;
  subwayStation: string;
  navigationQuery: string;
}> = {
  ko: { walking: directions.walking, busStop: directions.busStop, subwayStation: directions.subwayStation, navigationQuery: directions.navigationQuery },
  en: {
    walking: [{ name: 'Jongno 5-ga Station', minutes: 5 }, { name: 'Jongmyo Shrine', minutes: 6 }, { name: 'Jongno 3-ga Station', minutes: 11 }, { name: 'Euljiro 4-ga Station', minutes: 11 }],
    busStop: 'Jongno 5-ga · Gwangjang Market', subwayStation: 'Jongno 5-ga Station', navigationQuery: 'Nouvelle Hotel and Spa Seoul Jongno',
  },
  'zh-CN': {
    walking: [{ name: '钟路5街站', minutes: 5 }, { name: '宗庙', minutes: 6 }, { name: '钟路3街站', minutes: 11 }, { name: '乙支路4街站', minutes: 11 }],
    busStop: '钟路5街 · 广藏市场', subwayStation: '钟路5街站', navigationQuery: 'Nouvelle Hotel and Spa Seoul Jongno',
  },
};

// Only publish locales with complete, reviewed translations.
export const copy: Localized<{ headline: string; subtitle: string }> = {
  ko: {
    headline: '도심 속 휴식, 트렌디함을 입힌 하루',
    subtitle: '고즈넉한 종로 한복판에서 누리는 프리미엄 안식처',
  },
  en: { headline: 'A refined urban retreat', subtitle: 'A premium retreat in the timeless heart of Jongno' },
  'zh-CN': { headline: '城市之中的精致休憩', subtitle: '在静谧钟路中心享受品质休憩' },
};
