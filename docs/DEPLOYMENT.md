# GitHub Pages 배포 확인

확인일: 2026-10-28 (한국 시간).

- 공개 주소: https://resumet.github.io/nouvelle-homepage/
- 저장소: https://github.com/resumet/nouvelle-homepage
- 구현 PR: https://github.com/resumet/nouvelle-homepage/pull/1 (병합 완료)
- 최초 공개 커밋: `1d0305043b5998e4c5199a76c350fc338ab31eaf`
- 최초 공개 워크플로: https://github.com/resumet/nouvelle-homepage/actions/runs/40638601675 (성공)
- 배포 방식: GitHub Actions → GitHub Pages. `PUBLISH_SITE=true`, HTTPS 강제 활성화.

## 실제 공개 주소 검증

- 홈, 객실 목록, 디럭스·스위트 상세, 지하 욕장, 위치, 관광, 문의, 개인정보 안내, 약관, 404 파일 총 11개 경로 HTTP 200.
- 각 페이지에 H1 1개와 정확한 프로젝트 하위 경로 canonical 존재.
- 모든 예약 링크가 동일한 실제 Booking.com 호텔 페이지로 연결.
- 디럭스 실제 사진 확대·좌우 이동·이미지 디코딩 확인.
- 375px 화면에서 홈 실사진 전체 로드 및 가로 넘침 없음.
- 검증 중 JavaScript 오류 및 실패한 네트워크 요청 없음.
- `sitemap.xml`, `robots.txt` HTTP 200.
- 존재하지 않는 경로가 사용자 정의 404 페이지와 HTTP 404 반환.

문서만 갱신한 후속 커밋에도 같은 워크플로가 자동 실행됩니다. 최신 실행 상태는 저장소 Actions에서 확인할 수 있습니다.

## 운영 안내

`main`에 변경을 반영하면 테스트·정적 빌드·산출물 검사와 출시 검사를 통과한 버전이 자동 배포됩니다. 생성된 WebP는 저장소에 포함되어 있어 원본 사진 폴더 없이 CI를 재현할 수 있습니다. 원본 사진과 검토용 예약 사이트 이미지는 배포 및 Git 추적 대상에서 제외했습니다.

외부 예약 사이트의 요금·재고·예약 완료 처리는 홈페이지 밖에서 진행됩니다. 공식 도메인이나 공개 언어를 추가하면 `site`·`base`·canonical·사이트맵 설정을 함께 갱신하세요. 검색 서비스의 운영자 프로필 URL 등록 및 Search Console 제출은 해당 서비스의 계정에서 관리합니다.
