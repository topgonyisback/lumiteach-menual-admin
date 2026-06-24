# LumiTeach Admin Guide

관리자용 매뉴얼 HTML 작업 공간입니다.

## 폴더 구조

- `index.html`: 로컬 서버와 배포에서 기본으로 열리는 Admin Guide 파일
- `lumiteach_help_center_admin.html`: 직접 파일로 열 때 사용할 수 있는 동일 HTML 파일
- `app.js`: 기존 LumiTeach 서비스 가이드와 동일한 라우팅/검색/렌더링 로직
- `styles.css`: 기존 LumiTeach 서비스 가이드와 동일한 디자인 시스템
- `data/manual-data.js`: Admin Guide 메뉴와 본문 데이터
- `data/translations.js`: Admin Guide UI/번역 데이터
- `notion_html_zips/`: 페이지별로 추출한 Notion HTML zip을 넣는 폴더

## 작업 흐름

1. 페이지별 Notion HTML zip을 `notion_html_zips/`에 넣습니다.
2. zip 파일명은 가능하면 `01_login.zip`, `02_dashboard.zip`처럼 번호와 화면명을 함께 둡니다.
3. zip 내용을 확인해 `data/manual-data.js`의 `manualTree`, `articleTemplates`, `articleBodies`에 반영합니다.
4. 이미지가 필요한 경우 Admin 전용 assets 폴더를 만든 뒤 상대 경로로 연결합니다.
