import type { Locale } from './config';

const ko = {
  common: {
    skip: '본문 바로가기', homeAria: 'Nouvelle Hotel and Spa Jongro · 홈', mainNav: '주 메뉴', mobileNav: '모바일 주 메뉴',
    menuOpen: '메뉴 열기', menuClose: '메뉴 닫기', contact: '문의 및 안내', bookNow: 'BOOK NOW', bookingNewTab: 'Booking.com 새 탭에서 열기',
    nav: { home: 'HOME', rooms: 'ROOMS', bath: 'PRIVATE BATH', location: 'LOCATION', explore: 'EXPLORE' },
    footerLinks: { rooms: '객실 안내', bath: '프라이빗 사우나', location: '오시는 길', contact: '문의 및 안내' },
    footerTagline: '종로에서 만나는 나만의 휴식.', bookingExternal: '예약은 Booking.com에서 진행됩니다.', privacy: '개인정보처리방침', terms: '이용약관', quickBooking: '빠른 예약',
    language: '언어 선택', photo: '사진', license: '사진 이용 조건', mapView: '지도 보기', mapNewTab: 'Google 지도 새 탭에서 열기',
    cityView: '시티뷰', roomsUnit: '실', detail: '자세히 보기',
    gallery: { gallery: '사진 갤러리', enlarge: '확대 보기', expanded: '사진 확대', close: '사진 닫기', previous: '이전 사진', next: '다음 사진', empty: '공간의 실제 모습을 담은 사진을 준비하고 있습니다.' },
  },
  home: {
    seoTitle: '도심 속 휴식, 트렌디함을 입힌 하루', seoDescription: '서울 종로5가의 Nouvelle Hotel and Spa Jongro. 디럭스와 스위트 객실, 프리미엄 사운드, 지하 프라이빗 사우나에서 만나는 도심 속 휴식.',
    heroTitle1: '도심 속 휴식,', heroTitle2: '트렌디함을 입힌 하루', exploreRooms: 'EXPLORE ROOMS',
    introTitle1: '종로의 중심에서 만나는', introTitle2: '새로운 휴식', intro1: '익숙한 도시에서 발견하는 새로운 여유.\n누베르는 종로의 일상과 여행 사이에\n감각적인 쉼표를 더합니다.', intro2: '30개의 객실, 공간을 채우는 프리미엄 사운드,\n그리고 나만의 속도로 즐기는 프라이빗한 휴식.', meet: '서울 종로5가에서 만나요',
    roomsTitle: '머무는 순간, 나다운 편안함.', roomsDescription: '여행의 취향에 맞춰 선택하는 두 가지 공간.', allRooms: '모든 객실 살펴보기',
    soundTitle1: '공간을 채우는 사운드,', soundTitle2: '특별해지는 휴식.', soundBody: '좋아하는 음악이 흐르는 공간.\n프리미엄 스피커로 누베르에서의 시간을\n조금 더 감각적으로 채워보세요.', soundNote: '스피커 제공 객실 및 제품 정보는 확인 후 안내합니다.', viewRooms: '객실 둘러보기',
    bathTitle1: '오직 두 사람을 위한', bathTitle2: '프라이빗한 휴식.', bathBody: '분주했던 하루의 끝, 두 사람만의 공간에서 느끼는 여유.', bathFacts: { location: '위치', floor: '지하층', hours: '운영시간', allDay: '24시간', capacity: '이용 인원', two: '최대 2인' }, bathDetail: '프라이빗 사우나 자세히 보기',
    discoverTitle: '서울의 중심에서 시작하는 여행.', discoverBody: '시장의 활기부터 궁궐의 고요함까지, 종로의 다채로운 표정을 만나보세요.', allAttractions: '주변 여행지 모두 보기',
    invitationTitle1: '다음 여행의 쉼표,', invitationTitle2: '누베르.', invitationNote: '객실 예약은 Booking.com에서 안내합니다.',
  },
  rooms: {
    seoTitle: '객실 안내', seoDescription: '각 25㎡의 디럭스 더블룸과 스위트룸. 모든 객실에 원형 욕조를 갖춘 Nouvelle Hotel and Spa Jongro의 객실을 비교해 보세요.', breadcrumb: '객실 안내', title: '머무는 순간, 나다운 편안함.', description: '도시의 풍경을 곁에 두고, 나의 취향에 맞는 휴식을 선택하세요.', compareTitle: '두 가지 공간, 같은 편안함.', compareBody: '모든 객실에 마련된 원형 욕조와 함께 나다운 휴식을 선택하세요.', caption: '디럭스와 스위트 객실 비교', labels: { guide: '객실 안내', bookingName: '예약 사이트 객실명', area: '면적', bed: '침대', view: '전망', bathtub: '객실 내 욕조' }, note: '지하 프라이빗 사우나는 객실 내 원형 욕조와 별도 시설입니다. 예약 시 객실별 투숙 정원과 이용 조건을 확인해 주세요.',
  },
  room: {
    breadcrumb: '객실 안내', detailsTitle: '휴식을 위한 공간.', detailsBody: '도시의 하루를 보내고, 편안하게 돌아올 곳.', labels: { area: '객실 면적', view: '전망', bed: '침대', bathtub: '욕조', bookingName: '예약 사이트 객실명', count: '객실 수' }, bathtub: '객실 내 원형 욕조', separate: '객실 내 원형 욕조는 지하 프라이빗 사우나와 별도 시설입니다.', bookingTitle: '누베르에서의 하루.', bookingBody: '예약 가능한 일정과 객실은\nBooking.com에서 확인하실 수 있습니다.', bookingNote: '예약 시 투숙 정원과 이용 조건을 확인해 주세요. 스피커 제공 객실 및 모델은 확인 후 안내합니다.', other: '또 다른 휴식의 공간', back: '객실 목록으로',
  },
  facilities: {
    seoTitle: '프라이빗 사우나', seoDescription: 'Nouvelle Hotel and Spa Jongro 지하 프라이빗 사우나. 최대 2인, 24시간 운영하는 별도의 휴식 공간을 만나보세요.', breadcrumb: '프라이빗 사우나', title: '두 사람만의 공간에서 누리는 깊은 휴식.', description: '도심의 분주함을 잠시 내려놓고, 함께하는 시간에 집중해 보세요.', detailsTitle: '오롯이 쉬어가는 시간.', detailsBody: '지하층에 마련된 독립적인 프라이빗 사우나입니다.', labels: { location: '위치', hours: '운영시간', capacity: '이용 인원', type: '시설 형태' }, values: { floor: '지하층', allDay: '24시간', two: '최대 2인', type: '프라이빗 사우나' }, policyTitle: '이용 전 확인해 주세요.', policy1: '이용 요금, 사전 예약 및 회차 운영 방식은 확정 후 안내합니다.', policy2: '모든 객실에 있는 원형 욕조와는 별도 시설입니다.', policy3: '마사지 및 스파 트리트먼트는 제공하지 않습니다.',
  },
  explore: {
    seoTitle: '종로 주변 여행', seoDescription: '광장시장, DDP, 종묘, 창경궁, 인사동, 청계천. Nouvelle Hotel and Spa Jongro와 함께 둘러볼 서울의 여행지를 알아보세요.', breadcrumb: '주변 여행', title: '서울의 중심에서 시작하는 여행.', description: '오랜 시간과 새로운 감각이 만나는 곳. 나만의 속도로 서울을 발견해 보세요.', attractions: '주변 관광지', note: '지도 링크는 Google 지도를 새 탭에서 엽니다. 방문 전 각 장소의 운영일과 관람 정보를 확인해 주세요.',
  },
  location: {
    seoTitle: '오시는 길', seoDescription: '서울 종로구 종로31길 46-8에 위치한 Nouvelle Hotel and Spa Jongro. 종로5가역 도보 약 5분, 버스·지하철·차량 방문 안내를 확인하세요.', breadcrumb: '오시는 길', title: '여행과 일상이 만나는 종로.', description: '누베르에서 시작하는 서울 여행. 종로5가에서 만나요.', city: '서울, 종로5가.', labels: { hotel: '호텔명', address: '주소', nearest: '가까운 역' }, fromStation: '에서 도보 약 {minutes}분', googleMap: 'Google 지도', naverMap: '네이버 지도', googleAria: 'Google 지도 · 호텔 주소 검색, 새 탭에서 열기', naverAria: '네이버 지도 · 호텔 주소 검색, 새 탭에서 열기', walkingTitle: '걸어서 만나는 종로.', approx: '약', minutes: '분', walkingNote: '호텔 안내 기준이며, 선택한 경로와 보행 속도에 따라 달라질 수 있습니다.', directionsTitle: '편한 방법으로 찾아오세요.', subway: '지하철', subwayBody: '{station}에서 하차한 뒤,\n호텔까지 도보 약 {minutes}분입니다.', route: '지도에서 경로 확인', bus: '버스', busBody: '{stop}\n정거장에서 하차해 주세요.', busAria: '이용 가능한 버스 노선', car: '차량', carBody: '이용하시는 내비게이션에서\n{query}를 검색해 주세요.', carNote: '구글맵·카카오맵·아이나비·티맵에서 호텔명으로 검색할 수 있습니다. 주차 이용 정책은 확인 후 안내합니다.',
  },
  contact: {
    seoTitle: '문의 및 안내', seoDescription: 'Nouvelle Hotel and Spa Jongro의 연락처, 객실 예약 및 프라이빗 사우나 이용 안내를 확인하세요.', breadcrumb: '문의 및 안내', title: '편안한 여행의 시작을 함께합니다.', description: '머무는 시간에 대해 궁금한 내용을 확인해 보세요.', labels: { location: '위치', phone: '대표 전화', email: '이메일' }, directions: '오시는 길', reservation: '예약 안내', reservationBody: '객실 예약은 Booking.com에서 진행합니다. 홈페이지에서는 예약 및 결제 정보를 수집하지 않습니다.', guide: '이용 안내', faqs: [
      { q: '객실은 어떻게 구성되어 있나요?', a: '25㎡ 디럭스 더블룸과 스위트룸을 안내합니다. 두 객실 모두 시티뷰이며 더블침대 1개와 객실 내 원형 욕조를 갖추고 있습니다. 예약 시 객실별 투숙 정원과 이용 조건을 확인해 주세요.' },
      { q: '프라이빗 사우나는 어디에 있나요?', a: '지하층의 별도 시설이며, 24시간 운영하고 최대 2인이 이용할 수 있습니다. 요금과 사전 예약 방식은 확정 후 안내합니다. 모든 객실에 있는 원형 욕조와는 구분됩니다.' },
      { q: '스파 트리트먼트를 받을 수 있나요?', a: '마사지와 스파 트리트먼트는 제공하지 않습니다. 호텔 내 레스토랑, 카페, 피트니스도 운영하지 않습니다.' },
      { q: '체크인, 주차 및 아동 정책은 어디서 확인하나요?', a: '예약할 날짜와 객실의 상세 조건을 Booking.com에서 확인해 주세요. 호텔의 추가 운영 안내는 확인 후 이 페이지에 반영합니다.' },
    ],
  },
  privacy: {
    seoTitle: '개인정보처리방침', seoDescription: 'Nouvelle Hotel and Spa Jongro 정적 홍보 홈페이지의 개인정보 수집 여부와 외부 예약 서비스 이용 안내입니다.', breadcrumb: '개인정보처리방침', title: '개인정보처리방침', updated: '홈페이지 운영 안내 · 2026년 10월 28일 기준', sections: [
      { h: '홈페이지의 개인정보 처리', p: '본 홈페이지는 호텔과 주변 여행 정보를 제공하는 정적 홍보 사이트입니다. 회원가입, 문의 입력 양식, 자체 예약 및 결제 기능을 운영하지 않으며, 이름·이메일·전화번호·결제정보를 홈페이지에서 직접 수집하거나 저장하지 않습니다.' },
      { h: '쿠키 및 분석 도구', p: '본 홈페이지는 방문자 추적, 광고 및 방문 분석을 위한 쿠키나 분석 스크립트를 사용하지 않습니다. 사이트에서 사용하는 글꼴은 자체 파일로 제공합니다.' },
      { h: '외부 서비스', p: '예약 링크는 Booking.com으로, 지도 링크는 Google 지도 또는 네이버 지도로 연결됩니다. 외부 사이트로 이동한 후에는 해당 서비스의 개인정보처리방침과 이용약관이 적용됩니다. 지도는 외부 링크로 제공하며 페이지에 임베드하지 않습니다.' },
      { h: '호스팅 서비스', p: '배포된 홈페이지는 GitHub Pages를 통해 제공됩니다. 호스팅 제공자가 서비스 운영과 보안을 위해 접속 로그 등 기술 정보를 처리할 수 있습니다.' },
      { h: '문의 및 변경 안내', p: '호텔의 전화번호와 이메일은 문의 및 안내 페이지에서 확인하실 수 있습니다. 전화·이메일 링크는 이용자의 전화 또는 메일 앱을 실행합니다. 사이트 기능과 개인정보 처리 방식이 변경되면 이 안내도 함께 갱신합니다.' },
    ], githubPrivacy: 'GitHub 개인정보처리방침', contactLink: '문의 및 안내 페이지',
  },
  terms: {
    seoTitle: '웹사이트 이용약관', seoDescription: 'Nouvelle Hotel and Spa Jongro 홈페이지의 정보 이용과 외부 예약 서비스에 관한 안내입니다.', breadcrumb: '웹사이트 이용약관', title: '웹사이트 이용약관', updated: '홈페이지 이용 안내 · 2026년 10월 28일 기준', sections: [
      { h: '홈페이지의 목적', p: '본 홈페이지는 Nouvelle Hotel and Spa Jongro의 객실·시설·위치 및 주변 여행 정보를 안내합니다. 홈페이지에서는 예약 계약이나 결제를 처리하지 않습니다.' },
      { h: '예약 및 이용 조건', p: '객실 예약은 외부 Booking.com 호텔 페이지에서 진행합니다. 실제 예약 시 표시되는 객실 조건, 요금, 취소 및 환불 정책을 확인해 주세요. 이 홈페이지의 객실 안내만으로 예약이 성립하지 않습니다.' },
      { h: '안내 정보', p: '운영 정보는 확인된 내용을 기준으로 게시하며, 미확정 정보는 안내하지 않거나 준비 중으로 표시합니다. 객실 내 원형 욕조와 지하 프라이빗 사우나는 별도 시설이며, 지하 시설 이용 조건은 확정된 안내를 확인해 주세요.' },
      { h: '콘텐츠 이용', p: '이 홈페이지의 호텔 소개 및 사진 등 콘텐츠를 재사용하려면 각 콘텐츠의 권리와 이용 허용 범위를 확인해야 합니다.' },
      { h: '외부 링크', p: '예약 서비스, 지도 및 기타 외부 사이트는 각 운영자가 관리합니다. 해당 사이트에서의 이용에는 해당 서비스가 정한 조건이 적용됩니다.' },
    ],
  },
};

type Widen<T> = T extends string ? string : T extends number ? number : T extends readonly (infer U)[] ? Widen<U>[] : T extends object ? { [K in keyof T]: Widen<T[K]> } : T;
type Messages = Widen<typeof ko>;

const en: Messages = {
  common: {
    skip: 'Skip to main content', homeAria: 'Nouvelle Hotel and Spa Jongro · Home', mainNav: 'Main navigation', mobileNav: 'Mobile navigation', menuOpen: 'Open menu', menuClose: 'Close menu', contact: 'Contact & information', bookNow: 'BOOK NOW', bookingNewTab: 'Opens Booking.com in a new tab',
    nav: { home: 'HOME', rooms: 'ROOMS', bath: 'PRIVATE SAUNA', location: 'LOCATION', explore: 'EXPLORE' }, footerLinks: { rooms: 'Rooms', bath: 'Private sauna', location: 'Location', contact: 'Contact' }, footerTagline: 'Your private retreat in Jongno.', bookingExternal: 'Reservations are completed on Booking.com.', privacy: 'Privacy Policy', terms: 'Terms of Use', quickBooking: 'Quick booking', language: 'Select language', photo: 'Photo', license: 'Photo license', mapView: 'View map', mapNewTab: 'Opens Google Maps in a new tab', cityView: 'City view', roomsUnit: 'rooms', detail: 'View details', gallery: { gallery: 'photo gallery', enlarge: 'Enlarge photo', expanded: 'Expanded photo', close: 'Close photo', previous: 'Previous photo', next: 'Next photo', empty: 'Photographs of this space are being prepared.' },
  },
  home: {
    seoTitle: 'A refined urban retreat', seoDescription: 'Discover Nouvelle Hotel and Spa Jongro in Jongno, Seoul: Deluxe and Suite rooms, premium sound and a private basement sauna.', heroTitle1: 'A refined retreat', heroTitle2: 'in the heart of Seoul', exploreRooms: 'EXPLORE ROOMS', introTitle1: 'A new kind of rest', introTitle2: 'in central Jongno', intro1: 'Find a fresh sense of ease in a familiar city.\nNouvelle adds a thoughtful pause\nbetween everyday Jongno and your journey.', intro2: 'Thirty rooms, premium sound that fills the space,\nand private moments enjoyed at your own pace.', meet: 'Meet us in Jongno 5-ga, Seoul', roomsTitle: 'Comfort that feels like your own.', roomsDescription: 'Two distinctive spaces, chosen to suit the way you travel.', allRooms: 'Explore all rooms', soundTitle1: 'Sound that fills the room.', soundTitle2: 'A stay that feels different.', soundBody: 'Settle into a room with the music you love.\nPremium speakers bring another layer\nof atmosphere to your time at Nouvelle.', soundNote: 'Rooms equipped with speakers and product details will be confirmed separately.', viewRooms: 'Explore rooms', bathTitle1: 'A private retreat', bathTitle2: 'created for two.', bathBody: 'At the end of a busy day, take time for yourselves in a private space.', bathFacts: { location: 'Location', floor: 'Basement level', hours: 'Hours', allDay: '24 hours', capacity: 'Capacity', two: 'Up to 2 guests' }, bathDetail: 'Discover the private sauna', discoverTitle: 'Begin your journey in the heart of Seoul.', discoverBody: 'From the energy of the market to the quiet of the palaces, experience the many sides of Jongno.', allAttractions: 'Explore all nearby places', invitationTitle1: 'A pause for', invitationTitle2: 'your next journey.', invitationNote: 'Room reservations are available through Booking.com.',
  },
  rooms: { seoTitle: 'Rooms', seoDescription: 'Compare the 25㎡ Deluxe Double Room and Suite Room at Nouvelle Hotel and Spa Jongro, each with a private round bathtub.', breadcrumb: 'Rooms', title: 'Comfort that feels like your own.', description: 'Keep the city close and choose the stay that suits your style.', compareTitle: 'Two spaces, the same sense of ease.', compareBody: 'Choose your room and unwind with a private round bathtub in every room.', caption: 'Comparison of Deluxe and Suite rooms', labels: { guide: 'Room', bookingName: 'Booking.com room name', area: 'Area', bed: 'Bed', view: 'View', bathtub: 'In-room bathtub' }, note: 'The private basement sauna is separate from the round bathtub in each room. Please check occupancy and conditions when booking.' },
  room: { breadcrumb: 'Rooms', detailsTitle: 'A space made for rest.', detailsBody: 'A comfortable place to return to after a day in the city.', labels: { area: 'Room size', view: 'View', bed: 'Bed', bathtub: 'Bathtub', bookingName: 'Booking.com room name', count: 'Number of rooms' }, bathtub: 'Private round bathtub', separate: 'The in-room round bathtub is separate from the private basement sauna.', bookingTitle: 'Your day at Nouvelle.', bookingBody: 'Available dates and rooms can be checked\non Booking.com.', bookingNote: 'Please check occupancy and conditions when booking. Speaker-equipped rooms and models will be confirmed separately.', other: 'Another space to unwind', back: 'Back to rooms' },
  facilities: { seoTitle: 'Private Sauna', seoDescription: 'Discover the private basement sauna at Nouvelle Hotel and Spa Jongro, open 24 hours for up to two guests.', breadcrumb: 'Private Sauna', title: 'Deep rest in a space for two.', description: 'Step away from the pace of the city and focus on your time together.', detailsTitle: 'Time to fully unwind.', detailsBody: 'An independent private sauna located on the basement level.', labels: { location: 'Location', hours: 'Hours', capacity: 'Capacity', type: 'Facility' }, values: { floor: 'Basement level', allDay: '24 hours', two: 'Up to 2 guests', type: 'Private sauna' }, policyTitle: 'Before your visit.', policy1: 'Rates, advance reservations and session arrangements will be announced once confirmed.', policy2: 'This is separate from the round bathtub provided in every guest room.', policy3: 'Massage and spa treatments are not available.' },
  explore: { seoTitle: 'Explore Jongno', seoDescription: 'Discover Gwangjang Market, DDP, Jongmyo Shrine, Changgyeonggung Palace, Insadong and Cheonggyecheon near Nouvelle Hotel and Spa Jongro.', breadcrumb: 'Explore', title: 'Begin your journey in the heart of Seoul.', description: 'Where layers of history meet a fresh perspective. Discover Seoul at your own pace.', attractions: 'Nearby attractions', note: 'Map links open Google Maps in a new tab. Please check opening days and visitor information before your visit.' },
  location: { seoTitle: 'Location', seoDescription: 'Find Nouvelle Hotel and Spa Jongro at 46-8 Jong-ro 31-gil, Jongno-gu, Seoul, about a five-minute walk from Jongno 5-ga Station.', breadcrumb: 'Location', title: 'Where travel meets everyday Jongno.', description: 'Begin your Seoul journey at Nouvelle, five minutes from Jongno 5-ga Station.', city: 'Jongno 5-ga, Seoul.', labels: { hotel: 'Hotel', address: 'Address', nearest: 'Nearest station' }, fromStation: 'About {minutes} minutes on foot from ', googleMap: 'Google Maps', naverMap: 'Naver Map', googleAria: 'Search the hotel address on Google Maps, opens in a new tab', naverAria: 'Search the hotel address on Naver Map, opens in a new tab', walkingTitle: 'Jongno within walking distance.', approx: 'Approx.', minutes: 'min', walkingNote: 'Times are approximate and may vary by route and walking speed.', directionsTitle: 'Choose the way that suits you.', subway: 'Subway', subwayBody: 'Get off at {station}.\nThe hotel is about a {minutes}-minute walk away.', route: 'View route on map', bus: 'Bus', busBody: 'Get off at\n{stop}.', busAria: 'Available bus routes', car: 'By car', carBody: 'Search your navigation app for\n{query}.', carNote: 'Search the hotel name in Google Maps, KakaoMap, iNavi or TMAP. Parking details will be announced once confirmed.' },
  contact: { seoTitle: 'Contact & Information', seoDescription: 'Find contact details, room reservation information and private sauna guidance for Nouvelle Hotel and Spa Jongro.', breadcrumb: 'Contact', title: 'A comfortable stay begins here.', description: 'Find the information you need for your time at Nouvelle.', labels: { location: 'Location', phone: 'Telephone', email: 'Email' }, directions: 'Directions', reservation: 'Reservations', reservationBody: 'Room reservations are completed on Booking.com. This website does not collect booking or payment information.', guide: 'Guest information', faqs: [
    { q: 'What room types are available?', a: 'We offer a 25㎡ Deluxe Double Room and Suite Room. Both have a city view, one double bed and a private round bathtub. Please check occupancy and conditions when booking.' },
    { q: 'Where is the private sauna?', a: 'It is a separate facility on the basement level, open 24 hours for up to two guests. Rates and advance reservation details will be announced once confirmed. It is separate from the bathtub in every room.' },
    { q: 'Are spa treatments available?', a: 'Massage and spa treatments are not available. The hotel does not operate a restaurant, café or fitness center.' },
    { q: 'Where can I check check-in, parking and child policies?', a: 'Please review the detailed conditions for your dates and room on Booking.com. Additional confirmed hotel information will be added to this page.' },
  ] },
  privacy: { seoTitle: 'Privacy Policy', seoDescription: 'How the Nouvelle Hotel and Spa Jongro information website handles personal data and links to external booking services.', breadcrumb: 'Privacy Policy', title: 'Privacy Policy', updated: 'Website information · Last updated October 28, 2026', sections: [
    { h: 'Personal data on this website', p: 'This is a static information website for the hotel and nearby destinations. It does not provide registration, inquiry forms, direct booking or payment, and does not directly collect or store names, email addresses, telephone numbers or payment information.' },
    { h: 'Cookies and analytics', p: 'This website does not use cookies or analytics scripts for visitor tracking, advertising or traffic analysis. Website fonts are served from local files.' },
    { h: 'External services', p: 'Reservation links lead to Booking.com, while map links lead to Google Maps or Naver Map. The privacy policies and terms of those services apply after you leave this website. Maps are provided as external links and are not embedded.' },
    { h: 'Hosting', p: 'This website is hosted on GitHub Pages. The hosting provider may process technical data such as access logs to operate and secure the service.' },
    { h: 'Contact and updates', p: 'The hotel telephone numbers and email addresses are available on the Contact page. Telephone and email links open the appropriate app on your device. This notice will be updated if the website features or data practices change.' },
  ], githubPrivacy: 'GitHub Privacy Statement', contactLink: 'Contact page' },
  terms: { seoTitle: 'Terms of Use', seoDescription: 'Terms for using the Nouvelle Hotel and Spa Jongro website and its links to external reservation services.', breadcrumb: 'Terms of Use', title: 'Terms of Use', updated: 'Website terms · Last updated October 28, 2026', sections: [
    { h: 'Purpose of this website', p: 'This website provides information about the rooms, facilities, location and nearby destinations of Nouvelle Hotel and Spa Jongro. It does not process reservation contracts or payments.' },
    { h: 'Reservations and conditions', p: 'Room reservations are completed on the external Booking.com hotel page. Please review the room conditions, rates, cancellation and refund policies shown when booking. Information on this website alone does not create a reservation.' },
    { h: 'Published information', p: 'Operational information is published after confirmation. Unconfirmed details are omitted or marked as pending. The in-room round bathtubs and private basement sauna are separate facilities; please review confirmed conditions for the basement facility.' },
    { h: 'Use of content', p: 'Before reusing hotel descriptions, photographs or other website content, you must confirm the rights and permitted scope of use for each item.' },
    { h: 'External links', p: 'Reservation services, maps and other external sites are managed by their respective operators. Their own terms apply when you use those services.' },
  ] },
};

const zh: Messages = {
  common: {
    skip: '跳至主要内容', homeAria: 'Nouvelle Hotel and Spa Jongro · 首页', mainNav: '主导航', mobileNav: '移动端主导航', menuOpen: '打开菜单', menuClose: '关闭菜单', contact: '咨询与信息', bookNow: '立即预订', bookingNewTab: '在新窗口打开Booking.com', nav: { home: '首页', rooms: '客房', bath: '私人桑拿', location: '位置', explore: '周边游览' }, footerLinks: { rooms: '客房介绍', bath: '私人桑拿', location: '交通位置', contact: '咨询与信息' }, footerTagline: '在钟路享受属于自己的休憩。', bookingExternal: '客房预订通过Booking.com完成。', privacy: '隐私政策', terms: '使用条款', quickBooking: '快速预订', language: '选择语言', photo: '照片', license: '照片使用许可', mapView: '查看地图', mapNewTab: '在新窗口打开Google地图', cityView: '城市景观', roomsUnit: '间', detail: '查看详情', gallery: { gallery: '照片画廊', enlarge: '放大照片', expanded: '放大照片', close: '关闭照片', previous: '上一张', next: '下一张', empty: '该空间的实景照片正在准备中。' },
  },
  home: {
    seoTitle: '城市之中的精致休憩', seoDescription: '首尔钟路Nouvelle Hotel and Spa Jongro，提供豪华客房、套房、品质音响与地下私人桑拿空间。', heroTitle1: '城市之中，', heroTitle2: '遇见精致休憩', exploreRooms: '查看客房', introTitle1: '在钟路中心', introTitle2: '发现全新休憩方式', intro1: '在熟悉的城市里发现新的从容。\nNouvelle在钟路的日常与旅程之间，\n留下一段富有品位的停顿。', intro2: '30间客房、充盈空间的品质音响，\n以及按照自己的节奏享受的私人休憩。', meet: '首尔钟路5街见', roomsTitle: '入住的每一刻，都自在舒适。', roomsDescription: '两种风格各异的空间，契合不同旅行偏好。', allRooms: '查看全部客房', soundTitle1: '声音充盈空间，', soundTitle2: '让休憩更加特别。', soundBody: '让喜欢的音乐在房间里流淌。\n品质音响为您在Nouvelle的时光，\n增添更丰富的氛围。', soundNote: '配备音响的客房及产品信息将在确认后另行公布。', viewRooms: '浏览客房', bathTitle1: '只为两人准备的', bathTitle2: '私人休憩空间。', bathBody: '结束忙碌的一天，在只属于两人的空间里享受从容。', bathFacts: { location: '位置', floor: '地下层', hours: '开放时间', allDay: '24小时', capacity: '使用人数', two: '最多2人' }, bathDetail: '了解私人桑拿', discoverTitle: '从首尔中心开启旅程。', discoverBody: '从市场的活力到宫殿的静谧，感受钟路丰富多样的面貌。', allAttractions: '查看全部周边景点', invitationTitle1: '下一段旅程，', invitationTitle2: '在Nouvelle停留。', invitationNote: '客房预订请前往Booking.com。',
  },
  rooms: { seoTitle: '客房介绍', seoDescription: '比较Nouvelle Hotel and Spa Jongro的25㎡豪华双人间与套房，每间客房均配有圆形浴缸。', breadcrumb: '客房介绍', title: '入住的每一刻，都自在舒适。', description: '让城市风景相伴，选择符合自己品位的休憩空间。', compareTitle: '两种空间，同样舒适。', compareBody: '每间客房均设有圆形浴缸，选择属于自己的休憩方式。', caption: '豪华客房与套房比较', labels: { guide: '客房', bookingName: '预订网站客房名称', area: '面积', bed: '床型', view: '景观', bathtub: '客房浴缸' }, note: '地下私人桑拿与客房内圆形浴缸为不同设施。预订时请确认客房入住人数和使用条件。' },
  room: { breadcrumb: '客房介绍', detailsTitle: '为休憩而设的空间。', detailsBody: '结束城市漫游后，回到舒适的落脚之处。', labels: { area: '客房面积', view: '景观', bed: '床型', bathtub: '浴缸', bookingName: '预订网站客房名称', count: '客房数量' }, bathtub: '客房内圆形浴缸', separate: '客房内圆形浴缸与地下私人桑拿为不同设施。', bookingTitle: '在Nouvelle的一天。', bookingBody: '可预订日期与客房\n请在Booking.com查看。', bookingNote: '预订时请确认入住人数和使用条件。配备音响的客房及型号将在确认后另行公布。', other: '另一处休憩空间', back: '返回客房列表' },
  facilities: { seoTitle: '私人桑拿', seoDescription: 'Nouvelle Hotel and Spa Jongro地下私人桑拿，24小时开放，最多可供两人使用。', breadcrumb: '私人桑拿', title: '在只属于两人的空间里深度放松。', description: '暂时放下城市的繁忙，专注享受彼此相伴的时光。', detailsTitle: '全心休息的时光。', detailsBody: '位于地下层的独立私人桑拿空间。', labels: { location: '位置', hours: '开放时间', capacity: '使用人数', type: '设施类型' }, values: { floor: '地下层', allDay: '24小时', two: '最多2人', type: '私人桑拿' }, policyTitle: '使用前请确认。', policy1: '使用费用、提前预约及场次安排将在确定后公布。', policy2: '本设施与每间客房内的圆形浴缸相互独立。', policy3: '不提供按摩及水疗护理服务。' },
  explore: { seoTitle: '钟路周边游览', seoDescription: '探索Nouvelle Hotel and Spa Jongro附近的广藏市场、DDP、宗庙、昌庆宫、仁寺洞与清溪川。', breadcrumb: '周边游览', title: '从首尔中心开启旅程。', description: '历史底蕴与当代感相遇，按照自己的节奏发现首尔。', attractions: '周边景点', note: '地图链接将在新窗口打开Google地图。出发前请确认各景点开放日期和参观信息。' },
  location: { seoTitle: '交通位置', seoDescription: 'Nouvelle Hotel and Spa Jongro位于韩国首尔钟路区钟路31街46-8，距离钟路5街站步行约5分钟。', breadcrumb: '交通位置', title: '旅行与日常在钟路相遇。', description: '从Nouvelle开启首尔之旅，距离钟路5街站步行约5分钟。', city: '首尔，钟路5街。', labels: { hotel: '酒店名称', address: '地址', nearest: '最近车站' }, fromStation: '距离车站步行约{minutes}分钟：', googleMap: 'Google地图', naverMap: 'Naver地图', googleAria: '在Google地图搜索酒店地址，新窗口打开', naverAria: '在Naver地图搜索酒店地址，新窗口打开', walkingTitle: '步行探索钟路。', approx: '约', minutes: '分钟', walkingNote: '时间为酒店参考标准，可能因路线和步行速度而有所不同。', directionsTitle: '选择适合您的交通方式。', subway: '地铁', subwayBody: '在{station}下车后，\n步行约{minutes}分钟即可到达酒店。', route: '在地图查看路线', bus: '公交车', busBody: '请在\n{stop}站下车。', busAria: '可乘坐的公交线路', car: '自驾', carBody: '请在导航应用中搜索\n{query}。', carNote: '可在Google地图、KakaoMap、iNavi或TMAP中搜索酒店名称。停车政策将在确认后公布。' },
  contact: { seoTitle: '咨询与信息', seoDescription: '查看Nouvelle Hotel and Spa Jongro联系方式、客房预订与私人桑拿使用信息。', breadcrumb: '咨询与信息', title: '舒适旅程，从这里开始。', description: '查看您在Nouvelle入住期间需要的信息。', labels: { location: '位置', phone: '联系电话', email: '电子邮箱' }, directions: '交通位置', reservation: '预订说明', reservationBody: '客房预订通过Booking.com完成。本网站不收集预订或支付信息。', guide: '入住指南', faqs: [
    { q: '酒店有哪些客房类型？', a: '酒店提供25㎡豪华双人间和套房。两种客房均享有城市景观，配备1张双人床和客房内圆形浴缸。预订时请确认入住人数及使用条件。' },
    { q: '私人桑拿在哪里？', a: '私人桑拿位于地下层，与客房设施相互独立，24小时开放，最多可供两人使用。费用及提前预约方式将在确认后公布。' },
    { q: '可以享受水疗护理吗？', a: '酒店不提供按摩及水疗护理服务，也不经营餐厅、咖啡厅或健身中心。' },
    { q: '在哪里确认入住、停车及儿童政策？', a: '请在Booking.com查看所选日期与客房的详细条件。酒店其他运营信息确认后将在本页面更新。' },
  ] },
  privacy: { seoTitle: '隐私政策', seoDescription: 'Nouvelle Hotel and Spa Jongro信息网站的个人信息处理方式及外部预订服务说明。', breadcrumb: '隐私政策', title: '隐私政策', updated: '网站运营说明 · 更新于2026年10月28日', sections: [
    { h: '本网站的个人信息处理', p: '本网站是介绍酒店及周边旅行信息的静态宣传网站，不提供会员注册、咨询表单、自有预订或支付功能，也不会直接收集或存储姓名、电子邮箱、电话号码或支付信息。' },
    { h: 'Cookie与分析工具', p: '本网站不使用用于访客追踪、广告或访问分析的Cookie及分析脚本。网站字体均通过本地文件提供。' },
    { h: '外部服务', p: '预订链接将跳转至Booking.com，地图链接将跳转至Google地图或Naver地图。离开本网站后，适用相应服务的隐私政策及使用条款。地图仅以外部链接提供，不嵌入页面。' },
    { h: '托管服务', p: '本网站通过GitHub Pages发布。托管服务提供商可能会为服务运营和安全处理访问日志等技术信息。' },
    { h: '咨询与更新', p: '酒店电话号码及电子邮箱可在咨询页面查看。电话及邮件链接会打开设备上的相应应用。如网站功能或个人信息处理方式发生变化，本说明也将同步更新。' },
  ], githubPrivacy: 'GitHub隐私声明', contactLink: '咨询与信息页面' },
  terms: { seoTitle: '使用条款', seoDescription: 'Nouvelle Hotel and Spa Jongro网站信息使用及外部预订服务链接条款。', breadcrumb: '使用条款', title: '网站使用条款', updated: '网站使用说明 · 更新于2026年10月28日', sections: [
    { h: '网站目的', p: '本网站提供Nouvelle Hotel and Spa Jongro的客房、设施、位置及周边旅行信息，不在网站内处理预订合同或支付。' },
    { h: '预订及使用条件', p: '客房预订通过外部Booking.com酒店页面完成。请在实际预订时确认显示的客房条件、价格、取消及退款政策。仅凭本网站的客房介绍不会形成预订。' },
    { h: '信息说明', p: '运营信息以确认内容为准，未确认的信息将不予展示或标记为准备中。客房内圆形浴缸与地下私人桑拿为不同设施，请确认地下设施的最新使用条件。' },
    { h: '内容使用', p: '如需再次使用本网站的酒店介绍、照片等内容，请先确认各项内容的权利及许可使用范围。' },
    { h: '外部链接', p: '预订服务、地图及其他外部网站由各自运营方管理，使用相关网站时适用该服务规定的条件。' },
  ] },
};

export const messages: Record<Locale, Messages> = { ko, en, 'zh-CN': zh };
export const getMessages = (locale: Locale): Messages => messages[locale];
