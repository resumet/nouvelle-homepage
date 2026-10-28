# NOUVER HOTEL & SPA JONGNO

누베르 호텔 앤 스파 종로점 정적 홈페이지. 요구사항은 [PRD.md](PRD.md)에 있습니다. `docs/`는 초기 상태에서 비어 있어 루트 PRD v2.1을 기준으로 구현했습니다.

공개 홈페이지: **https://nouvellehotelandspa.com/**

구현 범위와 검증 결과는 [docs/IMPLEMENTATION.md](docs/IMPLEMENTATION.md), PRD 이후 확정한 객실 정보와 사진 분류 근거는 [docs/CONTENT_VERIFICATION.md](docs/CONTENT_VERIFICATION.md), 실제 배포 확인은 [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)에 정리했습니다.

## 실행

Node.js 22.23.4 이상(권장 24)에서:

```sh
npm ci
npm run dev
```

로컬 주소: `http://127.0.0.1:4321/`. PowerShell 실행 정책이 `npm.ps1`을 막으면 `npm.cmd`를 사용하세요.

```sh
npm test             # 예약 URL 검증
npm run build        # Astro 타입 검사 + 정적 빌드 + 산출물 경로/SEO/파일 검증
npm run preview      # 프로덕션 빌드 미리보기
npm run release:check # 출시 필수 자료 검증 (미등록 상태에서 실패하는 것이 정상)
```

## 구현 범위

Astro + TypeScript + Tailwind CSS v4, 정적 11페이지, 모바일 메뉴/고정 예약 CTA, 실사진 확대 갤러리(키보드·터치·ESC·포커스 복귀), 자기 호스팅 글꼴, 기본 한국어 콘텐츠와 다국어 확장 데이터 타입, 페이지별 SEO/구조화 데이터/사이트맵/robots/404, GitHub Pages 워크플로.

페이지: `/`, `/rooms/`, `/rooms/deluxe/`, `/rooms/premium-suite/`, `/facilities/`, `/location/`, `/explore/`, `/contact/`, `/privacy/`, `/terms/`, `/404.html`. 모든 경로는 공식 도메인의 루트에 배포됩니다.

## 실제 자료 등록

호텔 운영자가 제공한 Booking.com 호텔 URL, 도로명주소, 전화, 이메일 2개와 교통 안내를 반영했습니다. 모든 예약 버튼은 동일한 실제 호텔 URL로 연결됩니다. 제공된 실사진 17장을 선별해 메인·로비·객실·사운드·지하 욕장에 사용하며, 디럭스와 스위트는 Booking.com의 객실별 사진과 대조해 분류했습니다. 공개된 외국어 페이지·가짜 후기·추적 도구는 없습니다.

- `src/data/booking.ts`: 확인한 HTTPS Booking.com **호텔 상세** URL을 `bookingUrl`에 입력하세요. 공통 버튼은 자동으로 같은 URL로 활성화되며 새 탭과 `noopener noreferrer`를 적용합니다.
- `src/data/hotel.ts`: 주소·전화·이메일 배열·지도 URL, 교통 안내 및 호텔 실사진을 관리합니다. 전화 링크는 해외에서 사용할 수 있도록 국제 형식으로 연결합니다. 지도는 확인된 호텔 주소의 검색 링크를 제공합니다.
- `src/data/rooms.ts`: 객실별 실제 사진을 관리합니다. 디럭스·스위트 모두 예약 페이지 기준 25㎡, 더블침대 1개이며 원형 욕조를 갖춥니다. 객실별 정원·운영 정책은 확인 전 임의 추가하지 마세요.
- `src/data/attractions.ts`: 관광지 정보와 현지어 번역을 관리합니다. 관광지 실사진 6장은 `attraction-photos.ts`에 있으며, 카드에 촬영자·출처·라이선스를 표시합니다.
- 번역은 `Localized<T>`에 확장하고, 전체 검수와 경로·canonical·hreflang 구현을 마친 후 공개하세요. 미완성 언어 전환 메뉴는 노출하지 않습니다.

사진은 `public/images/` 하위에 넣고 WebP/AVIF 권장, 다음 형태로 등록합니다. 경로는 `public/`을 제외한 상대 경로입니다.

```ts
{ src: 'images/deluxe/room.webp', alt: '실제로 촬영한 디럭스 객실 전경', width: 1600, height: 1067 }
```

모든 객실에 있는 원형 욕조와 지하 프라이빗 욕장(24시간·최대 2인)은 별도 시설입니다. 스피커 설치 범위·모델, 욕장 요금·이용 방법·회차, 주차·체크인·아동 정책 등은 검증 후 반영해야 합니다.

## 사진 최적화

`scripts/photo-selections.json`에 원본 경로, 사진 설명, 객실 분류 및 확인한 예약 사이트 사진 ID를 지정합니다. 원본이 있는 로컬 폴더에서 `npm run assets:photos`를 실행하면 `public/images/hotel/`의 640·960·1280px WebP와 `src/data/photos.ts`, `docs/PHOTO_ASSETS.json`을 생성합니다. 원본은 축소만 하고 확대·생성 보정은 하지 않습니다. `npm run assets:og`는 객실 실사진으로 소셜 미리보기를 갱신합니다.

원본 사진 폴더는 로컬에 보존하고 Git 추적에서 제외했습니다. 생성된 웹 이미지는 저장소에 포함하므로 CI 빌드에 원본이 필요하지 않습니다. `srcset`·`sizes`로 기기별 파일을 선택하며 히어로와 상세 대표 사진을 우선 불러오고 나머지는 지연 로드합니다.

관광지 사진은 호텔 실사진과 별도로 Wikimedia Commons의 CC0 5장과 CC BY 2.0 1장을 사용합니다. `docs/ATTRACTION_ASSETS.json`에 원본 URL·촬영 시점·라이선스·해시를 기록했습니다. `node scripts/prepare-attractions.mjs`는 라이선스를 대조한 뒤 640·960·1280px WebP를 생성합니다. 재생성에는 네트워크가 필요하며, CI는 저장소에 포함된 파일을 사용합니다.

## GitHub Pages

대상 저장소: `https://github.com/resumet/nouvelle-homepage`.
공개 URL: `https://nouvellehotelandspa.com/`. GitHub Actions 배포가 활성화되어 있으며 DNS 전파 후 HTTPS를 강제 적용합니다.

1. 이 소스를 저장소 `main`에 올리면 GitHub Actions에서 테스트와 빌드를 수행합니다.
2. 실제 자료와 사용 권한, 정책 문구를 검수하고 `npm run release:check`가 통과하는지 확인하세요.
3. 저장소 Settings → Pages → Source를 **GitHub Actions**로 설정하세요.
4. Settings → Secrets and variables → Actions → Variables에 `PUBLISH_SITE=true`를 등록하세요.
5. `main` push 또는 수동 워크플로 실행 시 출시 자료 검사를 통과한 빌드를 배포합니다. 변수 미설정 상태에서는 빌드만 수행합니다.

공식 도메인 루트에서 `robots.txt`와 `sitemap.xml`을 제공합니다. Search Console에는 `https://nouvellehotelandspa.com/sitemap.xml`을 제출하세요.

현재 자체 폼·DB·예약·결제·로그인·GA4는 없습니다. 개인정보 문서는 실제 홈페이지 동작을 설명하는 초안이며, 운영 주체의 최종 검수가 필요합니다.
