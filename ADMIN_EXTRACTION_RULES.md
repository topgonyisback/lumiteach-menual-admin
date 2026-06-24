# Admin Guide Extraction Rules

이 문서는 LumiTeach Admin Guide를 Notion HTML export에서 가져올 때 유지할 기준입니다.

## 적용 범위

- `/notion_html_zips`에 넣은 Notion HTML zip을 원천 데이터로 사용합니다.
- 번역은 추출 단계에서 하지 않고, 한국어 원문 기준으로 먼저 페이지를 구성합니다.
- 이후 번역 단계에서 `data/translations.js` 또는 별도 언어 데이터로 일괄 처리합니다.

## 변환 규칙

- Notion 페이지 1개는 매뉴얼 페이지 1개로 변환합니다.
- `h2`는 본문 섹션으로 사용하고, 앞의 `1.` 같은 번호는 화면 섹션명에서는 제거합니다.
- `h2`가 없는 페이지는 `개요` 섹션 하나로 구성하고, 원문 안의 `h3`는 본문 소제목으로 유지합니다.
- `h3`는 본문 안의 소제목으로 유지합니다.
- Notion callout은 `[[callout:아이콘|제목|본문]]` 토큰으로 변환해 기존 콜아웃 디자인을 사용합니다.
- Notion table은 `[[table:<encoded-json>]]` 토큰으로 변환하고, 화면에서는 공통 table 컴포넌트로 렌더링합니다.
- `Last Updated`, `Order`, `Section`, `Slug`, `Status`만 포함된 Notion 속성 표는 본문 표에서 제외합니다.
- 이미지는 `lumiteach_assets/manual/<page-slug>/NN.ext`로 복사하고, 본문에는 `[[image:<page-slug>/NN.ext|캡션]]` 형태로 배치합니다.
- 이미지가 없는 페이지는 내용만 구성합니다. 없는 이미지를 임의로 만들지 않습니다.
- UI 버튼명, 메뉴명, 서비스 고유명사는 원문 HTML에 있는 표기를 우선합니다.

## 검증 기준

- `data/manual-data.js` 문법 오류가 없어야 합니다.
- 페이지 키로 직접 진입했을 때 제목, 섹션 목차, 본문, 콜아웃, 이미지가 정상 렌더링되어야 합니다.
- 이미지 파일은 상대 경로로 동작해야 하며, 개발자에게 폴더 전체 전달 시 깨지지 않아야 합니다.

## Table Extraction Note

- Notion export에서 일부 table은 `p > div.indented > table`처럼 문단 내부에 중첩되어 있으므로, 문단을 통째로 텍스트화하기 전에 중첩 table을 먼저 분리합니다.
