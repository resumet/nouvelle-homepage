# 누베르 호텔 앤 스파 종로점 SEO 점검 보고서

> 2026-10-28 후속 조치: `nouvellehotelandspa.com`을 GitHub Pages에 연결하고 canonical, sitemap, robots 및 manifest를 공식 도메인 루트 기준으로 전환했습니다. 아래 내용은 전환 전 GitHub 프로젝트 주소를 대상으로 수행한 최초 점검 기록입니다. DNS와 HTTPS 전파가 끝난 뒤 공식 도메인 기준으로 재측정합니다.

- 점검일: 2026-10-28 (KST)
- 대상: `https://resumet.github.io/nouvelle-homepage/`
- 범위: 빌드 결과, 공개 HTTP 응답, 메타데이터, 색인 제어, 사이트맵, 구조화 데이터, 콘텐츠 구조, 이미지, 모바일 Lighthouse, 공개 검색 결과

## 결론

기술 SEO의 기본 구현은 양호하다. 모든 공개 페이지에 고유한 제목과 설명, canonical URL, 하나의 H1이 있으며, 내부 링크와 이미지도 정적 HTML로 제공된다. Lighthouse SEO 점수는 100점이다.

다만 현재 주소가 `resumet.github.io`의 하위 디렉터리이므로 호텔의 독립적인 공식 사이트로 인식되기 어렵다. 도메인 루트의 `robots.txt`가 404이고, Google의 사이트명 기능도 하위 디렉터리 단위 사이트를 지원하지 않는다. 공개 검색 점검에서도 공식 홈페이지는 노출되지 않았고 예약 플랫폼과 숙박 디렉터리가 먼저 노출됐다. 따라서 현재 상태는 **검색엔진이 읽을 수 있는 사이트는 완성됐지만, 공식 사이트로 발견·확인·축적되는 운영 단계는 미완료**로 평가한다.

## 확인된 강점

- 공개 페이지 10개와 404 페이지 모두 고유한 `<title>`과 meta description을 가진다.
- canonical URL이 실제 공개 URL과 일치한다.
- 모든 문서가 `lang="ko"`이고 페이지마다 H1이 정확히 하나다.
- 404 페이지는 실제 HTTP 404를 반환하며 `noindex, follow`가 적용된다.
- `/nouvelle-homepage/robots.txt`와 `/nouvelle-homepage/sitemap.xml`은 HTTP 200을 반환한다.
- sitemap에는 색인 대상 10개 URL이 있고 404는 제외돼 있다.
- `Hotel`과 `BreadcrumbList` JSON-LD가 유효한 JSON으로 출력된다.
- Open Graph와 Twitter Card, 1200×630 공유 이미지가 설정돼 있다.
- 이미지에 설명형 대체 텍스트, 크기, WebP `srcset`, 지연 로딩이 적용돼 있다.
- 예약 링크는 단일 Booking.com 호텔 URL을 사용하고 정적 HTML에 노출된다.
- Lighthouse: SEO 100, Best Practices 100, Performance 92, CLS 0, TBT 0ms.

## 우선순위별 개선 항목

### P0 — 커스텀 도메인 적용

현재 홈페이지는 `resumet.github.io/nouvelle-homepage/`라는 하위 경로에 있다.

- `https://resumet.github.io/robots.txt`는 404다. 현재 프로젝트 내부의 `/nouvelle-homepage/robots.txt`는 호스트 루트의 표준 robots 파일이 아니므로 sitemap 자동 발견 수단으로 신뢰할 수 없다. 크롤링 자체는 루트 robots가 없어서 허용되지만, 의도한 sitemap 선언은 루트에서 제공되지 않는다.
- Google은 사이트명을 도메인 또는 서브도메인 단위로만 지원하며 하위 디렉터리 사이트명은 지원하지 않는다. 현재 주소에서는 검색 결과의 사이트명이 호텔명 대신 `resumet.github.io` 계열로 처리될 가능성이 높다.
- 호텔 브랜드와 무관한 GitHub 호스트명은 공식성, 기억성, 링크 획득 측면에서도 불리하다.

권장 조치:

1. 호텔 전용 도메인 또는 서브도메인을 연결한다.
2. Astro의 `site`와 `base`, canonical, sitemap, OG URL을 새 도메인 기준으로 변경한다.
3. 새 도메인 루트에서 `/robots.txt`와 `/sitemap.xml`을 제공한다.
4. 기존 GitHub Pages URL에서 새 도메인으로 영구 이전 신호를 제공하고 canonical을 통일한다.

### P0 — Google·네이버 색인 등록과 소유권 확인

코드에는 Google Search Console 또는 네이버 서치어드바이저 소유권 확인 파일·메타 태그가 없다. 외부 관리 화면 접근 권한이 없어 실제 등록 여부는 확인할 수 없지만, 공개 검색 점검에서 공식 홈페이지는 아직 노출되지 않았다.

권장 조치:

1. 커스텀 도메인을 Google Search Console 도메인 속성으로 등록한다.
2. 네이버 서치어드바이저에 사이트를 등록하고 소유권을 확인한다.
3. 두 서비스에 `/sitemap.xml`을 제출한다.
4. 홈, 객실 목록, 디럭스, 스위트, 오시는 길 URL의 수집·색인을 우선 요청한다.
5. 색인 수, 제외 사유, 노출 검색어, 클릭률을 주기적으로 확인한다.

Google과 네이버 모두 sitemap 제출을 권장하지만, 제출은 색인을 보장하지 않는다. 색인 상태는 각 웹마스터 도구에서 확인해야 한다.

### P0 — 호텔명·주소·전화·객실 수의 외부 일관성 점검

공식 사이트의 핵심 정보는 다음과 같다.

- 이름: 누베르 호텔 앤 스파 종로점
- 주소: 서울 종로구 종로31길 46-8
- 전화: 02-747-3002
- 객실 수: 30실

공개 검색 결과에는 `종로 누베르 호텔 앤 스파 by 아늑 종로점`, `누베르 호텔 앤 스파 서울종로점` 등 다른 명칭이 함께 나타나며, 일부 외부 페이지는 객실 수 29개 또는 다른 전화번호를 표시한다. 어느 정보가 최신인지 운영자가 확인한 뒤 Google Business Profile, 네이버 플레이스, Booking.com, NOL 등 주요 채널의 NAP(Name, Address, Phone)와 객실 수를 통일해야 한다.

구조화 데이터에는 확인된 공식 프로필 URL을 `sameAs`로 연결해 동일한 호텔 엔터티임을 명확히 하는 것이 좋다.

### P1 — 제목을 검색 의도 중심으로 개선

현재 제목은 모두 고유하고 길이도 과도하지 않다. 다만 홈 제목은 감성 문구가 먼저 나오고, 객실 상세 제목은 `Deluxe Room`, `Suite Room`처럼 영문만 사용한다. `종로 호텔`, `종로5가 호텔`, `디럭스룸`, `스위트룸`, `프라이빗 욕장` 같은 실제 검색어와의 관련성이 약하다.

예시:

- 홈: `누베르 호텔 앤 스파 종로점 | 종로5가 호텔·프라이빗 욕장`
- 디럭스: `디럭스 더블룸 | 누베르 호텔 앤 스파 종로점`
- 스위트: `스위트룸 | 누베르 호텔 앤 스파 종로점`
- 오시는 길: `종로5가역 도보 5분·오시는 길 | 누베르 호텔 종로점`

홈 H1에도 브랜드명 또는 `종로5가 호텔` 문맥을 자연스럽게 포함하면 제목과 본문 주제가 더 일치한다.

### P1 — 지역·호텔 구조화 데이터 보강

현재 `Hotel` JSON-LD에는 이름, 영문명, 대표 이미지, 주소 한 줄, 전화, 이메일, 객실 수가 있다. 다음 정보가 빠져 있다.

- `addressLocality`, `addressRegion`, `postalCode`
- `geo` 위도·경도
- `sameAs` 공식 지도·예약·브랜드 프로필
- 국제 형식 전화번호
- 확인된 경우 `checkinTime`, `checkoutTime`, `priceRange`, 제공 편의시설
- 홈의 `WebSite`/`WebPage` 엔터티와 페이지별 `mainEntity`
- 객실 상세의 `HotelRoom` 또는 `Accommodation` 정보와 호텔 연결

확인되지 않은 별점, 후기, 가격, 운영 정책은 추가하면 안 된다. 특히 자체 수집하지 않은 외부 후기 평점을 복사해 `aggregateRating`으로 넣는 것은 피한다.

커스텀 도메인 적용 후 홈에 `WebSite` 구조화 데이터를 추가하면 Google에 선호 사이트명을 전달할 수 있다.

### P1 — LCP와 CSS 전달 최적화

모바일 Lighthouse 단일 측정 결과:

| 지표 | 결과 | 판정 |
|---|---:|---|
| Performance | 92 | 양호 |
| SEO | 100 | 기본 기술 항목 통과 |
| LCP | 3.1초 | 개선 필요, 권장 2.5초 이내 |
| CLS | 0 | 양호 |
| TBT | 0ms | 양호 |

LCP 요소는 홈의 히어로 사진이다. 이미지 요청 발견과 우선순위 설정은 적절하지만, 요소 렌더 지연이 약 1.9초다. 공통 CSS는 약 87KB이고 Lighthouse는 약 94%를 해당 페이지에서 사용하지 않은 CSS로 판단했다. 렌더 차단 CSS 절감 가능 시간은 약 290ms, 이미지 전송 절감 가능량은 약 50KiB다.

권장 조치:

1. 페이지별 CSS 분리 또는 홈에서 사용하지 않는 갤러리·법적 문서·상세 페이지 스타일 분리
2. 첫 화면 핵심 CSS 인라인화 검토
3. Noto Sans KR과 Montserrat의 사용 굵기·서브셋 축소
4. 히어로와 카드에 480px·768px 등 실제 표시 폭에 가까운 이미지 후보 추가
5. OG PNG 764KB를 시각 품질을 유지하면서 압축

GitHub Pages의 정적 자산 캐시가 10분으로 측정된 문제는 애플리케이션 코드만으로 제어하기 어렵다. 장기 캐시 헤더를 직접 제어할 수 있는 호스팅으로 이전하면 재방문 성능을 더 개선할 수 있다.

### P2 — sitemap과 소셜 메타데이터 보완

- sitemap에 `lastmod`가 없다. 필수는 아니지만 실제 콘텐츠 수정일을 정확히 제공하면 재수집 판단에 도움이 된다.
- 모든 페이지가 같은 OG 이미지를 사용한다. 객실 상세와 프라이빗 욕장 페이지에는 각 페이지 대표 사진을 사용하면 공유 클릭률을 높일 수 있다.
- `twitter:image:alt`와 `og:image:type`을 추가할 수 있다.
- 개인정보처리방침과 이용약관을 sitemap에 유지할 필요가 있는지 운영 정책에 따라 결정한다. 현재 포함 자체가 오류는 아니다.

## 권장 실행 순서

1. 공식 호텔명, 전화, 객실 수, 지도 프로필을 확정하고 외부 채널 정보를 통일한다.
2. 커스텀 도메인을 연결하고 canonical·robots·sitemap을 새 도메인으로 전환한다.
3. Google Search Console과 네이버 서치어드바이저 소유권 확인 및 sitemap 제출을 완료한다.
4. 홈·객실 페이지 제목과 H1을 검색 의도에 맞게 수정한다.
5. Hotel/LocalBusiness, WebSite, 객실 구조화 데이터를 보강한다.
6. 공통 CSS와 한글 웹폰트, 히어로 이미지 전달을 최적화해 LCP 2.5초 이내를 목표로 한다.
7. 색인과 검색어 데이터를 2~4주 단위로 확인하고 제목·설명을 조정한다.

## 참고 기준

- Google Search Central — Site names: https://developers.google.com/search/docs/appearance/site-names
- Google Search Central — Local business structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google Search Central — Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- Google Search Central — Sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- 네이버 서치어드바이저 — RSS 및 사이트맵 제출: https://searchadvisor.naver.com/guide/request-feed
- 네이버 서치어드바이저 — SEO 기본 가이드: https://searchadvisor.naver.com/guide/seo-basic-intro

## 측정 한계

- Lighthouse 수치는 2026-10-28 공개 사이트를 대상으로 한 모바일 실험실 측정 1회 결과다. 실제 사용자 데이터(CrUX)와 다를 수 있다.
- Google Search Console, Google Business Profile, 네이버 서치어드바이저, 네이버 플레이스 관리 계정에는 접근하지 않았다. 해당 서비스의 등록·소유권·색인 상태는 관리 화면에서 최종 확인해야 한다.
- 공개 검색 결과의 부재는 즉시 미색인을 확정하는 증거가 아니며, 배포 직후의 수집 지연일 수 있다.
