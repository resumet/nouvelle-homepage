import type { HotelImage, Localized } from './hotel';
import { attractionPhotos } from './attraction-photos';

export type Attraction = {
  slug: string;
  name: Localized<string>;
  description: Localized<string>;
  location: Localized<string>;
  purpose: Localized<string>;
  query: string;
  image: HotelImage | null;
};

export const attractions: Attraction[] = [
  { slug: 'gwangjang', name: { ko: '광장시장', en: 'Gwangjang Market', 'zh-CN': '广藏市场' }, description: { ko: '골목마다 이어지는 먹거리와 활기. 서울의 일상을 가장 가까이에서 만나는 재래시장입니다.', en: 'Lively lanes filled with local food. This traditional market brings you close to everyday Seoul.', 'zh-CN': '小巷里美食云集、活力十足。在这座传统市场近距离感受首尔的日常。' }, location: { ko: '서울 종로구', en: 'Jongno-gu, Seoul', 'zh-CN': '首尔钟路区' }, purpose: { ko: '로컬 미식', en: 'Local food', 'zh-CN': '地道美食' }, query: '서울 광장시장', image: attractionPhotos.gwangjang },
  { slug: 'ddp', name: { ko: '동대문디자인플라자', en: 'Dongdaemun Design Plaza', 'zh-CN': '东大门设计广场' }, description: { ko: '유려한 건축과 디자인이 만나는 DDP. 전시와 주변 풍경을 함께 둘러보세요.', en: 'Fluid architecture and contemporary design meet at DDP, with exhibitions and city views to explore.', 'zh-CN': '流线建筑与当代设计在DDP相遇，在参观展览的同时感受周边城市风景。' }, location: { ko: '서울 중구', en: 'Jung-gu, Seoul', 'zh-CN': '首尔中区' }, purpose: { ko: '디자인과 건축', en: 'Design & architecture', 'zh-CN': '设计与建筑' }, query: '서울 동대문디자인플라자 DDP', image: attractionPhotos.ddp },
  { slug: 'jongmyo', name: { ko: '종묘', en: 'Jongmyo Shrine', 'zh-CN': '宗庙' }, description: { ko: '도심에 자리한 조선 왕실의 사당. 고요한 공간을 따라 서울의 역사에 가까워집니다.', en: 'A royal Joseon shrine in the heart of the city, where quiet paths lead into Seoul’s history.', 'zh-CN': '坐落于城市中心的朝鲜王室祠庙，沿着静谧空间走近首尔历史。' }, location: { ko: '서울 종로구', en: 'Jongno-gu, Seoul', 'zh-CN': '首尔钟路区' }, purpose: { ko: '역사와 문화', en: 'History & culture', 'zh-CN': '历史与文化' }, query: '서울 종묘', image: attractionPhotos.jongmyo },
  { slug: 'changgyeonggung', name: { ko: '창경궁', en: 'Changgyeonggung Palace', 'zh-CN': '昌庆宫' }, description: { ko: '전각과 정원이 어우러진 궁궐. 계절마다 달라지는 풍경을 천천히 즐겨보세요.', en: 'Palace halls and gardens unfold together, offering a different landscape with every season.', 'zh-CN': '宫殿与庭园相映成趣，四季景色各有不同，适合慢慢游览。' }, location: { ko: '서울 종로구', en: 'Jongno-gu, Seoul', 'zh-CN': '首尔钟路区' }, purpose: { ko: '궁궐 산책', en: 'Palace walk', 'zh-CN': '宫殿漫步' }, query: '서울 창경궁', image: attractionPhotos.changgyeonggung },
  { slug: 'insadong', name: { ko: '인사동', en: 'Insadong', 'zh-CN': '仁寺洞' }, description: { ko: '전통 공예와 갤러리를 만나는 거리. 골목을 걸으며 취향에 맞는 작은 발견을 해보세요.', en: 'A neighborhood of traditional crafts and galleries, with small discoveries waiting down every lane.', 'zh-CN': '汇集传统工艺与画廊的街区，漫步小巷，发现符合自己品位的小店。' }, location: { ko: '서울 종로구', en: 'Jongno-gu, Seoul', 'zh-CN': '首尔钟路区' }, purpose: { ko: '공예와 갤러리', en: 'Crafts & galleries', 'zh-CN': '工艺与画廊' }, query: '서울 인사동', image: attractionPhotos.insadong },
  { slug: 'cheonggyecheon', name: { ko: '청계천', en: 'Cheonggyecheon Stream', 'zh-CN': '清溪川' }, description: { ko: '도심 사이로 흐르는 물길을 따라, 여행의 속도를 잠시 늦추는 산책을 즐겨보세요.', en: 'Follow the stream through central Seoul and slow the pace of your journey for a while.', 'zh-CN': '沿着穿行于市中心的水岸散步，让旅途节奏暂时慢下来。' }, location: { ko: '서울 도심', en: 'Central Seoul', 'zh-CN': '首尔市中心' }, purpose: { ko: '도심 산책', en: 'City walk', 'zh-CN': '城市漫步' }, query: '서울 청계천', image: attractionPhotos.cheonggyecheon },
];

export const googleMap = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
export const naverMap = (query: string) => `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
