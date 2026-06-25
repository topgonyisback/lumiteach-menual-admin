# LumiTeach Admin Guide

관리자용 매뉴얼 HTML 작업 공간입니다.

## 폴더 구조

- `index.html`: 로컬 서버와 배포에서 기본으로 열리는 Admin Guide 파일
- `lumiteach_help_center_admin.html`: 직접 파일로 열 때 사용할 수 있는 동일 HTML 파일
- `app.js`: 기존 LumiTeach 서비스 가이드와 동일한 라우팅/검색/렌더링 로직
- `styles.css`: 기존 LumiTeach 서비스 가이드와 동일한 디자인 시스템
- `data/manual-data.js`: Admin Guide 메뉴와 본문 데이터
- `data/translations.js`: Admin Guide 번역 registry
- `data/translations/`: 언어별 번역 데이터 (`ko.js`, `en.js`, `pt.js`, `es.js`, `ja.js`, `vi.js`)
- `lumiteach_assets/manual/`: 언어별 매뉴얼 캡처 이미지
  - `ko/`: 중심 언어 이미지 폴더
  - `en/`: 현재 보유한 영어 캡처 fallback 이미지 폴더
  - `pt/`, `es/`, `ja/`, `vi/`: 언어별 캡처 교체용 폴더
- `notion_html_zips/`: 페이지별로 추출한 Notion HTML zip을 넣는 폴더

## 작업 흐름

1. 페이지별 Notion HTML zip을 `notion_html_zips/`에 넣습니다.
2. zip 파일명은 가능하면 `01_login.zip`, `02_dashboard.zip`처럼 번호와 화면명을 함께 둡니다.
3. zip 내용을 확인해 `data/manual-data.js`의 `manualTree`, `articleTemplates`, `articleBodies`에 반영합니다.
4. 이미지가 필요한 경우 본문에는 `[[image:admin-login-signup/01.png|설명]]`처럼 언어 코드 없이 상대 경로만 넣습니다.
5. 실제 이미지는 `lumiteach_assets/manual/{언어코드}/admin-login-signup/01.png` 위치에 넣습니다.

## 언어별 이미지 규칙

- 현재 선택된 언어가 `ja`라면 `lumiteach_assets/manual/ja/...` 이미지를 먼저 표시합니다.
- 해당 언어 이미지가 없으면 중심 언어인 `lumiteach_assets/manual/ko/...` 이미지를 fallback으로 확인합니다.
- `ko` 이미지도 없으면 현재 보유한 영어 캡처인 `lumiteach_assets/manual/en/...` 이미지를 fallback으로 표시합니다.
- 예전 공통 경로(`lumiteach_assets/manual/...`)도 마지막 fallback으로 유지합니다.
- 모든 언어 폴더는 동일한 하위 페이지 폴더 구조를 유지합니다. 새 언어 캡처를 추가할 때는 본문 데이터를 수정하지 않고, 동일한 파일명과 폴더 구조로 이미지만 추가하면 됩니다.
