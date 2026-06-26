const manualTree = [
  {
    "key": "cat-admin-login-signup",
    "title": "로그인 및 가입 신청",
    "description": "안녕하세요, 운영자님. LumiTeach 어드민을 이용하기 위한 첫 스텝, 로그인과 가입 신청 절차를 알아보겠습니다.",
    "children": []
  },
  {
    "key": "cat-admin-dashboard",
    "title": "홈 대시보드",
    "description": "어드민 홈 메뉴에서는 LumiTeach 사용자와 콘텐츠에 관련된 데이터를 집계하여 제시합니다. 주요 지표를 토대로 LumiTeach를 적극적으로 활용해 보세요.",
    "children": []
  },
  {
    "key": "cat-admin-member-management",
    "title": "회원 정보 관리",
    "description": "LumiTeach 서비스와 어드민을 함께할 회원을 등록해 보세요. 회원별 권한을 제어하고 AI 크레딧을 관리할 수 있습니다.",
    "children": []
  },
  {
    "key": "cat-admin-approval-permission",
    "title": "가입 승인 및 권한 사전 등록",
    "description": "LumiTeach 어드민과 서비스 이용을 위해 소속 회사 인증 절차가 필요합니다. 관리자는 어드민에서 가입 신청을 승인·반려하거나, 사전에 소속 회원 계정을 등록할 수 있습니다.",
    "children": []
  },
  {
    "key": "cat-admin-standard-management",
    "title": "기준 관리",
    "description": "LumiTeach 어드민에서 교육과정 및 콘텐츠를 관리하기 위한 첫 번째 단계입니다.",
    "children": []
  },
  {
    "key": "cat-admin-curriculum-management",
    "title": "교육과정 관리",
    "description": "기관 및 기업 고유의 교육과정과 콘텐츠를 LumiTeach 시스템에 맞춰 구조화할 수 있습니다. 맞춤형으로 설계된 교육과정을 통해 사용자들에게 최적의 콘텐츠를 제공해 보세요.",
    "children": []
  },
  {
    "key": "cat-admin-lesson-activity",
    "title": "레슨 관리: Lesson & Activity 관리",
    "description": "**레슨 관리** 메뉴는 교육 커리큘럼에 맞는 레슨과 액티비티를 등록하고 관리하는 기능입니다. 등록된 레슨의 교육과정 연결 정보, 개념 키워드, 메타데이터를 확인하고 수정할 수 있습니다.",
    "children": []
  },
  {
    "key": "cat-admin-lesson-bulk-upload",
    "title": "레슨 관리: 일괄 등록",
    "description": "레슨 일괄 등록은 엑셀 파일 하나로 여러 개의 레슨과 활동을 한꺼번에 등록하는 기능입니다. 레슨을 하나씩 직접 입력하는 것보다 빠르게 대량의 콘텐츠를 등록할 수 있습니다.",
    "children": []
  },
  {
    "key": "cat-admin-lesson-ai-make",
    "title": "레슨 관리: AI Make를 통한 Lesson 생성과 검토",
    "description": "AI Make 기능을 사용하면 원본 자료(PDF, PPT 등)를 업로드하는 것만으로 AI가 자동으로 레슨을 생성해 줍니다. 생성된 레슨은 [검토] 탭에서 확인하고, 내용을 수정한 후 승인하여 게시할 수 있습니다.",
    "children": []
  },
  {
    "key": "cat-admin-lesson-recommendation",
    "title": "레슨 관리: 추천 관리",
    "description": "교육과정 구조에 맞게 등록된 레슨을 사용자에게 큐레이션할 수 있습니다. 추천 관리에 등록된 콘텐츠는 LumiTeach 서비스의 홈 화면에 노출되어 사용자의 접근성을 높입니다.",
    "children": []
  },
  {
    "key": "cat-admin-assessment-question",
    "title": "평가 관리: 문항 관리 및 등록",
    "description": "평가지를 구성하는 문항을 생성하고 관리할 수 있습니다.",
    "children": []
  },
  {
    "key": "cat-admin-assessment-paper",
    "title": "평가 관리: 시험지 관리 및 등록",
    "description": "교육과정에 맞춘 문항들을 묶어 체계적인 시험지를 등록하고 관리할 수 있습니다. 이렇게 구성된 시험지는 LumiTeach 서비스 내에서 교사들이 학생들에게 과제나 시험으로 편리하게 출제합니다.",
    "children": []
  },
  {
    "key": "cat-admin-report-management",
    "title": "신고 관리",
    "description": "LumiTeach 서비스에서 신고된 콘텐츠를 확인하고 적절한 조치를 취하세요.",
    "children": []
  },
  {
    "key": "cat-admin-inquiry",
    "title": "1:1 문의",
    "description": "LumiTeach 서비스 또는 어드민 이용 중 문제가 발생했거나 문의사항이 있다면 1:1 문의 메뉴를 이용하세요.",
    "children": []
  },
  {
    "key": "cat-admin-affiliation-release",
    "title": "소속 해지",
    "description": "조직 이동이나 퇴사 등의 이유로 현재 소속을 해지해야하는 경우 소속 해지 절차를 따라 주세요.",
    "children": []
  },
  {
    "key": "cat-admin-ai-credit",
    "title": "AI 크레딧",
    "description": "LumiTeach의 AI 기능은 **크레딧 종량제** 방식으로 운영됩니다. 이 문서는 AI 크레딧이 어떻게 작동하는지, 어떤 기능에서 얼마나 차감되는지, 부족할 때 어떻게 해야 하는지를 안내합니다.",
    "children": []
  },
  {
    "key": "cat-admin-faq",
    "title": "자주 묻는 질문",
    "description": "자주 묻는 질문 메뉴에서 확인해야 하는 주요 기능과 처리 절차를 안내합니다.",
    "children": []
  }
];

const articleTemplates = {
  "cat-admin-login-signup": [
    "01.",
    "LumiTeach Admin Guide",
    "로그인 및 가입 신청",
    "안녕하세요, 운영자님. LumiTeach 어드민을 이용하기 위한 첫 스텝, 로그인과 가입 신청 절차를 알아보겠습니다.",
    "상위 관리자가 사전에 권한을 승인한 경우에는 권한 신청 절차 없이 어드민에 바로 접근할 수 있습니다.",
    [
      "로그인하기",
      "가입 신청",
      "구글 OTP 인증"
    ]
  ],
  "cat-admin-dashboard": [
    "02.",
    "LumiTeach Admin Guide",
    "홈 대시보드",
    "어드민 홈 메뉴에서는 LumiTeach 사용자와 콘텐츠에 관련된 데이터를 집계하여 제시합니다. 주요 지표를 토대로 LumiTeach를 적극적으로 활용해 보세요.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "주요 알림",
      "사용자 인사이트",
      "서비스 인사이트",
      "1:1 문의"
    ]
  ],
  "cat-admin-member-management": [
    "03.",
    "LumiTeach Admin Guide",
    "회원 정보 관리",
    "LumiTeach 서비스와 어드민을 함께할 회원을 등록해 보세요. 회원별 권한을 제어하고 AI 크레딧을 관리할 수 있습니다.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "회원 유형",
      "회원 관리",
      "회원 탈퇴/이용 정지",
      "소속 해지",
      "AI 크레딧 현황 조회 및 크레딧 지급"
    ]
  ],
  "cat-admin-approval-permission": [
    "04.",
    "LumiTeach Admin Guide",
    "가입 승인 및 권한 사전 등록",
    "LumiTeach 어드민과 서비스 이용을 위해 소속 회사 인증 절차가 필요합니다. 관리자는 어드민에서 가입 신청을 승인·반려하거나, 사전에 소속 회원 계정을 등록할 수 있습니다.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "가입 승인 신청 관리하기",
      "권한 사전 등록하기"
    ]
  ],
  "cat-admin-standard-management": [
    "05.",
    "LumiTeach Admin Guide",
    "기준 관리",
    "LumiTeach 어드민에서 교육과정 및 콘텐츠를 관리하기 위한 첫 번째 단계입니다.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "기준이란?",
      "학년 설정",
      "과목 설정",
      "아이템 설정"
    ]
  ],
  "cat-admin-curriculum-management": [
    "06.",
    "LumiTeach Admin Guide",
    "교육과정 관리",
    "기관 및 기업 고유의 교육과정과 콘텐츠를 LumiTeach 시스템에 맞춰 구조화할 수 있습니다. 맞춤형으로 설계된 교육과정을 통해 사용자들에게 최적의 콘텐츠를 제공해 보세요.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "교육과정은 어디에 활용되나요?",
      "교육과정 등록",
      "교육과정 AI 분류",
      "교육과정 관리"
    ]
  ],
  "cat-admin-lesson-activity": [
    "07.",
    "LumiTeach Admin Guide",
    "레슨 관리: Lesson & Activity 관리",
    "**레슨 관리** 메뉴는 교육 커리큘럼에 맞는 레슨과 액티비티를 등록하고 관리하는 기능입니다. 등록된 레슨의 교육과정 연결 정보, 개념 키워드, 메타데이터를 확인하고 수정할 수 있습니다.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "레슨 목록 확인",
      "레슨 상세 정보 확인",
      "레슨 수정 (Edit Lesson)",
      "레슨 등록"
    ]
  ],
  "cat-admin-lesson-bulk-upload": [
    "08.",
    "LumiTeach Admin Guide",
    "레슨 관리: 일괄 등록",
    "레슨 일괄 등록은 엑셀 파일 하나로 여러 개의 레슨과 활동을 한꺼번에 등록하는 기능입니다. 레슨을 하나씩 직접 입력하는 것보다 빠르게 대량의 콘텐츠를 등록할 수 있습니다.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "일괄 등록 방법"
    ]
  ],
  "cat-admin-lesson-ai-make": [
    "09.",
    "LumiTeach Admin Guide",
    "레슨 관리: AI Make를 통한 Lesson 생성과 검토",
    "AI Make 기능을 사용하면 원본 자료(PDF, PPT 등)를 업로드하는 것만으로 AI가 자동으로 레슨을 생성해 줍니다. 생성된 레슨은 [검토] 탭에서 확인하고, 내용을 수정한 후 승인하여 게시할 수 있습니다.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "AI Make를 통한 레슨 생성 방법",
      "레슨 검토 및 승인"
    ]
  ],
  "cat-admin-lesson-recommendation": [
    "10.",
    "LumiTeach Admin Guide",
    "레슨 관리: 추천 관리",
    "교육과정 구조에 맞게 등록된 레슨을 사용자에게 큐레이션할 수 있습니다. 추천 관리에 등록된 콘텐츠는 LumiTeach 서비스의 홈 화면에 노출되어 사용자의 접근성을 높입니다.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "추천 콘텐츠 관리",
      "추천 등록하기: 추천 주제 1",
      "추천 등록하기: 추천 주제 2"
    ]
  ],
  "cat-admin-assessment-question": [
    "11.",
    "LumiTeach Admin Guide",
    "평가 관리: 문항 관리 및 등록",
    "평가지를 구성하는 문항을 생성하고 관리할 수 있습니다.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "문항 관리",
      "문항 등록",
      "문항 등록: 개별 등록",
      "문항 등록: 일괄 등록"
    ]
  ],
  "cat-admin-assessment-paper": [
    "12.",
    "LumiTeach Admin Guide",
    "평가 관리: 시험지 관리 및 등록",
    "교육과정에 맞춘 문항들을 묶어 체계적인 시험지를 등록하고 관리할 수 있습니다. 이렇게 구성된 시험지는 LumiTeach 서비스 내에서 교사들이 학생들에게 과제나 시험으로 편리하게 출제합니다.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "시험지 관리",
      "시험지 등록: 개별 등록",
      "시험지 등록: 일괄 등록"
    ]
  ],
  "cat-admin-report-management": [
    "13.",
    "LumiTeach Admin Guide",
    "신고 관리",
    "LumiTeach 서비스에서 신고된 콘텐츠를 확인하고 적절한 조치를 취하세요.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "신고 콘텐츠 목록",
      "신고된 콘텐츠 확인하기",
      "신고 반려하기",
      "신고된 콘텐츠 비활성화하기",
      "🚨 콘텐츠 신고 안내 및 기준"
    ]
  ],
  "cat-admin-inquiry": [
    "14.",
    "LumiTeach Admin Guide",
    "1:1 문의",
    "LumiTeach 서비스 또는 어드민 이용 중 문제가 발생했거나 문의사항이 있다면 1:1 문의 메뉴를 이용하세요.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "문의하기",
      "답변 확인하기"
    ]
  ],
  "cat-admin-affiliation-release": [
    "15.",
    "LumiTeach Admin Guide",
    "소속 해지",
    "조직 이동이나 퇴사 등의 이유로 현재 소속을 해지해야하는 경우 소속 해지 절차를 따라 주세요.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "프로필에서 소속 해지하기"
    ]
  ],
  "cat-admin-ai-credit": [
    "16.",
    "LumiTeach Admin Guide",
    "AI 크레딧",
    "LumiTeach의 AI 기능은 **크레딧 종량제** 방식으로 운영됩니다. 이 문서는 AI 크레딧이 어떻게 작동하는지, 어떤 기능에서 얼마나 차감되는지, 부족할 때 어떻게 해야 하는지를 안내합니다.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "LumiTeach AI 소개",
      "AI 크레딧 지급 및 사용",
      "AI 크레딧 관리",
      "크레딧 환불 및 취소 정책"
    ]
  ],
  "cat-admin-faq": [
    "17.",
    "LumiTeach Admin Guide",
    "자주 묻는 질문",
    "자주 묻는 질문 메뉴에서 확인해야 하는 주요 기능과 처리 절차를 안내합니다.",
    "어드민 화면에서 실제로 사용하는 메뉴와 버튼명을 기준으로 확인하세요.",
    [
      "계정과 권한 이해하기",
      "가입 승인 및 권한 사전 등록",
      "소속 해지와 계정 정지 처리",
      "AI 크레딧 관리"
    ]
  ]
};

const stripLeadingCategoryNumber = (title) => String(title || '').replace(/^\s*\d+\.\s*/, '');
const categoryNumberMap = new Map();

function syncVisibleCategoryNumbers() {
  manualTree.forEach((category, index) => {
    const number = String(index + 1).padStart(2, '0') + '.';
    categoryNumberMap.set(category.key, number);
    category.title = number + ' ' + stripLeadingCategoryNumber(category.title);
    if (articleTemplates[category.key]) articleTemplates[category.key][0] = number;
  });
}
syncVisibleCategoryNumbers();

const articleOrder = manualTree.flatMap((category) => [category.key, ...category.children.flatMap((group) => [group.key, ...group.articles.map((article) => article.key)])]);

const visibleArticleKeySet = new Set(articleOrder);
function isVisibleArticleKey(key) { return visibleArticleKeySet.has(key); }

const articles = articleOrder.map((key) => { const value = articleTemplates[key]; return { key, number: value[0], category: value[1], title: value[2], desc: value[3], note: value[4], sections: value[5] }; });

const articleBodies = {
  "cat-admin-login-signup": [
    "- 어드민 첫 화면의 **[Google로 계속하기]** 버튼을 클릭하세요.\n\n[[image:admin-login-signup/01.png|화면 예시]]\n\n- Google 계정으로 로그인하세요.\n\n[[image:admin-login-signup/02.png|화면 예시]]",
    "- 처음 어드민에 로그인하셨다면, 어드민 접근을 위해 권한 신청이 필요합니다.\n\n- 소속 회사 이름을 입력하여 권한을 신청하세요.\n\n- 소속 회사 이름은 시스템에 등록된 회사명과 정확히 일치해야 합니다.\n\n- 회사명이 일치하지 않아 신청이 어려운 경우, 상위 관리자에게 문의하세요.\n\n[[image:admin-login-signup/03.png|화면 예시]]\n\n- 권한 신청 후에는 상위 관리자의 승인이 완료되어야 어드민에 접근할 수 있습니다.\n\n[[callout:💡||상위 관리자가 사전에 권한 승인을 했다면 권한 신청 절차 없이, 어드민에 바로 접근할 수 있습니다.]]",
    "- LumiTeach 어드민은 보안을 위해 Google OTP 2차 인증을 사용합니다.\n\n### **최초 로그인 시 — OTP 설정**\n\nOTP는 최초 로그인 시 1회만 설정하면 됩니다. 이후 로그인 시에는 앱에 표시된 6자리 인증 코드만 입력하면 됩니다.\n\n1. 앱스토어 또는 플레이스토어에서 **Google Authenticator** 앱을 설치하세요.\n\n🔗 Google Play Store🔗 Apple App Store\n\n2. Google Authenticator 앱을 실행하고, 하단의 `**+**` 버튼을 탭하세요.\n\n3. **[QR코드 스캔]** 을 선택하고, 어드민 로그인 화면에 표시된 QR코드를 스캔하세요.\n\n4. 앱에 표시된 6자리 인증 코드를 입력하면 설정이 완료됩니다.\n\n[[image:admin-login-signup/04.png|화면 예시]]\n\n### **이후 로그인 시 — OTP 인증**\n\n1. Google 계정으로 로그인하세요.\n\n2. Google Authenticator 앱을 실행하여 표시된 6자리 인증 코드를 입력하세요.\n\n[[callout:✅||보안을 위해 아래 사항을 확인해 주세요. 로그인 후 60분 동안 동작이 없으면 자동 로그아웃됩니다. 1개의 계정으로 여러 기기에서 동시 로그인은 불가능합니다. 자리를 오래 비우는 경우 반드시 로그아웃해 주세요. OTP 인증 코드를 5회 이상 잘못 입력하면 5분간 로그인이 제한됩니다.]]"
  ],
  "cat-admin-dashboard": [
    "- 빠르게 확인하고 조치가 필요한 주요 알림을 제시합니다. 각 항목을 클릭하면 세부 정보를 확인할 수 있습니다.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%ED%95%AD%EB%AA%A9%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%EA%B0%80%EC%9E%85%20%EC%8A%B9%EC%9D%B8%20%EB%8C%80%EA%B8%B0%20%ED%9A%8C%EC%9B%90%20%EC%88%98%22%2C%22LumiTeach%20%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EC%9D%B4%EC%9A%A9%EC%9D%84%20%EC%9C%84%ED%95%B4%20%EC%86%8C%EC%86%8D%20%EC%9D%B8%EC%A6%9D%EC%9D%84%20%EC%8B%A0%EC%B2%AD%ED%95%9C%20%ED%9A%8C%EC%9B%90%2C%20LumiTeach%20%EC%96%B4%EB%93%9C%EB%AF%BC%20%EC%A0%91%EA%B7%BC%EC%9D%84%20%EC%9C%84%ED%95%B4%20%EC%86%8C%EC%86%8D%20%EC%9D%B8%EC%A6%9D%EC%9D%84%20%EC%8B%A0%EC%B2%AD%ED%95%9C%20%EA%B4%80%EB%A6%AC%EC%9E%90%22%5D%2C%5B%22%EC%8B%A0%EA%B3%A0%20%EC%BD%98%ED%85%90%EC%B8%A0%20%EC%88%98%22%2C%22LumiTeach%20Explore%EC%97%90%20%EA%B2%8C%EC%8B%9C%EB%90%9C%20%EC%BD%98%ED%85%90%EC%B8%A0%20%EC%A4%91%20%EC%8B%A0%EA%B3%A0%20%EC%A0%91%EC%88%98%EB%90%9C%20%EC%BD%98%ED%85%90%EC%B8%A0%22%5D%2C%5B%22%ED%81%AC%EB%A0%88%EB%94%A7%20%EC%86%8C%EC%A7%84%20%EC%9E%84%EB%B0%95/%EB%B6%80%EC%A1%B1%20%ED%9A%8C%EC%9B%90%20%EC%88%98%22%2C%22AI%20%ED%81%AC%EB%A0%88%EB%94%A7%EC%9D%84%20%EB%AA%A8%EB%91%90%20%EC%86%8C%EC%A7%84%ED%96%88%EA%B1%B0%EB%82%98%2C%20%EC%9E%94%EB%9F%89%EC%9D%B4%2010%25%20%EB%AF%B8%EB%A7%8C%EC%9D%B8%20%EC%86%8C%EC%86%8D%20%ED%9A%8C%EC%9B%90%22%5D%5D%7D]]",
    "- 사용자 인사이트 영역에서는 총 회원 수와 방문자 통계를 제시합니다.\n\n**회원 통계**\n\n- 전체 회원 수(누적), 신규 회원 수, 탈퇴 회원 수\n\n> 일별, 월별, 연도별 회원 추이를 확인하세요.\n\n**오늘 방문자 수**\n\n- LumiTeach 사용자, 어드민의 방문자 수\n\n> 대시보드 조회 시점으로 가장 최근 집계된 데이터가 제시됩니다.",
    "- 소속 회원들의 LumiTeach 서비스 활용 현황을 확인할 수 있습니다.\n\n**수업 시작 빈도**\n\n- Interaction, Battle Mode, Presentation 모드로 수업을 시작한 횟수\n\n**과제 발행 빈도**\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%9C%A0%ED%98%95%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22Self%20Study%22%2C%22Lesson%EC%9D%84%20Individual%2C%20Challenge%2C%20Flash%20Card%20%ED%98%95%ED%83%9C%EB%A1%9C%20%EA%B3%BC%EC%A0%9C%20%EB%B0%9C%ED%96%89%ED%95%9C%20%ED%9A%9F%EC%88%98%22%5D%2C%5B%22Assessment%22%2C%22Assessment%EB%A5%BC%20%EA%B3%BC%EC%A0%9C%EB%A1%9C%20%EB%B0%9C%ED%96%89%ED%95%9C%20%ED%9A%9F%EC%88%98%22%5D%5D%7D]]\n\n**Lesson 생성 수**\n\n- 소속 회원들이 Lesson을 생성하여 저장한 횟수입니다.\n\n**평균 Lesson 활용 시간**\n\n- 수업 1건당 평균 진행 시간\n\n> 📌 **집계 기준 안내- Interaction·Battle Mode** : 학생이 1명 이상 참여한 수업만 평균 시간에 포함됩니다.- **Presentation** : Start Lesson부터 End Lesson까지의 시간이 평균에 포함됩니다.",
    "- 최근 접수한 1:1 문의 내역을 확인할 수 있습니다."
  ],
  "cat-admin-member-management": [
    "[[table:%7B%22rows%22%3A%5B%5B%22%22%2C%22%2A%2A%EA%B5%90%EC%82%AC%2A%2A%22%2C%22%2A%2A%EA%B4%80%EB%A6%AC%EC%9E%90%2A%2A%22%5D%2C%5B%22%EC%9D%B4%EC%9A%A9%20%EB%8C%80%EC%83%81%22%2C%22LumiTeach%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EC%9D%B4%EC%9A%A9%22%2C%22LumiTeach%20%EC%96%B4%EB%93%9C%EB%AF%BC%20%EC%9D%B4%EC%9A%A9%22%5D%2C%5B%22%EC%A3%BC%EC%9A%94%20%EC%97%AD%ED%95%A0%22%2C%22%EA%B5%90%EC%88%98%EC%9E%90%EB%A3%8C%20%EC%83%9D%EC%84%B1%20%EB%B0%8F%20%EC%88%98%EC%97%85/%EA%B3%BC%EC%A0%9C%20%EC%A7%84%ED%96%89%22%2C%22%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%20%EB%B0%8F%20%EC%BD%98%ED%85%90%EC%B8%A0%20%EA%B4%80%EB%A6%AC%2C%20%ED%9A%8C%EC%9B%90%20%EA%B4%80%EB%A6%AC%20%EB%93%B1%EC%9D%98%20%EB%A7%A4%EB%8B%88%EC%A7%95%20%EC%97%85%EB%AC%B4%20%EC%88%98%ED%96%89%22%5D%5D%7D]]\n\nLumiTeach에서 프리미엄 서비스 및 어드민을 이용하기 위해서는 **소속 인증 절차** 가 필요합니다.\n\n[[callout:💡||교사와 관리자 역할을 모두 수행해야 하는 경우, 서비스와 어드민에서 각각 별도로 소속 인증을 진행해야 합니다.]]",
    "회원 목록을 조회하고 관리할 수 있습니다. 특정 회원의 상세 정보를 확인하려면 `**작업(⋯)**` **>** `**[회원 정보 상세]**` 를 클릭하세요.\n\n[[image:admin-member-management/01.png|화면 예시]]\n\n**교사 회원** 에 대해 수행 가능한 작업은 다음과 같습니다\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%9E%91%EC%97%85%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%EA%B0%80%EC%9E%85%20%EC%8A%B9%EC%9D%B8/%EB%B0%98%EB%A0%A4%22%2C%22%EC%86%8C%EC%86%8D%20%EC%9D%B8%EC%A6%9D%20%EC%8B%A0%EC%B2%AD%ED%95%9C%20%EA%B5%90%EC%82%AC%20%ED%9A%8C%EC%9B%90%EC%9D%98%20%EA%B0%80%EC%9E%85%EC%9D%84%20%EC%8A%B9%EC%9D%B8%ED%95%98%EA%B1%B0%EB%82%98%20%EB%B0%98%EB%A0%A4%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%ED%83%88%ED%87%B4%22%2C%22%EA%B5%90%EC%82%AC%20%ED%9A%8C%EC%9B%90%EC%9D%84%20LumiTeach%20%EC%84%9C%EB%B9%84%EC%8A%A4%EC%97%90%EC%84%9C%20%ED%83%88%ED%87%B4%20%EC%B2%98%EB%A6%AC%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%ED%9A%8C%EC%9B%90%20%EC%A0%95%EB%B3%B4%20%EC%83%81%EC%84%B8%20%ED%99%95%EC%9D%B8%22%2C%22%ED%9A%8C%EC%9B%90%EC%9D%98%20%EA%B8%B0%EB%B3%B8%20%EC%A0%95%EB%B3%B4%20%EB%B0%8F%20%ED%99%9C%EB%8F%99%20%EC%9D%B4%EB%A0%A5%EC%9D%84%20%ED%99%95%EC%9D%B8%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%EC%86%8C%EC%86%8D%20%ED%95%B4%EC%A7%80%22%2C%22%ED%87%B4%EC%82%AC%C2%B7%EC%86%8C%EC%86%8D%20%EB%B3%80%EA%B2%BD%20%EB%93%B1%EC%9D%98%20%EC%82%AC%EC%9C%A0%EB%A1%9C%20%EC%86%8C%EC%86%8D%EC%9D%84%20%ED%95%B4%EC%A7%80%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22AI%20%ED%81%AC%EB%A0%88%EB%94%A7%20%ED%98%84%ED%99%A9%20%ED%99%95%EC%9D%B8%20%EB%B0%8F%20%EC%B6%94%EA%B0%80%20%EC%A7%80%EA%B8%89%22%2C%22%ED%9A%8C%EC%9B%90%EC%9D%98%20%ED%81%AC%EB%A0%88%EB%94%A7%20%EC%9E%94%EB%9F%89%EC%9D%84%20%ED%99%95%EC%9D%B8%ED%95%98%EA%B3%A0%20%EC%B6%94%EA%B0%80%20%EC%A7%80%EA%B8%89%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%5D%7D]]\n\n**관리자 회원** 에 대해 수행 가능한 작업은 다음과 같습니다.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%9E%91%EC%97%85%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%EA%B0%80%EC%9E%85%20%EC%8A%B9%EC%9D%B8/%EB%B0%98%EB%A0%A4%22%2C%22%EC%86%8C%EC%86%8D%20%EC%9D%B8%EC%A6%9D%20%EC%8B%A0%EC%B2%AD%ED%95%9C%20%EA%B4%80%EB%A6%AC%EC%9E%90%20%ED%9A%8C%EC%9B%90%EC%9D%98%20%EA%B0%80%EC%9E%85%EC%9D%84%20%EC%8A%B9%EC%9D%B8%ED%95%98%EA%B1%B0%EB%82%98%20%EB%B0%98%EB%A0%A4%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%EC%9D%B4%EC%9A%A9%20%EC%A0%95%EC%A7%80%22%2C%22%EA%B4%80%EB%A6%AC%EC%9E%90%20%ED%9A%8C%EC%9B%90%EC%9D%98%20%EC%96%B4%EB%93%9C%EB%AF%BC%20%EC%A0%91%EA%B7%BC%EC%9D%84%20%EC%A0%95%EC%A7%80%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%ED%9A%8C%EC%9B%90%20%EC%A0%95%EB%B3%B4%20%EC%83%81%EC%84%B8%20%ED%99%95%EC%9D%B8%22%2C%22%ED%9A%8C%EC%9B%90%EC%9D%98%20%EA%B8%B0%EB%B3%B8%20%EC%A0%95%EB%B3%B4%20%EB%B0%8F%20%ED%99%9C%EB%8F%99%20%EC%9D%B4%EB%A0%A5%EC%9D%84%20%ED%99%95%EC%9D%B8%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%EC%86%8C%EC%86%8D%20%ED%95%B4%EC%A7%80%22%2C%22%ED%87%B4%EC%82%AC%C2%B7%EC%86%8C%EC%86%8D%20%EB%B3%80%EA%B2%BD%20%EB%93%B1%EC%9D%98%20%EC%82%AC%EC%9C%A0%EB%A1%9C%20%EC%86%8C%EC%86%8D%EC%9D%84%20%ED%95%B4%EC%A7%80%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22AI%20%ED%81%AC%EB%A0%88%EB%94%A7%20%ED%98%84%ED%99%A9%20%ED%99%95%EC%9D%B8%22%2C%22%ED%9A%8C%EC%9B%90%EC%9D%98%20%ED%81%AC%EB%A0%88%EB%94%A7%20%EC%9E%94%EB%9F%89%EC%9D%84%20%ED%99%95%EC%9D%B8%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%5D%7D]]",
    "- 탈퇴된 교사 회원은 LumiTeach 서비스를 이용할 수 없습니다.\n\n- 이용 정지된 관리자 회원의 경우 어드민을 이용할 수 없습니다.\n\n[[image:admin-member-management/02.png|화면 예시]]\n\n[[callout:💡||교사 회원은 직접 탈퇴할 수 있습니다. 관리자 회원의 경우, 상위 또는 동료 관리자가 이용 정지를 해야합니다.]]",
    "퇴사·소속 변경 등의 사유로 특정 회원의 소속을 해지할 수 있습니다.\n\n[[image:admin-member-management/03.png|화면 예시]]\n\n- 소속이 해지된 **교사 회원** 은 LumiTeach 서비스 무료 회원으로 전환됩니다.\n\n- 소속이 해지된 **관리자 회원** 은 어드민에 더 이상 접근할 수 없습니다.",
    "AI 크레딧 추가 지급을 요청한 회원이 있으면 회원 관리 목록에 표시됩니다. **[요청 확인하기]** 버튼을 클릭하여 요청 내용을 확인하세요.\n\n[[image:admin-member-management/04.png|화면 예시]]\n\n**추가 지급 승인**\n\n추가 지급할 크레딧 수량을 선택하고 승인하면, 소속 회사의 공용 크레딧에서 해당 수량이 차감되어 신청한 교사 계정에 지급됩니다.\n\n[[callout:⚠||️ 한 번 지급된 크레딧은 회수할 수 없습니다. 지급 전 수량을 반드시 확인하세요.]]\n\n**추가 지급 반려**\n\n요청 내용을 검토한 후 승인이 어려운 경우 반려 처리할 수 있습니다."
  ],
  "cat-admin-approval-permission": [
    "1. 어드민 홈 **[주요 알림]** 영역에서 가입 승인 대기 건수를 확인합니다.\n\n2. **회원 관리 > 회원 목록** 으로 이동합니다.\n\n3. 권한(상태)이 `대기` 인 회원의 `**작업(⋯)**` 버튼을 클릭하여 승인 또는 반려합니다.\n\n[[image:admin-approval-permission/01.png|화면 예시]]\n\n[[callout:✅||하나의 계정으로 교사와 관리자 권한을 각각 신청할 수 있습니다. 교사·관리자 권한은 각각 개별적으로 승인 또는 반려해 주세요.]]",
    "사용자가 가입하기 전에 미리 계정을 등록하여 권한을 부여할 수 있습니다. 사전 등록된 계정은 가입 후 별도의 승인 신청 없이 바로 서비스를 이용할 수 있습니다.\n\n**회원 관리 > 회원 목록** 오른쪽 상단의 **[권한 사전 등록]** 버튼을 클릭하여 시작합니다.\n\n### **일괄 등록**\n\n동일한 소속과 권한으로 여러 계정을 한 번에 등록할 수 있습니다.\n\n1. 등록할 교사 또는 관리자 계정의 이메일을 입력합니다.\n\n2. 여러 계정을 입력할 경우 스페이스바, 엔터, 쉼표로 구분합니다.\n\n📌 1회 최대 50개 계정까지 등록할 수 있습니다.\n\n[[image:admin-approval-permission/02.png|화면 예시]]\n\n### **개별 등록**\n\n각각 다른 소속과 권한으로 여러 계정을 한 번에 등록할 수 있습니다.\n\n1. 등록할 교사 또는 관리자 계정의 이메일을 입력합니다.\n\n2. 각 계정의 소속과 권한을 개별 설정합니다.\n\n> 📌 1회 최대 50개 계정까지 등록할 수 있습니다.\n\n> ⚠️ 사전 등록한 이메일 주소와 실제 가입에 사용하는 Google 계정이 동일해야 승인 신청 없이 바로 이용할 수 있습니다. 이메일 주소가 다를 경우 별도의 승인 절차가 필요합니다."
  ],
  "cat-admin-standard-management": [
    "기준 관리에서는 **학년, 과목, 아이템 타입** 을 정의합니다. 여기서 등록한 정보는 LumiTeach 어드민과 서비스 전반에 걸쳐 활용됩니다.",
    "LumiTeach 서비스에 활용할 학년 정보를 등록합니다.\n\n[[image:admin-standard-management/01.png|화면 예시]]\n\n[[table:%7B%22rows%22%3A%5B%5B%22%ED%95%84%EB%93%9C%22%2C%22%EC%84%A4%EB%AA%85%22%2C%22%EC%98%88%EC%8B%9C%22%5D%2C%5B%22%60Education_Lv%60%22%2C%22%ED%95%99%EB%85%84%20%EC%9D%B4%EB%A6%84%22%2C%221%ED%95%99%EB%85%84%2C%202%ED%95%99%EB%85%84%2C%20%EA%B3%A0%EB%93%B1%203%ED%95%99%EB%85%84%22%5D%2C%5B%22%60Education_Lv_ID%60%22%2C%22%ED%95%99%EB%85%84%EC%97%90%20%EB%8C%80%EC%9D%91%ED%95%98%EB%8A%94%20%EA%B3%A0%EC%9C%A0%20ID%22%2C%22%EA%B3%A0%EB%93%B1%203%ED%95%99%EB%85%84%20%E2%86%92%20%6012%60%22%5D%5D%7D]]\n\n> 📌 `Education_Lv_ID` 설정 범위는 **K~12** 이며, 중복된 ID는 사용할 수 없습니다.",
    "LumiTeach 서비스에서 활용할 과목 정보를 등록합니다.\n\n[[image:admin-standard-management/02.png|화면 예시]]\n\n[[table:%7B%22rows%22%3A%5B%5B%22%ED%95%84%EB%93%9C%22%2C%22%EC%84%A4%EB%AA%85%22%2C%22%EC%98%88%EC%8B%9C%22%5D%2C%5B%22%60Subject_title%60%22%2C%22%EA%B3%BC%EB%AA%A9%EB%AA%85%22%2C%22%EC%88%98%ED%95%99%2C%20%EC%98%81%EC%96%B4%2C%20%EA%B3%BC%ED%95%99%22%5D%5D%7D]]",
    "아이템 타입이란, 교육과정을 구성하는 각 요소를 말합니다.\n\n> 예: 학교급, 학년, 대단원, 중단원, 성취기준, 영역/주제 등\n\n[[image:admin-standard-management/03.png|화면 예시]]\n\n[[table:%7B%22rows%22%3A%5B%5B%22%ED%95%84%EB%93%9C%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%60Item_Title%60%22%2C%22%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%20%EA%B5%AC%EC%84%B1%20%EC%9A%94%EC%86%8C%EB%AA%85%22%5D%2C%5B%22%60%EC%88%9C%EC%84%9C%60%22%2C%22%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%20%EA%B5%AC%EC%A1%B0%EC%9D%98%20%EC%9C%84%EA%B3%84%EC%97%90%20%EB%A7%9E%EA%B2%8C%20%EC%84%A4%EC%A0%95%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%60Auto-Tagging%60%22%2C%22%EC%9C%84%EA%B3%84%EC%97%90%20%EC%86%8D%ED%95%98%EC%A7%80%20%EC%95%8A%EA%B3%A0%20%EC%BD%98%ED%85%90%EC%B8%A0%EC%9D%98%20%EB%A9%94%ED%83%80%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A1%9C%20%ED%99%9C%EC%9A%A9%EB%90%98%EB%8A%94%20%ED%95%AD%EB%AA%A9%EC%97%90%20%EC%B2%B4%ED%81%AC%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%5D%7D]]\n\n[[callout:💡|아이템 타입의 순서는 교육과정의 위계 구조를 반영해야 합니다. 위계에 포함되지 않는 항목(예|난이도, 유형 태그 등)은 Auto-Tagging 을 체크하여 메타데이터로 활용하세요.]]"
  ],
  "cat-admin-curriculum-management": [
    "어드민에 등록된 교육과정은 사용자 서비스의 **커리큘럼** 메뉴와 실시간으로 연동되어 시각화됩니다. 교육과정을 구조화한 후, 알맞은 레슨과 평가를 생성하여 소속 교사들에게 교수 자료를 제공해 보세요.\n\n### 용어 정의\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%9A%A9%EC%96%B4%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%22%2C%22%EA%B8%B0%EC%97%85%EC%9D%B4%20%EA%B0%80%EC%A7%80%EA%B3%A0%20%EC%9E%88%EB%8A%94%20%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%22%5D%2C%5B%22%2A%2ASubject%2A%2A%22%2C%22%EA%B5%90%EA%B3%BC%20%EB%B6%84%EB%A5%98%20%28%EC%98%88%3A%20%EC%88%98%ED%95%99%2C%20%EA%B3%BC%ED%95%99%2C%20%EC%98%81%EC%96%B4%29%22%5D%2C%5B%22%2A%2AEducation%20Level%2A%2A%22%2C%22%ED%95%99%EC%8A%B5%20%EB%8B%A8%EA%B3%84%20%EB%98%90%EB%8A%94%20%ED%95%99%EB%85%84%22%5D%2C%5B%22%2A%2AItem%20Type%2A%2A%22%2C%22%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%EC%9D%84%20%EA%B5%AC%EC%84%B1%ED%95%98%EB%8A%94%20%EC%9A%94%EC%86%8C%2C%20%EC%84%B1%EA%B2%A9%EC%9D%84%20%EA%B5%AC%EB%B6%84%ED%95%98%EB%8A%94%20%EC%9C%A0%ED%98%95%20%28%EC%98%88%3A%20%EC%84%B1%EC%B7%A8%EA%B8%B0%EC%A4%80%2C%20%EB%8B%A8%EC%9B%90%2C%20%ED%95%99%EA%B5%90%EA%B8%89%20%EB%93%B1%29%22%5D%2C%5B%22%2A%2AItem%2A%2A%22%2C%22Item%20Type%EB%B3%84%20%EC%8B%A4%EC%A0%9C%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%28%EC%98%88%3A%20%5C%22%EB%B0%9B%EC%95%84%EC%98%AC%EB%A6%BC%EC%9D%B4%20%EC%97%86%EB%8A%94%20%EC%84%B8%20%EC%9E%90%EB%A6%AC%20%EC%88%98%EC%9D%98%20%EB%8D%A7%EC%85%88%EC%9D%84%20%ED%95%A0%20%EC%88%98%20%EC%9E%88%EB%8B%A4%5C%22%29%22%5D%5D%7D]]",
    "교육과정 등록은 **Step 1: 기본 정보 → Step 2: 아이템 입력** 순서로 진행됩니다.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EB%8B%A8%EA%B3%84%22%2C%22%EC%9E%85%EB%A0%A5%20%ED%95%AD%EB%AA%A9%22%5D%2C%5B%22%2A%2AStep%201%3A%20%EA%B8%B0%EB%B3%B8%20%EC%A0%95%EB%B3%B4%2A%2A%22%2C%22%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%20%EB%AA%85%2C%20%EA%B3%BC%EB%AA%A9%2C%20%EB%B0%9C%ED%96%89%EC%82%AC%2C%20%EB%B2%84%EC%A0%84%2C%20%EB%A9%94%EB%AA%A8%28%EC%84%A4%EB%AA%85%29%20%EB%93%B1%22%5D%2C%5B%22%2A%2AStep%202%3A%20%EC%95%84%EC%9D%B4%ED%85%9C%2A%2A%22%2C%22%EC%95%84%EC%9D%B4%ED%85%9C%20%ED%83%80%EC%9E%85%EB%B3%84%20%EC%8B%A4%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EC%9E%85%EB%A0%A5%20%EB%B0%8F%20%EC%9C%84%EA%B3%84%20%EA%B5%AC%EC%A1%B0%28SmartLevel%29%20%EC%84%A4%EC%A0%95%22%5D%5D%7D]]\n\n### Step 1: 기본 정보 입력\n\n교육과정의 기본 정보를 입력합니다.\n\n[[image:admin-curriculum-management/01.png|화면 예시]]\n\n[[table:%7B%22rows%22%3A%5B%5B%22%ED%95%AD%EB%AA%A9%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%20%EB%AA%85%22%2C%22%E2%9C%85%22%2C%22%EA%B5%90%EC%82%AC%EA%B0%80%20%EC%84%9C%EB%B9%84%EC%8A%A4%EC%97%90%EC%84%9C%20%EC%8B%9D%EB%B3%84%ED%95%A0%20%EC%88%98%20%EC%9E%88%EB%8A%94%20%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%20%EC%9D%B4%EB%A6%84%22%5D%2C%5B%22%EA%B3%BC%EB%AA%A9%22%2C%22%E2%9C%85%22%2C%22%EA%B8%B0%EC%A4%80%20%EA%B4%80%EB%A6%AC%EC%97%90%EC%84%9C%20%EC%82%AC%EC%A0%84%20%EB%93%B1%EB%A1%9D%EB%90%9C%20%EA%B3%BC%EB%AA%A9%20%EC%A4%91%20%EC%84%A0%ED%83%9D%22%5D%2C%5B%22%EB%B0%9C%ED%96%89%EC%82%AC%22%2C%22%22%2C%22%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%EC%9D%84%20%EB%B0%9C%ED%96%89%ED%95%9C%20%ED%9A%8C%EC%82%AC%20%EB%98%90%EB%8A%94%20%EA%B4%80%EB%A6%AC%20%EA%B8%B0%EA%B4%80%EB%AA%85%22%5D%2C%5B%22%EB%B2%84%EC%A0%84%22%2C%22%22%2C%22%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%EC%9D%98%20%EB%B0%9C%ED%96%89%20%EC%97%B0%EB%8F%84%20%EB%98%90%EB%8A%94%20%EB%B2%84%EC%A0%84%22%5D%2C%5B%22%EC%84%A4%EB%AA%85%22%2C%22%22%2C%22%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%EC%97%90%20%EB%8C%80%ED%95%9C%20%EB%B6%80%EA%B0%80%20%EC%84%A4%EB%AA%85%22%5D%5D%7D]]\n\n### Step 2: 아이템 입력\n\n아이템(Item)은 교육과정을 구성하는 실제 데이터 단위입니다. 세부 과목, 단원명, 성취기준 등이 이에 해당합니다.\n\n[[image:admin-curriculum-management/02.png|화면 예시]]\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%BB%AC%EB%9F%BC%EB%AA%85%22%2C%22%ED%95%84%EC%88%98%20%EC%97%AC%EB%B6%80%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%2A%2AItem_content%2A%2A%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EC%95%84%EC%9D%B4%ED%85%9C%EC%9D%98%20%EC%8B%A4%EC%A0%9C%20%EB%82%B4%EC%9A%A9%EC%9E%85%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%2A%2AhumanCodingScheme%2A%2A%22%2C%22%EC%84%A0%ED%83%9D%22%2C%22%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%EC%97%90%EC%84%9C%20%EA%B3%B5%EC%8B%9D%EC%A0%81%EC%9C%BC%EB%A1%9C%20%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%20%EC%BD%94%EB%93%9C%EC%9E%85%EB%8B%88%EB%8B%A4.%20%28%EC%98%88%3A%20%60A.1%60%20%29%22%5D%2C%5B%22%2A%2Asmartlevel%2A%2A%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EC%95%84%EC%9D%B4%ED%85%9C%20%EA%B0%84%EC%9D%98%20%EC%83%81%ED%95%98%20%EC%9C%84%EA%B3%84%EB%A5%BC%20%EB%82%98%ED%83%80%EB%82%B4%EB%8A%94%20%EB%B2%88%ED%98%B8%EC%9E%85%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%2A%2Aitemtype_title%2A%2A%22%2C%22%ED%95%84%EC%88%98%22%2C%22%ED%95%B4%EB%8B%B9%20%EC%95%84%EC%9D%B4%ED%85%9C%EC%9D%98%20%EC%9C%A0%ED%98%95%EC%9E%85%EB%8B%88%EB%8B%A4.%20%28%EC%98%88%3A%20%ED%95%99%EA%B5%90%EA%B8%89%2C%20%ED%95%99%EB%85%84%2C%20%ED%95%99%EA%B8%B0%2C%20%EB%8C%80%EB%8B%A8%EC%9B%90%2C%20%EC%A4%91%EB%8B%A8%EC%9B%90%2C%20%EC%84%B1%EC%B7%A8%EA%B8%B0%EC%A4%80%29%22%5D%2C%5B%22%2A%2AeducationLevel%2A%2A%22%2C%22%EC%84%A0%ED%83%9D%22%2C%22%ED%95%B4%EB%8B%B9%20%EC%95%84%EC%9D%B4%ED%85%9C%EC%9D%B4%20%EC%86%8D%ED%95%98%EB%8A%94%20%ED%95%99%EB%85%84%20%EC%BD%94%EB%93%9C%EC%9E%85%EB%8B%88%EB%8B%A4.%20%28%EC%98%88%3A%20%6011%60%20%E2%86%92%20%EA%B3%A0%EB%93%B1%202%ED%95%99%EB%85%84%29%22%5D%5D%7D]]\n\n[[callout:⚠||️ 필수 항목이 비어 있거나, itemtype_title 이 기준 관리에서 사전 등록된 명칭과 다를 경우 업로드 시 오류가 발생합니다. 업로드 전 반드시 확인하세요.]]\n\n### 위계 구조(SmartLevel)란?\n\n`smartlevel` 은 아이템 간의 상위-하위 관계를 숫자로 표현하는 핵심 컬럼입니다. `.` (점)으로 단계를 구분하며, 숫자의 깊이(depth)가 곧 계층을 의미합니다.\n\n1 → 1단계 (최상위)\n1.1 → 2단계 (1의 하위)\n1.1.1 → 3단계 (1.1의 하위)\n1.1.1.1 → 4단계 (1.1.1의 하위)\n\n📌 상위 항목의 번호를 반드시 포함해야 하위 항목으로 인식됩니다. 동일한 `smartlevel` 번호 중복 입력, 상위 항목 없는 하위 항목 입력, 순환 구조는 허용되지 않습니다.\n\n### 양식 다운로드/가져오기\n\n1. 일괄 등록 페이지 오른쪽 상단의 **[가져오기]** 버튼을 클릭합니다.\n\n2. **[양식 다운로드]** 버튼을 클릭하면 엑셀 양식이 다운로드됩니다.\n\n3. 양식 작성 후, 다시 **[가져오기]** 버튼을 클릭하여 파일을 업로드합니다.\n\n[[image:admin-curriculum-management/03.png|화면 예시]]\n\n### 임시 저장\n\n1. 작업 중 멈춰야 하는 경우 임시 저장을 할 수 있습니다.\n\n2. 오른쪽 상단의 **[임시 저장]** 버튼을 클릭합니다.\n\n[[callout:⚠||️ LumiTeach 어드민에서 일괄 등록 데이터 작성 중에 파일 변경 사항을 자동 저장하지 않습니다.]]",
    "AI 분류 기능을 사용하면 교육과정 문서를 첨부하는 것만으로 아이템 입력 양식을 자동으로 정리할 수 있습니다.\n\n[[image:admin-curriculum-management/04.png|화면 예시]]\n\n- Step 2 화면 오른쪽 상단의 **[AI 분류]** 버튼을 클릭합니다.\n\n- 등록하고자 하는 교육과정 문서를 첨부하고 **[등록]** 버튼을 클릭합니다.\n\n[[callout:⚠||️ Step 2에 기존에 입력한 내용이 있을 경우, AI 분석 결과로 대체되며 복구할 수 없습니다. AI 분류 기능은 교육과정 등록 양식 초안 생성을 도와주는 도구입니다. AI가 생성한 결과물은 오류가 포함될 수 있으니, 내용을 충분히 검토한 후 승인해 주세요.]]",
    "등록 완료된 교육과정은 **[세부 정보]** 버튼을 클릭하여 확인하고 관리할 수 있습니다.\n\n[[image:admin-curriculum-management/05.png|화면 예시]]\n\n**활성/비활성 전환**\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%83%81%ED%83%9C%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%2A%2A%ED%99%9C%EC%84%B1%2A%2A%22%2C%22%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%EC%9D%B4%20LumiTeach%20%EC%84%9C%EB%B9%84%EC%8A%A4%EC%97%90%20%EB%85%B8%EC%B6%9C%EB%90%98%EB%A9%B0%2C%20%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B0%80%20%EC%BD%98%ED%85%90%EC%B8%A0%EB%A5%BC%20%ED%99%95%EC%9D%B8%ED%95%98%EA%B3%A0%20%ED%99%9C%EC%9A%A9%ED%95%A0%20%EC%88%98%20%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%2A%2A%EB%B9%84%ED%99%9C%EC%84%B1%2A%2A%22%2C%22%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%20%EB%B0%8F%20%EC%97%B0%EA%B2%B0%EB%90%9C%20%EB%A0%88%EC%8A%A8%C2%B7%ED%8F%89%EA%B0%80%20%EC%BD%98%ED%85%90%EC%B8%A0%EA%B0%80%20LumiTeach%20%EC%84%9C%EB%B9%84%EC%8A%A4%EC%97%90%20%EB%85%B8%EC%B6%9C%EB%90%98%EC%A7%80%20%EC%95%8A%EC%8A%B5%EB%8B%88%EB%8B%A4.%22%5D%5D%7D]]\n\n교육과정의 기본 정보 및 아이템 데이터는 언제든지 수정할 수 있습니다."
  ],
  "cat-admin-lesson-activity": [
    "레슨 관리 메뉴에 진입하면 등록된 레슨의 목록을 확인할 수 있습니다.\n\n[[image:admin-lesson-activity/01.png|화면 예시]]",
    "목록에서 레슨명을 클릭하거나, 우측 상세 정보 버튼을 클릭하면 해당 레슨의 상세 정보 모달이 열립니다.\n\n[[image:admin-lesson-activity/02.png|화면 예시]]\n\n상세 정보 모달에서 확인할 수 있는 내용은 다음과 같습니다.\n\n**기본 정보 (왼쪽 패널)**\n\n- **국가, 회사명** : 레슨이 귀속된 기관/회사\n\n- **Item ID:** 연결된 교육과정의 세부 항목\n\n- **커리큘럼** : 연결된 교육과정\n\n- **학년**\n\n- **레슨명**\n\n- **레슨 순서** : 커리큘럼 내 레슨 순번\n\n**개념 및 스탠다드 (오른쪽 상단 패널)**\n\n- **개념** : 이 레슨에서 다루는 핵심 개념 키워드 목록\n\n- **메타 데이터** : 기준 관리에 등록된 메타 데이터 항목\n\n**레슨 썸네일 (오른쪽 하단 패널)**\n\n- 별도 이미지를 등록하지 않으면, 저장 또는 승인 시 **1페이지 첫 번째 액티비티 화면이 자동으로 썸네일** 로 설정됩니다.\n\n- 이미지를 직접 업로드한 경우, 자동 업데이트 없이 해당 이미지가 유지됩니다.",
    "상세 정보 모달 하단의 **Edit Lesson** 버튼을 클릭하면 레슨 편집 화면으로 이동합니다.\n\n[[image:admin-lesson-activity/03.png|화면 예시]]\n\n편집 화면에서는 다음 작업을 수행할 수 있습니다.\n\n- 레슨 내 액티비티 내용 수정\n\n- 액티비티 순서 변경\n\n- 새 액티비티 추가\n\n- 작성 내용 저장",
    "목록 화면 우측 상단의 등록 버튼을 클릭하여 새 레슨을 등록할 수 있습니다.\n\n[[image:admin-lesson-activity/04.png|화면 예시]]\n\n등록 방식은 아래 2가지 방법이며, 각 등록 방법은 세부 가이드를 참고하세요.\n\n1. 일괄 등록\n\n2. AI Make"
  ],
  "cat-admin-lesson-bulk-upload": [
    "### 1단계: 엑셀 양식 다운로드\n\n어드민 페이지에서 **레슨 일괄 등록 화면으로** 로 이동한 후, 가져오기 > **양식 다운로드** 버튼을 눌러 엑셀 파일을 받습니다.\n\n[[callout:⚠|주의|반드시 제공된 양식을 사용하세요. 임의로 열을 추가하거나 삭제하면 업로드 오류가 발생합니다.]]\n\n[[image:admin-lesson-bulk-upload/01.png|화면 예시]]\n\n### 2단계: 엑셀 양식 작성\n\n웹 그리드 양식을 통해 **직접 입력** 하거나, 엑셀 파일을 작성하여 **가져오기(Import)** 할 수 있습니다.\n\n#### 방법 A: 웹 그리드 직접 입력\n\n각 셀을 클릭하여 레슨 및 Activity 데이터를 직접 입력합니다.\n\n- **Add Row Above / Add Row Below** : 선택한 행의 위 또는 아래에 행을 추가합니다.\n\n- **Delete Selected Row** : 선택한 행을 삭제합니다.\n\n#### 방법 B: 엑셀 파일 가져오기\n\n1. 우측 상단 **Import** 버튼을 클릭합니다.\n\n2. 작성한 파일을 팝업 업로드 영역에 드래그 앤 드롭하거나 **SELECT FILE** 을 클릭하여 첨부합니다.\n\n3. **Submit** 을 클릭하면 웹 그리드에 데이터가 불러와집니다.\n\n> 지원 형식: XLSX, XLS / 최대 10MB\n\n#### 양식 작성 방법\n\n각 행(Row)이 하나의 활동(Activity)을 나타내며, 같은 레슨에 속하는 활동은 **동일한 Lesson 정보를 반복 입력** 합니다.\n\n#### 기본 구조 예시\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item_ID%22%2C%22Lesson_order%22%2C%22Lesson_title%22%2C%22Activity_order%22%2C%22Activity_type%22%2C%22Activity_title%22%5D%2C%5B%22ITEM001%22%2C%221%22%2C%22%EC%B2%AB%20%EB%B2%88%EC%A7%B8%20%EB%A0%88%EC%8A%A8%22%2C%221%22%2C%22text%20only%20%28G%29%22%2C%22%EC%98%A4%EB%8A%98%EC%9D%98%20%ED%95%99%EC%8A%B5%20%EB%AA%A9%ED%91%9C%22%5D%2C%5B%22ITEM001%22%2C%221%22%2C%22%EC%B2%AB%20%EB%B2%88%EC%A7%B8%20%EB%A0%88%EC%8A%A8%22%2C%222%22%2C%22true%20or%20false%20%28Q%29%22%2C%22%EB%8B%A4%EC%9D%8C%20%EC%A4%91%20%EB%A7%9E%EB%8A%94%20%EA%B2%83%EC%9D%80%3F%22%5D%2C%5B%22ITEM001%22%2C%222%22%2C%22%EB%91%90%20%EB%B2%88%EC%A7%B8%20%EB%A0%88%EC%8A%A8%22%2C%221%22%2C%22multiple%20choice%20%28Q%29%22%2C%22%EC%A0%95%EB%8B%B5%EC%9D%84%20%EA%B3%A0%EB%A5%B4%EC%84%B8%EC%9A%94%22%5D%5D%7D]]\n\n#### 열(Column) 설명\n\n#### 레슨 기본 정보\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%97%B4%20%EC%9D%B4%EB%A6%84%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22Item_ID%22%2C%22%E2%9C%85%20%ED%95%84%EC%88%98%22%2C%22%EB%A0%88%EC%8A%A8%EC%9D%B4%20%EC%86%8D%ED%95%A0%20Item%EC%9D%98%20ID.%20%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%20%EA%B4%80%EB%A6%AC%EC%97%90%20%EB%93%B1%EB%A1%9D%EB%90%9C%20ID%EB%A7%8C%20%EC%82%AC%EC%9A%A9%20%EA%B0%80%EB%8A%A5%22%5D%2C%5B%22Lesson_order%22%2C%22%E2%9C%85%20%ED%95%84%EC%88%98%22%2C%22%EB%A0%88%EC%8A%A8%20%EC%88%9C%EC%84%9C%20%281%EB%B6%80%ED%84%B0%20%EC%8B%9C%EC%9E%91%2C%20%EC%88%AB%EC%9E%90%EB%A7%8C%20%EC%9E%85%EB%A0%A5%29%22%5D%2C%5B%22Lesson_title%22%2C%22%E2%9C%85%20%ED%95%84%EC%88%98%22%2C%22%EB%A0%88%EC%8A%A8%20%EC%A0%9C%EB%AA%A9%20%28%EC%B5%9C%EB%8C%80%20100%EC%9E%90%29%22%5D%2C%5B%22Lesson_image%22%2C%22%EC%84%A0%ED%83%9D%22%2C%22%EB%A0%88%EC%8A%A8%20%EB%8C%80%ED%91%9C%20%EC%9D%B4%EB%AF%B8%EC%A7%80.%20%EB%A0%88%EC%8A%A8%EB%8B%B9%201%EA%B0%9C%EB%A7%8C%20%EC%97%85%EB%A1%9C%EB%93%9C%20%EA%B0%80%EB%8A%A5%22%5D%2C%5B%22Lesson_objective%22%2C%22%EC%84%A0%ED%83%9D%22%2C%22%EB%A0%88%EC%8A%A8%20%ED%95%99%EC%8A%B5%20%EB%AA%A9%ED%91%9C%22%5D%5D%7D]]\n\n#### 활동 기본 정보\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%97%B4%20%EC%9D%B4%EB%A6%84%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22Activity_order%22%2C%22%E2%9C%85%20%ED%95%84%EC%88%98%22%2C%22%ED%99%9C%EB%8F%99%20%EC%88%9C%EC%84%9C%20%281%EB%B6%80%ED%84%B0%20%EC%8B%9C%EC%9E%91%2C%20%EC%88%AB%EC%9E%90%EB%A7%8C%20%EC%9E%85%EB%A0%A5%29%22%5D%2C%5B%22Activity_type%22%2C%22%E2%9C%85%20%ED%95%84%EC%88%98%22%2C%22%ED%99%9C%EB%8F%99%20%EC%9C%A0%ED%98%95%20%28%EC%95%84%EB%9E%98%20%EB%AA%A9%EB%A1%9D%20%EC%B0%B8%EA%B3%A0%29%22%5D%2C%5B%22Activity_color%22%2C%22%EC%84%A0%ED%83%9D%22%2C%22%EB%B0%B0%EA%B2%BD/%ED%8F%B0%ED%8A%B8%20%EC%83%89%EC%83%81.%20%EB%AF%B8%EC%9E%85%EB%A0%A5%20%EC%8B%9C%20Black%20%26%20White%20%EC%A0%81%EC%9A%A9%22%5D%2C%5B%22Activity_title%22%2C%22%E2%9C%85%20%ED%95%84%EC%88%98%22%2C%22%ED%99%9C%EB%8F%99%20%EC%A0%9C%EB%AA%A9%20%EB%98%90%EB%8A%94%20%EC%A7%88%EB%AC%B8%20%28%EC%B5%9C%EB%8C%80%2050%EC%9E%90%29%22%5D%2C%5B%22Activity_description%22%2C%22%EC%84%A0%ED%83%9D%22%2C%22%ED%99%9C%EB%8F%99%20%EC%84%A4%EB%AA%85%20%28%EC%B5%9C%EB%8C%80%2080%EC%9E%90%29%22%5D%2C%5B%22Activity_image%22%2C%22%EC%84%A0%ED%83%9D%22%2C%22%ED%99%9C%EB%8F%99%20%EC%9D%B4%EB%AF%B8%EC%A7%80%22%5D%5D%7D]]\n\n활동 유형은 크게 4가지 카테고리로 나뉩니다.\n\n#### 일반 콘텐츠 (G)\n\n학습 내용을 보여주는 화면입니다. 별도의 정답 입력 없이 텍스트, 이미지 등을 배치합니다.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%9C%A0%ED%98%95%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22text%20only%20%28G%29%22%2C%22%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A7%8C%20%ED%91%9C%EC%8B%9C%22%5D%2C%5B%22text%20%26%20text%20%28G%29%22%2C%22%ED%85%8D%EC%8A%A4%ED%8A%B8%20%EB%91%90%20%EA%B0%9C%20%EB%82%98%EB%9E%80%ED%9E%88%20%ED%91%9C%EC%8B%9C%22%5D%2C%5B%22image%20only%20%28G%29%22%2C%22%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A7%8C%20%ED%91%9C%EC%8B%9C%22%5D%2C%5B%22text%20top%20%28G%29%22%2C%22%EC%9C%84%EC%97%90%20%ED%85%8D%EC%8A%A4%ED%8A%B8%2C%20%EC%95%84%EB%9E%98%EC%97%90%20%EC%9D%B4%EB%AF%B8%EC%A7%80%22%5D%2C%5B%22image%20top%20%28G%29%22%2C%22%EC%9C%84%EC%97%90%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2C%20%EC%95%84%EB%9E%98%EC%97%90%20%ED%85%8D%EC%8A%A4%ED%8A%B8%22%5D%2C%5B%22image%20middle%20%28G%29%22%2C%22%ED%85%8D%EC%8A%A4%ED%8A%B8%20%EC%82%AC%EC%9D%B4%EC%97%90%20%EC%9D%B4%EB%AF%B8%EC%A7%80%22%5D%2C%5B%22image%20left%20%28G%29%22%2C%22%EC%99%BC%EC%AA%BD%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2C%20%EC%98%A4%EB%A5%B8%EC%AA%BD%20%ED%85%8D%EC%8A%A4%ED%8A%B8%22%5D%2C%5B%22image%20right%20%28G%29%22%2C%22%EC%98%A4%EB%A5%B8%EC%AA%BD%20%EC%9D%B4%EB%AF%B8%EC%A7%80%2C%20%EC%99%BC%EC%AA%BD%20%ED%85%8D%EC%8A%A4%ED%8A%B8%22%5D%5D%7D]]\n\n#### 외부 콘텐츠 (E)\n\n외부 파일이나 링크를 삽입하는 활동입니다.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%9C%A0%ED%98%95%22%2C%22%EC%84%A4%EB%AA%85%22%2C%22%ED%95%84%EC%9A%94%ED%95%9C%20%EC%97%B4%22%5D%2C%5B%22webviewer%20%28E%29%22%2C%22%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%20URL%20%EC%82%BD%EC%9E%85%22%2C%22Activity_url%22%5D%2C%5B%22Youtube%20%28E%29%22%2C%22%EC%9C%A0%ED%8A%9C%EB%B8%8C%20%EC%98%81%EC%83%81%20%EC%82%BD%EC%9E%85%22%2C%22Activity_url%22%5D%2C%5B%22document%20%28E%29%22%2C%22%EB%AC%B8%EC%84%9C%20%ED%8C%8C%EC%9D%BC%20%EC%B2%A8%EB%B6%80%22%2C%22Activity_document%20%28pdf%2C%20doc%2C%20docx%2C%20pptx%2C%20ppt%20/%20%EC%B5%9C%EB%8C%80%20500MB%29%22%5D%2C%5B%22sound%20%28E%29%22%2C%22%EC%9D%8C%EC%9B%90%20%ED%8C%8C%EC%9D%BC%20%EC%B2%A8%EB%B6%80%22%2C%22Activity_sound%20%28mp3%20/%20%EC%B5%9C%EB%8C%80%2020MB%29%22%5D%5D%7D]]\n\n#### 퀴즈 (Q)\n\n학습자가 답을 입력하거나 선택하는 활동입니다.\n\n#### true or false (Q) — OX 퀴즈\n\n- **TF_correct_answer** 열에 정답 입력 (✅ 필수)\n\n- 예: `O` 또는 `X`\n\n#### short answer (Q) — 단답형\n\n- **SA_correct_answer** 열에 정답 입력 (✅ 필수)\n\n- 유사 정답이 여러 개일 경우 콤마(,)로 구분\n\n- 예: `사과, apple, 애플`\n\n#### multiple choice (Q) — 객관식\n\n- **MC_type** : `text` 또는 `image` 선택 (✅ 필수)\n\n- **MC_correct_answer** : 정답 보기 번호 입력 (✅ 필수). 복수 정답은 콤마로 구분\n\n- 예: `1` 또는 `1,3`\n\n- **MC_option1 ~ MC_option5** : 보기 내용 입력 (최소 2개 필수, 최대 50자)\n\n- 이미지형인 경우 MC_option1_image ~ MC_option5_image에 이미지 업로드\n\n#### open-ended (Q) — 주관식\n\n- **OE_correct_answer** : 모범 답안 입력 (선택)\n\n#### fill in the blank (Q) — 빈칸 채우기\n\n- **Activity_title** 열에서 빈칸으로 만들 단어를 `[ ]` 로 감쌉니다\n\n- 예: `사과는 영어로 [apple]입니다.`\n\n#### sequencing (Q) — 순서 배열\n\n- **SQ_type** : `text` 또는 `image` 선택 (✅ 필수)\n\n- **SQ_option1 ~ SQ_option5** : 보기 내용 (최소 2개 필수)\n\n- **SQ_option1_seq ~ SQ_option5_seq** : 각 보기의 정답 순서 숫자 입력 (✅ 필수)\n\n- 예: option1_seq= `2` , option2_seq= `1` (option2가 먼저, option1이 두 번째)\n\n#### matching (Q) — 선잇기\n\n- **MA_type** : `text` 또는 `image` 선택 (✅ 필수)\n\n- **MA_correct_answer** : 정답 연결 쌍을 `숫자-알파벳` 형식으로 입력 (✅ 필수)\n\n- 예: `1-a,2-b,3-c`\n\n- **MA_option1 ~ MA_option4** : 위쪽 보기 (숫자 1~4)\n\n- **MA_option_a ~ MA_option_d** : 아래쪽 보기 (알파벳 a~d)\n\n#### sorting (Q) — 분류하기\n\n- **SR_type** : `text` 또는 `image` 선택 (✅ 필수)\n\n- **SR_groupA** : 그룹 A 제목 (✅ 필수, 최대 30자)\n\n- **SR_groupB** : 그룹 B 제목 (✅ 필수, 최대 30자)\n\n- **SR_option1 ~ SR_option5** : 보기 내용 (최소 2개 필수)\n\n- **SR_option1_group ~ SR_option5_group** : 각 보기가 속할 그룹 입력 (✅ 필수)\n\n- 입력값: `Group A` 또는 `Group B`\n\n#### 의견/토론 (D)\n\n학습자의 의견을 수집하는 활동입니다. 정답이 없으며 질문과 보기 옵션만 설정합니다.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%9C%A0%ED%98%95%22%2C%22%EC%84%A4%EB%AA%85%22%2C%22%ED%95%84%EC%9A%94%ED%95%9C%20%EC%97%B4%22%5D%2C%5B%22vote%20%28D%29%22%2C%22%ED%88%AC%ED%91%9C%22%2C%22Vote_option1%20~%20Vote_option5%20%28%EC%B5%9C%EC%86%8C%202%EA%B0%9C%29%22%5D%2C%5B%22traffic%20light%20%28D%29%22%2C%22%EC%8B%A0%ED%98%B8%EB%93%B1%20%28%EC%9D%B4%ED%95%B4%EB%8F%84%20%ED%99%95%EC%9D%B8%29%22%2C%22%EB%B3%84%EB%8F%84%20%EB%B3%B4%EA%B8%B0%20%EC%9E%85%EB%A0%A5%20%EB%B6%88%ED%95%84%EC%9A%94%22%5D%2C%5B%22agree-disagree%20%28D%29%22%2C%22%EC%B0%AC%EB%B0%98%20%EC%9D%98%EA%B2%AC%22%2C%22%EB%B3%84%EB%8F%84%20%EB%B3%B4%EA%B8%B0%20%EC%9E%85%EB%A0%A5%20%EB%B6%88%ED%95%84%EC%9A%94%22%5D%2C%5B%22opinion%20scale%20%28D%29%22%2C%22%EC%9D%98%EA%B2%AC%20%EC%B2%99%EB%8F%84%22%2C%22%EB%B3%84%EB%8F%84%20%EB%B3%B4%EA%B8%B0%20%EC%9E%85%EB%A0%A5%20%EB%B6%88%ED%95%84%EC%9A%94%22%5D%5D%7D]]\n\n#### 아이디어 보드 (I)\n\n학습자의 아이디어를 자유롭게 작성하는 활동입니다. 정답이 없으며 질문만 설정합니다.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%9C%A0%ED%98%95%22%2C%22%EC%84%A4%EB%AA%85%22%2C%22%ED%95%84%EC%9A%94%ED%95%9C%20%EC%97%B4%22%5D%2C%5B%22brainstorming%20%28I%29%22%2C%22%EB%B8%8C%EB%A0%88%EC%9D%B8%EC%8A%A4%ED%86%A0%EB%B0%8D%22%2C%22Activity_title%20%EB%A7%8C%20%EC%9E%85%EB%A0%A5.%20%EB%B3%84%EB%8F%84%20%EB%B3%B4%EA%B8%B0%20%EC%9E%85%EB%A0%A5%20%EB%B6%88%ED%95%84%EC%9A%94%22%5D%2C%5B%22whiteboard%20%28I%29%22%2C%22%ED%99%94%EC%9D%B4%ED%8A%B8%EB%B3%B4%EB%93%9C%22%2C%22Activity_title%20%EB%A7%8C%20%EC%9E%85%EB%A0%A5.%20%EB%B3%84%EB%8F%84%20%EB%B3%B4%EA%B8%B0%20%EC%9E%85%EB%A0%A5%20%EB%B6%88%ED%95%84%EC%9A%94%22%5D%5D%7D]]\n\n#### Activity_color — 색상 옵션\n\n배경/폰트 색상은 아래 목록 중 하나를 정확히 입력하세요.\n\n`Black&White` / `Red` / `Orange` / `Yellow` / `Green` / `Blue` / `Purple` / `Pink`\n\n> 미입력 시 자동으로 `Black&White` 가 적용됩니다.\n\n### 3단계: 파일 첨부\n\n이미지, 문서, 음원 파일은 엑셀 양식으로 가져올 수 없으며, **웹 그리드에서 직접 첨부** 해야 합니다. 각 칸을 클릭하여 파일을 첨부하세요.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%BB%AC%EB%9F%BC%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%2A%2AActivity_image%2A%2A%22%2C%22Activity%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%ED%8C%8C%EC%9D%BC%20%EC%B2%A8%EB%B6%80%2C%20%EC%B5%9C%EB%8C%80%201%EA%B0%9C%2C%2020MB%20%EC%9D%B4%ED%95%98%22%5D%2C%5B%22%2A%2AActivity_document%2A%2A%22%2C%22Activity%20%EB%AC%B8%EC%84%9C%20%ED%8C%8C%EC%9D%BC%20%EC%B2%A8%EB%B6%80%2C%20%EC%B5%9C%EB%8C%80%201%EA%B0%9C%2C%2020MB%20%EC%9D%B4%ED%95%98%22%5D%2C%5B%22%2A%2AActivity_sound%2A%2A%22%2C%22Activity%20%EC%9D%8C%EC%9B%90%20%ED%8C%8C%EC%9D%BC%20%EC%B2%A8%EB%B6%80%2C%20%EC%B5%9C%EB%8C%80%201%EA%B0%9C%2C%2020MB%20%EC%9D%B4%ED%95%98%22%5D%2C%5B%22%2A%2ALesson_image%2A%2A%22%2C%22%EB%A0%88%EC%8A%A8%20%EC%8D%B8%EB%84%A4%EC%9D%BC%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%ED%8C%8C%EC%9D%BC%20%EC%B2%A8%EB%B6%80%2C%20%EC%B5%9C%EB%8C%80%201%EA%B0%9C%2C%2020MB%20%EC%9D%B4%ED%95%98%20%28%EC%8D%B8%EB%84%A4%EC%9D%BC%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%AF%B8%EB%93%B1%EB%A1%9D%20%EC%8B%9C%2C%201%EB%B2%88%EC%A7%B8%20Activity%20%EA%B0%80%20%EC%8D%B8%EB%84%A4%EC%9D%BC%EB%A1%9C%20%ED%91%9C%EA%B8%B0%EB%90%A9%EB%8B%88%EB%8B%A4.%29%22%5D%5D%7D]]\n\n### 4단계: 임시 저장\n\n작성 중 자리를 비우거나 작업을 중단해야 하는 경우, **Save Draft** 버튼을 클릭하여 작성 중인 데이터를 임시 저장할 수 있습니다.\n\n### 5단계: 제출\n\n데이터 입력이 완료되면 **Submit** 버튼을 클릭하여 등록을 완료합니다.\n\n[[callout:⚠|제출 오류 확인|제출 시 오류가 있는 항목이 있을 경우, 해당 셀에 오류 메시지가 표시됩니다.\\n\\n메시지를 확인하고 내용을 수정한 후 다시 제출하세요.]]"
  ],
  "cat-admin-lesson-ai-make": [
    "### 1단계: AI Make 실행\n\n레슨 편집 화면 상단의 **AI Make** 버튼을 클릭합니다.\n\n[[image:admin-lesson-ai-make/01.png|화면 예시]]\n\n### 2단계: 기본 정보 설정\n\n[[table:%7B%22rows%22%3A%5B%5B%22%ED%95%AD%EB%AA%A9%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%20%28%ED%95%84%EC%88%98%29%22%2C%22%EB%A0%88%EC%8A%A8%EC%97%90%20%EC%A0%81%EC%9A%A9%ED%95%A0%20%EC%BB%A4%EB%A6%AC%ED%81%98%EB%9F%BC%EC%9D%84%20%EC%84%A0%ED%83%9D%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%2A%2AGrade%2A%2A%20%28%ED%95%84%EC%88%98%29%22%2C%22%EB%8C%80%EC%83%81%20%ED%95%99%EB%85%84%EC%9D%84%20%EC%84%A0%ED%83%9D%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%2A%2A%EC%96%B8%EC%96%B4%2A%2A%20%28%EC%84%A0%ED%83%9D%29%22%2C%22%EC%BD%98%ED%85%90%EC%B8%A0%20%EC%B6%94%EC%B6%9C%20%EC%96%B8%EC%96%B4%EB%A5%BC%20%EC%84%A0%ED%83%9D%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%5D%7D]]\n\n### 3단계: Auto-tagging 설정\n\n생성된 레슨에 **개념 키워드** 와 **메타데이터** 를 자동으로 태깅하는 기능입니다.\n\n- **사용** : AI가 레슨 분석 후 개념 키워드와 메타데이터를 자동으로 태그합니다. (AI 크레딧 차감)\n\n- **미사용** : Auto-tagging을 건너뜁니다.\n\n### 4단계: 원본 자료 첨부\n\n파일을 드래그 앤 드롭하거나 파일 선택 버튼을 클릭하여 원본 자료를 첨부합니다.\n\n> 지원 형식: pdf, doc, docx, ppt, pptx / 파일 1개 용량 제한 100MB\n\n### 5단계: 레슨 구분 설정\n\n원본 자료를 여러 레슨으로 나눌 경우, 각 레슨의 페이지 범위와 Activity 생성 수를 입력합니다.\n\n- 구분 값을 설정하지 않으면 원본 전체가 **1개의 레슨** 으로 생성됩니다.\n\n- **+ Lesson 구분 추가** 버튼으로 레슨 구분을 추가할 수 있습니다.\n\n- **AI 분류** 버튼을 클릭하면 AI가 원본 자료를 분석하여 레슨 페이지 범위를 자동으로 분류해 줍니다. 이후 직접 수정도 가능합니다.\n\n### 6단계: 생성 시작\n\n**Create** 버튼을 클릭합니다. 생성이 시작되면 화면 우측 하단 레이어에서 진행 상황을 확인할 수 있으며, 생성 중에도 어드민의 다른 기능을 자유롭게 사용할 수 있습니다.",
    "### 검토 탭 확인\n\nAI 레슨 생성이 완료되면 **[검토]** 탭에서 생성된 레슨 목록을 확인합니다.\n\n[[image:admin-lesson-ai-make/02.png|화면 예시]]\n\n### 상세 정보 확인\n\n생성된 레슨명 또는 상세 정보 아이콘을 클릭하면 상세 정보를 확인할 수 있습니다.\n\n- Auto-tagging이 적용된 경우, **개념 키워드** 와 **메타데이터** 가 자동 입력되어 있습니다. 필요에 따라 수정할 수 있습니다.\n\n- **Item ID** 를 설정하여 레슨이 매핑될 아이템을 지정합니다.\n\n- **레슨 순서** 를 입력합니다.\n\n### 레슨 내용 검토 및 수정\n\n**Edit Lesson** 버튼을 클릭하여 AI가 생성한 레슨 내용을 확인하고 필요한 부분을 수정 후 저장합니다.\n\n[[image:admin-lesson-ai-make/03.png|화면 예시]]\n\n### 승인 및 게시\n\n검토가 완료되면 **[승인]** 버튼을 클릭합니다. 승인 즉시 레슨이 게시됩니다.\n\n[[callout:⚠||️ 참고사항 원본 자료의 정보가 적을수록 콘텐츠 중복 및 단순화가 발생할 수 있습니다. 최적의 품질을 위해 기본 정보를 충실히 설정하고 Activity 생성 페이지 수를 적절히 조정해 주세요. AI Make는 초안 생성을 도와주는 도구입니다. AI가 생성한 결과물은 오류가 포함될 수 있으니, 내용을 충분히 검토한 후 승인해 주세요. AI 크레딧은 Auto-tagging, AI Make 사용 시 차감됩니다.]]"
  ],
  "cat-admin-lesson-recommendation": [
    "- **교육과정/콘텐츠 관리 > 레슨 관리 > 추천 관리** 탭을 클릭하세요.\n\n- 추천 관리 화면에서는 등록된 추천 콘텐츠(추천 주제 1, 추천 주제 2)를 조회하고 관리할 수 있습니다.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%ED%95%AD%EB%AA%A9%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%2A%2A%EC%B6%94%EC%B2%9C%20%EC%A3%BC%EC%A0%9C%201%2A%2A%22%2C%22%EC%B2%AB%20%EB%B2%88%EC%A7%B8%20%EC%B6%94%EC%B2%9C%20%EC%98%81%EC%97%AD%EC%9D%98%20%ED%99%9C%EC%84%B1%28Active%29%20%EB%98%90%EB%8A%94%20%EB%B9%84%ED%99%9C%EC%84%B1%28Inactive%29%20%EC%83%81%ED%83%9C%22%5D%2C%5B%22%2A%2A%EC%B6%94%EC%B2%9C%20%EC%A3%BC%EC%A0%9C%202%2A%2A%22%2C%22%EB%91%90%20%EB%B2%88%EC%A7%B8%20%EC%B6%94%EC%B2%9C%20%EC%98%81%EC%97%AD%EC%9D%98%20%ED%99%9C%EC%84%B1%28Active%29%20%EB%98%90%EB%8A%94%20%EB%B9%84%ED%99%9C%EC%84%B1%28Inactive%29%20%EC%83%81%ED%83%9C%22%5D%2C%5B%22%2A%2A%EC%B5%9C%EA%B7%BC%20%EC%88%98%EC%A0%95%EC%9D%BC%2A%2A%22%2C%22%ED%95%B4%EB%8B%B9%20%EC%B6%94%EC%B2%9C%20%EC%84%A4%EC%A0%95%EC%9D%B4%20%EB%A7%88%EC%A7%80%EB%A7%89%EC%9C%BC%EB%A1%9C%20%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8%EB%90%9C%20%EB%82%A0%EC%A7%9C%20%28yyyy-mm-dd%29%22%5D%5D%7D]]\n\n### 추천 상세 정보 확인하기\n\n- 목록의 **[세부 정보]** 열에 있는 **↗ 아이콘** 을 클릭하면 상세 정보 페이지가 **새 창** 으로 열립니다.\n\n- 상세 페이지에서는 공개 대상, 주제 1, 주제 2 정보를 확인할 수 있습니다.\n\n- 각 주제 영역의 **[언어별 주제/설명 보기]** 버튼을 클릭하면 언어별 제목과 설명을 팝업으로 확인할 수 있습니다.\n\n### 추천 설정 수정하기\n\n- 상세 정보 페이지 우측 상단의 **[수정]** 버튼을 클릭하면 수정 페이지로 이동합니다.\n\n[[image:admin-lesson-recommendation/01.png|화면 예시]]",
    "- 추천 목록 화면 우측 상단의 **[신규 등록]** 버튼을 클릭하세요.\n\n### 주제 제목 입력 (언어별 번역 등록)\n\n- **[편집]** 버튼을 클릭하면 **추천 주제 1 번역 편집** 모달이 열립니다.\n\n- 모달에서 언어별로 주제 제목을 입력합니다.\n\n- **[번역 추가]** 버튼을 눌러 언어를 추가할 수 있습니다.\n\n[[callout:⚠|번역 데이터 안내|LumiTeach 서비스에서 사용자가 선택한 언어에 대한 번역 데이터가 없을 경우, 번역 키가 그대로 나타날 수 있습니다.]]\n\n### 연결 아이템(Item ID) 추가\n\n- **[+ Item ID 추가]** 버튼을 클릭하면 **Item ID 추가** 모달이 열립니다.\n\n- 회사(Company) → 교육과정(Curriculum) 순서로 선택 후 검색하세요.\n\n- 아이템은 **최대 4개** 까지 추가 가능합니다.\n\n### 아이템 순서 변경 및 삭제\n\n- 각 아이템 행 좌측의 **위/아래 화살표(↕)** 버튼으로 순서를 변경할 수 있습니다.\n\n- 아이템 행 우측의 **🗑️ 삭제 아이콘** 을 클릭하면 해당 아이템이 삭제됩니다.",
    "- 주제 2도 주제 1과 동일한 방식으로 설정합니다.\n\n### 주제 1과의 차이점\n\n- **[편집]** 모달에서 **제목** 외에 연결된 **Item ID별 설명** 도 함께 입력합니다.\n\n- 연결 아이템은 **최대 2개** 까지 추가 가능합니다.\n\n모든 항목 입력 후 우측 상단의 **[등록]** 버튼을 클릭하세요."
  ],
  "cat-admin-assessment-question": [
    "- 상단 메뉴에서 **평가 관리** 를 클릭한 후 **[문항 관리]** 탭을 선택하세요.\n\n[[image:admin-assessment-question/01.png|화면 예시]]\n\n[[table:%7B%22rows%22%3A%5B%5B%22%ED%95%AD%EB%AA%A9%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%2A%2A%EB%AC%B8%ED%95%AD%20ID%2A%2A%22%2C%22%EB%AC%B8%ED%95%AD%EC%9D%98%20%EA%B3%A0%EC%9C%A0%20%EC%8B%9D%EB%B3%84%20%EB%B2%88%ED%98%B8%22%5D%2C%5B%22%2A%2A%EB%AC%B8%ED%95%AD%20%EC%9C%A0%ED%98%95%2A%2A%22%2C%22%EA%B0%9D%EA%B4%80%EC%8B%9D%2C%20%EB%8B%A8%EB%8B%B5%ED%98%95%2C%20OX%ED%80%B4%EC%A6%88%2C%20%EC%84%A0%EC%9E%87%EA%B8%B0%20%EB%93%B1%20%EB%AC%B8%ED%95%AD%EC%9D%98%20%EC%9C%A0%ED%98%95%20%EA%B5%AC%EB%B6%84%22%5D%2C%5B%22%2A%2A%EC%B5%9C%EA%B7%BC%20%EC%88%98%EC%A0%95%EC%9D%BC%2A%2A%22%2C%22%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B0%80%20%EC%B5%9C%EC%B4%88%20%EB%93%B1%EB%A1%9D%EB%90%98%EA%B1%B0%EB%82%98%20%EB%A7%88%EC%A7%80%EB%A7%89%EC%9C%BC%EB%A1%9C%20%EC%88%98%EC%A0%95%EB%90%9C%20%EB%82%A0%EC%A7%9C%20%28YYYY-MM-DD%29%22%5D%5D%7D]]\n\n### 문항 상세 정보 확인하기\n\n- 목록에서 **↗ 아이콘(세부 정보)** 을 클릭하면 해당 문항의 **상세 정보 페이지** 가 열립니다.\n\n- 국가, 회사, 문항 ID, 난이도, 최근 등록/수정 계정, 최근 수정일을 확인할 수 있습니다.\n\n[[image:admin-assessment-question/02.png|화면 예시]]\n\n### 문항 미리보기\n\n- 상세 정보 페이지 우측 상단의 **[미리보기]** 버튼을 클릭하면 미리보기 모달이 열립니다.\n\n- **PC 버전** 과 **모바일 버전** 중 선택하여 확인할 수 있습니다.\n\n### 문항 수정하기\n\n- 상세 정보 페이지 우측 상단의 **[수정]** 버튼을 클릭하면 **문항 수정 모드** 로 전환됩니다.",
    "문항은 **개별 등록** 과 **일괄 등록** 두 가지 방식으로 등록할 수 있습니다.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EA%B5%AC%EB%B6%84%22%2C%22%EC%84%A4%EB%AA%85%22%2C%22%ED%95%84%EC%88%98%20%EC%97%AC%EB%B6%80%22%2C%22%EB%82%B4%EC%9A%A9%22%5D%2C%5B%22question_ID%22%2C%22%EB%AC%B8%ED%95%AD%20ID%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EC%98%81%EC%96%B4%20%EB%8C%80%EC%86%8C%EB%AC%B8%EC%9E%90%2C%20%EC%88%AB%EC%9E%90%2C%20%EB%A7%88%EC%B9%A8%ED%91%9C%2C%20%EB%8C%80%EC%8B%9C%28-%29%EB%A5%BC%20%EC%82%AC%EC%9A%A9.%20%EC%A4%91%EB%B3%B5%20%EB%B6%88%EA%B0%80.%22%5D%2C%5B%22question_type%22%2C%22%EB%AC%B8%ED%95%AD%20%EC%9C%A0%ED%98%95%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EB%AC%B8%ED%95%AD%20%EC%9C%A0%ED%98%95%EC%9D%84%20%EA%B5%AC%EB%B6%84%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22question_Difficulty%22%2C%22%EB%82%9C%EC%9D%B4%EB%8F%84%22%2C%22%EC%84%A0%ED%83%9D%22%2C%22Hard%2C%20Normal%2C%20Easy%22%5D%2C%5B%22question_text%22%2C%22%EB%B0%9C%EB%AC%B8%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EB%AC%B8%ED%95%AD%EC%9D%98%20%EC%A7%88%EB%AC%B8%EC%9D%84%20%EC%9E%91%EC%84%B1%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22question_description%22%2C%22%EC%84%A4%EB%AA%85%22%2C%22%EC%84%A0%ED%83%9D%22%2C%22%EB%B6%80%EC%97%B0%20%EC%84%A4%EB%AA%85%EC%9D%B4%EB%82%98%20%EC%A7%80%EB%AC%B8%EC%9D%84%20%EC%9E%91%EC%84%B1%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22question_image%22%2C%22%EC%9D%B4%EB%AF%B8%EC%A7%80%22%2C%22%EC%84%A0%ED%83%9D%22%2C%22%EB%AC%B8%ED%95%AD%EC%97%90%20%EB%8C%80%ED%95%9C%20%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC%20%EC%B6%94%EA%B0%80%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22correct_answer%22%2C%22%EC%A0%95%EB%8B%B5%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EB%AC%B8%ED%95%AD%EB%B3%84%20%EC%A0%95%EB%8B%B5%EC%9D%84%20%EC%9E%91%EC%84%B1%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22option%22%2C%22%EB%B3%B4%EA%B8%B0%22%2C%22%ED%95%84%EC%88%98/%EC%84%A0%ED%83%9D%22%2C%22%EB%AC%B8%ED%95%AD%EC%9D%98%20%EB%B3%B4%EA%B8%B0%20%EC%98%B5%EC%85%98%EC%9D%84%20%EC%9E%85%EB%A0%A5%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%5D%7D]]\n\n### 문항 유형\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%9C%A0%ED%98%95%22%2C%22%EC%98%81%EB%AC%B8%20%EB%AA%85%22%5D%2C%5B%22OX%ED%80%B4%EC%A6%88%22%2C%22True%20or%20False%22%5D%2C%5B%22%EB%8B%A8%EB%8B%B5%ED%98%95%22%2C%22Short%20Answer%22%5D%2C%5B%22%EA%B0%9D%EA%B4%80%EC%8B%9D%22%2C%22Multiple%20Choice%22%5D%2C%5B%22%EC%88%9C%EC%84%9C%20%EB%A7%9E%ED%9E%88%EA%B8%B0%22%2C%22Sequencing%22%5D%2C%5B%22%EC%84%A0%EC%9E%87%EA%B8%B0%22%2C%22Matching%22%5D%2C%5B%22%EB%B9%88%EC%B9%B8%20%EC%B1%84%EC%9A%B0%EA%B8%B0%22%2C%22Fill%20in%20the%20Blank%22%5D%2C%5B%22%EB%B6%84%EB%A5%98%ED%95%98%EA%B8%B0%22%2C%22Sorting%22%5D%5D%7D]]",
    "한 번에 문항 1개씩 직접 입력하여 등록하는 방식입니다.\n\n[[image:admin-assessment-question/03.png|화면 예시]]\n\n### 기본 정보 입력\n\n- **문항 유형:** 드롭다운에서 문항 유형을 선택하세요.\n\n- **발문:** 문항의 질문을 입력하세요.\n\n- **설명:** 부가 설명을 입력하세요.\n\n- **문항 이미지:** **[파일 첨부]** 버튼으로 이미지를 첨부할 수 있습니다. (1개 / 20MB 이하 / jpg, jpeg, png)\n\n모든 항목 입력 후 우측 상단의 **[등록]** 버튼을 클릭하세요.",
    "엑셀 양식에 맞춰 여러 문항을 한 번에 등록하는 방식입니다.\n\n[[image:admin-assessment-question/04.png|화면 예시]]\n\n### 양식 다운로드/가져오기\n\n1. 오른쪽 상단의 **[가져오기]** 버튼을 클릭합니다.\n\n2. **[양식 다운로드]** 버튼을 클릭하면 엑셀 양식이 다운로드됩니다.\n\n3. 양식 작성 후, 다시 **[가져오기]** 버튼을 클릭하여 파일을 업로드합니다.\n\n[[callout:💡|주의|LumiTeach 어드민에서 일괄 등록 데이터 작성 중에 파일 변경 사항을 **자동 저장하지 않습니다.**]]\n\n### 문항 일괄 등록 시 유의 사항\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EA%B2%80%EC%A6%9D%20%EC%9C%A0%ED%98%95%22%2C%22%EC%A1%B0%EA%B1%B4%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%EA%B3%B5%ED%86%B5%20%ED%95%84%EC%88%98%22%2C%22question_id%2C%20question_type%2C%20question_text%20%EB%88%84%EB%9D%BD%20%EC%8B%9C%22%2C%22%EB%AC%B8%ED%95%AD%20ID%2C%20%EB%AC%B8%ED%95%AD%20%EC%9C%A0%ED%98%95%2C%20%EC%A7%88%EB%AC%B8%20%EB%82%B4%EC%9A%A9%EC%9D%80%20%ED%95%84%EC%88%98%20%EC%9E%85%EB%A0%A5%20%EC%82%AC%ED%95%AD%EC%9E%85%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EA%B7%9C%EA%B2%A9%22%2C%22%ED%99%95%EC%9E%A5%EC%9E%90%EA%B0%80%20jpg%2C%20png%EA%B0%80%20%EC%95%84%EB%8B%88%EA%B1%B0%EB%82%98%2020MB%20%EC%B4%88%EA%B3%BC%20%EC%8B%9C%22%2C%22%EC%9D%B4%EB%AF%B8%EC%A7%80%20%ED%8C%8C%EC%9D%BC%EC%9D%80%20jpg%2C%20png%20%ED%98%95%EC%8B%9D%EB%A7%8C%20%EC%A7%80%EC%9B%90%ED%95%98%EB%A9%B0%2C%20%EC%B5%9C%EB%8C%80%2020MB%EA%B9%8C%EC%A7%80%20%EC%97%85%EB%A1%9C%EB%93%9C%20%EA%B0%80%EB%8A%A5%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22%EB%AC%B8%ED%95%AD%EB%B3%84%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EA%B7%9C%EA%B2%A9%22%2C%22%EC%A0%95%EB%8B%B5%EC%9D%B4%EB%82%98%20%EB%B3%B4%EA%B8%B0%20%EC%98%B5%EC%85%98%20%EB%88%84%EB%9D%BD/%ED%98%95%EC%8B%9D%20%EC%98%A4%EB%A5%98%20%EC%8B%9C%22%2C%22%EB%AC%B8%ED%95%AD%EC%9D%98%20%EC%A0%95%EB%8B%B5%20%EB%B0%8F%20%EB%B3%B4%EA%B8%B0%20%EC%98%B5%EC%85%98%EC%9D%84%20%EB%AC%B8%ED%95%AD%20%EC%9C%A0%ED%98%95%EC%97%90%20%EC%95%8C%EB%A7%9E%EA%B2%8C%20%EC%9E%91%EC%84%B1%ED%95%98%EC%84%B8%EC%9A%94.%22%5D%5D%7D]]\n\n모든 항목 입력 후 우측 상단의 **[등록]** 버튼을 클릭하세요."
  ],
  "cat-admin-assessment-paper": [
    "- 평가 관리 메뉴에서 **[시험지 관리]** 탭을 선택하세요.\n\n[[image:admin-assessment-paper/01.png|화면 예시]]\n\n[[table:%7B%22rows%22%3A%5B%5B%22%ED%95%AD%EB%AA%A9%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%2A%2A%EC%8B%9C%ED%97%98%EC%A7%80%20%EB%AA%85%2A%2A%22%2C%22%EC%8B%9C%ED%97%98%EC%A7%80%20%EC%9D%B4%EB%A6%84%22%5D%2C%5B%22%2A%2A%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%2A%2A%22%2C%22%EC%8B%9C%ED%97%98%EC%A7%80%EC%97%90%20%EB%A7%A4%ED%95%91%EB%90%9C%20%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%20%EB%8B%A8%EC%9C%84%20%ED%91%9C%EA%B8%B0%22%5D%2C%5B%22%2A%2A%ED%95%99%EB%85%84%2A%2A%22%2C%22%EC%8B%9C%ED%97%98%EC%A7%80%EC%97%90%20%EB%A7%A4%ED%95%91%EB%90%9C%20%ED%95%99%EB%85%84%20%EC%A0%95%EB%B3%B4%22%5D%2C%5B%22%2A%2A%EB%AC%B8%ED%95%AD%20%EC%88%98%2A%2A%22%2C%22%EC%8B%9C%ED%97%98%EC%A7%80%EC%97%90%20%EB%93%B1%EB%A1%9D%EB%90%9C%20%EC%B4%9D%20%EB%AC%B8%ED%95%AD%20%EC%88%98%22%5D%2C%5B%22%2A%2A%EC%83%81%ED%83%9C%2A%2A%22%2C%22%EC%8B%9C%ED%97%98%EC%A7%80%20%ED%99%9C%EC%84%B1%28Active%29%20/%20%EB%B9%84%ED%99%9C%EC%84%B1%28Inactive%29%20%EC%83%81%ED%83%9C%22%5D%2C%5B%22%2A%2A%EC%B5%9C%EA%B7%BC%20%EC%88%98%EC%A0%95%EC%9D%BC%2A%2A%22%2C%22%EC%B5%9C%EA%B7%BC%20%EC%88%98%EC%A0%95%EC%9D%B4%20%EC%9E%88%EB%8A%94%20%EA%B2%BD%EC%9A%B0%20%EC%88%98%EC%A0%95%EC%9D%BC%20%ED%91%9C%EA%B8%B0%2C%20%EC%97%86%EB%8A%94%20%EA%B2%BD%EC%9A%B0%20%EC%B5%9C%EC%B4%88%20%EB%93%B1%EB%A1%9D%EC%9D%BC%20%ED%91%9C%EA%B8%B0%22%5D%5D%7D]]\n\n### 시험지 상세 정보 확인하기\n\n- 목록에서 **↗ 아이콘(세부 정보)** 을 클릭하면 해당 시험지의 **상세 정보 페이지** 가 열립니다.\n\n[[image:admin-assessment-paper/02.png|화면 예시]]\n\n### 시험지 수정하기\n\n- 상세 정보 페이지 우측 상단의 **[수정]** 버튼을 클릭하면 **수정 모드** 로 전환됩니다.\n\n- 수정 완료 후 우측 상단의 **[저장]** 버튼을 클릭하세요.",
    "평가지 1개의 정보를 직접 입력하고 문항을 구성하여 등록하는 방식입니다.\n\n[[image:admin-assessment-paper/03.png|화면 예시]]\n\n[[table:%7B%22rows%22%3A%5B%5B%22%ED%95%AD%EB%AA%A9%22%2C%22%EC%84%A4%EB%AA%85%22%5D%2C%5B%22%2A%2A%ED%8F%89%EA%B0%80%EC%A7%80%20%EB%AA%85%2A%2A%22%2C%22%ED%95%84%EC%88%98%20%EC%9E%85%EB%A0%A5%2C%20%EC%B5%9C%EB%8C%80%20100byte%22%5D%2C%5B%22%2A%2A%ED%8F%89%EA%B0%80%EC%A7%80%20%EC%88%9C%EC%84%9C%2A%2A%22%2C%22%ED%95%84%EC%88%98%20%EC%9E%85%EB%A0%A5%2C%20%EC%88%AB%EC%9E%90%EB%A7%8C%20%EC%9E%85%EB%A0%A5%20%EA%B0%80%EB%8A%A5%22%5D%2C%5B%22%2A%2A%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%2A%2A%22%2C%22%ED%95%84%EC%88%98%20%EC%9E%85%EB%A0%A5%2C%20%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%20%EB%AA%A9%EB%A1%9D%EC%97%90%EC%84%9C%20%EC%84%A0%ED%83%9D%22%5D%2C%5B%22%2A%2AItem%20ID%2A%2A%22%2C%22%ED%95%84%EC%88%98%20%EC%9E%85%EB%A0%A5%2C%20%5BItem%20ID%20%EC%B6%94%EA%B0%80%5D%20%EB%B2%84%ED%8A%BC%20%ED%81%B4%EB%A6%AD%20%EC%8B%9C%20%EB%AA%A8%EB%8B%AC%20%ED%91%9C%EC%8B%9C%22%5D%2C%5B%22%2A%2A%ED%8F%89%EA%B0%80%EC%A7%80%20%EC%8D%B8%EB%84%A4%EC%9D%BC%2A%2A%22%2C%22%EB%B3%84%EB%8F%84%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%AF%B8%EB%93%B1%EB%A1%9D%20%EC%8B%9C%20%EC%A0%80%EC%9E%A5%20%EB%98%90%EB%8A%94%20%EC%8A%B9%EC%9D%B8%20%EC%8B%9C%201%ED%8E%98%EC%9D%B4%EC%A7%80%20%EC%B2%AB%20%EB%B2%88%EC%A7%B8%20%EB%AC%B8%EC%A0%9C%20%ED%99%94%EB%A9%B4%EC%9D%B4%20%EC%9E%90%EB%8F%99%20%EC%A0%80%EC%9E%A5%22%5D%2C%5B%22%2A%2A%EC%B6%9C%EC%B2%98%2A%2A%22%2C%22%EC%84%A0%ED%83%9D%20%EC%9E%85%EB%A0%A5%2C%20%EC%B5%9C%EB%8C%80%20100byte%22%5D%5D%7D]]\n\n### 문항 구성\n\n- **[문항 추가]** 버튼을 클릭하면 **문항 추가 모달** 이 열립니다.\n\n- 체크박스로 문항을 선택(복수 선택 가능)하세요.\n\n- 추가된 문항은 ▲▼ 버튼으로 순서 변경, 🗑️ 아이콘으로 삭제 가능합니다.\n\n모든 필수 항목 입력 및 문항 구성 완료 후 우측 상단의 **[등록]** 버튼을 클릭하세요.",
    "엑셀 양식에 맞춰 여러 평가지를 한 번에 등록하는 방식입니다.\n\n[[image:admin-assessment-paper/04.png|화면 예시]]\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EA%B5%AC%EB%B6%84%22%2C%22%EC%84%A4%EB%AA%85%22%2C%22%ED%95%84%EC%88%98%20%EC%97%AC%EB%B6%80%22%2C%22%EB%82%B4%EC%9A%A9%22%5D%2C%5B%22Item_id%22%2C%22%EC%95%84%EC%9D%B4%ED%85%9C%20ID%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EC%8B%9C%ED%97%98%EC%A7%80%EA%B0%80%20%EC%97%B0%EA%B2%B0%EB%90%A0%20%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%EC%9D%98%20%EC%95%84%EC%9D%B4%ED%85%9C%20ID%22%5D%2C%5B%22assessment_order%22%2C%22%EC%8B%9C%ED%97%98%EC%A7%80%20%EC%88%9C%EC%84%9C%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%20%EB%82%B4%EC%97%90%EC%84%9C%20%EC%8B%9C%ED%97%98%EC%A7%80%EA%B0%80%20%EC%A0%95%EB%A0%AC%EB%90%A0%20%EC%88%9C%EC%84%9C%22%5D%2C%5B%22assessment_name%22%2C%22%EC%8B%9C%ED%97%98%EC%A7%80%20%EB%AA%85%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EC%8B%9C%ED%97%98%EC%A7%80%20%EB%AA%85%EC%9D%84%20%EC%9E%91%EC%84%B1%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22assessment_thumbnail%22%2C%22%EC%8B%9C%ED%97%98%EC%A7%80%20%EC%8D%B8%EB%84%A4%EC%9D%BC%22%2C%22%EC%84%A0%ED%83%9D%22%2C%22%EC%8B%9C%ED%97%98%EC%A7%80%20%EB%8C%80%ED%91%9C%20%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC%20%EC%B2%A8%EB%B6%80%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22question_order%22%2C%22%EB%AC%B8%ED%95%AD%20%EC%88%9C%EC%84%9C%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EB%AC%B8%ED%95%AD%20%EC%88%9C%EC%84%9C%EB%A5%BC%20%EC%9E%91%EC%84%B1%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%2C%5B%22question_id%22%2C%22%EB%AC%B8%ED%95%AD%20ID%22%2C%22%ED%95%84%EC%88%98%22%2C%22%EC%8B%9C%ED%97%98%EC%A7%80%EB%A5%BC%20%EA%B5%AC%EC%84%B1%ED%95%A0%20%EB%AC%B8%ED%95%AD%20ID%EB%A5%BC%20%EC%9E%91%EC%84%B1%ED%95%A9%EB%8B%88%EB%8B%A4.%22%5D%5D%7D]]\n\n[[callout:💡|주의|LumiTeach 어드민에서 일괄 등록 데이터 작성 중에 파일 변경 사항을 **자동 저장하지 않습니다.**\\n\\n모든 항목 입력 후 우측 상단의 **[등록]** 버튼을 클릭하세요.]]"
  ],
  "cat-admin-report-management": [
    "- 사용자 서비스 Explore 메뉴에 게시된 콘텐츠 중에서 신고 접수된 콘텐츠들을 확인할 수 있습니다.\n\n- 상단에서 **총 신고 건수** , **접수** , **반려** , **조치 완료** 현황을 함께 확인할 수 있습니다.\n\n- 목록의 세부 정보 버튼을 클릭하면 신고된 콘텐츠의 상세 화면으로 이동합니다.\n\n[[callout:✅||신고에 대한 상태는 3가지로 구분됩니다.\\n\\n접수 : 신고가 접수되어 검토가 필요한 상태\\n\\n반려 : 신고가 반려되어 콘텐츠가 계속 노출되는 상태\\n\\n비활성화 : 신고 내용을 확인 후 콘텐츠가 비노출 처리된 상태]]",
    "- 상세 화면에서 신고된 콘텐츠를 게시한 등록자, 등록일, 과목, 학년 정보를 확인합니다.\n\n- [미리보기] 버튼을 클릭하여, 콘텐츠의 세부 내용을 이미지 형태로 확인합니다.",
    "- 운영진이 신고된 내용에 동의하지 않거나, 공개된 콘텐츠가 적절하다고 판단되는 경우, **반려** 처리를 하세요. 그러면 해당 콘텐츠는 공개가 유지됩니다.\n\n- 상세 화면 오른쪽 상단의 **[반려]** 버튼을 클릭합니다.\n\n- 신고를 반려하는 경우, 해당 콘텐츠는 계속 사용자들에게 노출되며 신고자에게는 조치 결과가 메일로 안내됩니다.",
    "- 운영진이 해당 콘텐츠를 공개하지 않는 것이 좋겠다고 판단하면 **비활성화** 처리를 하세요. 비활성화 처리한 콘텐츠는 익스플로어 메뉴에서 노출되지 않습니다.\n\n- 상세 화면 오른쪽 상단의 **[조치 완료]** 버튼을 클릭합니다.\n\n- 콘텐츠를 비노출하려는 이유를 선택합니다.\n\n- 조치 완료 처리 시, 콘텐츠는 즉시 사용자 서비스에서 비노출되며 신고자와 콘텐츠 게시자에게 조치 결과가 메일로 안내됩니다.",
    "**1. 부적절한 콘텐츠**\n\n- 욕설 및 비속어 포함\n\n- 선정적인 내용 포함\n\n- 혐오 및 폭력적인 내용 포함\n\n- 차별적 요소 포함\n\n**2. 광고 또는 홍보성 콘텐츠**\n\n- 홍보 목적의 내용 포함\n\n- 상업적 링크 삽입\n\n**3. 저작권 침해 콘텐츠**\n\n- 교재 무단 업로드\n\n- 이미지 및 동영상 무단 사용\n\n- 타인의 학습 자료 복제\n\n**4. 개인정보 노출 콘텐츠**\n\n- 전화번호, 이메일 주소, 집 주소, 주민등록번호 등 민감 정보 게시\n\n**5. 기타 사유**\n\n- 위의 기준에 명확히 해당하지 않더라도 서비스 운영 원칙에 어긋나는 내용"
  ],
  "cat-admin-inquiry": [
    "- **[문의 등록]** 버튼을 클릭하세요.\n\n- 문의 제목, 분류, 내용을 입력한 후 등록하세요.\n\n- 분류는 문의 내용에 맞는 항목을 선택하세요. 정확한 분류를 선택하면 더 빠른 답변을 받을 수 있습니다.\n\n- 등록한 문의는 목록에서 확인할 수 있습니다.\n\n[[image:admin-inquiry/01.png|화면 예시]]\n\n[[callout:💡|등록 전 확인|등록된 문의는 수정 및 삭제가 불가합니다. 내용을 충분히 확인한 후 등록하세요.]]",
    "- 본사 관리자의 답변이 등록되면, 문의의 상태가 **[완료]** 로 전환됩니다.\n\n- 완료 상태의 문의를 클릭하면 답변 내용을 확인할 수 있습니다.\n\n[[image:admin-inquiry/02.png|화면 예시]]\n\n[[callout:📌||추가 문의 사항은 신규 등록해 주세요.]]"
  ],
  "cat-admin-affiliation-release": [
    "- **프로필 > 설정** 을 클릭하세요.\n\n- 기본 정보의 소속 회사 정보 오른쪽의 **[소속 해지]** 버튼을 클릭하세요.\n\n[[image:admin-affiliation-release/01.png|화면 예시]]\n\n- 소속 해지 시 본 계정은 더 이상 회사의 데이터를 조회할 수 없으며, 소속 인증을 다시 받아야 합니다.\n\n[[callout:💡||관리자 계정 이용 정지를 원한다면, 소속 관리자에게 요청하거나 또는 service@lumiteach.ai 로 문의해 주세요.]]"
  ],
  "cat-admin-ai-credit": [
    "### 1. AI 기능 및 도구\n\nLumiTeach 플랫폼에서 교수 자료를 만들고 활용하는 과정에서 AI 기능과 도구를 사용할 수 있습니다. AI 기능은 빠르게 교수 학습 자료를 생산하고, 다듬고, 수업이나 과제로 활용하는 과정을 돕습니다.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%82%AC%EC%9A%A9%20%EC%9C%84%EC%B9%98%22%2C%22%EC%A0%9C%EA%B3%B5%20%EA%B8%B0%EB%8A%A5%22%5D%2C%5B%22%2A%2AEdit%20Lesson%2A%2A%22%2C%22Rewrite%2C%20AI%20Make%22%5D%2C%5B%22%2A%2AStart%20teaching%2A%2A%22%2C%22Brainstorming%20%28Wordcloud%2C%20Classification%2C%20Mindmap%29%22%5D%2C%5B%22%2A%2A%EC%96%B4%EB%93%9C%EB%AF%BC%2A%2A%22%2C%22%EC%BB%A4%EB%A6%AC%ED%81%98%EB%9F%BC%20%ED%83%9C%EA%B9%85%2C%20%EC%BD%98%ED%85%90%EC%B8%A0%20%EB%A9%94%ED%83%80%EB%8D%B0%EC%9D%B4%ED%84%B0%20%ED%83%9C%EA%B9%85%2C%20AI%20Make%22%5D%5D%7D]]\n\n#### 1-1. AI 크레딧이란?\n\nAI 크레딧은 LumiTeach 플랫폼 전반에서 AI 작업을 실행하는 데 사용됩니다.\n\n- **1 크레딧 = 1 토큰(LLM 처리 단위)** 기준으로 차감됩니다.\n\n- 플랜에 따라 매월 일정량의 **기본 크레딧** 이 자동으로 지급됩니다.\n\n- 부족하면 **크레딧 팩을 추가 구매** 하거나, 소속 관리자에게 **추가 지급을 요청** 할 수 있습니다.",
    "### 2. 크레딧 구조 한눈에 보기\n\nLumiTeach의 크레딧은 사용 주체에 따라 두 종류로 분리되어 운영됩니다.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EA%B5%AC%EB%B6%84%22%2C%22%EC%96%B4%EB%93%9C%EB%AF%BC%20%ED%81%AC%EB%A0%88%EB%94%A7%20%28%EA%B4%80%EB%A6%AC%EC%9E%90%29%22%2C%22%EC%84%9C%EB%B9%84%EC%8A%A4%20%ED%81%AC%EB%A0%88%EB%94%A7%20%28%EA%B5%90%EC%82%AC%29%22%5D%2C%5B%22%2A%2A%EC%82%AC%EC%9A%A9%20%EC%A3%BC%EC%B2%B4%2A%2A%22%2C%22%EA%B8%B0%EA%B4%80%C2%B7%EA%B8%B0%EC%97%85%C2%B7%EC%97%90%EC%9D%B4%EC%A0%84%EC%8B%9C%EC%9D%98%20%EA%B4%80%EB%A6%AC%EC%9E%90%22%2C%22%EA%B5%90%EC%82%AC%20%EA%B0%9C%EC%9D%B8%20%EA%B3%84%EC%A0%95%22%5D%2C%5B%22%2A%2A%EC%A7%80%EA%B8%89%20%EB%B0%A9%EC%8B%9D%2A%2A%22%2C%22%EA%B3%84%EC%95%BD%20%EC%8B%9C%EC%A0%90%EC%97%90%20%ED%98%91%EC%9D%98%EB%90%9C%20%EC%96%91%20%EC%9D%BC%EA%B4%84%20%EC%A7%80%EA%B8%89%22%2C%22%EB%A7%A4%EC%9B%94%20%EC%9E%90%EB%8F%99%20%EC%A7%80%EA%B8%89%2C%20%EC%9B%94%EB%B3%84%20%EC%B4%88%EA%B8%B0%ED%99%94%22%5D%2C%5B%22%2A%2A%EA%B4%80%EB%A6%AC%20%EB%8B%A8%EC%9C%84%2A%2A%22%2C%22%EC%A1%B0%EC%A7%81%20%EB%8B%A8%EC%9C%84%22%2C%22%EA%B0%9C%EC%9D%B8%20%EA%B3%84%EC%A0%95%20%EB%8B%A8%EC%9C%84%22%5D%2C%5B%22%2A%2A%EC%82%AC%EC%9A%A9%EC%B2%98%2A%2A%22%2C%22%EC%96%B4%EB%93%9C%EB%AF%BC%20%EB%82%B4%20AI%20%EA%B8%B0%EB%8A%A5%22%2C%22LumiTeach%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EB%82%B4%20AI%20%EA%B8%B0%EB%8A%A5%22%5D%2C%5B%22%2A%2A%EA%B5%90%EC%82%AC%EC%97%90%EA%B2%8C%20%EC%9D%B4%EC%B2%B4%2A%2A%22%2C%22%EC%86%8C%EC%86%8D%20%EA%B5%90%EC%82%AC%EC%97%90%EA%B2%8C%20%EA%B3%B5%EC%9C%A0%20%EB%B0%8F%20%EC%96%91%EB%8F%84%20%EA%B0%80%EB%8A%A5%22%2C%22%EA%B5%90%EC%82%AC%20%EA%B0%84%20%EA%B3%B5%EC%9C%A0%20%EB%B0%8F%20%EC%96%91%EB%8F%84%20%EB%B6%88%EA%B0%80%22%5D%5D%7D]]\n\n[[callout:💡|1 크레딧의 가치는 동일합니다.|어드민·서비스 모두 1 크레딧당 가격과 토큰 환산 기준이 같습니다.]]\n\n### 3. AI 기능별 크레딧 차감 기준\n\n[[table:%7B%22rows%22%3A%5B%5B%22AI%20%EA%B8%B0%EB%8A%A5%22%2C%22%EC%84%B8%EB%B6%80%20%EA%B5%AC%EB%B6%84%22%2C%221%ED%9A%8C%20%ED%8F%89%EA%B7%A0%20%EC%B0%A8%EA%B0%90%EB%9F%89%22%2C%22%EC%9D%B4%EC%9A%A9%20%EA%B0%80%EB%8A%A5%20%ED%94%8C%EB%9E%9C%22%5D%2C%5B%22%2A%2AAI%20Make%2A%2A%20%28%EC%95%A1%ED%8B%B0%EB%B9%84%ED%8B%B0%20%EC%83%9D%EC%84%B1%29%22%2C%22%ED%85%8D%EC%8A%A4%ED%8A%B8%20%EC%97%85%EB%A1%9C%EB%93%9C%22%2C%22100%20%ED%81%AC%EB%A0%88%EB%94%A7%22%2C%22Free%20%EC%9D%B4%EC%83%81%22%5D%2C%5B%22%22%2C%22%ED%85%8D%EC%8A%A4%ED%8A%B8%20%2B%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EC%97%85%EB%A1%9C%EB%93%9C%22%2C%22100%20%ED%81%AC%EB%A0%88%EB%94%A7%22%2C%22Free%20%EC%9D%B4%EC%83%81%22%5D%2C%5B%22%22%2C%22%EC%98%81%EC%83%81%20%EC%97%85%EB%A1%9C%EB%93%9C%22%2C%22150%20%ED%81%AC%EB%A0%88%EB%94%A7%22%2C%22Free%20%EC%9D%B4%EC%83%81%22%5D%2C%5B%22%2A%2A%EB%B8%8C%EB%A0%88%EC%9D%B8%EC%8A%A4%ED%86%A0%EB%B0%8D%20%EB%B3%B4%EB%93%9C%2A%2A%22%2C%22%EC%9B%8C%EB%93%9C%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%22%2C%223%20%ED%81%AC%EB%A0%88%EB%94%A7%22%2C%22Free%20%EC%9D%B4%EC%83%81%22%5D%2C%5B%22%22%2C%22%EB%B6%84%EB%A5%98%22%2C%223%20%ED%81%AC%EB%A0%88%EB%94%A7%22%2C%22Free%20%EC%9D%B4%EC%83%81%22%5D%2C%5B%22%22%2C%22%EB%A7%88%EC%9D%B8%EB%93%9C%EB%A7%B5%22%2C%225%20%ED%81%AC%EB%A0%88%EB%94%A7%22%2C%22Free%20%EC%9D%B4%EC%83%81%22%5D%2C%5B%22%2A%2ARewrite%2A%2A%20%28%ED%85%8D%EC%8A%A4%ED%8A%B8%20%EA%B5%90%EC%A0%95%29%22%2C%22-%22%2C%221%20%ED%81%AC%EB%A0%88%EB%94%A7%22%2C%22Free%20%EC%9D%B4%EC%83%81%22%5D%2C%5B%22%2A%2AAuto-Tagging%2A%2A%20%28%EA%B4%80%EB%A6%AC%EC%9E%90%29%22%2C%22%EC%BB%A4%EB%A6%AC%ED%81%98%EB%9F%BC%20%ED%83%9C%EA%B9%85%22%2C%2210%20%ED%81%AC%EB%A0%88%EB%94%A7%22%2C%22Pro%20%EC%9D%B4%EC%83%81%22%5D%2C%5B%22%22%2C%22%EC%BD%98%ED%85%90%EC%B8%A0%20%ED%83%9C%EA%B9%85%22%2C%2210%20%ED%81%AC%EB%A0%88%EB%94%A7%22%2C%22Pro%20%EC%9D%B4%EC%83%81%22%5D%5D%7D]]\n\n### 4. 크레딧 사용 및 차감 방식\n\n#### 4-1. 사전 검증\n\nAI 기능 실행(버튼 클릭) 시점에 **예상 사용 토큰** 을 크레딧으로 환산하여 잔액과 비교합니다.\n\n- 보유 크레딧이 부족하면 기능을 실행할 수 없습니다.\n\n#### 4-2. 사후 정산\n\n- 결과물이 정상 생성되면, **실제로 사용된 토큰** 을 기준으로 최종 차감됩니다.\n\n- AI 작업 **중도 취소** 시: 취소 시점까지 생성된 결과물의 토큰만 차감됩니다.\n\n- AI 엔진 **시스템 오류** 발생 시: 크레딧이 전액 복구됩니다.\n\n### 5. 크레딧 소진 순서 및 유효 기간\n\n1. **월 정기 크레딧**\n\n2. **추가 지급/구매 크레딧**\n\n[[table:%7B%22rows%22%3A%5B%5B%22%EC%9C%A0%ED%98%95%22%2C%22%EB%8C%80%EC%83%81%22%2C%22%EC%9D%B4%EC%9B%94%22%5D%2C%5B%22%EC%9B%94%20%EC%A0%95%EA%B8%B0%20%ED%81%AC%EB%A0%88%EB%94%A7%22%2C%22%EA%B5%90%EC%82%AC%20%EA%B0%9C%EC%9D%B8%20%EA%B3%84%EC%A0%95%22%2C%22%EA%B0%80%EB%8A%A5%22%5D%2C%5B%22%EC%B6%94%EA%B0%80%20%ED%81%AC%EB%A0%88%EB%94%A7%22%2C%22%EA%B5%90%EC%82%AC%20%EA%B0%9C%EC%9D%B8%20%EA%B3%84%EC%A0%95%22%2C%22%EA%B0%80%EB%8A%A5%22%5D%5D%7D]]",
    "### 6. 관리자 가이드 (조직 크레딧 운영)\n\n> 이 섹션은 **상위 관리자** (에이전시·기업·기관·콘텐츠 제휴사 어드민)에게 해당됩니다.\n\n#### 6-1. 어드민 크레딧 지급 시점\n\n- **계약 시점** 에 협의된 양만큼 일괄 지급합니다.\n\n- 추가 크레딧이 필요한 경우 **별도 추가 계약을 체결** 해야 합니다.\n\n- 기준일은 소속 회사의 **계약 시작일** 로 자동 설정됩니다.\n\n#### 6-2. 교사 정기 크레딧 지급 정책\n\n- **지급일** : 계약 시작일을 기준일로 하여 매월 같은 일자 **00:00:00 (UTC)** 자동 지급됩니다.\n\n- **중도 입사 교사** : 인증 시점에 해당 월의 정액 크레딧 즉시 지급되며 이월되지 않습니다.\n\n- **소속 해지/탈퇴 교사** : 즉시 사용 정지됩니다.\n\n- **지급 불가** : 소속 회사의 어드민 크레딧이 부족한 경우, 교사의 월 정기 크레딧이 지급되지 않습니다.\n\n#### 6-3. 추가 크레딧 요청 처리\n\n**교사가 관리자에게 요청**\n\n1. 교사가 본인 크레딧 페이지에서 **[크레딧 요청하기]** 버튼 클릭 시, 상위 관리자가 확인할 수 있습니다.\n\n2. 관리자가 어드민에서 **승인 또는 반려** 합니다.\n\n3. 승인 시 어드민 공용 풀에서 즉시 차감되어 교사 계정으로 지급됩니다.\n\n#### 6-4. 크레딧 지급 정보 수정\n\n[[table:%7B%22rows%22%3A%5B%5B%22%ED%95%AD%EB%AA%A9%22%2C%22%EC%A0%95%EC%B1%85%22%2C%22%EB%B9%84%EA%B3%A0%22%5D%2C%5B%22%EC%96%B4%EB%93%9C%EB%AF%BC%20%ED%81%AC%EB%A0%88%EB%94%A7%20%EC%B6%94%EA%B0%80%20%EC%A7%80%EA%B8%89%22%2C%22%EC%A6%89%EC%8B%9C%20%EC%B6%94%EA%B0%80%20%EC%A7%80%EA%B8%89%22%2C%22%EA%B8%B0%EC%A1%B4%20%EC%9E%94%EC%95%A1%EC%97%90%20%EC%B6%94%EA%B0%80%22%5D%2C%5B%22%EA%B5%90%EC%82%AC%20%ED%81%AC%EB%A0%88%EB%94%A7%20%EC%B6%94%EA%B0%80%20%EC%A7%80%EA%B8%89%22%2C%22%EC%A6%89%EC%8B%9C%20%EC%B6%94%EA%B0%80%20%EC%A7%80%EA%B8%89%22%2C%22%EA%B8%B0%EC%A1%B4%20%EC%9E%94%EC%95%A1%EC%97%90%20%EC%B6%94%EA%B0%80%22%5D%2C%5B%22%EA%B5%90%EC%82%AC%20%EC%A0%95%EA%B8%B0%20%ED%81%AC%EB%A0%88%EB%94%A7%20%EC%88%98%EB%9F%89%20%EB%B3%80%EA%B2%BD%22%2C%22%EB%8B%A4%EC%9D%8C%20%EC%A7%80%EA%B8%89%EC%9D%BC%EB%B6%80%ED%84%B0%20%EC%A0%81%EC%9A%A9%22%2C%22-%22%5D%5D%7D]]",
    "[[table:%7B%22rows%22%3A%5B%5B%22%EA%B5%AC%EB%B6%84%22%2C%22%ED%99%98%EB%B6%88/%EC%B7%A8%EC%86%8C%22%2C%22%EC%86%8C%EC%86%8D%20%ED%95%B4%EC%A7%80/%ED%83%88%ED%87%B4%20%EC%8B%9C%22%5D%2C%5B%22%EA%B8%B0%EB%B3%B8%20%EC%A7%80%EA%B8%89%20%ED%81%AC%EB%A0%88%EB%94%A7%22%2C%22%EB%B6%88%EA%B0%80%22%2C%22%EC%A6%89%EC%8B%9C%20%EC%82%AC%EC%9A%A9%20%EC%A0%95%EC%A7%80%22%5D%2C%5B%22%EC%B6%94%EA%B0%80%20%ED%81%AC%EB%A0%88%EB%94%A7%22%2C%22%EB%B6%88%EA%B0%80%22%2C%22%EC%A6%89%EC%8B%9C%20%EC%82%AC%EC%9A%A9%20%EC%A0%95%EC%A7%80%22%5D%2C%5B%22AI%20%EC%9E%91%EC%97%85%20%EC%A4%91%EB%8F%84%20%EC%B7%A8%EC%86%8C%22%2C%22%EC%B7%A8%EC%86%8C%20%EC%8B%9C%EC%A0%90%EA%B9%8C%EC%A7%80%20%EC%82%AC%EC%9A%A9%20%ED%86%A0%ED%81%B0%EB%B6%84%20%ED%99%98%EB%B6%88%20%EB%B6%88%EA%B0%80%2C%20%EB%AF%B8%EC%B2%98%EB%A6%AC%EB%B6%84%20%EB%B0%98%ED%99%98%22%2C%22-%22%5D%2C%5B%22%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EC%98%A4%EB%A5%98%22%2C%22%EA%B2%B0%EA%B3%BC%EB%AC%BC%20%EB%AF%B8%EC%A0%9C%EA%B3%B5%20%EC%8B%9C%20100%25%20%ED%99%98%EB%B6%88%22%2C%22-%22%5D%5D%7D]]"
  ],
  "cat-admin-faq": [
    "### Q. 교사와 관리자의 차이는 무엇인가요?\n\n교사는 LumiTeach 서비스에서 교수 자료 생성 및 수업/과제를 진행하는 역할이고, 관리자는 어드민에서 교육과정·콘텐츠 관리, 회원 관리 등 매니징 업무를 수행합니다. 한 계정이 교사와 관리자 권한을 동시에 가질 수 있으며, 이 경우 서비스와 어드민에서 각각 소속 인증 절차를 진행해야 합니다.",
    "### Q. 회원이 가입 신청을 했는데 어디서 승인할 수 있나요?\n\n어드민 홈의 '주요 알림' 영역에서 가입 승인 대기 건수를 확인할 수 있습니다. `회원 관리 > 회원 목록` 에서 상태가 '대기'인 회원의 작업(⋯) 버튼을 클릭하여 승인 또는 반려할 수 있습니다.\n\n### Q. 교사와 관리자 권한을 동시에 신청한 경우 각각 따로 승인해야 하나요?\n\n네. 교사 권한과 관리자 권한은 각각 별도로 승인 또는 반려해야 합니다.\n\n### Q. 사용자가 가입하기 전에 미리 권한을 부여할 수 있나요?\n\n네. 회원 관리 > 회원 목록 우측 상단의 [권한 사전 등록] 버튼을 통해 가입 전 계정을 미리 등록하고 권한을 부여할 수 있습니다. 사전 등록된 계정은 가입 후 별도 승인 신청 없이 바로 이용 가능합니다.\n\n### Q. 권한 사전 등록 시 이메일 주소를 잘못 입력하면 어떻게 되나요?\n\n사전 등록한 이메일이 실제 가입에 사용한 Google 계정과 다를 경우, 자동 승인이 적용되지 않아 별도로 가입 승인 신청을 해야 합니다. 사전 등록 시 Google 계정과 동일한 이메일을 정확히 입력하세요.",
    "### Q. 퇴사한 직원의 계정은 어떻게 처리하나요?\n\n회원 관리에서 해당 회원의 소속을 해지하면 됩니다. 소속이 해지된 교사는 LumiTeach 무료 회원으로 전환되고, 소속이 해지된 관리자는 어드민에 더 이상 접근할 수 없습니다.\n\n### Q. 관리자 계정을 영구적으로 사용 중단시키고 싶을 때는 어떻게 하나요?\n\n상위 또는 동료 관리자가 회원 관리에서 해당 관리자 계정을 '이용 정지' 처리할 수 있습니다. 이용 정지된 관리자는 어드민을 이용할 수 없습니다. (교사 계정은 탈퇴 처리를 사용하며, 교사 본인이 직접 탈퇴할 수도 있습니다.)\n\n### Q. 소속 해지와 탈퇴(정지)의 차이는 무엇인가요?\n\n소속 해지는 해당 조직과의 소속 관계만 끊는 것으로 관리자는 같은 계정으로 다른 회사로 소속 인증 신청이 가능합니다. 교사는 무료 회원으로 전환되어 서비스를 계속 이용할 수 있고, 역시 다른 회사 소속으로 인증 신청을 할 수 있습니다. 탈퇴 또는 이용 정지는 계정 자체를 삭제하는 것으로, 탈퇴했거나 이용 정지된 교사/관리자는 LumiTeach 서비스와 어드민을 다시 이용할 수 없게 됩니다.",
    "### Q. 월 정기 크레딧이 남았는데 다음 달로 이월되나요?\n\n네, 매월 지급되는 정기 크레딧 잔액은 다음 달에도 이월되어 사용할 수 있습니다.\n\n### Q. 크레딧이 부족하면 어떻게 하나요?\n\n- **교사** : 내 크레딧 페이지에서 **[크레딧 요청하기]** 버튼으로 소속 관리자에게 추가 지급을 요청하세요.\n\n- **관리자** : 공용 풀이 부족하면 직계 상위 관리자에게 **추가 계약** 을 요청하세요.\n\n### Q. AI 작업을 도중에 멈추면 크레딧이 환불되나요?\n\n취소 시점까지 **실제로 생성된 결과물의 토큰분은 환불되지 않습니다.**\n\n### Q. AI가 오류를 내면 어떻게 되나요?\n\nAI 엔진 시스템 오류로 결과물이 제공되지 않은 경우, **점유된 크레딧이 전액 복구** 됩니다.\n\n### Q. 탈퇴하면 남은 크레딧은 어떻게 되나요?\n\n- **교사 탈퇴/소속 해지** : 즉시 사용이 정지되며, 남은 추가 크레딧은 어드민 공용 풀로 회수됩니다.\n\n- **같은 회사로 재인증** : 당월 지급 이력이 있다면 재지급되지 않습니다.\n\n- **다른 회사로 재인증** : 새 소속의 크레딧이 신규 지급됩니다.\n\n### Q. 크레딧 사용 내역은 어디서 볼 수 있나요?\n\n- **교사** : 내 크레딧 관리 페이지에서 잔여량과 최근 사용 내역을 확인할 수 있습니다.\n\n- **관리자** :\n\n1. 프로필 > 기본 정보 > AI 크레딧에서 최근 사용 내역을 확인할 수 있습니다.\n\n2. 소속 관리 > 소속 정보 > AI 크레딧 탭에서 최근 사용 내역을 확인할 수 있습니다.\n\n### Q. 회원의 AI 크레딧이 부족하다고 요청이 들어왔는데 어떻게 처리하나요?\n\n교사가 크레딧 추가 요청 시 회원 관리 목록에 알림이 표시됩니다. [요청 확인하기] 버튼을 클릭하여 세부 내용을 확인하고, 지급할 크레딧 수량을 선택 후 승인하면 조직의 공용 크레딧에서 차감되어 즉시 지급됩니다.\n\n[[callout:⚠|주의|한 번 지급한 크레딧은 회수할 수 없습니다. 지급 전 수량을 반드시 확인하세요.]]"
  ]
};

const articleCallouts = {};
const articleIntros = {
  "cat-admin-dashboard": "> 어드민 홈 메뉴에서는 LumiTeach 사용자와 콘텐츠에 관련된 데이터를 집계하여 제시합니다. 주요 지표를 토대로 LumiTeach를 적극적으로 활용해 보세요.\n\n[[callout:🕑|대시보드 집계 시점|대시보드 데이터는 매 시 정각에 집계 됩니다.]]\n\n[[image:admin-dashboard/01.png|화면 예시]]",
  "cat-admin-member-management": "> LumiTeach 서비스와 어드민을 함께할 회원을 등록해 보세요. 회원별 권한을 제어하고 AI 크레딧을 관리할 수 있습니다.",
  "cat-admin-approval-permission": "> LumiTeach 어드민과 서비스 이용을 위해 소속 회사 인증 절차가 필요합니다. 관리자는 어드민에서 가입 신청을 승인·반려하거나, 사전에 소속 회원 계정을 등록할 수 있습니다.",
  "cat-admin-standard-management": "> LumiTeach 어드민에서 교육과정 및 콘텐츠를 관리하기 위한 첫 번째 단계입니다.",
  "cat-admin-curriculum-management": "> 기관 및 기업 고유의 교육과정과 콘텐츠를 LumiTeach 시스템에 맞춰 구조화할 수 있습니다. 맞춤형으로 설계된 교육과정을 통해 사용자들에게 최적의 콘텐츠를 제공해 보세요.",
  "cat-admin-lesson-activity": "> **레슨 관리** 메뉴는 교육 커리큘럼에 맞는 레슨과 액티비티를 등록하고 관리하는 기능입니다. 등록된 레슨의 교육과정 연결 정보, 개념 키워드, 메타데이터를 확인하고 수정할 수 있습니다.",
  "cat-admin-lesson-ai-make": "> AI Make 기능을 사용하면 원본 자료(PDF, PPT 등)를 업로드하는 것만으로 AI가 자동으로 레슨을 생성해 줍니다. 생성된 레슨은 [검토] 탭에서 확인하고, 내용을 수정한 후 승인하여 게시할 수 있습니다.",
  "cat-admin-lesson-recommendation": "> 교육과정 구조에 맞게 등록된 레슨을 사용자에게 큐레이션할 수 있습니다. 추천 관리에 등록된 콘텐츠는 LumiTeach 서비스의 홈 화면에 노출되어 사용자의 접근성을 높입니다.",
  "cat-admin-assessment-question": "> 평가지를 구성하는 문항을 생성하고 관리할 수 있습니다.",
  "cat-admin-assessment-paper": "> 교육과정에 맞춘 문항들을 묶어 체계적인 시험지를 등록하고 관리할 수 있습니다. 이렇게 구성된 시험지는 LumiTeach 서비스 내에서 교사들이 학생들에게 과제나 시험으로 편리하게 출제합니다.",
  "cat-admin-report-management": "> LumiTeach 서비스에서 신고된 콘텐츠를 확인하고 적절한 조치를 취하세요.",
  "cat-admin-inquiry": "> LumiTeach 서비스 또는 어드민 이용 중 문제가 발생했거나 문의사항이 있다면 1:1 문의 메뉴를 이용하세요.",
  "cat-admin-affiliation-release": "> 조직 이동이나 퇴사 등의 이유로 현재 소속을 해지해야하는 경우 소속 해지 절차를 따라 주세요.",
  "cat-admin-ai-credit": "> LumiTeach의 AI 기능은 **크레딧 종량제** 방식으로 운영됩니다. 이 문서는 AI 크레딧이 어떻게 작동하는지, 어떤 기능에서 얼마나 차감되는지, 부족할 때 어떻게 해야 하는지를 안내합니다.",
  "cat-admin-login-signup": "> 안녕하세요, 운영자님. LumiTeach 어드민을 이용하기 위한 첫 스텝, 로그인과 가입 신청 절차를 알아보겠습니다."
};
const articleMedia = {};
const articleInfoCards = {};
const manualImages = {};

const hubDescriptions = {};

const hubVisuals = {
  "cat-admin-login-signup": {
    "icon": "AD",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-dashboard": {
    "icon": "HD",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-member-management": {
    "icon": "MM",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-approval-permission": {
    "icon": "AP",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-standard-management": {
    "icon": "SM",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-curriculum-management": {
    "icon": "CM",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-lesson-activity": {
    "icon": "LA",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-lesson-bulk-upload": {
    "icon": "BU",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-lesson-ai-make": {
    "icon": "AI",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-lesson-recommendation": {
    "icon": "RC",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-assessment-question": {
    "icon": "AQ",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-assessment-paper": {
    "icon": "TP",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-report-management": {
    "icon": "RP",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-inquiry": {
    "icon": "IQ",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-affiliation-release": {
    "icon": "AR",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-ai-credit": {
    "icon": "AC",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  },
  "cat-admin-faq": {
    "icon": "FQ",
    "bg": "linear-gradient(135deg, #eaf1ff, #f6f9ff)",
    "color": "#204cff",
    "size": "30px"
  }
};

const hubCovers = {};
