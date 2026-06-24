# Admin Image Audit

2~17번 Notion HTML export의 실제 본문 이미지 포함 여부를 확인한 기록입니다.

| 번호 | zip 파일 | 본문 이미지 파일 수 | HTML 본문 이미지 참조 | 판정 |
| --- | --- | ---: | --- | --- |
| 2 | `2. 홈 대시보드.zip` | 0 | - | 본문 이미지 없음. Notion 메타 아이콘만 있음 |
| 3 | `3. 회원 정보 관리.zip` | 0 | - | 본문 이미지 없음. Notion 메타 아이콘만 있음 |
| 4 | `4. 가입 승인 및 권한 사전 등록.zip` | 1 | 가입 승인 및 권한 사전 등록/image.png | 이미지 있음, 로컬 asset으로 복사 대상 |
| 5 | `5. 기준 관리.zip` | 0 | - | 본문 이미지 없음. Notion 메타 아이콘만 있음 |
| 6 | `6. 교육과정 관리.zip` | 3 | 교육과정 관리/image.png<br>교육과정 관리/image 1.png<br>교육과정 관리/image 2.png | 이미지 있음, 로컬 asset으로 복사 대상 |
| 7 | `7. 레슨 관리 - Lesson &Activity 관리.zip` | 0 | - | 본문 이미지 없음. Notion 메타 아이콘만 있음 |
| 8 | `8. 레슨관리-일괄 등록.zip` | 0 | - | 본문 이미지 없음. Notion 메타 아이콘만 있음 |
| 9 | `9. 레슨 관리- AI Make를 통한 Lesson 생성과 검토.zip` | 0 | - | 본문 이미지 없음. Notion 메타 아이콘만 있음 |
| 10 | `10. 레슨 관리- 추천 관리.zip` | 0 | - | 본문 이미지 없음. Notion 메타 아이콘만 있음 |
| 11 | `11. 평가 관리- 문항 관리 및 등록.zip` | 0 | - | 본문 이미지 없음. Notion 메타 아이콘만 있음 |
| 12 | `12. 평가 관리- 시험지 관리 및 등록.zip` | 0 | - | 본문 이미지 없음. Notion 메타 아이콘만 있음 |
| 13 | `13. 신고 관리.zip` | 0 | - | 본문 이미지 없음. Notion 메타 아이콘만 있음 |
| 14 | `14. 1대1 문의.zip` | 1 | 1 1 문의/image.png | 이미지 있음, 로컬 asset으로 복사 대상 |
| 15 | `15. 소속 해지.zip` | 1 | 소속 해지/image.png | 이미지 있음, 로컬 asset으로 복사 대상 |
| 16 | `16. AI크레딧.zip` | 0 | - | 본문 이미지 없음. Notion 메타 아이콘만 있음 |
| 17 | `17. 자주 묻는 질문.zip` | 0 | - | 본문 이미지 없음. Notion 메타 아이콘만 있음 |

## 로컬 asset 반영 상태

- 로그인 및 가입 신청: `lumiteach_assets/manual/admin-login-signup/01.png`, `lumiteach_assets/manual/admin-login-signup/02.png`, `lumiteach_assets/manual/admin-login-signup/03.png`, `lumiteach_assets/manual/admin-login-signup/04.png`
- 가입 승인 및 권한 사전 등록: `lumiteach_assets/manual/admin-approval-permission/01.png`
- 교육과정 관리: `lumiteach_assets/manual/admin-curriculum-management/01.png`, `lumiteach_assets/manual/admin-curriculum-management/02.png`, `lumiteach_assets/manual/admin-curriculum-management/03.png`
- 1:1 문의: `lumiteach_assets/manual/admin-inquiry/01.png`
- 소속 해지: `lumiteach_assets/manual/admin-affiliation-release/01.png`

HTTP 렌더링 검증에서 이미지가 있는 페이지는 `complete=true`, `naturalWidth > 0`, `renderedWidth > 0`으로 확인합니다.
