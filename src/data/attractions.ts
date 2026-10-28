import type { HotelImage, Localized } from './hotel';

export type Attraction = {
  slug: string;
  name: Localized<string>;
  description: Localized<string>;
  location: string;
  purpose: string;
  query: string;
  image: HotelImage | null;
};

export const attractions: Attraction[] = [
  { slug: 'gwangjang', name: { ko: '광장시장' }, description: { ko: '골목마다 이어지는 먹거리와 활기. 서울의 일상을 가장 가까이에서 만나는 재래시장입니다.' }, location: '서울 종로구', purpose: '로컬 미식', query: '서울 광장시장', image: null },
  { slug: 'ddp', name: { ko: '동대문디자인플라자' }, description: { ko: '유려한 건축과 디자인이 만나는 DDP. 전시와 주변 풍경을 함께 둘러보세요.' }, location: '서울 중구', purpose: '디자인과 건축', query: '서울 동대문디자인플라자 DDP', image: null },
  { slug: 'jongmyo', name: { ko: '종묘' }, description: { ko: '도심에 자리한 조선 왕실의 사당. 고요한 공간을 따라 서울의 역사에 가까워집니다.' }, location: '서울 종로구', purpose: '역사와 문화', query: '서울 종묘', image: null },
  { slug: 'changgyeonggung', name: { ko: '창경궁' }, description: { ko: '전각과 정원이 어우러진 궁궐. 계절마다 달라지는 풍경을 천천히 즐겨보세요.' }, location: '서울 종로구', purpose: '궁궐 산책', query: '서울 창경궁', image: null },
  { slug: 'insadong', name: { ko: '인사동' }, description: { ko: '전통 공예와 갤러리를 만나는 거리. 골목을 걸으며 취향에 맞는 작은 발견을 해보세요.' }, location: '서울 종로구', purpose: '공예와 갤러리', query: '서울 인사동', image: null },
  { slug: 'cheonggyecheon', name: { ko: '청계천' }, description: { ko: '도심 사이로 흐르는 물길을 따라, 여행의 속도를 잠시 늦추는 산책을 즐겨보세요.' }, location: '서울 도심', purpose: '도심 산책', query: '서울 청계천', image: null },
];

export const googleMap = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
export const naverMap = (query: string) => `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
