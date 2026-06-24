const defaultLanguage = 'ko';
let currentLanguage = defaultLanguage;

const translations = {
  ko: {
    ui: {
      logo: 'LumiTeach Admin Guide',
      languageLabel: '언어 선택',
      homeTitle: '관리자 매뉴얼을 준비합니다',
      homeDesc: '관리자 화면을 기준으로 Notion HTML zip을 정리하고 매뉴얼 페이지로 구성합니다.',
      searchPlaceholder: '관리자 메뉴, 화면명, 작업명을 검색해보세요',
      categoryTitle: '전체 카테고리'
    },
    languageNames: {
      ko: '한국어',
      en: '영어',
      pt: '포르투갈어',
      es: '스페인어',
      ja: '일본어',
      vi: '베트남어'
    },
    fixed: {
      pageCount: '개의 페이지',
      documentLabel: '문서',
      categoryLabel: '카테고리',
      sectionLabel: '섹션',
      onThisPage: 'On this page',
      authorName: 'LumiTeach Team',
      updatedAt: '최근 업데이트: 2026.06.24',
      firstArticle: '첫 아티클입니다',
      lastArticle: '마지막 아티클입니다',
      noSearchResultsTitle: '검색 결과가 없습니다',
      noSearchResultsDesc: '다른 키워드로 다시 검색해보세요.',
      openCloseSuffix: ' 열기/닫기',
      menuOpen: '메뉴 열기',
      menuClose: '메뉴 닫기'
    }
  },
  en: {
    ui: {
      logo: 'LumiTeach Admin Guide',
      languageLabel: 'Select language',
      homeTitle: 'Prepare the admin manual',
      homeDesc: 'Organize Notion HTML zips and build manual pages around the admin console.',
      searchPlaceholder: 'Search admin menus, screens, or tasks',
      categoryTitle: 'All Categories'
    },
    languageNames: { ko: 'Korean', en: 'English', pt: 'Portuguese', es: 'Spanish', ja: 'Japanese', vi: 'Vietnamese' },
    fixed: {
      pageCount: ' pages',
      documentLabel: 'document',
      categoryLabel: 'Category',
      sectionLabel: 'Section',
      onThisPage: 'On this page',
      authorName: 'LumiTeach Team',
      updatedAt: 'Updated: June 24, 2026',
      firstArticle: 'This is the first article',
      lastArticle: 'This is the last article',
      noSearchResultsTitle: 'No results found',
      noSearchResultsDesc: 'Try another keyword.',
      openCloseSuffix: ' expand/collapse',
      menuOpen: 'Open menu',
      menuClose: 'Close menu'
    }
  },
  pt: {
    ui: {
      logo: 'Guia Admin LumiTeach',
      languageLabel: 'Selecionar idioma',
      homeTitle: 'Prepare o manual administrativo',
      homeDesc: 'Organize os zips HTML do Notion e construa páginas do manual para o console administrativo.',
      searchPlaceholder: 'Pesquise menus, telas ou tarefas administrativas',
      categoryTitle: 'Todas as categorias'
    },
    languageNames: { ko: 'Coreano', en: 'Inglês', pt: 'Português', es: 'Espanhol', ja: 'Japonês', vi: 'Vietnamita' },
    fixed: {
      pageCount: ' páginas',
      documentLabel: 'documento',
      categoryLabel: 'Categoria',
      sectionLabel: 'Seção',
      onThisPage: 'Nesta página',
      authorName: 'Equipe LumiTeach',
      updatedAt: 'Atualizado em: 24 de junho de 2026',
      firstArticle: 'Este é o primeiro artigo',
      lastArticle: 'Este é o último artigo',
      noSearchResultsTitle: 'Nenhum resultado encontrado',
      noSearchResultsDesc: 'Tente pesquisar outra palavra-chave.',
      openCloseSuffix: ' abrir/fechar',
      menuOpen: 'Abrir menu',
      menuClose: 'Fechar menu'
    }
  },
  es: {
    ui: {
      logo: 'Guía Admin LumiTeach',
      languageLabel: 'Seleccionar idioma',
      homeTitle: 'Prepara el manual administrativo',
      homeDesc: 'Organiza los zips HTML de Notion y crea páginas del manual para la consola administrativa.',
      searchPlaceholder: 'Busca menús, pantallas o tareas administrativas',
      categoryTitle: 'Todas las categorías'
    },
    languageNames: { ko: 'Coreano', en: 'Inglés', pt: 'Portugués', es: 'Español', ja: 'Japonés', vi: 'Vietnamita' },
    fixed: {
      pageCount: ' páginas',
      documentLabel: 'documento',
      categoryLabel: 'Categoría',
      sectionLabel: 'Sección',
      onThisPage: 'En esta página',
      authorName: 'Equipo de LumiTeach',
      updatedAt: 'Actualizado: 24 de junio de 2026',
      firstArticle: 'Este es el primer artículo',
      lastArticle: 'Este es el último artículo',
      noSearchResultsTitle: 'No se encontraron resultados',
      noSearchResultsDesc: 'Prueba con otra palabra clave.',
      openCloseSuffix: ' abrir/cerrar',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú'
    }
  },
  ja: {
    ui: {
      logo: 'LumiTeach Admin Guide',
      languageLabel: '言語を選択',
      homeTitle: '管理者マニュアルを準備します',
      homeDesc: 'Notion HTML zipを整理し、管理画面に沿ってマニュアルページを構成します。',
      searchPlaceholder: '管理メニュー、画面名、作業名で検索',
      categoryTitle: 'すべてのカテゴリー'
    },
    languageNames: { ko: '韓国語', en: '英語', pt: 'ポルトガル語', es: 'スペイン語', ja: '日本語', vi: 'ベトナム語' },
    fixed: {
      pageCount: 'ページ',
      documentLabel: 'ドキュメント',
      categoryLabel: 'カテゴリー',
      sectionLabel: 'セクション',
      onThisPage: 'このページ内',
      authorName: 'LumiTeach Team',
      updatedAt: '最終更新: 2026年6月24日',
      firstArticle: '最初の記事です',
      lastArticle: '最後の記事です',
      noSearchResultsTitle: '検索結果がありません',
      noSearchResultsDesc: '別のキーワードで検索してください。',
      openCloseSuffix: ' 開閉',
      menuOpen: 'メニューを開く',
      menuClose: 'メニューを閉じる'
    }
  },
  vi: {
    ui: {
      logo: 'Hướng dẫn Admin LumiTeach',
      languageLabel: 'Chọn ngôn ngữ',
      homeTitle: 'Chuẩn bị hướng dẫn quản trị',
      homeDesc: 'Sắp xếp các tệp zip HTML từ Notion và xây dựng trang hướng dẫn theo bảng điều khiển quản trị.',
      searchPlaceholder: 'Tìm menu, màn hình hoặc tác vụ quản trị',
      categoryTitle: 'Tất cả danh mục'
    },
    languageNames: { ko: 'Tiếng Hàn', en: 'Tiếng Anh', pt: 'Tiếng Bồ Đào Nha', es: 'Tiếng Tây Ban Nha', ja: 'Tiếng Nhật', vi: 'Tiếng Việt' },
    fixed: {
      pageCount: ' trang',
      documentLabel: 'tài liệu',
      categoryLabel: 'Danh mục',
      sectionLabel: 'Mục',
      onThisPage: 'Trong trang này',
      authorName: 'Đội ngũ LumiTeach',
      updatedAt: 'Cập nhật: 24/06/2026',
      firstArticle: 'Đây là bài viết đầu tiên',
      lastArticle: 'Đây là bài viết cuối cùng',
      noSearchResultsTitle: 'Không tìm thấy kết quả',
      noSearchResultsDesc: 'Hãy thử tìm bằng từ khóa khác.',
      openCloseSuffix: ' mở/đóng',
      menuOpen: 'Mở menu',
      menuClose: 'Đóng menu'
    }
  }
};

const nativeLanguageNames = {
  ko: '한국어',
  en: 'English',
  pt: 'Português',
  es: 'Español',
  ja: '日本語',
  vi: 'Tiếng Việt'
};

const translationTermMemory = {
  pt: [],
  es: [],
  ja: [],
  vi: [],
  en: []
};

// BEGIN GENERATED ADMIN TRANSLATIONS
const generatedAdminTranslations = {
  "en": {
    "manualTree": {
      "cat-admin-login-signup": {
        "title": "Login and Sign-up Request",
        "description": "How to sign in to LumiTeach Admin with a Google account, request administrator permission on first access, and set up Google OTP authentication."
      },
      "cat-admin-dashboard": {
        "title": "Home Dashboard",
        "description": "The Admin Home menu aggregates and presents data related to LumiTeach users and content. Use the key metrics to make better use of LumiTeach."
      },
      "cat-admin-member-management": {
        "title": "Member Information Management",
        "description": "Register the members who will use LumiTeach service and Admin. You can control member permissions and manage AI Credit."
      },
      "cat-admin-approval-permission": {
        "title": "Sign-up Approval and Permission Pre-registration",
        "description": "Institution verification is required to use LumiTeach Admin and the service. Administrators can approve or reject sign-up requests in Admin, or pre-register member accounts in advance."
      },
      "cat-admin-standard-management": {
        "title": "Standard Management",
        "description": "This is the first step for managing curriculum and content in LumiTeach Admin."
      },
      "cat-admin-curriculum-management": {
        "title": "Curriculum Management",
        "description": "You can structure your institution or company’s own curriculum and content for the LumiTeach system. Provide optimized content to users through a customized curriculum."
      },
      "cat-admin-lesson-activity": {
        "title": "Lesson Management: Lesson & Activity Management",
        "description": "The Lesson Management menu lets you register and manage Lessons and Activities aligned with the education curriculum. You can check and edit curriculum links, concept keywords, and metadata for registered Lessons."
      },
      "cat-admin-lesson-bulk-upload": {
        "title": "Lesson Management: Bulk Upload",
        "description": "Bulk Lesson upload lets you register multiple Lessons and Activities at once with a single Excel file. It is faster than entering Lessons one by one."
      },
      "cat-admin-lesson-ai-make": {
        "title": "Lesson Management: Create and Review Lessons with AI Make",
        "description": "With AI Make, AI automatically creates Lessons by uploading source materials such as PDF or PPT files. You can review generated Lessons in the Review tab, edit them, and approve them for publishing."
      },
      "cat-admin-lesson-recommendation": {
        "title": "Lesson Management: Recommendation Management",
        "description": "Curate registered Lessons according to the curriculum structure. Content registered in Recommendation Management appears on the LumiTeach service Home screen to improve accessibility."
      },
      "cat-admin-assessment-question": {
        "title": "Assessment Management: Question Management and Registration",
        "description": "Create and manage the questions that make up an Assessment."
      },
      "cat-admin-assessment-paper": {
        "title": "Assessment Management: Test Paper Management and Registration",
        "description": "Register and manage structured test papers by grouping questions aligned with the curriculum. Teachers can conveniently assign these test papers to students as assignments or tests in LumiTeach."
      },
      "cat-admin-report-management": {
        "title": "Report Management",
        "description": "Review content reported in the LumiTeach service and take appropriate action."
      },
      "cat-admin-inquiry": {
        "title": "1:1 Inquiry",
        "description": "If you encounter a problem or have a question while using LumiTeach service or Admin, use the 1:1 Inquiry menu."
      },
      "cat-admin-affiliation-release": {
        "title": "Affiliation Release",
        "description": "If you need to leave your current institution because of a transfer, resignation, or other reason, follow the affiliation release process."
      },
      "cat-admin-ai-credit": {
        "title": "AI Credit",
        "description": "LumiTeach AI features operate on a pay-per-credit model. This document explains how AI Credit works, which features deduct how much credit, and what to do when credit is insufficient."
      },
      "cat-admin-faq": {
        "title": "FAQ",
        "description": "This page explains the main features and handling procedures to check in the FAQ menu."
      }
    },
    "articles": {
      "cat-admin-login-signup": {
        "category": "LumiTeach Admin Guide",
        "title": "Login and Sign-up Request",
        "desc": "How to sign in to LumiTeach Admin with a Google account, request administrator permission on first access, and set up Google OTP authentication.",
        "note": "If a higher-level administrator has approved your permission in advance, you can access Admin directly without the permission request process.",
        "sections": [
          "Log in",
          "Sign-up request",
          "Google OTP authentication"
        ]
      },
      "cat-admin-dashboard": {
        "category": "LumiTeach Admin Guide",
        "title": "Home Dashboard",
        "desc": "The Admin Home menu aggregates and presents data related to LumiTeach users and content. Use the key metrics to make better use of LumiTeach.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Key alerts",
          "User insights",
          "Service insights",
          "1:1 Inquiry"
        ]
      },
      "cat-admin-member-management": {
        "category": "LumiTeach Admin Guide",
        "title": "Member Information Management",
        "desc": "Register the members who will use LumiTeach service and Admin. You can control member permissions and manage AI Credit.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Member types",
          "Member management",
          "Member withdrawal / suspension",
          "Affiliation release",
          "Check AI Credit status and grant credit"
        ]
      },
      "cat-admin-approval-permission": {
        "category": "LumiTeach Admin Guide",
        "title": "Sign-up Approval and Permission Pre-registration",
        "desc": "Institution verification is required to use LumiTeach Admin and the service. Administrators can approve or reject sign-up requests in Admin, or pre-register member accounts in advance.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Manage sign-up approval requests",
          "Pre-register permissions"
        ]
      },
      "cat-admin-standard-management": {
        "category": "LumiTeach Admin Guide",
        "title": "Standard Management",
        "desc": "This is the first step for managing curriculum and content in LumiTeach Admin.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "What are standards?",
          "Grade setup",
          "Subject setup",
          "Item setup"
        ]
      },
      "cat-admin-curriculum-management": {
        "category": "LumiTeach Admin Guide",
        "title": "Curriculum Management",
        "desc": "You can structure your institution or company’s own curriculum and content for the LumiTeach system. Provide optimized content to users through a customized curriculum.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Where is curriculum used?",
          "Register curriculum",
          "AI curriculum classification",
          "Manage curriculum"
        ]
      },
      "cat-admin-lesson-activity": {
        "category": "LumiTeach Admin Guide",
        "title": "Lesson Management: Lesson & Activity Management",
        "desc": "The Lesson Management menu lets you register and manage Lessons and Activities aligned with the education curriculum. You can check and edit curriculum links, concept keywords, and metadata for registered Lessons.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Check Lesson list",
          "Check Lesson details",
          "Edit Lesson",
          "Register Lesson"
        ]
      },
      "cat-admin-lesson-bulk-upload": {
        "category": "LumiTeach Admin Guide",
        "title": "Lesson Management: Bulk Upload",
        "desc": "Bulk Lesson upload lets you register multiple Lessons and Activities at once with a single Excel file. It is faster than entering Lessons one by one.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Bulk upload method"
        ]
      },
      "cat-admin-lesson-ai-make": {
        "category": "LumiTeach Admin Guide",
        "title": "Lesson Management: Create and Review Lessons with AI Make",
        "desc": "With AI Make, AI automatically creates Lessons by uploading source materials such as PDF or PPT files. You can review generated Lessons in the Review tab, edit them, and approve them for publishing.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Create Lessons with AI Make",
          "Review and approve Lessons"
        ]
      },
      "cat-admin-lesson-recommendation": {
        "category": "LumiTeach Admin Guide",
        "title": "Lesson Management: Recommendation Management",
        "desc": "Curate registered Lessons according to the curriculum structure. Content registered in Recommendation Management appears on the LumiTeach service Home screen to improve accessibility.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Manage recommended content",
          "Register recommendation: Topic 1",
          "Register recommendation: Topic 2"
        ]
      },
      "cat-admin-assessment-question": {
        "category": "LumiTeach Admin Guide",
        "title": "Assessment Management: Question Management and Registration",
        "desc": "Create and manage the questions that make up an Assessment.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Question management",
          "Question registration",
          "Question registration: individual",
          "Question registration: bulk upload"
        ]
      },
      "cat-admin-assessment-paper": {
        "category": "LumiTeach Admin Guide",
        "title": "Assessment Management: Test Paper Management and Registration",
        "desc": "Register and manage structured test papers by grouping questions aligned with the curriculum. Teachers can conveniently assign these test papers to students as assignments or tests in LumiTeach.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Test paper management",
          "Test paper registration: individual",
          "Test paper registration: bulk upload"
        ]
      },
      "cat-admin-report-management": {
        "category": "LumiTeach Admin Guide",
        "title": "Report Management",
        "desc": "Review content reported in the LumiTeach service and take appropriate action.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Reported content list",
          "Check reported content",
          "Reject report",
          "Deactivate reported content",
          "🚨 Content report guide and criteria"
        ]
      },
      "cat-admin-inquiry": {
        "category": "LumiTeach Admin Guide",
        "title": "1:1 Inquiry",
        "desc": "If you encounter a problem or have a question while using LumiTeach service or Admin, use the 1:1 Inquiry menu.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Submit an inquiry",
          "Check reply"
        ]
      },
      "cat-admin-affiliation-release": {
        "category": "LumiTeach Admin Guide",
        "title": "Affiliation Release",
        "desc": "If you need to leave your current institution because of a transfer, resignation, or other reason, follow the affiliation release process.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Release affiliation from Profile"
        ]
      },
      "cat-admin-ai-credit": {
        "category": "LumiTeach Admin Guide",
        "title": "AI Credit",
        "desc": "LumiTeach AI features operate on a pay-per-credit model. This document explains how AI Credit works, which features deduct how much credit, and what to do when credit is insufficient.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "About LumiTeach AI",
          "AI Credit grants and usage",
          "Manage AI Credit",
          "Credit refund and cancellation policy"
        ]
      },
      "cat-admin-faq": {
        "category": "LumiTeach Admin Guide",
        "title": "FAQ",
        "desc": "This page explains the main features and handling procedures to check in the FAQ menu.",
        "note": "Check based on the menu and button names actually used in the Admin screen.",
        "sections": [
          "Overview"
        ]
      }
    },
    "articleBodies": {
      "cat-admin-login-signup": [
        "Click **Continue with Google** on the first Admin screen.\n\n[[image:admin-login-signup/01.png|Continue with Google button on the first Admin screen]]\n\nWhen the Google sign-in screen opens, sign in with your Google account.\n\n[[image:admin-login-signup/02.png|Google account sign-in screen]]",
        "If this is your first time signing in to Admin, you need to request permission to access Admin. In the **Administrator Permission Approval Request** popup, enter your name and company/institution information.\n\n[[image:admin-login-signup/03.png|Administrator Permission Approval Request popup]]\n\n- **Name**: Enter your real name.\n- **Email**: Your Google account email is displayed automatically.\n- **Search company/institution**: Enter and search for your company or institution name.\n\nThe company name must exactly match the company name registered in the system. If the company name does not match and you cannot submit the request, contact a higher-level administrator.\n\nAfter requesting permission, a higher-level administrator must approve it before you can access Admin.\n\n[[callout:💡|Pre-approval by a higher-level administrator|If a higher-level administrator has **approved** your permission in advance, you can access Admin directly without the permission request process.]]",
        "LumiTeach Admin uses Google OTP two-factor authentication for security.\n\n### First sign-in — Set up OTP\n\nYou only need to set up OTP once during the first sign-in. For later sign-ins, enter the 6-digit verification code shown in the app.\n\n[[image:admin-login-signup/04.png|Google OTP setup and verification screen]]\n\n- Install the **Google Authenticator** app from the App Store or Play Store.\n- Open the **Google Authenticator** app and tap the **+** button at the bottom.\n- Select **Scan a QR code**, then scan the QR code shown on the Admin sign-in screen.\n- Enter the 6-digit verification code shown in the app to complete setup.\n\n### Later sign-ins — OTP authentication\n\n- Sign in with your Google account.\n- Open the **Google Authenticator** app and enter the 6-digit verification code displayed.\n\n[[callout:✅|For security, please check the following.|- You will be signed out automatically if there is no activity for 60 minutes after sign-in.\\n- Simultaneous sign-in on multiple devices with one account is not allowed.\\n- Be sure to sign out if you will be away for a long time.\\n- If you enter an incorrect OTP verification code 5 or more times, sign-in will be restricted for 5 minutes.]]"
      ],
      "cat-admin-dashboard": [
        "- Key alerts that require quick review and action are displayed. Click each item to check details.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Description%22%5D%2C%5B%22Members%20pending%20sign-up%20approval%22%2C%22Members%20who%20requested%20institution%20verification%20to%20use%20the%20LumiTeach%20premium%20service%2C%20and%20administrators%20who%20requested%20institution%20verification%20to%20access%20LumiTeach%20Admin%22%5D%2C%5B%22Reported%20content%20count%22%2C%22Content%20published%20in%20LumiTeach%20Explore%20that%20has%20been%20reported%22%5D%2C%5B%22Members%20nearly%20out%20of%20credits%20%2F%20with%20insufficient%20credits%22%2C%22Institution%20members%20who%20have%20used%20all%20AI%20Credit%20or%20whose%20remaining%20balance%20is%20under%2010%25%22%5D%5D%7D]]",
        "- The User Insights area displays total member counts and visitor statistics.\n\n- Total members (cumulative), new members, withdrawn members\n\n> Check daily, monthly, and yearly member trends.\n\n- Number of LumiTeach users and Admin visitors\n\n> The latest aggregated data at the time you view the dashboard is displayed.",
        "- You can check how members in your institution are using the LumiTeach service.\n\n- Number of classes started in Interaction, Battle Mode, and Presentation modes\n\n[[table:%7B%22rows%22%3A%5B%5B%22Type%22%2C%22Description%22%5D%2C%5B%22Self%20Study%22%2C%22Number%20of%20times%20a%20Lesson%20was%20assigned%20as%20an%20Assignment%20in%20Individual%2C%20Challenge%2C%20or%20Flash%20Card%20format%22%5D%2C%5B%22Assessment%22%2C%22Number%20of%20times%20an%20Assessment%20was%20assigned%20as%20an%20Assignment%22%5D%5D%7D]]\n\n- Number of times members in your institution created and saved Lessons.\n\n- Average class duration per class\n\n> 📌 **Aggregation criteria - Interaction · Battle Mode**: Only classes with at least 1 student participant are included in the average time. - **Presentation**: Time from Start Lesson to End Lesson is included in the average.",
        "- You can check the most recently submitted 1:1 inquiries."
      ],
      "cat-admin-member-management": [
        "[[table:%7B%22rows%22%3A%5B%5B%22%22%2C%22%2A%2ATeachers%2A%2A%22%2C%22%2A%2AAdministrators%2A%2A%22%5D%2C%5B%22Users%22%2C%22Use%20the%20LumiTeach%20service%22%2C%22Use%20LumiTeach%20Admin%22%5D%2C%5B%22Main%20role%22%2C%22Create%20teaching%20materials%20and%20run%20Lessons%2FAssignments%22%2C%22Manage%20curriculum%20and%20content%2C%20manage%20members%2C%20and%20perform%20other%20administrative%20tasks%22%5D%5D%7D]]\n\nTo use the LumiTeach premium service and Admin, **institution verification** is required.\n\n[[callout:💡||If you need to perform both teacher and administrator roles, complete institution verification separately in the service and in Admin.]]",
        "You can view and manage the member list. To check detailed information for a specific member, click **Action (⋯)** > **[Member Information Details]**.\n\nThe actions available for **teacher members** are as follows.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Action%22%2C%22Description%22%5D%2C%5B%22Approve%2FReject%20sign-up%22%2C%22Approve%20or%20reject%20sign-up%20for%20teacher%20members%20who%20requested%20institution%20verification.%22%5D%2C%5B%22Withdraw%22%2C%22Withdraw%20a%20teacher%20member%20from%20the%20LumiTeach%20service.%22%5D%2C%5B%22Check%20member%20information%20details%22%2C%22Check%20the%20member%27s%20basic%20information%20and%20activity%20history.%22%5D%2C%5B%22Release%20affiliation%22%2C%22Release%20the%20member%27s%20affiliation%20due%20to%20resignation%2C%20affiliation%20change%2C%20or%20similar%20reasons.%22%5D%2C%5B%22Check%20AI%20Credit%20status%20and%20grant%20additional%20credits%22%2C%22Check%20the%20member%27s%20credit%20balance%20and%20grant%20additional%20credits.%22%5D%5D%7D]]\n\nThe actions available for **administrator members** are as follows.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Action%22%2C%22Description%22%5D%2C%5B%22Approve%2FReject%20sign-up%22%2C%22Approve%20or%20reject%20sign-up%20for%20administrator%20members%20who%20requested%20institution%20verification.%22%5D%2C%5B%22Suspend%20use%22%2C%22Suspend%20an%20administrator%20member%27s%20access%20to%20Admin.%22%5D%2C%5B%22Check%20member%20information%20details%22%2C%22Check%20the%20member%27s%20basic%20information%20and%20activity%20history.%22%5D%2C%5B%22Release%20affiliation%22%2C%22Release%20the%20member%27s%20affiliation%20due%20to%20resignation%2C%20affiliation%20change%2C%20or%20similar%20reasons.%22%5D%2C%5B%22Check%20AI%20Credit%20status%22%2C%22Check%20the%20member%27s%20credit%20balance.%22%5D%5D%7D]]",
        "- Withdrawn teacher members cannot use the LumiTeach service.\n\n- Suspended administrator members cannot use Admin.\n\n[[callout:💡||Teacher members can withdraw directly.\\nFor administrator members, a higher-level or peer administrator must suspend use.]]",
        "You can release a specific member's affiliation due to resignation, affiliation change, or similar reasons.\n\n- A **teacher member** whose affiliation is released is converted to a free member of the LumiTeach service.\n\n- An **administrator member** whose affiliation is released can no longer access Admin.",
        "If a member requests additional AI Credit, the request appears in the member management list. Click **[Check Request]** to review the request details.\n\n**Approve additional grant**\n\nSelect the number of credits to grant and approve the request. The selected amount is deducted from the affiliated company's shared credit pool and granted to the requesting teacher account.\n\n[[callout:⚠️||Credits that have already been granted cannot be recovered. Be sure to check the quantity before granting.]]\n\n**Reject additional grant**\n\nAfter reviewing the request, you can reject it if approval is difficult."
      ],
      "cat-admin-approval-permission": [
        "- In the **[Key Alerts]** area of Admin Home, check the number of members pending sign-up approval.\n\n- Go to **Member Management > Member List**.\n\n- For a member whose permission/status is Pending, click **Action (⋯)** to approve or reject the request.\n\n[[callout:✅||A single account can request teacher and administrator permissions separately. Approve or reject teacher and administrator permissions individually.]]",
        "Before a user signs up, you can pre-register the account and grant permissions. A pre-registered account can use the service immediately after sign-up without a separate approval request.\n\nClick **[Permission Pre-registration]** at the top right of **Member Management > Member List** to start.\n\n**Bulk registration**\n\nYou can register multiple accounts at once with the same affiliation and permission.\n\n- Enter the email addresses of the teacher or administrator accounts to register.\n\n- When entering multiple accounts, separate them with a space, Enter, or comma.\n\n[[image:admin-approval-permission/01.png|Screen example]]\n\n**Individual registration**\n\nYou can register multiple accounts at once with different affiliations and permissions.\n\n- Enter the email addresses of the teacher or administrator accounts to register.\n\n- Set each account's affiliation and permission individually.\n\n> 📌 You can register up to 50 accounts at a time.\n\n> ⚠️ The pre-registered email address must match the Google account used for the actual sign-up to allow immediate use without an approval request. If the email address is different, a separate approval process is required."
      ],
      "cat-admin-standard-management": [
        "In Standard Management, you define **Grade, Subject, and Item Type**. The information registered here is used across LumiTeach Admin and the service.",
        "Register Grade information to use in the LumiTeach service.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Field%22%2C%22Description%22%2C%22Example%22%5D%2C%5B%22%60Education_Lv%60%22%2C%22Grade%20name%22%2C%22Grade%201%2C%20Grade%202%2C%20Grade%2012%22%5D%2C%5B%22%60Education_Lv_ID%60%22%2C%22Unique%20ID%20corresponding%20to%20the%20Grade%22%2C%22Grade%2012%20%E2%86%92%20%6012%60%22%5D%5D%7D]]\n\n> 📌 The `Education_Lv_ID` setting range is **K-12**, and duplicate IDs cannot be used.",
        "Register Subject information to use in the LumiTeach service.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Field%22%2C%22Description%22%2C%22Example%22%5D%2C%5B%22%60Subject_title%60%22%2C%22Subject%20name%22%2C%22Mathematics%2C%20English%2C%20Science%22%5D%5D%7D]]",
        "Item Type refers to each element that makes up the curriculum.\n\n> Example: school level, grade, unit, sub-unit, achievement standard, area/topic, etc.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Field%22%2C%22Description%22%5D%2C%5B%22%60Item_Title%60%22%2C%22Name%20of%20the%20curriculum%20component%22%5D%2C%5B%22%60Order%60%22%2C%22Set%20according%20to%20the%20hierarchy%20of%20the%20curriculum%20structure.%22%5D%2C%5B%22%60Auto-Tagging%60%22%2C%22Check%20this%20for%20items%20that%20do%20not%20belong%20to%20the%20hierarchy%20and%20are%20used%20as%20content%20metadata.%22%5D%5D%7D]]\n\n[[callout:💡||The order of Item Types must reflect the hierarchy of the curriculum. For items that are not included in the hierarchy, such as difficulty level or type tags, check **Auto-Tagging** and use them as metadata.]]"
      ],
      "cat-admin-curriculum-management": [
        "Registered curricula in Admin are linked in real time with the **Curriculum** menu in the user service and visualized there. After structuring a curriculum, create appropriate Lessons and Assessments to provide teaching materials to affiliated teachers.\n\n### Term definitions\n\n[[table:%7B%22rows%22%3A%5B%5B%22Term%22%2C%22Description%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%22%2C%22The%20education%20curriculum%20owned%20by%20a%20company%20or%20institution%22%5D%2C%5B%22%2A%2ASubject%2A%2A%22%2C%22Subject%20classification%20%28e.g.%20Mathematics%2C%20Science%2C%20English%29%22%5D%2C%5B%22%2A%2AEducation%20Level%2A%2A%22%2C%22Learning%20stage%20or%20grade%22%5D%2C%5B%22%2A%2AItem%20Type%2A%2A%22%2C%22A%20type%20that%20distinguishes%20the%20elements%20and%20characteristics%20that%20make%20up%20a%20curriculum%20%28e.g.%20achievement%20standard%2C%20unit%2C%20school%20level%29%22%5D%2C%5B%22%2A%2AItem%2A%2A%22%2C%22Actual%20data%20for%20each%20Item%20Type%20%28e.g.%20%5C%22Can%20add%20three-digit%20numbers%20without%20regrouping%5C%22%29%22%5D%5D%7D]]",
        "Curriculum registration proceeds in the order **Step 1: Basic Information → Step 2: Item Entry**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Step%22%2C%22Input%20items%22%5D%2C%5B%22%2A%2AStep%201%3A%20Basic%20Information%2A%2A%22%2C%22Curriculum%20name%2C%20subject%2C%20publisher%2C%20version%2C%20memo%2Fdescription%2C%20etc.%22%5D%2C%5B%22%2A%2AStep%202%3A%20Items%2A%2A%22%2C%22Enter%20actual%20data%20by%20Item%20Type%20and%20set%20the%20hierarchy%20structure%20%28SmartLevel%29%22%5D%5D%7D]]\n\n### Step 1: Enter basic information\n\nEnter the basic information for the curriculum.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Required%22%2C%22Description%22%5D%2C%5B%22Curriculum%20name%22%2C%22%E2%9C%85%22%2C%22Name%20of%20the%20curriculum%20that%20teachers%20can%20identify%20in%20the%20service%22%5D%2C%5B%22Subject%22%2C%22%E2%9C%85%22%2C%22Select%20from%20subjects%20pre-registered%20in%20Standard%20Management%22%5D%2C%5B%22Publisher%22%2C%22%22%2C%22Name%20of%20the%20company%20or%20managing%20institution%20that%20published%20the%20curriculum%22%5D%2C%5B%22Version%22%2C%22%22%2C%22Publication%20year%20or%20version%20of%20the%20curriculum%22%5D%2C%5B%22Description%22%2C%22%22%2C%22Additional%20description%20of%20the%20curriculum%22%5D%5D%7D]]\n\n[[image:admin-curriculum-management/03.png|Screen example]]\n\n### Step 2: Enter items\n\nAn Item is the actual data unit that makes up the curriculum. Detailed subjects, unit names, and achievement standards are examples of Items.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Column%20name%22%2C%22Required%22%2C%22Description%22%5D%2C%5B%22%2A%2AItem_content%2A%2A%22%2C%22Required%22%2C%22The%20actual%20content%20of%20the%20Item.%22%5D%2C%5B%22%2A%2AhumanCodingScheme%2A%2A%22%2C%22Optional%22%2C%22The%20official%20code%20used%20in%20the%20curriculum.%20%28Example%3A%20%60A.1%60%29%22%5D%2C%5B%22%2A%2Asmartlevel%2A%2A%22%2C%22Required%22%2C%22A%20number%20that%20represents%20the%20parent-child%20hierarchy%20between%20Items.%22%5D%2C%5B%22%2A%2Aitemtype_title%2A%2A%22%2C%22Required%22%2C%22The%20type%20of%20the%20Item.%20%28Examples%3A%20school%20level%2C%20grade%2C%20semester%2C%20unit%2C%20sub-unit%2C%20achievement%20standard%29%22%5D%2C%5B%22%2A%2AeducationLevel%2A%2A%22%2C%22Optional%22%2C%22The%20grade%20code%20to%20which%20the%20Item%20belongs.%20%28Example%3A%20%6011%60%20%E2%86%92%20Grade%2011%29%22%5D%5D%7D]]\n\n[[image:admin-curriculum-management/01.png|Screen example]]\n\n[[callout:⚠️||**If required items are blank, or if** `**itemtype_title**` **does not match a name pre-registered in Standard Management, an error occurs during upload.**\\nBe sure to check before uploading.]]\n\n### What is the hierarchy structure (SmartLevel)?\n\n`smartlevel` is a key column that expresses the parent-child relationship between Items with numbers. Steps are separated by `.` (period), and the depth of the number represents the hierarchy.\n\n[[callout:📌||A child item is recognized only when the parent item number is included. Duplicate `smartlevel` numbers, child items without a parent item, and circular structures are not allowed.]]\n\n### Download/import template\n\n- Click **[Import]** at the top right of the bulk registration page.\n\n- Click **[Download template]** to download the Excel template.\n\n- After completing the template, click **[Import]** again to upload the file.\n\n### Temporary save\n\n- If you need to stop while working, you can temporarily save your progress.\n\n- Click **[Temporary Save]** at the top right.\n\n[[callout:⚠️||LumiTeach Admin **does not automatically save file changes** while you are preparing bulk registration data.]]",
        "Using AI Classification, you can automatically organize the item entry template simply by attaching a curriculum document.\n\n- Click **[AI Classification]** at the top right of the Step 2 screen.\n\n- Attach the curriculum document you want to register and click **[Register]**.\n\n[[image:admin-curriculum-management/02.png|Screen example]]\n\n[[callout:⚠️||If content has already been entered in Step 2, it will be replaced by the AI analysis result and cannot be restored. AI Classification is a tool that helps create a draft curriculum registration template. AI-generated results may contain errors, so review the content carefully before approving.]]",
        "Completed curricula can be checked and managed by clicking **[Details]**.\n\n**Switch active/inactive**\n\n[[table:%7B%22rows%22%3A%5B%5B%22Status%22%2C%22Description%22%5D%2C%5B%22%2A%2AActive%2A%2A%22%2C%22The%20curriculum%20is%20shown%20in%20the%20LumiTeach%20service%2C%20and%20users%20can%20view%20and%20use%20its%20content.%22%5D%2C%5B%22%2A%2AInactive%2A%2A%22%2C%22The%20curriculum%20and%20connected%20Lesson%2FAssessment%20content%20are%20not%20shown%20in%20the%20LumiTeach%20service.%22%5D%5D%7D]]\n\nYou can edit the curriculum basic information and item data at any time."
      ],
      "cat-admin-lesson-activity": [
        "When you enter the Lesson Management menu, you can view the list of registered Lessons.",
        "Click a Lesson name in the list, or click the detail information button on the right to open the detail information modal for that Lesson.\n\nYou can check the following information in the detail information modal.\n\n**Basic information (left panel)**\n\n- **Country, company name**: Institution/company to which the Lesson belongs\n\n- **Item ID**: Detailed item in the connected curriculum\n\n- **Curriculum**: Connected curriculum\n\n- **Grade**\n\n- **Lesson name**\n\n- **Lesson order**: Lesson order within the curriculum\n\n**Concepts and standards (top-right panel)**\n\n- **Concepts**: List of key concept keywords covered in this Lesson\n\n- **Metadata**: Metadata items registered in Standard Management\n\n**Lesson thumbnail (bottom-right panel)**\n\n- If no separate image is registered, the **first Activity screen on page 1 is automatically set as the thumbnail** when saved or approved.\n\n- If an image was uploaded manually, that image is kept without automatic updates.",
        "Click **Edit Lesson** at the bottom of the detail information modal to move to the Lesson editing screen.\n\nOn the editing screen, you can perform the following actions.\n\n- Edit Activity content in the Lesson\n\n- Change the Activity order\n\n- Add a new Activity\n\n- Save your work",
        "Click the registration button at the top right of the list screen to register a new Lesson.\n\nThere are two registration methods below. Refer to each detailed guide for the registration method.\n\n- Bulk upload\n\n- AI Make"
      ],
      "cat-admin-lesson-bulk-upload": [
        "### Step 1: Download the Excel template\n\nOn the Admin page, go to the **Lesson bulk upload screen**, then click **Import > Download template** to download the Excel file.\n\n⚠️ Be sure to use the provided template. If you arbitrarily add or delete columns, an upload error may occur.\n\n### Step 2: Fill out the Excel template\n\nYou can either **enter data directly** in the web grid template or fill out an Excel file and **Import** it.\n\n### Method A: Enter directly in the web grid\n\nClick each cell and enter Lesson and Activity data directly.\n\n- **Add Row Above / Add Row Below**: Adds a row above or below the selected row.\n\n- **Delete Selected Row**: Deletes the selected row.\n\n### Method B: Import an Excel file\n\n- Click **Import** at the top right.\n\n- Drag and drop the completed file into the popup upload area, or click **SELECT FILE** to attach it.\n\n- Click **Submit** to load the data into the web grid.\n\n> Supported formats: XLSX, XLS / Max 10 MB\n\n### How to fill out the template\n\nEach row represents one Activity. Activities that belong to the same Lesson must repeat the **same Lesson information**.\n\n### Basic structure example\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item_ID%22%2C%22Lesson_order%22%2C%22Lesson_title%22%2C%22Activity_order%22%2C%22Activity_type%22%2C%22Activity_title%22%5D%2C%5B%22ITEM001%22%2C%221%22%2C%22First%20Lesson%22%2C%221%22%2C%22text%20only%20%28G%29%22%2C%22Today%27s%20learning%20goal%22%5D%2C%5B%22ITEM001%22%2C%221%22%2C%22First%20Lesson%22%2C%222%22%2C%22true%20or%20false%20%28Q%29%22%2C%22Which%20of%20the%20following%20is%20correct%3F%22%5D%2C%5B%22ITEM001%22%2C%222%22%2C%22Second%20Lesson%22%2C%221%22%2C%22multiple%20choice%20%28Q%29%22%2C%22Choose%20the%20correct%20answer%22%5D%5D%7D]]\n\n### Column descriptions\n\n### Basic Lesson information\n\n[[table:%7B%22rows%22%3A%5B%5B%22Column%20name%22%2C%22Required%22%2C%22Description%22%5D%2C%5B%22Item_ID%22%2C%22%E2%9C%85%20Required%22%2C%22ID%20of%20the%20Item%20the%20Lesson%20belongs%20to.%20Only%20IDs%20registered%20in%20Curriculum%20Management%20can%20be%20used.%22%5D%2C%5B%22Lesson_order%22%2C%22%E2%9C%85%20Required%22%2C%22Lesson%20order%20%28starts%20from%201%2C%20numbers%20only%29%22%5D%2C%5B%22Lesson_title%22%2C%22%E2%9C%85%20Required%22%2C%22Lesson%20title%20%28up%20to%20100%20characters%29%22%5D%2C%5B%22Lesson_image%22%2C%22Optional%22%2C%22Representative%20Lesson%20image.%20Only%20one%20image%20can%20be%20uploaded%20per%20Lesson.%22%5D%2C%5B%22Lesson_objective%22%2C%22Optional%22%2C%22Lesson%20learning%20objective%22%5D%5D%7D]]\n\n### Basic Activity information\n\n[[table:%7B%22rows%22%3A%5B%5B%22Column%20name%22%2C%22Required%22%2C%22Description%22%5D%2C%5B%22Activity_order%22%2C%22%E2%9C%85%20Required%22%2C%22Activity%20order%20%28starts%20from%201%2C%20numbers%20only%29%22%5D%2C%5B%22Activity_type%22%2C%22%E2%9C%85%20Required%22%2C%22Activity%20type%20%28see%20the%20list%20below%29%22%5D%2C%5B%22Activity_color%22%2C%22Optional%22%2C%22Background%2Ffont%20color.%20If%20left%20blank%2C%20Black%20%26%20White%20is%20applied.%22%5D%2C%5B%22Activity_title%22%2C%22%E2%9C%85%20Required%22%2C%22Activity%20title%20or%20question%20%28up%20to%2050%20characters%29%22%5D%2C%5B%22Activity_description%22%2C%22Optional%22%2C%22Activity%20description%20%28up%20to%2080%20characters%29%22%5D%2C%5B%22Activity_image%22%2C%22Optional%22%2C%22Activity%20image%22%5D%5D%7D]]\n\nActivity types are divided into 4 main categories.\n\n### General content (G)\n\nA screen that shows learning content. Place text, images, and other content without entering a separate answer.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Type%22%2C%22Description%22%5D%2C%5B%22text%20only%20%28G%29%22%2C%22Displays%20text%20only%22%5D%2C%5B%22text%20%26%20text%20%28G%29%22%2C%22Displays%20two%20text%20blocks%20side%20by%20side%22%5D%2C%5B%22image%20only%20%28G%29%22%2C%22Displays%20image%20only%22%5D%2C%5B%22text%20top%20%28G%29%22%2C%22Text%20on%20top%2C%20image%20below%22%5D%2C%5B%22image%20top%20%28G%29%22%2C%22Image%20on%20top%2C%20text%20below%22%5D%2C%5B%22image%20middle%20%28G%29%22%2C%22Image%20between%20text%20blocks%22%5D%2C%5B%22image%20left%20%28G%29%22%2C%22Image%20on%20the%20left%2C%20text%20on%20the%20right%22%5D%2C%5B%22image%20right%20%28G%29%22%2C%22Image%20on%20the%20right%2C%20text%20on%20the%20left%22%5D%5D%7D]]\n\n### External content (E)\n\nAn Activity that embeds an external file or link.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Type%22%2C%22Description%22%2C%22Required%20column%22%5D%2C%5B%22webviewer%20%28E%29%22%2C%22Embeds%20a%20website%20URL%22%2C%22Activity_url%22%5D%2C%5B%22Youtube%20%28E%29%22%2C%22Embeds%20a%20YouTube%20video%22%2C%22Activity_url%22%5D%2C%5B%22document%20%28E%29%22%2C%22Attaches%20a%20document%20file%22%2C%22Activity_document%20%28pdf%2C%20doc%2C%20docx%2C%20pptx%2C%20ppt%20%2F%20max%20500%20MB%29%22%5D%2C%5B%22sound%20%28E%29%22%2C%22Attaches%20an%20audio%20file%22%2C%22Activity_sound%20%28mp3%20%2F%20max%2020%20MB%29%22%5D%5D%7D]]\n\n### Quiz (Q)\n\nAn Activity where learners enter or select an answer.\n\n### true or false (Q) — OX quiz\n\n- Enter the answer in the **TF_correct_answer** column (✅ Required)\n\n- Example: O or X\n\n### short answer (Q) — Short answer\n\n- Enter the answer in the **SA_correct_answer** column (✅ Required)\n\n- If there are multiple acceptable answers, separate them with commas (,).\n\n- Example: apple, 苹果, manzana\n\n### multiple choice (Q) — Multiple choice\n\n- **MC_type**: Select text or image (✅ Required)\n\n- **MC_correct_answer**: Enter the correct choice number (✅ Required). Separate multiple correct answers with commas.\n\n- Example: 1 or 1,3\n\n- **MC_option1 ~ MC_option5**: Enter choice content (minimum 2 required, maximum 50 characters)\n\n- For image type, upload images to MC_option1_image ~ MC_option5_image.\n\n### open-ended (Q) — Open-ended\n\n- **OE_correct_answer**: Enter a sample answer (Optional)\n\n### fill in the blank (Q) — Fill in the blank\n\n- In the **Activity_title** column, wrap the word to make blank with [ ].\n\n- Example: Apple is [apple] in English.\n\n### sequencing (Q) — Sequencing\n\n- **SQ_type**: Select text or image (✅ Required)\n\n- **SQ_option1 ~ SQ_option5**: Choice content (minimum 2 required)\n\n- **SQ_option1_seq ~ SQ_option5_seq**: Enter the correct order number for each choice (✅ Required)\n\n- Example: option1_seq=2, option2_seq=1 (option2 first, option1 second)\n\n### matching (Q) — Matching\n\n- **MA_type**: Select text or image (✅ Required)\n\n- **MA_correct_answer**: Enter correct matching pairs in number-letter format (✅ Required)\n\n- Example: 1-a,2-b,3-c\n\n- **MA_option1 ~ MA_option4**: Upper choices (numbers 1-4)\n\n- **MA_option_a ~ MA_option_d**: Lower choices (letters a-d)\n\n### sorting (Q) — Sorting\n\n- **SR_type**: Select text or image (✅ Required)\n\n- **SR_groupA**: Group A title (✅ Required, max 30 characters)\n\n- **SR_groupB**: Group B title (✅ Required, max 30 characters)\n\n- **SR_option1 ~ SR_option5**: Choice content (minimum 2 required)\n\n- **SR_option1_group ~ SR_option5_group**: Enter the group each choice belongs to (✅ Required)\n\n- Input value: Group A or Group B\n\n### Opinion/Discussion (D)\n\nAn Activity that collects learners' opinions. There is no correct answer; only questions and choice options are set.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Type%22%2C%22Description%22%2C%22Required%20column%22%5D%2C%5B%22vote%20%28D%29%22%2C%22Vote%22%2C%22Vote_option1%20~%20Vote_option5%20%28minimum%202%29%22%5D%2C%5B%22traffic%20light%20%28D%29%22%2C%22Traffic%20light%20%28check%20understanding%29%22%2C%22No%20separate%20choice%20input%20required%22%5D%2C%5B%22agree-disagree%20%28D%29%22%2C%22Agree%2Fdisagree%20opinion%22%2C%22No%20separate%20choice%20input%20required%22%5D%2C%5B%22opinion%20scale%20%28D%29%22%2C%22Opinion%20scale%22%2C%22No%20separate%20choice%20input%20required%22%5D%5D%7D]]\n\n### Idea board (I)\n\nAn Activity where learners freely write ideas. There is no correct answer; only the question is set.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Type%22%2C%22Description%22%2C%22Required%20column%22%5D%2C%5B%22brainstorming%20%28I%29%22%2C%22Brainstorming%22%2C%22Enter%20Activity_title%20only.%20No%20separate%20choice%20input%20required.%22%5D%2C%5B%22whiteboard%20%28I%29%22%2C%22Whiteboard%22%2C%22Enter%20Activity_title%20only.%20No%20separate%20choice%20input%20required.%22%5D%5D%7D]]\n\n### Activity_color — Color options\n\nFor background/font color, enter one of the following values exactly.\n\n`Black&White` / `Red` / `Orange` / `Yellow` / `Green` / `Blue` / `Purple` / `Pink`\n\n> If left blank, `Black&White` is applied automatically.\n\n### Step 3: Attach files\n\nImages, documents, and audio files cannot be imported through the Excel template and must be **attached directly in the web grid**. Click each cell to attach the file.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Column%22%2C%22Description%22%5D%2C%5B%22%2A%2AActivity_image%2A%2A%22%2C%22Attach%20Activity%20image%20file%2C%20max%201%20file%2C%2020%20MB%20or%20less%22%5D%2C%5B%22%2A%2AActivity_document%2A%2A%22%2C%22Attach%20Activity%20document%20file%2C%20max%201%20file%2C%2020%20MB%20or%20less%22%5D%2C%5B%22%2A%2AActivity_sound%2A%2A%22%2C%22Attach%20Activity%20audio%20file%2C%20max%201%20file%2C%2020%20MB%20or%20less%22%5D%2C%5B%22%2A%2ALesson_image%2A%2A%22%2C%22Attach%20Lesson%20thumbnail%20image%20file%2C%20max%201%20file%2C%2020%20MB%20or%20less.%20If%20no%20thumbnail%20image%20is%20registered%2C%20the%20first%20Activity%20is%20displayed%20as%20the%20thumbnail.%22%5D%5D%7D]]\n\n### Step 4: Save draft\n\nIf you need to leave or stop while working, click **Save Draft** to temporarily save the data you are entering.\n\n### Step 5: Submit\n\nWhen data entry is complete, click **Submit** to complete registration.\n\n> ⚠️ If there are errors on submission, an error message is displayed in the relevant cell. Check the message, correct the content, and submit again."
      ],
      "cat-admin-lesson-ai-make": [
        "### Step 1: Run AI Make\n\nClick **AI Make** at the top of the Lesson editing screen.\n\n### Step 2: Set basic information\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Description%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%20%28Required%29%22%2C%22Select%20the%20curriculum%20to%20apply%20to%20the%20Lesson.%22%5D%2C%5B%22%2A%2AGrade%2A%2A%20%28Required%29%22%2C%22Select%20the%20target%20grade.%22%5D%2C%5B%22%2A%2ALanguage%2A%2A%20%28Optional%29%22%2C%22Select%20the%20content%20extraction%20language.%22%5D%5D%7D]]\n\n### Step 3: Set Auto-tagging\n\nThis function automatically tags **concept keywords** and **metadata** for the generated Lesson.\n\n- **Use**: After analyzing the Lesson, AI automatically tags concept keywords and metadata. (AI Credit is deducted)\n\n- **Do not use**: Skips Auto-tagging.\n\n### Step 4: Attach source material\n\nDrag and drop the file, or click the file selection button to attach the source material.\n\n> Supported formats: pdf, doc, docx, ppt, pptx / File size limit: 100 MB per file\n\n### Step 5: Set Lesson categories\n\nIf you divide the source material into multiple Lessons, enter each Lesson's page range and number of Activities to generate.\n\n- If no category value is set, the entire source material is generated as **one Lesson**.\n\n- You can add Lesson categories with the **+ Add Lesson Category** button.\n\n- Click **AI Classification** to let AI analyze the source material and automatically classify Lesson page ranges. You can also edit them manually afterward.\n\n### Step 6: Start generation\n\nClick **Create**. When generation starts, you can check progress in the layer at the bottom right of the screen. You can freely use other Admin functions while generation is in progress.",
        "### Check the Review tab\n\nWhen AI Lesson generation is complete, check the list of generated Lessons in the **[Review]** tab.\n\n### Check details\n\nClick a generated Lesson name or the detail information icon to check details.\n\n- If Auto-tagging was applied, **concept keywords** and **metadata** are entered automatically. You can edit them as needed.\n\n- Set **Item ID** to specify the item to which the Lesson will be mapped.\n\n- Enter the **Lesson order**.\n\n### Review and edit Lesson content\n\nClick **Edit Lesson** to check the AI-generated Lesson content. Edit the necessary parts and save.\n\n### Approve and publish\n\nWhen review is complete, click **[Approve]**. The Lesson is published immediately after approval.\n\n[[callout:⚠️||Notes\n- If the source material contains little information, content may be duplicated or simplified. For best quality, set the basic information thoroughly and adjust the number of Activity generation pages appropriately.\n- AI Make is a tool that helps create drafts. AI-generated results may contain errors, so review the content carefully before approving.\n- AI Credit is deducted when using Auto-tagging and AI Make.]]"
      ],
      "cat-admin-lesson-recommendation": [
        "- Click **Curriculum/Content Management > Lesson Management > Recommendation Management**.\n\n- On the Recommendation Management screen, you can view and manage registered recommended content (Recommendation Topic 1, Recommendation Topic 2).\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Description%22%5D%2C%5B%22%2A%2ARecommendation%20Topic%201%2A%2A%22%2C%22Active%20or%20Inactive%20status%20of%20the%20first%20recommendation%20area%22%5D%2C%5B%22%2A%2ARecommendation%20Topic%202%2A%2A%22%2C%22Active%20or%20Inactive%20status%20of%20the%20second%20recommendation%20area%22%5D%2C%5B%22%2A%2ALast%20modified%20date%2A%2A%22%2C%22Date%20when%20the%20recommendation%20setting%20was%20last%20updated%20%28yyyy-mm-dd%29%22%5D%5D%7D]]\n\n### Check recommendation details\n\n- Click the **↗ icon** in the **[Details]** column of the list to open the detail page in a **new window**.\n\n- On the detail page, you can check the visibility target, Topic 1, and Topic 2 information.\n\n- Click **[View topics/descriptions by language]** in each topic area to check the title and description by language in a popup.\n\n### Edit recommendation settings\n\n- Click **[Edit]** at the top right of the detail page to move to the edit page.",
        "- Click **[New Registration]** at the top right of the recommendation list screen.\n\n### Enter topic title (register translations by language)\n\n- Click **[Edit]** to open the **Edit Recommendation Topic 1 Translation** modal.\n\n- In the modal, enter the topic title for each language.\n\n- Click **[Add Translation]** to add a language.\n\n[[callout:⚠️||If translation data is missing for the language selected by the user in the LumiTeach service, the translation key may appear as-is.]]\n\n### Add connected item (Item ID)\n\n- Click **[+ Add Item ID]** to open the **Add Item ID** modal.\n\n- Select in the order Company → Curriculum, then search.\n\n- You can add up to **4 items**.\n\n### Change item order and delete\n\n- Use the **up/down arrow (↕)** button on the left of each item row to change the order.\n\n- Click the **🗑️ delete icon** on the right of an item row to delete that item.",
        "- Topic 2 is configured in the same way as Topic 1.\n\n### Difference from Topic 1\n\n- In the **[Edit]** modal, enter not only the **title**, but also the connected **description for each Item ID**.\n\n- You can add up to **2 connected items**.\n\nAfter entering all items, click **[Register]** at the top right."
      ],
      "cat-admin-assessment-question": [
        "- Click **Assessment Management** in the top menu, then select the **[Question Management]** tab.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Description%22%5D%2C%5B%22%2A%2AQuestion%20ID%2A%2A%22%2C%22Unique%20identification%20number%20of%20the%20question%22%5D%2C%5B%22%2A%2AQuestion%20type%2A%2A%22%2C%22Distinguishes%20question%20types%20such%20as%20multiple%20choice%2C%20short%20answer%2C%20OX%20quiz%2C%20matching%2C%20etc.%22%5D%2C%5B%22%2A%2ALast%20modified%20date%2A%2A%22%2C%22Date%20when%20the%20data%20was%20first%20registered%20or%20last%20modified%20%28YYYY-MM-DD%29%22%5D%5D%7D]]\n\n### Check question details\n\n- Click the **↗ icon (details)** in the list to open the **detail page** for that question.\n\n- You can check country, company, question ID, difficulty, latest registered/modified account, and last modified date.\n\n### Preview question\n\n- Click **[Preview]** at the top right of the detail page to open the preview modal.\n\n- You can select either **PC version** or **mobile version** to preview.\n\n### Edit question\n\n- Click **[Edit]** at the top right of the detail page to switch to **question edit mode**.",
        "Questions can be registered in two ways: **individual registration** and **bulk registration**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Category%22%2C%22%22%2C%22Required%22%2C%22Description%22%5D%2C%5B%22question_ID%22%2C%22Question%20ID%22%2C%22Required%22%2C%22Use%20uppercase%2Flowercase%20English%20letters%2C%20numbers%2C%20periods%2C%20and%20dashes%20%28-%29.%20Duplicates%20are%20not%20allowed.%22%5D%2C%5B%22question_type%22%2C%22Question%20type%22%2C%22Required%22%2C%22Distinguishes%20the%20question%20type.%22%5D%2C%5B%22question_Difficulty%22%2C%22Difficulty%22%2C%22Optional%22%2C%22Hard%2C%20Normal%2C%20Easy%22%5D%2C%5B%22question_text%22%2C%22Question%20prompt%22%2C%22Required%22%2C%22Write%20the%20question%20text.%22%5D%2C%5B%22question_description%22%2C%22Description%22%2C%22Optional%22%2C%22Write%20additional%20explanation%20or%20passage%20text.%22%5D%2C%5B%22question_image%22%2C%22Image%22%2C%22Optional%22%2C%22Add%20an%20image%20for%20the%20question.%22%5D%2C%5B%22correct_answer%22%2C%22Correct%20answer%22%2C%22Required%22%2C%22Write%20the%20correct%20answer%20for%20each%20question.%22%5D%2C%5B%22option%22%2C%22Choices%22%2C%22Required%2FOptional%22%2C%22Enter%20the%20choice%20options%20for%20the%20question.%22%5D%5D%7D]]\n\n### Question types\n\n[[table:%7B%22rows%22%3A%5B%5B%22Type%22%2C%22English%20name%22%5D%2C%5B%22OX%20quiz%22%2C%22True%20or%20False%22%5D%2C%5B%22Short%20answer%22%2C%22Short%20Answer%22%5D%2C%5B%22Multiple%20choice%22%2C%22Multiple%20Choice%22%5D%2C%5B%22Sequencing%22%2C%22Sequencing%22%5D%2C%5B%22Matching%22%2C%22Matching%22%5D%2C%5B%22Fill%20in%20the%20blank%22%2C%22Fill%20in%20the%20Blank%22%5D%2C%5B%22Sorting%22%2C%22Sorting%22%5D%5D%7D]]",
        "This method registers one question at a time by entering it directly.\n\n### Enter basic information\n\n- **Question type:** Select the question type from the dropdown.\n\n- **Question prompt:** Enter the question. (Required, max 50 characters)\n\n- **Description:** Enter additional description. (Optional, max 80 characters)\n\n- **Question image:** You can attach an image with the **[Attach file]** button. (1 file / 20 MB or less / jpg, jpeg, png)\n\nAfter entering all items, click **[Register]** at the top right.",
        "This method registers multiple questions at once according to the Excel template.\n\n### Download/import template\n\n- Click **[Import]** at the top right.\n\n- Click **[Download template]** to download the Excel template.\n\n- After completing the template, click **[Import]** again to upload the file.\n\n[[callout:💡||**Note:** LumiTeach Admin **does not automatically save file changes** while you are preparing bulk registration data.]]\n\n### Notes for bulk question registration\n\n[[table:%7B%22rows%22%3A%5B%5B%22Validation%20type%22%2C%22Condition%22%2C%22Description%22%5D%2C%5B%22Common%20required%20fields%22%2C%22When%20question_id%2C%20question_type%2C%20or%20question_text%20is%20missing%22%2C%22Question%20ID%2C%20question%20type%2C%20and%20question%20content%20are%20required%20fields.%22%5D%2C%5B%22Image%20requirements%22%2C%22When%20the%20extension%20is%20not%20jpg%2Fpng%20or%20the%20file%20exceeds%2020%20MB%22%2C%22Image%20files%20support%20only%20jpg%20and%20png%20formats%20and%20can%20be%20uploaded%20up%20to%2020%20MB.%22%5D%2C%5B%22Question-specific%20data%20requirements%22%2C%22When%20the%20correct%20answer%20or%20choice%20options%20are%20missing%20or%20incorrectly%20formatted%22%2C%22Enter%20the%20correct%20answer%20and%20choice%20options%20according%20to%20the%20question%20type.%22%5D%5D%7D]]\n\nAfter entering all items, click **[Register]** at the top right."
      ],
      "cat-admin-assessment-paper": [
        "- In the Assessment Management menu, select the **[Assessment Paper Management]** tab.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Description%22%5D%2C%5B%22%2A%2AAssessment%20paper%20name%2A%2A%22%2C%22Name%20of%20the%20Assessment%20paper%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%22%2C%22Curriculum%20unit%20mapped%20to%20the%20Assessment%20paper%22%5D%2C%5B%22%2A%2AGrade%2A%2A%22%2C%22Grade%20information%20mapped%20to%20the%20Assessment%20paper%22%5D%2C%5B%22%2A%2ANumber%20of%20questions%2A%2A%22%2C%22Total%20number%20of%20questions%20registered%20in%20the%20Assessment%20paper%22%5D%2C%5B%22%2A%2AStatus%2A%2A%22%2C%22Active%20%2F%20Inactive%20status%20of%20the%20Assessment%20paper%22%5D%2C%5B%22%2A%2ALast%20modified%20date%2A%2A%22%2C%22Displays%20the%20modified%20date%20if%20recently%20modified%3B%20otherwise%20displays%20the%20initial%20registration%20date%22%5D%5D%7D]]\n\n### Check Assessment paper details\n\n- Click the **↗ icon (details)** in the list to open the **detail page** for that Assessment paper.\n\n### Edit Assessment paper\n\n- Click **[Edit]** at the top right of the detail page to switch to **edit mode**.\n\n- After editing, click **[Save]** at the top right.",
        "This method directly enters information for one Assessment paper, configures questions, and registers it.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Description%22%5D%2C%5B%22%2A%2AAssessment%20paper%20name%2A%2A%22%2C%22Required%2C%20up%20to%20100%20bytes%22%5D%2C%5B%22%2A%2AAssessment%20paper%20order%2A%2A%22%2C%22Required%2C%20numbers%20only%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%22%2C%22Required%2C%20select%20from%20the%20curriculum%20list%22%5D%2C%5B%22%2A%2AItem%20ID%2A%2A%22%2C%22Required%2C%20modal%20appears%20when%20clicking%20%5BAdd%20Item%20ID%5D%22%5D%2C%5B%22%2A%2AAssessment%20paper%20thumbnail%2A%2A%22%2C%22If%20no%20separate%20image%20is%20registered%2C%20the%20first%20question%20screen%20on%20page%201%20is%20automatically%20saved%20when%20saved%20or%20approved%22%5D%2C%5B%22%2A%2ASource%2A%2A%22%2C%22Optional%2C%20up%20to%20100%20bytes%22%5D%5D%7D]]\n\n### Configure questions\n\n- Click **[Add Question]** to open the **Add Question** modal.\n\n- Select questions with checkboxes. Multiple selections are allowed.\n\n- Added questions can be reordered with the ▲▼ buttons and deleted with the 🗑️ icon.\n\nAfter entering all required items and configuring questions, click **[Register]** at the top right.",
        "This method registers multiple Assessment papers at once according to the Excel template.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Category%22%2C%22%22%2C%22Required%22%2C%22Description%22%5D%2C%5B%22Item_id%22%2C%22Item%20ID%22%2C%22Required%22%2C%22Item%20ID%20of%20the%20curriculum%20to%20which%20the%20Assessment%20paper%20will%20be%20connected%22%5D%2C%5B%22assessment_order%22%2C%22Assessment%20paper%20order%22%2C%22Required%22%2C%22Order%20in%20which%20the%20Assessment%20paper%20is%20sorted%20within%20the%20curriculum%22%5D%2C%5B%22assessment_name%22%2C%22Assessment%20paper%20name%22%2C%22Required%22%2C%22Enter%20the%20Assessment%20paper%20name.%22%5D%2C%5B%22assessment_thumbnail%22%2C%22Assessment%20paper%20thumbnail%22%2C%22Optional%22%2C%22Attach%20a%20representative%20image%20for%20the%20Assessment%20paper.%22%5D%2C%5B%22question_order%22%2C%22Question%20order%22%2C%22Required%22%2C%22Enter%20the%20question%20order.%22%5D%2C%5B%22question_id%22%2C%22Question%20ID%22%2C%22Required%22%2C%22Enter%20the%20question%20ID%20that%20will%20make%20up%20the%20Assessment%20paper.%22%5D%5D%7D]]\n\n[[callout:💡||**Note:** LumiTeach Admin **does not automatically save file changes** while you are preparing bulk registration data.]]\n\nAfter entering all items, click **[Register]** at the top right."
      ],
      "cat-admin-report-management": [
        "- You can check reported content among content published in the Explore menu of the user service.\n\n- At the top, you can also check the status for **total reports**, **received**, **rejected**, and **action completed**.\n\n- Click the detail information button in the list to move to the detail screen for the reported content.\n\n[[callout:✅||Report status is divided into 3 types.\n- **Received**: A report has been received and needs review\n- **Rejected**: The report was rejected and the content remains visible\n- **Deactivated**: After checking the report, the content has been hidden]]",
        "- On the detail screen, check the registrant who posted the reported content, registration date, subject, and grade information.\n\n- Click **[Preview]** to check the detailed content as images.",
        "- If the operations team does not agree with the reported issue, or determines that the published content is appropriate, process it as **Rejected**. The content will remain public.\n\n- Click **[Reject]** at the top right of the detail screen.\n\n- When a report is rejected, the content continues to be shown to users, and the reporter is notified of the result by email.",
        "- If the operations team determines that the content should not remain public, process it as **Deactivated**. Deactivated content will not be shown in the Explore menu.\n\n- Click **[Action Completed]** at the top right of the detail screen.\n\n- Select the reason for hiding the content.\n\n- When action is completed, the content is immediately hidden from the user service, and the reporter and content publisher are notified of the result by email.",
        "**1. Inappropriate content**\n\n- Contains profanity or vulgar language\n\n- Contains sexually explicit content\n\n- Contains hateful or violent content\n\n- Contains discriminatory elements\n\n**2. Advertising or promotional content**\n\n- Contains promotional content\n\n- Includes commercial links\n\n**3. Copyright-infringing content**\n\n- Unauthorized upload of teaching materials\n\n- Unauthorized use of images or videos\n\n- Copying another person's learning materials\n\n**4. Content exposing personal information**\n\n- Posts sensitive information such as phone numbers, email addresses, home addresses, national ID numbers, etc.\n\n**5. Other reasons**\n\n- Content that does not clearly fall under the above criteria but violates service operation principles"
      ],
      "cat-admin-inquiry": [
        "- Click **[Register Inquiry]**.\n\n- Enter the inquiry title, category, and content, then register it.\n\n- For the category, select the item that matches your inquiry. Selecting the correct category helps you receive a faster response.\n\n- Registered inquiries can be checked in the list.\n\n[[callout:💡||Registered inquiries cannot be edited or deleted. Review the content carefully before registering.]]",
        "- When a headquarters administrator registers a reply, the inquiry status changes to **[Completed]**.\n\n- Click an inquiry with Completed status to check the reply.\n\n[[image:admin-inquiry/01.png|Screen example]]"
      ],
      "cat-admin-affiliation-release": [
        "- Click **Profile > Settings**.\n\n- Click **[Release Affiliation]** to the right of the affiliated company information in Basic Information.\n\n[[image:admin-affiliation-release/01.png|Screen example]]\n\n- When affiliation is released, this account can no longer view company data and must complete institution verification again.\n\n[[callout:💡||If you want to suspend use of an administrator account, contact your institution administrator or email service@lumiteach.ai.]]"
      ],
      "cat-admin-ai-credit": [
        "### 1. AI features and tools\n\nYou can use AI features and tools while creating and using teaching materials on the LumiTeach platform. AI features help you quickly produce, refine, and use teaching and learning materials in Lessons or Assignments.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Where%20used%22%2C%22Provided%20features%22%5D%2C%5B%22%2A%2AEdit%20Lesson%2A%2A%22%2C%22Rewrite%2C%20AI%20Make%22%5D%2C%5B%22%2A%2AStart%20teaching%2A%2A%22%2C%22Brainstorming%20%28Wordcloud%2C%20Classification%2C%20Mindmap%29%22%5D%2C%5B%22%2A%2AAdmin%2A%2A%22%2C%22Curriculum%20tagging%2C%20content%20metadata%20tagging%2C%20AI%20Make%22%5D%5D%7D]]\n\n### 1-1. What is AI Credit?\n\nAI Credit is used to run AI tasks across the LumiTeach platform.\n\n- Deductions are based on **1 credit = 1 token (LLM processing unit)**.\n\n- Depending on the plan, a certain amount of **base credits** is automatically granted each month.\n\n- If credits are insufficient, you can **purchase an additional credit pack** or **request additional credits** from your institution administrator.",
        "### 2. Credit structure at a glance\n\nLumiTeach credits are operated separately in two types depending on who uses them.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Category%22%2C%22Admin%20Credit%20%28Administrator%29%22%2C%22Service%20Credit%20%28Teacher%29%22%5D%2C%5B%22%2A%2AUser%2A%2A%22%2C%22Administrators%20of%20institutions%2C%20companies%2C%20or%20agencies%22%2C%22Individual%20teacher%20accounts%22%5D%2C%5B%22%2A%2AGrant%20method%2A%2A%22%2C%22Granted%20in%20bulk%20in%20the%20amount%20agreed%20at%20contract%20time%22%2C%22Automatically%20granted%20monthly%2C%20reset%20monthly%22%5D%2C%5B%22%2A%2AManagement%20unit%2A%2A%22%2C%22Organization%20unit%22%2C%22Individual%20account%20unit%22%5D%2C%5B%22%2A%2AUsed%20for%2A%2A%22%2C%22AI%20features%20in%20Admin%22%2C%22AI%20features%20in%20the%20LumiTeach%20service%22%5D%2C%5B%22%2A%2ATransfer%20to%20teachers%2A%2A%22%2C%22Can%20be%20shared%20and%20transferred%20to%20affiliated%20teachers%22%2C%22Cannot%20be%20shared%20or%20transferred%20between%20teachers%22%5D%5D%7D]]\n\n[[callout:💡||**The value of 1 credit is the same.** Both Admin and service use the same price and token conversion standard per 1 credit.]]\n\n### 3. AI credit deduction standards by feature\n\nCredits are deducted by feature according to actual token usage. The table below shows the **approximate average deduction per use**. The actual deduction per use may vary depending on the amount of data processed.\n\n[[table:%7B%22rows%22%3A%5B%5B%22AI%20feature%22%2C%22Detail%22%2C%22Average%20deduction%20per%20use%22%2C%22Available%20plan%22%5D%2C%5B%22%2A%2AAI%20Make%2A%2A%20%28Activity%20generation%29%22%2C%22Text%20upload%22%2C%22100%20credits%22%2C%22Free%20or%20higher%22%5D%2C%5B%22%22%2C%22Text%20%2B%20image%20upload%22%2C%22100%20credits%22%2C%22Free%20or%20higher%22%5D%2C%5B%22%22%2C%22Video%20upload%22%2C%22150%20credits%22%2C%22Free%20or%20higher%22%5D%2C%5B%22%2A%2ABrainstorming%20board%2A%2A%22%2C%22Wordcloud%22%2C%223%20credits%22%2C%22Free%20or%20higher%22%5D%2C%5B%22%22%2C%22Classification%22%2C%223%20credits%22%2C%22Free%20or%20higher%22%5D%2C%5B%22%22%2C%22Mindmap%22%2C%225%20credits%22%2C%22Free%20or%20higher%22%5D%2C%5B%22%2A%2ARewrite%2A%2A%20%28text%20correction%29%22%2C%22-%22%2C%221%20credit%22%2C%22Free%20or%20higher%22%5D%2C%5B%22%2A%2AAuto-Tagging%2A%2A%20%28administrator%29%22%2C%22Curriculum%20tagging%22%2C%2210%20credits%22%2C%22Pro%20or%20higher%22%5D%2C%5B%22%22%2C%22Content%20tagging%22%2C%2210%20credits%22%2C%22Pro%20or%20higher%22%5D%5D%7D]]\n\n[[callout:📐||The average deduction per AI Make use is calculated based on generating **10 Activities**. Deduction standards are recalculated periodically based on service operation data.]]\n\n### 4. How credits are used and deducted\n\nBecause of LLM characteristics, the exact token amount cannot be known before input, so credits are processed in two stages: **pre-validation (estimated deduction)** and **post-settlement (actual deduction)**.\n\n### 4-1. Pre-validation\n\nWhen an AI feature is executed (button click), the **estimated token usage** is converted into credits and compared with the remaining balance.\n\n- If available credits are insufficient, the feature cannot be executed.\n\n### 4-2. Post-settlement\n\n- If the output is generated successfully, the final deduction is based on the **actual tokens used**.\n\n- If an AI task is **canceled midway**: only the tokens generated up to the cancellation point are deducted.\n\n- If an **AI engine system error** occurs: credits are fully restored.\n\n### 5. Credit consumption order and validity\n\nIf you have multiple types of credits, they are consumed in the following order.\n\n- **Monthly recurring credits**\n\n- **Additional granted/purchased credits**\n\n[[table:%7B%22rows%22%3A%5B%5B%22Type%22%2C%22Target%22%2C%22Carryover%22%5D%2C%5B%22Monthly%20recurring%20credits%22%2C%22Individual%20teacher%20account%22%2C%22Available%22%5D%2C%5B%22Additional%20credits%22%2C%22Individual%20teacher%20account%22%2C%22Available%22%5D%5D%7D]]",
        "### 6. Administrator guide (organization credit operation)\n\n> This section applies to **higher-level administrators** (agency, company, institution, and content partner admins).\n\n### 6-1. When Admin Credits are granted\n\n- Granted in bulk by the amount agreed at the **time of contract**.\n\n- If additional credits are needed, a **separate additional contract** must be signed.\n\n- The reference date is automatically set to the affiliated company's **contract start date**.\n\n### 6-2. Teacher recurring credit grant policy\n\n- **Grant date**: Automatically granted every month at **00:00:00 (UTC)** on the same date based on the contract start date (or customer-designated date).\n\n- **If the grant reference date is at the end of the month (29th / 30th / 31st)**\n\n- If the reference date does not exist in that month, credits are granted on the last day of that month. Example: If the reference date is the 31st, March 31 → April 30 → May 31 → June 30. In non-leap-year February, credits are granted on February 28.\n\n- **Teachers who join mid-month**: The fixed monthly credits for that month are granted immediately at verification and are not carried over.\n\n- **Teachers whose affiliation is released/withdrawn**: Use is suspended immediately.\n\n- Rejoining after affiliation release/withdrawal\n\n- Re-verification with the same company: If monthly recurring credits have already been granted for that month, they are not granted again.\n\n- Re-verification with another company: The new affiliation's recurring credits are newly granted.\n\n- **Cannot grant:** If the affiliated company has insufficient Admin Credits, the teacher's monthly recurring credits are not granted.\n\n### 6-3. Processing additional credit requests\n\n### Teacher requests to administrator\n\n- When a teacher clicks **[Request Credits]** on their credit page, a higher-level administrator can check the request.\n\n- The administrator **approves or rejects** it in Admin.\n\n- Upon approval, credits are immediately deducted from the Admin shared pool and granted to the teacher account.\n\n### Administrator (organization) requests to higher-level administrator\n\n- There is no separate request function in Admin. Requests are made **online/offline to the direct higher-level administrator according to the contract relationship**.\n\n- Credits are granted after an additional contract is completed.\n\n### 6-4. Modifying credit grant information\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Policy%22%2C%22Note%22%5D%2C%5B%22Additional%20Admin%20Credit%20grant%22%2C%22Granted%20immediately%22%2C%22Added%20to%20existing%20balance%22%5D%2C%5B%22Additional%20teacher%20credit%20grant%22%2C%22Granted%20immediately%22%2C%22Added%20to%20existing%20balance%22%5D%2C%5B%22Change%20teacher%20recurring%20credit%20quantity%22%2C%22Applied%20from%20the%20next%20grant%20date%22%2C%22-%22%5D%5D%7D]]",
        "[[table:%7B%22rows%22%3A%5B%5B%22Category%22%2C%22Refund%2FCancellation%22%2C%22Upon%20affiliation%20release%2Fwithdrawal%22%5D%2C%5B%22Base%20granted%20credits%22%2C%22Not%20available%22%2C%22Use%20suspended%20immediately%22%5D%2C%5B%22Additional%20credits%22%2C%22Not%20available%22%2C%22Use%20suspended%20immediately%22%5D%2C%5B%22AI%20task%20canceled%20midway%22%2C%22Tokens%20used%20up%20to%20cancellation%20are%20not%20refundable%3B%20unprocessed%20portion%20is%20returned%22%2C%22-%22%5D%2C%5B%22System%20error%22%2C%22100%25%20refunded%20if%20no%20output%20is%20provided%22%2C%22-%22%5D%5D%7D]]"
      ],
      "cat-admin-faq": [
        "### **Q. What is the difference between a teacher and an administrator?**\n\nA teacher creates teaching materials and runs Lessons or Assignments in the LumiTeach service. An administrator performs management tasks in Admin, such as curriculum and content management and member management. One account can have both teacher and administrator permissions. In that case, institution verification must be completed separately in the service and in Admin.\n\n### **Q. A member submitted a sign-up request. Where can I approve it?**\n\nIn the **[Key Alerts]** area of Admin Home, you can check the number of sign-up approvals waiting for review. In **Member Management > Member List**, click the **Action (⋯)** button for a member whose status is Pending, then approve or reject the request.\n\n### **Q. If someone requests teacher and administrator permissions at the same time, do I need to approve them separately?**\n\nYes. Teacher permission and administrator permission must each be approved or rejected separately.\n\n### **Q. Can I grant permission before a user signs up?**\n\nYes. Use the **[Permission Pre-registration]** button at the top right of **Member Management > Member List** to pre-register an account and grant permission before sign-up. A pre-registered account can be used immediately after sign-up without a separate approval request.\n\n### **Q. What happens if I enter the wrong email address during permission pre-registration?**\n\nIf the pre-registered email is different from the Google account used for the actual sign-up, automatic approval is not applied and the user must submit a separate sign-up approval request. When pre-registering permission, enter the exact same email address as the Google account.\n\n### **Q. How should I handle the account of an employee who has left the organization?**\n\nIn Member Management, release that member's affiliation. A teacher whose affiliation is released is converted to a free LumiTeach member. An administrator whose affiliation is released can no longer access Admin.\n\n### **Q. What should I do if I want to permanently disable an administrator account?**\n\nA higher-level or peer administrator can set the administrator account to **Suspend use** in Member Management. A suspended administrator cannot use Admin. (Teacher accounts use withdrawal, and teachers can also withdraw directly.)\n\n### **Q. What is the difference between releasing affiliation and withdrawal/suspension?**\n\nReleasing affiliation only ends the relationship with that organization. An administrator can request institution verification for another company with the same account. A teacher is converted to a free member and can continue using the service, and can also request verification under another company. Withdrawal or suspension removes or disables the account itself, so withdrawn or suspended teachers/administrators can no longer use the LumiTeach service or Admin.\n\n### Q. If monthly recurring credits remain, do they carry over to the next month?\n\nYes. The remaining balance of monthly recurring credits can be carried over and used in the next month.\n\n### Q. What should I do if credits are insufficient?\n\n- **Teacher**: On the My Credit page, click **[Request Credits]** to request an additional grant from your affiliated administrator.\n\n- **Administrator**: If the shared pool is insufficient, request an **additional contract** from your direct higher-level administrator.\n\n### Q. If I stop an AI task midway, are credits refunded?\n\nThe tokens for outputs **actually generated up to the cancellation point are not refunded.**\n\n### Q. What happens if AI returns an error?\n\nIf no output is provided due to an AI engine system error, the **reserved credits are fully restored.**\n\n### Q. What happens to remaining credits after withdrawal?\n\n- **Teacher withdrawal / affiliation release**: Use is stopped immediately, and remaining additional credits are returned to the Admin shared pool.\n\n- **Re-verification with the same company**: If credits have already been granted in the current month, they are not granted again.\n\n- **Re-verification with another company**: Credits from the new affiliation are newly granted.\n\n### Q. Where can I view credit usage history?\n\n- **Teacher**: On the My Credit Management page, you can check the remaining amount and recent usage history.\n\n- **Administrator**: 1. Check recent usage history in **Profile > Basic Information > AI Credit**. 2. Check recent usage history in **Affiliation Management > Affiliation Information > AI Credit** tab.\n\n### **Q. A member requested help because their AI Credit is insufficient. How should I process it?**\n\nWhen a teacher requests additional credits, an alert appears in the member management list. Click **[Check Request]** to review the details, select the number of credits to grant, and approve it. The amount is deducted from the organization's shared credits and granted immediately. Be careful, because credits cannot be recovered once granted."
      ]
    },
    "articleIntros": {
      "cat-admin-dashboard": "[[callout:🕑||**Dashboard aggregation time:** Dashboard data is aggregated **at the top of every hour**.]]",
      "cat-admin-member-management": "> Register members who will use the LumiTeach service and Admin. You can control member permissions and manage AI Credit.",
      "cat-admin-approval-permission": "> Institution/company verification is required to use LumiTeach Admin and the service. Administrators can approve or reject sign-up requests in Admin, or pre-register member accounts in advance.",
      "cat-admin-standard-management": "> This is the first step for managing curriculum and content in LumiTeach Admin.",
      "cat-admin-curriculum-management": "> You can structure your institution or company’s own curriculum and content for the LumiTeach system. Provide optimized content to users through a customized curriculum.",
      "cat-admin-lesson-activity": "> The **Lesson Management** menu is used to register and manage Lessons and Activities aligned with the education curriculum. You can check and edit curriculum link information, concept keywords, and metadata for registered Lessons.",
      "cat-admin-lesson-bulk-upload": "> Bulk Lesson upload lets you register multiple Lessons and Activities at once with a single Excel file. It is faster than entering Lessons one by one.",
      "cat-admin-lesson-ai-make": "> With AI Make, AI automatically creates Lessons by uploading source materials such as PDF or PPT files. You can review generated Lessons in the **[Review]** tab, edit them, and approve them for publishing.",
      "cat-admin-lesson-recommendation": "> Curate registered Lessons according to the curriculum structure. Content registered in Recommendation Management appears on the LumiTeach service Home screen to improve accessibility.",
      "cat-admin-assessment-question": "> Create and manage the questions that make up an Assessment.",
      "cat-admin-assessment-paper": "> You can group questions aligned with the curriculum to register and manage structured Assessment papers. Teachers can conveniently assign these Assessment papers to students as assignments or tests in the LumiTeach service.",
      "cat-admin-report-management": "> Review content reported in the LumiTeach service and take appropriate action.",
      "cat-admin-inquiry": "> If you encounter a problem or have a question while using LumiTeach service or Admin, use the 1:1 Inquiry menu.",
      "cat-admin-affiliation-release": "> If you need to leave your current institution because of a transfer, resignation, or other reason, follow the affiliation release process.",
      "cat-admin-ai-credit": "> LumiTeach AI features operate on a **credit-based pay-as-you-use** model. This document explains how AI Credit works, how much is deducted by feature, and what to do when credits are insufficient."
    }
  },
  "pt": {
    "manualTree": {
      "cat-admin-login-signup": {
        "title": "Login e solicitação de cadastro",
        "description": "Como entrar no LumiTeach Admin com uma conta Google, solicitar permissão de administrador no primeiro acesso e configurar a autenticação Google OTP."
      },
      "cat-admin-dashboard": {
        "title": "Painel inicial",
        "description": "O menu inicial do Admin reúne e apresenta dados relacionados aos usuários e conteúdos do LumiTeach. Use os principais indicadores para aproveitar melhor o LumiTeach."
      },
      "cat-admin-member-management": {
        "title": "Gerenciamento de informações dos membros",
        "description": "Cadastre os membros que usarão o serviço LumiTeach e o Admin. É possível controlar permissões dos membros e gerenciar Crédito de IA."
      },
      "cat-admin-approval-permission": {
        "title": "Aprovação de cadastro e pré-registro de permissões",
        "description": "A verificação de instituição é necessária para usar o LumiTeach Admin e o serviço. Administradores podem aprovar ou recusar solicitações de cadastro no Admin, ou pré-registrar contas de membros."
      },
      "cat-admin-standard-management": {
        "title": "Gerenciamento de padrões",
        "description": "Esta é a primeira etapa para gerenciar currículo e conteúdo no LumiTeach Admin."
      },
      "cat-admin-curriculum-management": {
        "title": "Gerenciamento de currículo",
        "description": "Você pode estruturar o currículo e os conteúdos próprios da sua instituição ou empresa para o sistema LumiTeach. Ofereça conteúdos otimizados aos usuários por meio de um currículo personalizado."
      },
      "cat-admin-lesson-activity": {
        "title": "Gerenciamento de lições: Gerenciamento de Lição e Atividade",
        "description": "O menu Gerenciamento de lições permite registrar e gerenciar Lições e Atividades alinhadas ao currículo educacional. Você pode verificar e editar vínculos curriculares, palavras-chave conceituais e metadados das Lições registradas."
      },
      "cat-admin-lesson-bulk-upload": {
        "title": "Gerenciamento de lições: cadastro em massa",
        "description": "O cadastro em massa de Lições permite registrar várias Lições e Atividades de uma vez com um único arquivo Excel. É mais rápido do que inserir Lições uma por uma."
      },
      "cat-admin-lesson-ai-make": {
        "title": "Gerenciamento de lições: criar e revisar Lições com AI Make",
        "description": "Com o AI Make, a IA cria Lições automaticamente ao enviar materiais de origem, como arquivos PDF ou PPT. Você pode revisar as Lições geradas na aba Revisão, editar o conteúdo e aprovar a publicação."
      },
      "cat-admin-lesson-recommendation": {
        "title": "Gerenciamento de lições: gerenciamento de recomendações",
        "description": "Faça curadoria de Lições registradas conforme a estrutura do currículo. Os conteúdos registrados em Recomendações aparecem na tela inicial do serviço LumiTeach, melhorando o acesso dos usuários."
      },
      "cat-admin-assessment-question": {
        "title": "Gerenciamento de avaliações: gerenciamento e cadastro de questões",
        "description": "Crie e gerencie as questões que compõem uma Avaliação."
      },
      "cat-admin-assessment-paper": {
        "title": "Gerenciamento de avaliações: gerenciamento e cadastro de provas",
        "description": "Registre e gerencie provas estruturadas agrupando questões alinhadas ao currículo. Os professores podem atribuir essas provas aos alunos como tarefas ou testes no LumiTeach."
      },
      "cat-admin-report-management": {
        "title": "Gerenciamento de denúncias",
        "description": "Verifique conteúdos denunciados no serviço LumiTeach e tome as medidas adequadas."
      },
      "cat-admin-inquiry": {
        "title": "Consulta 1:1",
        "description": "Se ocorrer um problema ou se houver dúvidas ao usar o serviço LumiTeach ou o Admin, use o menu Consulta 1:1."
      },
      "cat-admin-affiliation-release": {
        "title": "Remoção de vínculo",
        "description": "Se precisar remover seu vínculo atual por transferência, desligamento ou outro motivo, siga o processo de remoção de vínculo."
      },
      "cat-admin-ai-credit": {
        "title": "Crédito de IA",
        "description": "Os recursos de IA do LumiTeach funcionam em um modelo por créditos. Este documento explica como o Crédito de IA funciona, quais recursos consomem créditos e o que fazer quando os créditos forem insuficientes."
      },
      "cat-admin-faq": {
        "title": "Perguntas frequentes",
        "description": "Esta página orienta os principais recursos e procedimentos que devem ser verificados no menu de perguntas frequentes."
      }
    },
    "articles": {
      "cat-admin-login-signup": {
        "category": "Guia Admin LumiTeach",
        "title": "Login e solicitação de cadastro",
        "desc": "Como entrar no LumiTeach Admin com uma conta Google, solicitar permissão de administrador no primeiro acesso e configurar a autenticação Google OTP.",
        "note": "Se um administrador superior tiver aprovado sua permissão antecipadamente, você poderá acessar o Admin diretamente sem passar pelo processo de solicitação.",
        "sections": [
          "Fazer login",
          "Solicitação de cadastro",
          "Autenticação Google OTP"
        ]
      },
      "cat-admin-dashboard": {
        "category": "Guia Admin LumiTeach",
        "title": "Painel inicial",
        "desc": "O menu inicial do Admin reúne e apresenta dados relacionados aos usuários e conteúdos do LumiTeach. Use os principais indicadores para aproveitar melhor o LumiTeach.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Alertas principais",
          "Insights de usuários",
          "Insights do serviço",
          "Consulta 1:1"
        ]
      },
      "cat-admin-member-management": {
        "category": "Guia Admin LumiTeach",
        "title": "Gerenciamento de informações dos membros",
        "desc": "Cadastre os membros que usarão o serviço LumiTeach e o Admin. É possível controlar permissões dos membros e gerenciar Crédito de IA.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Tipos de membros",
          "Gerenciamento de membros",
          "Saída / suspensão de membros",
          "Remoção de vínculo",
          "Verificar status de Crédito de IA e conceder crédito"
        ]
      },
      "cat-admin-approval-permission": {
        "category": "Guia Admin LumiTeach",
        "title": "Aprovação de cadastro e pré-registro de permissões",
        "desc": "A verificação de instituição é necessária para usar o LumiTeach Admin e o serviço. Administradores podem aprovar ou recusar solicitações de cadastro no Admin, ou pré-registrar contas de membros.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Gerenciar solicitações de aprovação de cadastro",
          "Pré-registrar permissões"
        ]
      },
      "cat-admin-standard-management": {
        "category": "Guia Admin LumiTeach",
        "title": "Gerenciamento de padrões",
        "desc": "Esta é a primeira etapa para gerenciar currículo e conteúdo no LumiTeach Admin.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "O que são padrões?",
          "Configuração de série",
          "Configuração de disciplina",
          "Configuração de item"
        ]
      },
      "cat-admin-curriculum-management": {
        "category": "Guia Admin LumiTeach",
        "title": "Gerenciamento de currículo",
        "desc": "Você pode estruturar o currículo e os conteúdos próprios da sua instituição ou empresa para o sistema LumiTeach. Ofereça conteúdos otimizados aos usuários por meio de um currículo personalizado.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Onde o currículo é usado?",
          "Registrar currículo",
          "Classificação de currículo por IA",
          "Gerenciar currículo"
        ]
      },
      "cat-admin-lesson-activity": {
        "category": "Guia Admin LumiTeach",
        "title": "Gerenciamento de lições: Gerenciamento de Lição e Atividade",
        "desc": "O menu Gerenciamento de lições permite registrar e gerenciar Lições e Atividades alinhadas ao currículo educacional. Você pode verificar e editar vínculos curriculares, palavras-chave conceituais e metadados das Lições registradas.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Ver lista de Lições",
          "Ver detalhes da Lição",
          "Editar Lição",
          "Registrar Lição"
        ]
      },
      "cat-admin-lesson-bulk-upload": {
        "category": "Guia Admin LumiTeach",
        "title": "Gerenciamento de lições: cadastro em massa",
        "desc": "O cadastro em massa de Lições permite registrar várias Lições e Atividades de uma vez com um único arquivo Excel. É mais rápido do que inserir Lições uma por uma.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Método de cadastro em massa"
        ]
      },
      "cat-admin-lesson-ai-make": {
        "category": "Guia Admin LumiTeach",
        "title": "Gerenciamento de lições: criar e revisar Lições com AI Make",
        "desc": "Com o AI Make, a IA cria Lições automaticamente ao enviar materiais de origem, como arquivos PDF ou PPT. Você pode revisar as Lições geradas na aba Revisão, editar o conteúdo e aprovar a publicação.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Criar Lições com AI Make",
          "Revisar e aprovar Lições"
        ]
      },
      "cat-admin-lesson-recommendation": {
        "category": "Guia Admin LumiTeach",
        "title": "Gerenciamento de lições: gerenciamento de recomendações",
        "desc": "Faça curadoria de Lições registradas conforme a estrutura do currículo. Os conteúdos registrados em Recomendações aparecem na tela inicial do serviço LumiTeach, melhorando o acesso dos usuários.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Gerenciar conteúdo recomendado",
          "Registrar recomendação: tópico 1",
          "Registrar recomendação: tópico 2"
        ]
      },
      "cat-admin-assessment-question": {
        "category": "Guia Admin LumiTeach",
        "title": "Gerenciamento de avaliações: gerenciamento e cadastro de questões",
        "desc": "Crie e gerencie as questões que compõem uma Avaliação.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Gerenciamento de questões",
          "Cadastro de questões",
          "Cadastro de questões: individual",
          "Cadastro de questões: em massa"
        ]
      },
      "cat-admin-assessment-paper": {
        "category": "Guia Admin LumiTeach",
        "title": "Gerenciamento de avaliações: gerenciamento e cadastro de provas",
        "desc": "Registre e gerencie provas estruturadas agrupando questões alinhadas ao currículo. Os professores podem atribuir essas provas aos alunos como tarefas ou testes no LumiTeach.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Gerenciamento de provas",
          "Cadastro de prova: individual",
          "Cadastro de prova: em massa"
        ]
      },
      "cat-admin-report-management": {
        "category": "Guia Admin LumiTeach",
        "title": "Gerenciamento de denúncias",
        "desc": "Verifique conteúdos denunciados no serviço LumiTeach e tome as medidas adequadas.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Lista de conteúdos denunciados",
          "Ver conteúdo denunciado",
          "Recusar denúncia",
          "Desativar conteúdo denunciado",
          "🚨 Guia e critérios de denúncia de conteúdo"
        ]
      },
      "cat-admin-inquiry": {
        "category": "Guia Admin LumiTeach",
        "title": "Consulta 1:1",
        "desc": "Se ocorrer um problema ou se houver dúvidas ao usar o serviço LumiTeach ou o Admin, use o menu Consulta 1:1.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Enviar consulta",
          "Ver resposta"
        ]
      },
      "cat-admin-affiliation-release": {
        "category": "Guia Admin LumiTeach",
        "title": "Remoção de vínculo",
        "desc": "Se precisar remover seu vínculo atual por transferência, desligamento ou outro motivo, siga o processo de remoção de vínculo.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Remover vínculo pelo Perfil"
        ]
      },
      "cat-admin-ai-credit": {
        "category": "Guia Admin LumiTeach",
        "title": "Crédito de IA",
        "desc": "Os recursos de IA do LumiTeach funcionam em um modelo por créditos. Este documento explica como o Crédito de IA funciona, quais recursos consomem créditos e o que fazer quando os créditos forem insuficientes.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Sobre a IA do LumiTeach",
          "Concessão e uso de Crédito de IA",
          "Gerenciar Crédito de IA",
          "Política de reembolso e cancelamento de créditos"
        ]
      },
      "cat-admin-faq": {
        "category": "Guia Admin LumiTeach",
        "title": "Perguntas frequentes",
        "desc": "Esta página orienta os principais recursos e procedimentos que devem ser verificados no menu de perguntas frequentes.",
        "note": "Confira com base nos nomes de menus e botões realmente usados na tela Admin.",
        "sections": [
          "Visão geral"
        ]
      }
    },
    "articleBodies": {
      "cat-admin-login-signup": [
        "Clique no botão **Continuar com Google** na primeira tela do Admin.\n\n[[image:admin-login-signup/01.png|Botão Continuar com Google na primeira tela do Admin]]\n\nQuando a tela de login do Google abrir, faça login com sua conta Google.\n\n[[image:admin-login-signup/02.png|Tela de login da conta Google]]",
        "Se for seu primeiro login no Admin, será necessário solicitar permissão de acesso. No popup **Solicitação de aprovação de permissão de administrador**, insira seu nome e as informações da empresa/instituição.\n\n[[image:admin-login-signup/03.png|Popup de solicitação de aprovação de permissão de administrador]]\n\n- **Nome**: Insira seu nome real.\n- **E-mail**: O e-mail da sua conta Google é exibido automaticamente.\n- **Pesquisar empresa/instituição**: Insira e pesquise o nome da empresa ou instituição à qual você pertence.\n\nO nome da empresa deve corresponder exatamente ao nome cadastrado no sistema. Se o nome não corresponder e você tiver dificuldade para enviar a solicitação, entre em contato com um administrador superior.\n\nApós solicitar a permissão, o acesso ao Admin só será liberado depois da aprovação do administrador superior.\n\n[[callout:💡|Aprovação prévia por administrador superior|Se um administrador superior tiver **aprovado** sua permissão antecipadamente, você poderá acessar o Admin diretamente sem passar pelo processo de solicitação.]]",
        "O LumiTeach Admin usa autenticação de dois fatores Google OTP por segurança.\n\n### Primeiro login — Configurar OTP\n\nO OTP precisa ser configurado apenas uma vez no primeiro login. Nos próximos logins, basta inserir o código de verificação de 6 dígitos exibido no aplicativo.\n\n[[image:admin-login-signup/04.png|Tela de configuração e autenticação Google OTP]]\n\n- Instale o aplicativo **Google Authenticator** pela App Store ou Play Store.\n- Abra o **Google Authenticator** e toque no botão **+** na parte inferior.\n- Selecione **Ler código QR** e escaneie o código QR exibido na tela de login do Admin.\n- Insira o código de verificação de 6 dígitos exibido no aplicativo para concluir a configuração.\n\n### Próximos logins — Autenticação OTP\n\n- Faça login com sua conta Google.\n- Abra o aplicativo **Google Authenticator** e insira o código de verificação de 6 dígitos exibido.\n\n[[callout:✅|Para segurança, verifique os itens abaixo.|- Se não houver atividade por 60 minutos após o login, a sessão será encerrada automaticamente.\\n- Não é possível fazer login simultâneo em vários dispositivos com a mesma conta.\\n- Se for se ausentar por muito tempo, faça logout obrigatoriamente.\\n- Se o código OTP for inserido incorretamente 5 vezes ou mais, o login ficará restrito por 5 minutos.]]"
      ],
      "cat-admin-dashboard": [
        "- São exibidos os principais alertas que exigem verificação rápida e ação. Clique em cada item para ver os detalhes.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22Membros%20aguardando%20aprova%C3%A7%C3%A3o%20de%20cadastro%22%2C%22Membros%20que%20solicitaram%20verifica%C3%A7%C3%A3o%20de%20institui%C3%A7%C3%A3o%20para%20usar%20o%20servi%C3%A7o%20premium%20LumiTeach%20e%20administradores%20que%20solicitaram%20verifica%C3%A7%C3%A3o%20de%20institui%C3%A7%C3%A3o%20para%20acessar%20o%20LumiTeach%20Admin%22%5D%2C%5B%22Quantidade%20de%20conte%C3%BAdos%20denunciados%22%2C%22Conte%C3%BAdos%20publicados%20no%20LumiTeach%20Explore%20que%20receberam%20den%C3%BAncia%22%5D%2C%5B%22Membros%20com%20cr%C3%A9ditos%20quase%20esgotados%20%2F%20insuficientes%22%2C%22Membros%20da%20institui%C3%A7%C3%A3o%20que%20usaram%20todo%20o%20Cr%C3%A9dito%20de%20IA%20ou%20t%C3%AAm%20saldo%20inferior%20a%2010%25%22%5D%5D%7D]]",
        "- A área de insights de usuários apresenta o total de membros e estatísticas de visitantes.\n\n- Total de membros (acumulado), novos membros e membros desligados\n\n> Verifique as tendências diárias, mensais e anuais de membros.\n\n- Número de usuários do LumiTeach e visitantes do Admin\n\n> São exibidos os dados mais recentes agregados no momento de visualização do painel.",
        "- Você pode verificar como os membros da instituição estão usando o serviço LumiTeach.\n\n- Número de aulas iniciadas nos modos Interação, Modo batalha e Apresentação\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22Estudo%20aut%C3%B4nomo%22%2C%22N%C3%BAmero%20de%20vezes%20em%20que%20uma%20Li%C3%A7%C3%A3o%20foi%20publicada%20como%20Tarefa%20nos%20formatos%20Individual%2C%20Desafio%20ou%20Cart%C3%A3o%20de%20estudo%22%5D%2C%5B%22Avalia%C3%A7%C3%A3o%22%2C%22N%C3%BAmero%20de%20vezes%20em%20que%20uma%20Avalia%C3%A7%C3%A3o%20foi%20publicada%20como%20Tarefa%22%5D%5D%7D]]\n\n- Número de vezes que membros da instituição criaram e salvaram Lições.\n\n- Duração média por aula\n\n> 📌 **Critério de agregação - Interação · Modo batalha**: somente aulas com pelo menos 1 aluno participante são incluídas no tempo médio. - **Apresentação**: o tempo entre Start Lesson e End Lesson é incluído na média.",
        "- Você pode verificar as consultas 1:1 recebidas mais recentemente."
      ],
      "cat-admin-member-management": [
        "[[table:%7B%22rows%22%3A%5B%5B%22%22%2C%22%2A%2AProfessores%2A%2A%22%2C%22%2A%2AAdministradores%2A%2A%22%5D%2C%5B%22Usu%C3%A1rios%22%2C%22Usam%20o%20servi%C3%A7o%20LumiTeach%22%2C%22Usam%20o%20LumiTeach%20Admin%22%5D%2C%5B%22Fun%C3%A7%C3%A3o%20principal%22%2C%22Criar%20materiais%20de%20ensino%20e%20conduzir%20Li%C3%A7%C3%B5es%2FTarefas%22%2C%22Gerenciar%20curr%C3%ADculo%20e%20conte%C3%BAdo%2C%20gerenciar%20membros%20e%20realizar%20outras%20tarefas%20administrativas%22%5D%5D%7D]]\n\nPara usar o serviço premium LumiTeach e o Admin, é necessário concluir a **verificação de instituição**.\n\n[[callout:💡||Se você precisa atuar como professor e administrador, conclua a verificação de instituição separadamente no serviço e no Admin.]]",
        "Você pode consultar e gerenciar a lista de membros. Para verificar as informações detalhadas de um membro específico, clique em **Ação (⋯)** > **[Detalhes das informações do membro]**.\n\nAs ações disponíveis para **membros professores** são as seguintes.\n\n[[table:%7B%22rows%22%3A%5B%5B%22A%C3%A7%C3%A3o%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22Aprovar%2Frecusar%20cadastro%22%2C%22Aprova%20ou%20recusa%20o%20cadastro%20de%20membros%20professores%20que%20solicitaram%20verifica%C3%A7%C3%A3o%20de%20institui%C3%A7%C3%A3o.%22%5D%2C%5B%22Excluir%20conta%22%2C%22Remove%20o%20membro%20professor%20do%20servi%C3%A7o%20LumiTeach.%22%5D%2C%5B%22Ver%20detalhes%20das%20informa%C3%A7%C3%B5es%20do%20membro%22%2C%22Verifica%20as%20informa%C3%A7%C3%B5es%20b%C3%A1sicas%20e%20o%20hist%C3%B3rico%20de%20atividades%20do%20membro.%22%5D%2C%5B%22Liberar%20v%C3%ADnculo%22%2C%22Libera%20o%20v%C3%ADnculo%20do%20membro%20por%20motivo%20de%20desligamento%2C%20mudan%C3%A7a%20de%20institui%C3%A7%C3%A3o%20ou%20situa%C3%A7%C3%A3o%20semelhante.%22%5D%2C%5B%22Verificar%20status%20do%20Cr%C3%A9dito%20de%20IA%20e%20conceder%20cr%C3%A9ditos%20adicionais%22%2C%22Verifica%20o%20saldo%20de%20cr%C3%A9ditos%20do%20membro%20e%20concede%20cr%C3%A9ditos%20adicionais.%22%5D%5D%7D]]\n\nAs ações disponíveis para **membros administradores** são as seguintes.\n\n[[table:%7B%22rows%22%3A%5B%5B%22A%C3%A7%C3%A3o%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22Aprovar%2Frecusar%20cadastro%22%2C%22Aprova%20ou%20recusa%20o%20cadastro%20de%20membros%20administradores%20que%20solicitaram%20verifica%C3%A7%C3%A3o%20de%20institui%C3%A7%C3%A3o.%22%5D%2C%5B%22Suspender%20uso%22%2C%22Suspende%20o%20acesso%20do%20membro%20administrador%20ao%20Admin.%22%5D%2C%5B%22Ver%20detalhes%20das%20informa%C3%A7%C3%B5es%20do%20membro%22%2C%22Verifica%20as%20informa%C3%A7%C3%B5es%20b%C3%A1sicas%20e%20o%20hist%C3%B3rico%20de%20atividades%20do%20membro.%22%5D%2C%5B%22Liberar%20v%C3%ADnculo%22%2C%22Libera%20o%20v%C3%ADnculo%20do%20membro%20por%20motivo%20de%20desligamento%2C%20mudan%C3%A7a%20de%20institui%C3%A7%C3%A3o%20ou%20situa%C3%A7%C3%A3o%20semelhante.%22%5D%2C%5B%22Verificar%20status%20do%20Cr%C3%A9dito%20de%20IA%22%2C%22Verifica%20o%20saldo%20de%20cr%C3%A9ditos%20do%20membro.%22%5D%5D%7D]]",
        "- Membros professores com conta excluída não podem usar o serviço LumiTeach.\n\n- Membros administradores suspensos não podem usar o Admin.\n\n[[callout:💡||Membros professores podem excluir a própria conta diretamente.\\nNo caso de membros administradores, um administrador superior ou outro administrador deve suspender o uso.]]",
        "Você pode liberar o vínculo de um membro específico por motivo de desligamento, mudança de instituição ou situação semelhante.\n\n- Um **membro professor** cujo vínculo foi liberado passa a ser um membro gratuito do serviço LumiTeach.\n\n- Um **membro administrador** cujo vínculo foi liberado não pode mais acessar o Admin.",
        "Quando um membro solicita Crédito de IA adicional, a solicitação aparece na lista de gerenciamento de membros. Clique em **[Verificar solicitação]** para revisar os detalhes.\n\n**Aprovar concessão adicional**\n\nSelecione a quantidade de créditos adicionais e aprove. A quantidade selecionada é deduzida do pool compartilhado de créditos da empresa/instituição vinculada e concedida à conta do professor solicitante.\n\n[[callout:⚠️||Créditos já concedidos não podem ser recuperados. Confira obrigatoriamente a quantidade antes da concessão.]]\n\n**Recusar concessão adicional**\n\nDepois de revisar a solicitação, você pode recusá-la se a aprovação não for adequada."
      ],
      "cat-admin-approval-permission": [
        "- Na área **[Alertas principais]** da página inicial do Admin, verifique a quantidade de cadastros pendentes de aprovação.\n\n- Acesse **Gerenciamento de membros > Lista de membros**.\n\n- Para um membro cuja permissão/status esteja como Pendente, clique no botão **Ação (⋯)** para aprovar ou recusar.\n\n[[callout:✅||Uma única conta pode solicitar permissões de professor e administrador separadamente. Aprove ou recuse as permissões de professor e administrador de forma individual.]]",
        "Antes de um usuário se cadastrar, você pode pré-registrar a conta e conceder permissões. Uma conta pré-registrada pode usar o serviço imediatamente após o cadastro, sem uma solicitação de aprovação separada.\n\nClique no botão **[Pré-registro de permissões]** no canto superior direito de **Gerenciamento de membros > Lista de membros** para começar.\n\n**Cadastro em lote**\n\nVocê pode registrar várias contas de uma vez com a mesma afiliação e permissão.\n\n- Insira os e-mails das contas de professores ou administradores que serão registradas.\n\n- Ao inserir várias contas, separe-as com espaço, Enter ou vírgula.\n\n[[image:admin-approval-permission/01.png|Exemplo de tela]]\n\n**Cadastro individual**\n\nVocê pode registrar várias contas de uma vez com afiliações e permissões diferentes.\n\n- Insira os e-mails das contas de professores ou administradores que serão registradas.\n\n- Defina individualmente a afiliação e a permissão de cada conta.\n\n> 📌 É possível registrar até 50 contas por vez.\n\n> ⚠️ O e-mail pré-registrado deve ser igual à conta Google usada no cadastro real para permitir o uso imediato sem solicitação de aprovação. Se o e-mail for diferente, será necessário passar por um processo de aprovação separado."
      ],
      "cat-admin-standard-management": [
        "Em Gerenciamento de padrões, você define **Série, Disciplina e Tipo de item**. As informações cadastradas aqui são usadas em todo o LumiTeach Admin e no serviço.",
        "Cadastre as informações de Série que serão usadas no serviço LumiTeach.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Campo%22%2C%22Descri%C3%A7%C3%A3o%22%2C%22Exemplo%22%5D%2C%5B%22%60Education_Lv%60%22%2C%22Nome%20da%20s%C3%A9rie%22%2C%221%C2%BA%20ano%2C%202%C2%BA%20ano%2C%2012%C2%BA%20ano%22%5D%2C%5B%22%60Education_Lv_ID%60%22%2C%22ID%20exclusivo%20correspondente%20%C3%A0%20S%C3%A9rie%22%2C%2212%C2%BA%20ano%20%E2%86%92%20%6012%60%22%5D%5D%7D]]\n\n> 📌 O intervalo de configuração de `Education_Lv_ID` é **K-12**, e IDs duplicados não podem ser usados.",
        "Cadastre as informações de Disciplina que serão usadas no serviço LumiTeach.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Campo%22%2C%22Descri%C3%A7%C3%A3o%22%2C%22Exemplo%22%5D%2C%5B%22%60Subject_title%60%22%2C%22Nome%20da%20disciplina%22%2C%22Matem%C3%A1tica%2C%20Ingl%C3%AAs%2C%20Ci%C3%AAncias%22%5D%5D%7D]]",
        "Tipo de item se refere a cada elemento que compõe o currículo.\n\n> Exemplo: nível escolar, série, unidade, subunidade, padrão de aprendizagem, área/tópico etc.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Campo%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22%60Item_Title%60%22%2C%22Nome%20do%20componente%20do%20curr%C3%ADculo%22%5D%2C%5B%22%60Ordem%60%22%2C%22Defina%20de%20acordo%20com%20a%20hierarquia%20da%20estrutura%20do%20curr%C3%ADculo.%22%5D%2C%5B%22%60Auto-Tagging%60%22%2C%22Marque%20para%20itens%20que%20n%C3%A3o%20pertencem%20%C3%A0%20hierarquia%20e%20s%C3%A3o%20usados%20como%20metadados%20de%20conte%C3%BAdo.%22%5D%5D%7D]]\n\n[[callout:💡||A ordem dos Tipos de item deve refletir a estrutura hierárquica do currículo. Para itens que não fazem parte da hierarquia, como nível de dificuldade ou tags de tipo, marque **Auto-Tagging** e use-os como metadados.]]"
      ],
      "cat-admin-curriculum-management": [
        "Os currículos cadastrados no Admin são vinculados em tempo real ao menu **Currículo** do serviço do usuário e visualizados nele. Depois de estruturar um currículo, crie Lições e Avaliações adequadas para oferecer materiais de ensino aos professores vinculados.\n\n### Definições de termos\n\n[[table:%7B%22rows%22%3A%5B%5B%22Termo%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%22%2C%22O%20curr%C3%ADculo%20educacional%20mantido%20por%20uma%20empresa%20ou%20institui%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2ASubject%2A%2A%22%2C%22Classifica%C3%A7%C3%A3o%20da%20disciplina%20%28ex.%3A%20Matem%C3%A1tica%2C%20Ci%C3%AAncias%2C%20Ingl%C3%AAs%29%22%5D%2C%5B%22%2A%2AEducation%20Level%2A%2A%22%2C%22Etapa%20de%20aprendizagem%20ou%20s%C3%A9rie%22%5D%2C%5B%22%2A%2AItem%20Type%2A%2A%22%2C%22Tipo%20que%20distingue%20os%20elementos%20e%20caracter%C3%ADsticas%20que%20comp%C3%B5em%20um%20curr%C3%ADculo%20%28ex.%3A%20padr%C3%A3o%20de%20aprendizagem%2C%20unidade%2C%20n%C3%ADvel%20escolar%29%22%5D%2C%5B%22%2A%2AItem%2A%2A%22%2C%22Dados%20reais%20de%20cada%20Item%20Type%20%28ex.%3A%20%5C%22Consegue%20somar%20n%C3%BAmeros%20de%20tr%C3%AAs%20algarismos%20sem%20reagrupamento%5C%22%29%22%5D%5D%7D]]",
        "O cadastro de currículo segue a ordem **Step 1: Informações básicas → Step 2: Inserção de itens**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Etapa%22%2C%22Itens%20de%20entrada%22%5D%2C%5B%22%2A%2AStep%201%3A%20Informa%C3%A7%C3%B5es%20b%C3%A1sicas%2A%2A%22%2C%22Nome%20do%20curr%C3%ADculo%2C%20disciplina%2C%20editora%2C%20vers%C3%A3o%2C%20memo%2Fdescri%C3%A7%C3%A3o%20etc.%22%5D%2C%5B%22%2A%2AStep%202%3A%20Itens%2A%2A%22%2C%22Inserir%20dados%20reais%20por%20Item%20Type%20e%20configurar%20a%20estrutura%20hier%C3%A1rquica%20%28SmartLevel%29%22%5D%5D%7D]]\n\n### Step 1: Inserir informações básicas\n\nInsira as informações básicas do currículo.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Obrigat%C3%B3rio%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22Nome%20do%20curr%C3%ADculo%22%2C%22%E2%9C%85%22%2C%22Nome%20do%20curr%C3%ADculo%20que%20os%20professores%20conseguem%20identificar%20no%20servi%C3%A7o%22%5D%2C%5B%22Disciplina%22%2C%22%E2%9C%85%22%2C%22Selecione%20entre%20as%20disciplinas%20pr%C3%A9-registradas%20em%20Gerenciamento%20de%20padr%C3%B5es%22%5D%2C%5B%22Editora%22%2C%22%22%2C%22Nome%20da%20empresa%20ou%20institui%C3%A7%C3%A3o%20gestora%20que%20publicou%20o%20curr%C3%ADculo%22%5D%2C%5B%22Vers%C3%A3o%22%2C%22%22%2C%22Ano%20de%20publica%C3%A7%C3%A3o%20ou%20vers%C3%A3o%20do%20curr%C3%ADculo%22%5D%2C%5B%22Descri%C3%A7%C3%A3o%22%2C%22%22%2C%22Descri%C3%A7%C3%A3o%20adicional%20sobre%20o%20curr%C3%ADculo%22%5D%5D%7D]]\n\n[[image:admin-curriculum-management/03.png|Exemplo de tela]]\n\n### Step 2: Inserir itens\n\nItem é a unidade de dados real que compõe o currículo. Disciplinas detalhadas, nomes de unidades e padrões de aprendizagem são exemplos de Itens.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Nome%20da%20coluna%22%2C%22Obrigat%C3%B3rio%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2AItem_content%2A%2A%22%2C%22Obrigat%C3%B3rio%22%2C%22Conte%C3%BAdo%20real%20do%20Item.%22%5D%2C%5B%22%2A%2AhumanCodingScheme%2A%2A%22%2C%22Opcional%22%2C%22C%C3%B3digo%20oficial%20usado%20no%20curr%C3%ADculo.%20%28Exemplo%3A%20%60A.1%60%29%22%5D%2C%5B%22%2A%2Asmartlevel%2A%2A%22%2C%22Obrigat%C3%B3rio%22%2C%22N%C3%BAmero%20que%20representa%20a%20hierarquia%20superior-inferior%20entre%20Itens.%22%5D%2C%5B%22%2A%2Aitemtype_title%2A%2A%22%2C%22Obrigat%C3%B3rio%22%2C%22Tipo%20do%20Item.%20%28Exemplos%3A%20n%C3%ADvel%20escolar%2C%20s%C3%A9rie%2C%20semestre%2C%20unidade%2C%20subunidade%2C%20padr%C3%A3o%20de%20aprendizagem%29%22%5D%2C%5B%22%2A%2AeducationLevel%2A%2A%22%2C%22Opcional%22%2C%22C%C3%B3digo%20da%20s%C3%A9rie%20%C3%A0%20qual%20o%20Item%20pertence.%20%28Exemplo%3A%20%6011%60%20%E2%86%92%2011%C2%BA%20ano%29%22%5D%5D%7D]]\n\n[[image:admin-curriculum-management/01.png|Exemplo de tela]]\n\n[[callout:⚠️||**Se itens obrigatórios estiverem vazios ou se** `**itemtype_title**` **não corresponder a um nome pré-registrado em Gerenciamento de padrões, ocorrerá um erro no upload.**\\nConfira obrigatoriamente antes de fazer upload.]]\n\n### O que é a estrutura hierárquica (SmartLevel)?\n\n`smartlevel` é a coluna principal que expressa a relação superior-inferior entre Itens usando números. As etapas são separadas por `.` (ponto), e a profundidade do número representa a hierarquia.\n\n[[callout:📌||Um item filho só é reconhecido quando inclui o número do item pai. Não são permitidos números `smartlevel` duplicados, itens filhos sem item pai ou estruturas circulares.]]\n\n### Baixar/importar modelo\n\n- Clique em **[Importar]** no canto superior direito da página de cadastro em lote.\n\n- Clique em **[Baixar modelo]** para baixar o modelo em Excel.\n\n- Após preencher o modelo, clique novamente em **[Importar]** para enviar o arquivo.\n\n### Salvamento temporário\n\n- Se precisar interromper o trabalho, você pode salvar temporariamente.\n\n- Clique em **[Salvar temporariamente]** no canto superior direito.\n\n[[callout:⚠️||O LumiTeach Admin **não salva automaticamente as alterações do arquivo** enquanto você prepara dados de cadastro em lote.]]",
        "Com a Classificação por IA, você pode organizar automaticamente o modelo de inserção de itens apenas anexando um documento de currículo.\n\n- Clique em **[Classificação por IA]** no canto superior direito da tela Step 2.\n\n- Anexe o documento de currículo que deseja cadastrar e clique em **[Cadastrar]**.\n\n[[image:admin-curriculum-management/02.png|Exemplo de tela]]\n\n[[callout:⚠️||Se já houver conteúdo inserido no Step 2, ele será substituído pelo resultado da análise de IA e não poderá ser restaurado. A Classificação por IA é uma ferramenta que ajuda a criar um rascunho do modelo de cadastro de currículo. Os resultados gerados por IA podem conter erros; revise cuidadosamente o conteúdo antes de aprovar.]]",
        "Currículos cadastrados podem ser verificados e gerenciados clicando em **[Detalhes]**.\n\n**Alternar ativo/inativo**\n\n[[table:%7B%22rows%22%3A%5B%5B%22Status%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2AAtivo%2A%2A%22%2C%22O%20curr%C3%ADculo%20%C3%A9%20exibido%20no%20servi%C3%A7o%20LumiTeach%2C%20e%20os%20usu%C3%A1rios%20podem%20visualizar%20e%20usar%20o%20conte%C3%BAdo.%22%5D%2C%5B%22%2A%2AInativo%2A%2A%22%2C%22O%20curr%C3%ADculo%20e%20os%20conte%C3%BAdos%20de%20Li%C3%A7%C3%A3o%2FAvalia%C3%A7%C3%A3o%20conectados%20n%C3%A3o%20s%C3%A3o%20exibidos%20no%20servi%C3%A7o%20LumiTeach.%22%5D%5D%7D]]\n\nAs informações básicas e os dados de itens do currículo podem ser editados a qualquer momento."
      ],
      "cat-admin-lesson-activity": [
        "Ao entrar no menu Gerenciamento de lições, você pode visualizar a lista de Lições cadastradas.",
        "Clique no nome da Lição na lista ou no botão de informações detalhadas à direita para abrir o modal de informações detalhadas dessa Lição.\n\nNo modal de informações detalhadas, você pode verificar os seguintes itens.\n\n**Informações básicas (painel esquerdo)**\n\n- **País, nome da empresa**: Instituição/empresa à qual a Lição pertence\n\n- **Item ID**: Item detalhado do currículo conectado\n\n- **Currículo**: Currículo conectado\n\n- **Série**\n\n- **Nome da Lição**\n\n- **Ordem da Lição**: Ordem da Lição dentro do currículo\n\n**Conceitos e padrões (painel superior direito)**\n\n- **Conceitos**: Lista de palavras-chave dos conceitos principais tratados nesta Lição\n\n- **Metadados**: Itens de metadados cadastrados em Gerenciamento de padrões\n\n**Miniatura da Lição (painel inferior direito)**\n\n- Se nenhuma imagem separada for cadastrada, a **primeira tela de Atividade da página 1 é definida automaticamente como miniatura** ao salvar ou aprovar.\n\n- Se uma imagem foi enviada manualmente, essa imagem é mantida sem atualização automática.",
        "Clique em **Edit Lesson** na parte inferior do modal de informações detalhadas para ir para a tela de edição da Lição.\n\nNa tela de edição, você pode realizar as seguintes ações.\n\n- Editar o conteúdo das Atividades na Lição\n\n- Alterar a ordem das Atividades\n\n- Adicionar uma nova Atividade\n\n- Salvar o conteúdo editado",
        "Clique no botão de cadastro no canto superior direito da tela de lista para cadastrar uma nova Lição.\n\nHá dois métodos de cadastro abaixo. Consulte o guia detalhado de cada método.\n\n- Cadastro em lote\n\n- AI Make"
      ],
      "cat-admin-lesson-bulk-upload": [
        "### Etapa 1: Baixar o modelo Excel\n\nNa página Admin, acesse a **tela de cadastro em lote de Lições** e clique em **Importar > Baixar modelo** para baixar o arquivo Excel.\n\n⚠️ Use obrigatoriamente o modelo fornecido. Se você adicionar ou excluir colunas arbitrariamente, poderá ocorrer erro no upload.\n\n### Etapa 2: Preencher o modelo Excel\n\nVocê pode **inserir os dados diretamente** no modelo da grade web ou preencher um arquivo Excel e **Importar**.\n\n### Método A: Inserir diretamente na grade web\n\nClique em cada célula e insira diretamente os dados de Lição e Atividade.\n\n- **Add Row Above / Add Row Below**: Adiciona uma linha acima ou abaixo da linha selecionada.\n\n- **Delete Selected Row**: Exclui a linha selecionada.\n\n### Método B: Importar um arquivo Excel\n\n- Clique em **Import** no canto superior direito.\n\n- Arraste e solte o arquivo preenchido na área de upload do popup ou clique em **SELECT FILE** para anexá-lo.\n\n- Clique em **Submit** para carregar os dados na grade web.\n\n> Formatos suportados: XLSX, XLS / Máximo 10 MB\n\n### Como preencher o modelo\n\nCada linha representa uma Atividade. Atividades que pertencem à mesma Lição devem repetir as **mesmas informações da Lição**.\n\n### Exemplo de estrutura básica\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item_ID%22%2C%22Lesson_order%22%2C%22Lesson_title%22%2C%22Activity_order%22%2C%22Activity_type%22%2C%22Activity_title%22%5D%2C%5B%22ITEM001%22%2C%221%22%2C%22Primeira%20li%C3%A7%C3%A3o%22%2C%221%22%2C%22text%20only%20%28G%29%22%2C%22Objetivo%20de%20aprendizagem%20de%20hoje%22%5D%2C%5B%22ITEM001%22%2C%221%22%2C%22Primeira%20li%C3%A7%C3%A3o%22%2C%222%22%2C%22true%20or%20false%20%28Q%29%22%2C%22Qual%20das%20op%C3%A7%C3%B5es%20abaixo%20est%C3%A1%20correta%3F%22%5D%2C%5B%22ITEM001%22%2C%222%22%2C%22Segunda%20li%C3%A7%C3%A3o%22%2C%221%22%2C%22multiple%20choice%20%28Q%29%22%2C%22Escolha%20a%20resposta%20correta%22%5D%5D%7D]]\n\n### Descrição das colunas\n\n### Informações básicas da Lição\n\n[[table:%7B%22rows%22%3A%5B%5B%22Nome%20da%20coluna%22%2C%22Obrigat%C3%B3rio%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22Item_ID%22%2C%22%E2%9C%85%20Obrigat%C3%B3rio%22%2C%22ID%20do%20Item%20ao%20qual%20a%20Li%C3%A7%C3%A3o%20pertence.%20S%C3%B3%20%C3%A9%20poss%C3%ADvel%20usar%20IDs%20registrados%20em%20Gerenciamento%20de%20curr%C3%ADculo.%22%5D%2C%5B%22Lesson_order%22%2C%22%E2%9C%85%20Obrigat%C3%B3rio%22%2C%22Ordem%20da%20Li%C3%A7%C3%A3o%20%28come%C3%A7a%20em%201%2C%20apenas%20n%C3%BAmeros%29%22%5D%2C%5B%22Lesson_title%22%2C%22%E2%9C%85%20Obrigat%C3%B3rio%22%2C%22T%C3%ADtulo%20da%20Li%C3%A7%C3%A3o%20%28at%C3%A9%20100%20caracteres%29%22%5D%2C%5B%22Lesson_image%22%2C%22Opcional%22%2C%22Imagem%20representativa%20da%20Li%C3%A7%C3%A3o.%20Apenas%201%20imagem%20pode%20ser%20enviada%20por%20Li%C3%A7%C3%A3o.%22%5D%2C%5B%22Lesson_objective%22%2C%22Opcional%22%2C%22Objetivo%20de%20aprendizagem%20da%20Li%C3%A7%C3%A3o%22%5D%5D%7D]]\n\n### Informações básicas da Atividade\n\n[[table:%7B%22rows%22%3A%5B%5B%22Nome%20da%20coluna%22%2C%22Obrigat%C3%B3rio%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22Activity_order%22%2C%22%E2%9C%85%20Obrigat%C3%B3rio%22%2C%22Ordem%20da%20Atividade%20%28come%C3%A7a%20em%201%2C%20apenas%20n%C3%BAmeros%29%22%5D%2C%5B%22Activity_type%22%2C%22%E2%9C%85%20Obrigat%C3%B3rio%22%2C%22Tipo%20de%20Atividade%20%28consulte%20a%20lista%20abaixo%29%22%5D%2C%5B%22Activity_color%22%2C%22Opcional%22%2C%22Cor%20de%20fundo%2Ffonte.%20Se%20ficar%20em%20branco%2C%20Black%20%26%20White%20ser%C3%A1%20aplicado.%22%5D%2C%5B%22Activity_title%22%2C%22%E2%9C%85%20Obrigat%C3%B3rio%22%2C%22T%C3%ADtulo%20ou%20pergunta%20da%20Atividade%20%28at%C3%A9%2050%20caracteres%29%22%5D%2C%5B%22Activity_description%22%2C%22Opcional%22%2C%22Descri%C3%A7%C3%A3o%20da%20Atividade%20%28at%C3%A9%2080%20caracteres%29%22%5D%2C%5B%22Activity_image%22%2C%22Opcional%22%2C%22Imagem%20da%20Atividade%22%5D%5D%7D]]\n\nOs tipos de Atividade são divididos em 4 categorias principais.\n\n### Conteúdo geral (G)\n\nTela que mostra conteúdo de aprendizagem. Posicione texto, imagens e outros elementos sem inserir uma resposta separada.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22text%20only%20%28G%29%22%2C%22Exibe%20apenas%20texto%22%5D%2C%5B%22text%20%26%20text%20%28G%29%22%2C%22Exibe%20dois%20blocos%20de%20texto%20lado%20a%20lado%22%5D%2C%5B%22image%20only%20%28G%29%22%2C%22Exibe%20apenas%20imagem%22%5D%2C%5B%22text%20top%20%28G%29%22%2C%22Texto%20acima%2C%20imagem%20abaixo%22%5D%2C%5B%22image%20top%20%28G%29%22%2C%22Imagem%20acima%2C%20texto%20abaixo%22%5D%2C%5B%22image%20middle%20%28G%29%22%2C%22Imagem%20entre%20blocos%20de%20texto%22%5D%2C%5B%22image%20left%20%28G%29%22%2C%22Imagem%20%C3%A0%20esquerda%2C%20texto%20%C3%A0%20direita%22%5D%2C%5B%22image%20right%20%28G%29%22%2C%22Imagem%20%C3%A0%20direita%2C%20texto%20%C3%A0%20esquerda%22%5D%5D%7D]]\n\n### Conteúdo externo (E)\n\nAtividade que incorpora um arquivo ou link externo.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Descri%C3%A7%C3%A3o%22%2C%22Coluna%20necess%C3%A1ria%22%5D%2C%5B%22webviewer%20%28E%29%22%2C%22Insere%20uma%20URL%20de%20site%22%2C%22Activity_url%22%5D%2C%5B%22Youtube%20%28E%29%22%2C%22Insere%20um%20v%C3%ADdeo%20do%20YouTube%22%2C%22Activity_url%22%5D%2C%5B%22document%20%28E%29%22%2C%22Anexa%20um%20arquivo%20de%20documento%22%2C%22Activity_document%20%28pdf%2C%20doc%2C%20docx%2C%20pptx%2C%20ppt%20%2F%20m%C3%A1x.%20500%20MB%29%22%5D%2C%5B%22sound%20%28E%29%22%2C%22Anexa%20um%20arquivo%20de%20%C3%A1udio%22%2C%22Activity_sound%20%28mp3%20%2F%20m%C3%A1x.%2020%20MB%29%22%5D%5D%7D]]\n\n### Quiz (Q)\n\nAtividade em que o aluno insere ou seleciona uma resposta.\n\n### true or false (Q) — Quiz OX\n\n- Insira a resposta correta na coluna **TF_correct_answer** (✅ Obrigatório)\n\n- Exemplo: O ou X\n\n### short answer (Q) — Resposta curta\n\n- Insira a resposta correta na coluna **SA_correct_answer** (✅ Obrigatório)\n\n- Se houver várias respostas aceitas, separe-as por vírgulas (,).\n\n- Exemplo: maçã, apple, manzana\n\n### multiple choice (Q) — Múltipla escolha\n\n- **MC_type**: Selecione text ou image (✅ Obrigatório)\n\n- **MC_correct_answer**: Insira o número da alternativa correta (✅ Obrigatório). Para várias respostas corretas, separe por vírgulas.\n\n- Exemplo: 1 ou 1,3\n\n- **MC_option1 ~ MC_option5**: Insira o conteúdo das alternativas (mínimo 2 obrigatórias, máximo 50 caracteres)\n\n- Para tipo image, faça upload das imagens em MC_option1_image ~ MC_option5_image.\n\n### open-ended (Q) — Resposta aberta\n\n- **OE_correct_answer**: Insira uma resposta modelo (Opcional)\n\n### fill in the blank (Q) — Preencher lacuna\n\n- Na coluna **Activity_title**, coloque entre [ ] a palavra que será transformada em lacuna.\n\n- Exemplo: Maçã em inglês é [apple].\n\n### sequencing (Q) — Sequenciamento\n\n- **SQ_type**: Selecione text ou image (✅ Obrigatório)\n\n- **SQ_option1 ~ SQ_option5**: Conteúdo das alternativas (mínimo 2 obrigatório)\n\n- **SQ_option1_seq ~ SQ_option5_seq**: Insira o número da ordem correta de cada alternativa (✅ Obrigatório)\n\n- Exemplo: option1_seq=2, option2_seq=1 (option2 primeiro, option1 segundo)\n\n### matching (Q) — Correspondência\n\n- **MA_type**: Selecione text ou image (✅ Obrigatório)\n\n- **MA_correct_answer**: Insira os pares corretos no formato número-letra (✅ Obrigatório)\n\n- Exemplo: 1-a,2-b,3-c\n\n- **MA_option1 ~ MA_option4**: Alternativas superiores (números 1~4)\n\n- **MA_option_a ~ MA_option_d**: Alternativas inferiores (letras a~d)\n\n### sorting (Q) — Classificação\n\n- **SR_type**: Selecione text ou image (✅ Obrigatório)\n\n- **SR_groupA**: Título do Grupo A (✅ Obrigatório, máx. 30 caracteres)\n\n- **SR_groupB**: Título do Grupo B (✅ Obrigatório, máx. 30 caracteres)\n\n- **SR_option1 ~ SR_option5**: Conteúdo das alternativas (mínimo 2 obrigatório)\n\n- **SR_option1_group ~ SR_option5_group**: Insira o grupo ao qual cada alternativa pertence (✅ Obrigatório)\n\n- Valor de entrada: Group A ou Group B\n\n### Opinião/Discussão (D)\n\nAtividade que coleta opiniões dos alunos. Não há resposta correta; configure apenas a pergunta e as opções.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Descri%C3%A7%C3%A3o%22%2C%22Coluna%20necess%C3%A1ria%22%5D%2C%5B%22vote%20%28D%29%22%2C%22Vota%C3%A7%C3%A3o%22%2C%22Vote_option1%20~%20Vote_option5%20%28m%C3%ADnimo%202%29%22%5D%2C%5B%22traffic%20light%20%28D%29%22%2C%22Sem%C3%A1foro%20%28verifica%C3%A7%C3%A3o%20de%20compreens%C3%A3o%29%22%2C%22N%C3%A3o%20requer%20entrada%20separada%20de%20alternativas%22%5D%2C%5B%22agree-disagree%20%28D%29%22%2C%22Opini%C3%A3o%20de%20concord%C3%A2ncia%2Fdiscord%C3%A2ncia%22%2C%22N%C3%A3o%20requer%20entrada%20separada%20de%20alternativas%22%5D%2C%5B%22opinion%20scale%20%28D%29%22%2C%22Escala%20de%20opini%C3%A3o%22%2C%22N%C3%A3o%20requer%20entrada%20separada%20de%20alternativas%22%5D%5D%7D]]\n\n### Quadro de ideias (I)\n\nAtividade em que os alunos escrevem ideias livremente. Não há resposta correta; configure apenas a pergunta.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Descri%C3%A7%C3%A3o%22%2C%22Coluna%20necess%C3%A1ria%22%5D%2C%5B%22brainstorming%20%28I%29%22%2C%22Brainstorming%22%2C%22Insira%20apenas%20Activity_title.%20N%C3%A3o%20requer%20entrada%20separada%20de%20alternativas.%22%5D%2C%5B%22whiteboard%20%28I%29%22%2C%22Whiteboard%22%2C%22Insira%20apenas%20Activity_title.%20N%C3%A3o%20requer%20entrada%20separada%20de%20alternativas.%22%5D%5D%7D]]\n\n### Activity_color — Opções de cor\n\nPara a cor de fundo/fonte, insira exatamente um dos valores abaixo.\n\n`Black&White` / `Red` / `Orange` / `Yellow` / `Green` / `Blue` / `Purple` / `Pink`\n\n> Se ficar em branco, `Black&White` será aplicado automaticamente.\n\n### Etapa 3: Anexar arquivos\n\nImagens, documentos e arquivos de áudio não podem ser importados pelo modelo Excel e devem ser **anexados diretamente na grade web**. Clique em cada célula para anexar o arquivo.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Coluna%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2AActivity_image%2A%2A%22%2C%22Anexar%20arquivo%20de%20imagem%20da%20Atividade%2C%20m%C3%A1ximo%201%20arquivo%2C%20at%C3%A9%2020%20MB%22%5D%2C%5B%22%2A%2AActivity_document%2A%2A%22%2C%22Anexar%20arquivo%20de%20documento%20da%20Atividade%2C%20m%C3%A1ximo%201%20arquivo%2C%20at%C3%A9%2020%20MB%22%5D%2C%5B%22%2A%2AActivity_sound%2A%2A%22%2C%22Anexar%20arquivo%20de%20%C3%A1udio%20da%20Atividade%2C%20m%C3%A1ximo%201%20arquivo%2C%20at%C3%A9%2020%20MB%22%5D%2C%5B%22%2A%2ALesson_image%2A%2A%22%2C%22Anexar%20imagem%20de%20miniatura%20da%20Li%C3%A7%C3%A3o%2C%20m%C3%A1ximo%201%20arquivo%2C%20at%C3%A9%2020%20MB.%20Se%20a%20miniatura%20n%C3%A3o%20for%20registrada%2C%20a%20primeira%20Atividade%20ser%C3%A1%20exibida%20como%20miniatura.%22%5D%5D%7D]]\n\n### Etapa 4: Salvar rascunho\n\nSe precisar se ausentar ou interromper o trabalho, clique em **Save Draft** para salvar temporariamente os dados em edição.\n\n### Etapa 5: Enviar\n\nQuando a entrada de dados estiver concluída, clique em **Submit** para concluir o cadastro.\n\n> ⚠️ Se houver itens com erro ao enviar, uma mensagem de erro será exibida na célula correspondente. Verifique a mensagem, corrija o conteúdo e envie novamente."
      ],
      "cat-admin-lesson-ai-make": [
        "### Etapa 1: Executar AI Make\n\nClique em **AI Make** na parte superior da tela de edição da Lição.\n\n### Etapa 2: Configurar informações básicas\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%20%28Obrigat%C3%B3rio%29%22%2C%22Selecione%20o%20curr%C3%ADculo%20que%20ser%C3%A1%20aplicado%20%C3%A0%20Li%C3%A7%C3%A3o.%22%5D%2C%5B%22%2A%2AGrade%2A%2A%20%28Obrigat%C3%B3rio%29%22%2C%22Selecione%20a%20s%C3%A9rie-alvo.%22%5D%2C%5B%22%2A%2AIdioma%2A%2A%20%28Opcional%29%22%2C%22Selecione%20o%20idioma%20de%20extra%C3%A7%C3%A3o%20do%20conte%C3%BAdo.%22%5D%5D%7D]]\n\n### Etapa 3: Configurar Auto-tagging\n\nEsta função marca automaticamente **palavras-chave de conceitos** e **metadados** na Lição gerada.\n\n- **Usar**: Após analisar a Lição, a IA marca automaticamente palavras-chave de conceitos e metadados. (Crédito de IA é descontado)\n\n- **Não usar**: Ignora o Auto-tagging.\n\n### Etapa 4: Anexar material de origem\n\nArraste e solte o arquivo ou clique no botão de seleção de arquivo para anexar o material de origem.\n\n> Formatos suportados: pdf, doc, docx, ppt, pptx / Limite de tamanho: 100 MB por arquivo\n\n### Etapa 5: Configurar categorias de Lição\n\nSe o material de origem for dividido em várias Lições, insira o intervalo de páginas e a quantidade de Atividades a gerar para cada Lição.\n\n- Se nenhum valor de categoria for definido, todo o material de origem será gerado como **uma Lição**.\n\n- Você pode adicionar categorias de Lição com o botão **+ Add Lesson Category**.\n\n- Clique em **AI Classification** para que a IA analise o material de origem e classifique automaticamente os intervalos de páginas das Lições. Depois, também é possível editar manualmente.\n\n### Etapa 6: Iniciar geração\n\nClique em **Create**. Quando a geração começar, você poderá acompanhar o progresso na camada no canto inferior direito da tela. Mesmo durante a geração, é possível usar livremente outras funções do Admin.",
        "### Verificar a aba Revisão\n\nQuando a geração da Lição por IA for concluída, verifique a lista de Lições geradas na aba **[Revisão]**.\n\n### Verificar informações detalhadas\n\nClique no nome da Lição gerada ou no ícone de informações detalhadas para verificar os detalhes.\n\n- Se Auto-tagging foi aplicado, **palavras-chave de conceitos** e **metadados** são inseridos automaticamente. Você pode editá-los conforme necessário.\n\n- Configure **Item ID** para especificar o item ao qual a Lição será mapeada.\n\n- Insira a **ordem da Lição**.\n\n### Revisar e editar o conteúdo da Lição\n\nClique em **Edit Lesson** para verificar o conteúdo da Lição gerada pela IA. Edite as partes necessárias e salve.\n\n### Aprovar e publicar\n\nQuando a revisão estiver concluída, clique em **[Aprovar]**. A Lição será publicada imediatamente após a aprovação.\n\n[[callout:⚠️||Notas\n- Quanto menos informações houver no material de origem, maior a chance de duplicação ou simplificação do conteúdo. Para obter melhor qualidade, configure bem as informações básicas e ajuste adequadamente o número de páginas para geração de Atividades.\n- AI Make é uma ferramenta que ajuda a criar rascunhos. Os resultados gerados por IA podem conter erros; revise cuidadosamente o conteúdo antes de aprovar.\n- Crédito de IA é descontado ao usar Auto-tagging e AI Make.]]"
      ],
      "cat-admin-lesson-recommendation": [
        "- Clique na aba **Gerenciamento de currículo/conteúdo > Gerenciamento de lições > Gerenciamento de recomendações**.\n\n- Na tela Gerenciamento de recomendações, você pode consultar e gerenciar conteúdos recomendados registrados (Tópico recomendado 1, Tópico recomendado 2).\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2AT%C3%B3pico%20recomendado%201%2A%2A%22%2C%22Status%20Ativo%20ou%20Inativo%20da%20primeira%20%C3%A1rea%20de%20recomenda%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2AT%C3%B3pico%20recomendado%202%2A%2A%22%2C%22Status%20Ativo%20ou%20Inativo%20da%20segunda%20%C3%A1rea%20de%20recomenda%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2AData%20da%20%C3%BAltima%20modifica%C3%A7%C3%A3o%2A%2A%22%2C%22Data%20em%20que%20a%20configura%C3%A7%C3%A3o%20de%20recomenda%C3%A7%C3%A3o%20foi%20atualizada%20pela%20%C3%BAltima%20vez%20%28yyyy-mm-dd%29%22%5D%5D%7D]]\n\n### Verificar detalhes da recomendação\n\n- Clique no **ícone ↗** na coluna **[Detalhes]** da lista para abrir a página de detalhes em uma **nova janela**.\n\n- Na página de detalhes, você pode verificar o público de exibição, o Tópico 1 e o Tópico 2.\n\n- Clique em **[Ver tópico/descrição por idioma]** em cada área de tópico para verificar o título e a descrição por idioma em um popup.\n\n### Editar configurações de recomendação\n\n- Clique em **[Editar]** no canto superior direito da página de detalhes para ir para a página de edição.",
        "- Clique em **[Novo cadastro]** no canto superior direito da tela da lista de recomendações.\n\n### Inserir título do tópico (registrar traduções por idioma)\n\n- Clique em **[Editar]** para abrir o modal **Editar tradução do Tópico recomendado 1**.\n\n- No modal, insira o título do tópico para cada idioma.\n\n- Clique em **[Adicionar tradução]** para adicionar um idioma.\n\n[[callout:⚠️||Se não houver dados de tradução para o idioma selecionado pelo usuário no serviço LumiTeach, a chave de tradução poderá aparecer como está.]]\n\n### Adicionar item conectado (Item ID)\n\n- Clique em **[+ Adicionar Item ID]** para abrir o modal **Adicionar Item ID**.\n\n- Selecione na ordem Company → Curriculum e depois pesquise.\n\n- É possível adicionar até **4 itens**.\n\n### Alterar ordem e excluir itens\n\n- Use o botão **seta para cima/baixo (↕)** à esquerda de cada linha de item para alterar a ordem.\n\n- Clique no **ícone de exclusão 🗑️** à direita da linha do item para excluir o item correspondente.",
        "- O Tópico 2 é configurado da mesma forma que o Tópico 1.\n\n### Diferença em relação ao Tópico 1\n\n- No modal **[Editar]**, além do **título**, insira também a **descrição por Item ID** conectado.\n\n- É possível adicionar até **2 itens conectados**.\n\nDepois de inserir todos os itens, clique em **[Cadastrar]** no canto superior direito."
      ],
      "cat-admin-assessment-question": [
        "- Clique em **Gerenciamento de avaliações** no menu superior e selecione a aba **[Gerenciamento de questões]**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2AID%20da%20quest%C3%A3o%2A%2A%22%2C%22N%C3%BAmero%20de%20identifica%C3%A7%C3%A3o%20exclusivo%20da%20quest%C3%A3o%22%5D%2C%5B%22%2A%2ATipo%20de%20quest%C3%A3o%2A%2A%22%2C%22Distingue%20tipos%20de%20quest%C3%A3o%2C%20como%20m%C3%BAltipla%20escolha%2C%20resposta%20curta%2C%20quiz%20OX%2C%20correspond%C3%AAncia%20etc.%22%5D%2C%5B%22%2A%2AData%20da%20%C3%BAltima%20modifica%C3%A7%C3%A3o%2A%2A%22%2C%22Data%20em%20que%20os%20dados%20foram%20registrados%20pela%20primeira%20vez%20ou%20modificados%20pela%20%C3%BAltima%20vez%20%28YYYY-MM-DD%29%22%5D%5D%7D]]\n\n### Verificar detalhes da questão\n\n- Clique no **ícone ↗ (detalhes)** na lista para abrir a **página de detalhes** da questão.\n\n- Você pode verificar país, empresa, ID da questão, dificuldade, conta de cadastro/modificação mais recente e data da última modificação.\n\n### Pré-visualizar questão\n\n- Clique em **[Pré-visualizar]** no canto superior direito da página de detalhes para abrir o modal de pré-visualização.\n\n- Você pode escolher entre **versão PC** e **versão móvel** para verificar.\n\n### Editar questão\n\n- Clique em **[Editar]** no canto superior direito da página de detalhes para alternar para o **modo de edição da questão**.",
        "As questões podem ser cadastradas de duas formas: **cadastro individual** e **cadastro em massa**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Categoria%22%2C%22%22%2C%22Obrigat%C3%B3rio%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22question_ID%22%2C%22ID%20da%20quest%C3%A3o%22%2C%22Obrigat%C3%B3rio%22%2C%22Use%20letras%20mai%C3%BAsculas%2Fmin%C3%BAsculas%20em%20ingl%C3%AAs%2C%20n%C3%BAmeros%2C%20pontos%20e%20tra%C3%A7os%20%28-%29.%20Duplicatas%20n%C3%A3o%20s%C3%A3o%20permitidas.%22%5D%2C%5B%22question_type%22%2C%22Tipo%20de%20quest%C3%A3o%22%2C%22Obrigat%C3%B3rio%22%2C%22Distingue%20o%20tipo%20de%20quest%C3%A3o.%22%5D%2C%5B%22question_Difficulty%22%2C%22Dificuldade%22%2C%22Opcional%22%2C%22Hard%2C%20Normal%2C%20Easy%22%5D%2C%5B%22question_text%22%2C%22Enunciado%22%2C%22Obrigat%C3%B3rio%22%2C%22Escreva%20a%20pergunta%20da%20quest%C3%A3o.%22%5D%2C%5B%22question_description%22%2C%22Descri%C3%A7%C3%A3o%22%2C%22Opcional%22%2C%22Escreva%20uma%20explica%C3%A7%C3%A3o%20adicional%20ou%20texto%20de%20apoio.%22%5D%2C%5B%22question_image%22%2C%22Imagem%22%2C%22Opcional%22%2C%22Adicione%20uma%20imagem%20para%20a%20quest%C3%A3o.%22%5D%2C%5B%22correct_answer%22%2C%22Resposta%20correta%22%2C%22Obrigat%C3%B3rio%22%2C%22Escreva%20a%20resposta%20correta%20de%20cada%20quest%C3%A3o.%22%5D%2C%5B%22option%22%2C%22Alternativas%22%2C%22Obrigat%C3%B3rio%2FOpcional%22%2C%22Insira%20as%20op%C3%A7%C3%B5es%20de%20alternativas%20da%20quest%C3%A3o.%22%5D%5D%7D]]\n\n### Tipos de questão\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Nome%20em%20ingl%C3%AAs%22%5D%2C%5B%22Quiz%20OX%22%2C%22True%20or%20False%22%5D%2C%5B%22Resposta%20curta%22%2C%22Short%20Answer%22%5D%2C%5B%22M%C3%BAltipla%20escolha%22%2C%22Multiple%20Choice%22%5D%2C%5B%22Sequenciamento%22%2C%22Sequencing%22%5D%2C%5B%22Correspond%C3%AAncia%22%2C%22Matching%22%5D%2C%5B%22Preencher%20lacuna%22%2C%22Fill%20in%20the%20Blank%22%5D%2C%5B%22Classifica%C3%A7%C3%A3o%22%2C%22Sorting%22%5D%5D%7D]]",
        "Este método cadastra uma questão por vez por meio de entrada direta.\n\n### Inserir informações básicas\n\n- **Tipo de questão:** Selecione o tipo de questão no dropdown.\n\n- **Enunciado:** Insira a pergunta da questão. (Obrigatório, máximo 50 caracteres)\n\n- **Descrição:** Insira uma descrição adicional. (Opcional, máximo 80 caracteres)\n\n- **Imagem da questão:** Você pode anexar uma imagem com o botão **[Anexar arquivo]**. (1 arquivo / até 20 MB / jpg, jpeg, png)\n\nDepois de inserir todos os itens, clique em **[Cadastrar]** no canto superior direito.",
        "Este método cadastra várias questões de uma vez conforme o modelo Excel.\n\n### Baixar/importar modelo\n\n- Clique em **[Importar]** no canto superior direito.\n\n- Clique em **[Baixar modelo]** para baixar o modelo Excel.\n\n- Após preencher o modelo, clique novamente em **[Importar]** para fazer upload do arquivo.\n\n[[callout:💡||**Observação:** O LumiTeach Admin **não salva automaticamente as alterações do arquivo** enquanto você prepara dados de cadastro em massa.]]\n\n### Cuidados ao cadastrar questões em massa\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%20de%20valida%C3%A7%C3%A3o%22%2C%22Condi%C3%A7%C3%A3o%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22Obrigat%C3%B3rios%20comuns%22%2C%22Quando%20question_id%2C%20question_type%20ou%20question_text%20estiver%20ausente%22%2C%22ID%20da%20quest%C3%A3o%2C%20tipo%20de%20quest%C3%A3o%20e%20conte%C3%BAdo%20da%20pergunta%20s%C3%A3o%20campos%20obrigat%C3%B3rios.%22%5D%2C%5B%22Requisitos%20de%20imagem%22%2C%22Quando%20a%20extens%C3%A3o%20n%C3%A3o%20for%20jpg%2Fpng%20ou%20o%20arquivo%20exceder%2020%20MB%22%2C%22Arquivos%20de%20imagem%20suportam%20apenas%20os%20formatos%20jpg%20e%20png%20e%20podem%20ser%20enviados%20at%C3%A9%2020%20MB.%22%5D%2C%5B%22Requisitos%20de%20dados%20por%20quest%C3%A3o%22%2C%22Quando%20a%20resposta%20correta%20ou%20as%20alternativas%20estiverem%20ausentes%20ou%20com%20formato%20incorreto%22%2C%22Preencha%20a%20resposta%20correta%20e%20as%20alternativas%20de%20acordo%20com%20o%20tipo%20de%20quest%C3%A3o.%22%5D%5D%7D]]\n\nDepois de inserir todos os itens, clique em **[Cadastrar]** no canto superior direito."
      ],
      "cat-admin-assessment-paper": [
        "- No menu Gerenciamento de avaliações, selecione a aba **[Gerenciamento de avaliações]**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2ANome%20da%20avalia%C3%A7%C3%A3o%2A%2A%22%2C%22Nome%20da%20Avalia%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2ACurr%C3%ADculo%2A%2A%22%2C%22Unidade%20curricular%20mapeada%20%C3%A0%20Avalia%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2AS%C3%A9rie%2A%2A%22%2C%22Informa%C3%A7%C3%A3o%20de%20s%C3%A9rie%20mapeada%20%C3%A0%20Avalia%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2AN%C3%BAmero%20de%20quest%C3%B5es%2A%2A%22%2C%22N%C3%BAmero%20total%20de%20quest%C3%B5es%20registradas%20na%20Avalia%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2AStatus%2A%2A%22%2C%22Status%20Ativo%20%2F%20Inativo%20da%20Avalia%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2AData%20da%20%C3%BAltima%20modifica%C3%A7%C3%A3o%2A%2A%22%2C%22Exibe%20a%20data%20de%20modifica%C3%A7%C3%A3o%20se%20houver%20altera%C3%A7%C3%A3o%20recente%3B%20caso%20contr%C3%A1rio%2C%20exibe%20a%20data%20do%20cadastro%20inicial%22%5D%5D%7D]]\n\n### Verificar detalhes da Avaliação\n\n- Clique no **ícone ↗ (detalhes)** na lista para abrir a **página de detalhes** dessa Avaliação.\n\n### Editar Avaliação\n\n- Clique em **[Editar]** no canto superior direito da página de detalhes para alternar para o **modo de edição**.\n\n- Após concluir a edição, clique em **[Salvar]** no canto superior direito.",
        "Este método insere diretamente as informações de uma Avaliação, configura as questões e registra a Avaliação.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22%2A%2ANome%20da%20Avalia%C3%A7%C3%A3o%2A%2A%22%2C%22Obrigat%C3%B3rio%2C%20at%C3%A9%20100%20bytes%22%5D%2C%5B%22%2A%2AOrdem%20da%20Avalia%C3%A7%C3%A3o%2A%2A%22%2C%22Obrigat%C3%B3rio%2C%20apenas%20n%C3%BAmeros%22%5D%2C%5B%22%2A%2ACurr%C3%ADculo%2A%2A%22%2C%22Obrigat%C3%B3rio%2C%20selecionar%20na%20lista%20de%20curr%C3%ADculos%22%5D%2C%5B%22%2A%2AItem%20ID%2A%2A%22%2C%22Obrigat%C3%B3rio%2C%20o%20modal%20aparece%20ao%20clicar%20no%20bot%C3%A3o%20%5BAdicionar%20Item%20ID%5D%22%5D%2C%5B%22%2A%2AMiniatura%20da%20Avalia%C3%A7%C3%A3o%2A%2A%22%2C%22Se%20nenhuma%20imagem%20separada%20for%20registrada%2C%20a%20primeira%20tela%20de%20quest%C3%A3o%20da%20p%C3%A1gina%201%20ser%C3%A1%20salva%20automaticamente%20ao%20salvar%20ou%20aprovar%22%5D%2C%5B%22%2A%2AFonte%2A%2A%22%2C%22Opcional%2C%20at%C3%A9%20100%20bytes%22%5D%5D%7D]]\n\n### Configurar questões\n\n- Clique em **[Adicionar questão]** para abrir o modal **Adicionar questão**.\n\n- Selecione as questões com checkboxes. É possível selecionar várias.\n\n- As questões adicionadas podem ter a ordem alterada com os botões ▲▼ e ser excluídas com o ícone 🗑️.\n\nApós inserir todos os itens obrigatórios e configurar as questões, clique em **[Cadastrar]** no canto superior direito.",
        "Este método cadastra várias Avaliações de uma vez conforme o modelo Excel.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Categoria%22%2C%22%22%2C%22Obrigat%C3%B3rio%22%2C%22Descri%C3%A7%C3%A3o%22%5D%2C%5B%22Item_id%22%2C%22Item%20ID%22%2C%22Obrigat%C3%B3rio%22%2C%22Item%20ID%20do%20curr%C3%ADculo%20ao%20qual%20a%20Avalia%C3%A7%C3%A3o%20ser%C3%A1%20conectada%22%5D%2C%5B%22assessment_order%22%2C%22Ordem%20da%20Avalia%C3%A7%C3%A3o%22%2C%22Obrigat%C3%B3rio%22%2C%22Ordem%20em%20que%20a%20Avalia%C3%A7%C3%A3o%20ser%C3%A1%20classificada%20dentro%20do%20curr%C3%ADculo%22%5D%2C%5B%22assessment_name%22%2C%22Nome%20da%20Avalia%C3%A7%C3%A3o%22%2C%22Obrigat%C3%B3rio%22%2C%22Digite%20o%20nome%20da%20Avalia%C3%A7%C3%A3o.%22%5D%2C%5B%22assessment_thumbnail%22%2C%22Miniatura%20da%20Avalia%C3%A7%C3%A3o%22%2C%22Opcional%22%2C%22Anexe%20uma%20imagem%20representativa%20da%20Avalia%C3%A7%C3%A3o.%22%5D%2C%5B%22question_order%22%2C%22Ordem%20da%20quest%C3%A3o%22%2C%22Obrigat%C3%B3rio%22%2C%22Digite%20a%20ordem%20da%20quest%C3%A3o.%22%5D%2C%5B%22question_id%22%2C%22ID%20da%20quest%C3%A3o%22%2C%22Obrigat%C3%B3rio%22%2C%22Digite%20o%20ID%20da%20quest%C3%A3o%20que%20compor%C3%A1%20a%20Avalia%C3%A7%C3%A3o.%22%5D%5D%7D]]\n\n[[callout:💡||**Observação:** O LumiTeach Admin **não salva automaticamente as alterações do arquivo** enquanto você prepara dados de cadastro em massa.]]\n\nDepois de inserir todos os itens, clique em **[Cadastrar]** no canto superior direito."
      ],
      "cat-admin-report-management": [
        "- Você pode verificar conteúdos denunciados entre os conteúdos publicados no menu Explore do serviço do usuário.\n\n- Na parte superior, também é possível verificar os status de **total de denúncias**, **recebidas**, **recusadas** e **ação concluída**.\n\n- Clique no botão de informações detalhadas na lista para ir para a tela de detalhes do conteúdo denunciado.\n\n[[callout:✅||O status de uma denúncia é dividido em 3 tipos.\n- **Recebida**: a denúncia foi recebida e precisa de análise\n- **Recusada**: a denúncia foi recusada e o conteúdo continua visível\n- **Desativada**: após verificar a denúncia, o conteúdo foi ocultado]]",
        "- Na tela de detalhes, verifique o registrante que publicou o conteúdo denunciado, a data de registro, a disciplina e a série.\n\n- Clique em **[Pré-visualizar]** para verificar os detalhes do conteúdo em formato de imagem.",
        "- Se a equipe de operação não concordar com a denúncia ou considerar que o conteúdo publicado é adequado, processe como **Recusada**. O conteúdo continuará publicado.\n\n- Clique em **[Recusar]** no canto superior direito da tela de detalhes.\n\n- Quando a denúncia é recusada, o conteúdo continua visível aos usuários, e o denunciante é informado do resultado por e-mail.",
        "- Se a equipe de operação decidir que o conteúdo não deve permanecer público, processe como **Desativado**. O conteúdo desativado não será exibido no menu Explore.\n\n- Clique em **[Ação concluída]** no canto superior direito da tela de detalhes.\n\n- Selecione o motivo para ocultar o conteúdo.\n\n- Ao concluir a ação, o conteúdo é imediatamente ocultado do serviço do usuário, e o denunciante e o publicador do conteúdo são informados do resultado por e-mail.",
        "**1. Conteúdo inadequado**\n\n- Contém palavrões ou linguagem vulgar\n\n- Contém conteúdo sexualmente explícito\n\n- Contém conteúdo de ódio ou violência\n\n- Contém elementos discriminatórios\n\n**2. Conteúdo publicitário ou promocional**\n\n- Contém conteúdo com finalidade promocional\n\n- Inclui links comerciais\n\n**3. Conteúdo que viola direitos autorais**\n\n- Upload não autorizado de materiais didáticos\n\n- Uso não autorizado de imagens e vídeos\n\n- Cópia de materiais de aprendizagem de terceiros\n\n**4. Conteúdo que expõe informações pessoais**\n\n- Publicação de informações sensíveis, como telefone, e-mail, endereço residencial, número de documento etc.\n\n**5. Outros motivos**\n\n- Conteúdo que não se enquadra claramente nos critérios acima, mas viola os princípios de operação do serviço"
      ],
      "cat-admin-inquiry": [
        "- Clique em **[Registrar consulta]**.\n\n- Insira o título, a categoria e o conteúdo da consulta e registre.\n\n- Na categoria, selecione o item adequado ao conteúdo da consulta. Escolher a categoria correta ajuda a receber uma resposta mais rápida.\n\n- As consultas registradas podem ser verificadas na lista.\n\n[[callout:💡||Consultas registradas não podem ser editadas nem excluídas. Verifique bem o conteúdo antes de registrar.]]",
        "- Quando um administrador da sede registra uma resposta, o status da consulta muda para **[Concluída]**.\n\n- Clique em uma consulta com status Concluída para verificar a resposta.\n\n[[image:admin-inquiry/01.png|Exemplo de tela]]"
      ],
      "cat-admin-affiliation-release": [
        "- Clique em **Perfil > Configurações**.\n\n- Clique em **[Remover vínculo]** à direita das informações da empresa vinculada em Informações básicas.\n\n[[image:admin-affiliation-release/01.png|Exemplo de tela]]\n\n- Ao remover o vínculo, esta conta não poderá mais consultar os dados da empresa e deverá passar novamente pela verificação de instituição.\n\n[[callout:💡||Se desejar suspender o uso de uma conta de administrador, solicite ao administrador da instituição ou entre em contato pelo e-mail service@lumiteach.ai.]]"
      ],
      "cat-admin-ai-credit": [
        "### 1. Recursos e ferramentas de IA\n\nNa plataforma LumiTeach, você pode usar recursos e ferramentas de IA ao criar e utilizar materiais de ensino. Os recursos de IA ajudam a produzir, refinar e usar rapidamente materiais de ensino e aprendizagem em Lições ou Tarefas.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Onde%20%C3%A9%20usado%22%2C%22Recursos%20fornecidos%22%5D%2C%5B%22%2A%2AEdit%20Lesson%2A%2A%22%2C%22Rewrite%2C%20AI%20Make%22%5D%2C%5B%22%2A%2AStart%20teaching%2A%2A%22%2C%22Brainstorming%20%28Wordcloud%2C%20Classification%2C%20Mindmap%29%22%5D%2C%5B%22%2A%2AAdmin%2A%2A%22%2C%22Tagging%20de%20curr%C3%ADculo%2C%20tagging%20de%20metadados%20de%20conte%C3%BAdo%2C%20AI%20Make%22%5D%5D%7D]]\n\n### 1-1. O que é Crédito de IA?\n\nCrédito de IA é usado para executar tarefas de IA em toda a plataforma LumiTeach.\n\n- O desconto é baseado em **1 crédito = 1 token (unidade de processamento LLM)**.\n\n- Dependendo do plano, uma determinada quantidade de **créditos básicos** é concedida automaticamente todos os meses.\n\n- Se os créditos forem insuficientes, você pode **comprar um pacote de créditos adicional** ou **solicitar créditos adicionais** ao administrador da instituição.",
        "### 2. Estrutura de créditos em resumo\n\nOs créditos do LumiTeach são operados separadamente em dois tipos, de acordo com quem os utiliza.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Categoria%22%2C%22Cr%C3%A9dito%20Admin%20%28Administrador%29%22%2C%22Cr%C3%A9dito%20do%20servi%C3%A7o%20%28Professor%29%22%5D%2C%5B%22%2A%2AUsu%C3%A1rio%2A%2A%22%2C%22Administradores%20de%20institui%C3%A7%C3%B5es%2C%20empresas%20ou%20ag%C3%AAncias%22%2C%22Contas%20individuais%20de%20professores%22%5D%2C%5B%22%2A%2AForma%20de%20concess%C3%A3o%2A%2A%22%2C%22Concedido%20em%20lote%20na%20quantidade%20acordada%20no%20momento%20do%20contrato%22%2C%22Concess%C3%A3o%20autom%C3%A1tica%20mensal%2C%20redefini%C3%A7%C3%A3o%20mensal%22%5D%2C%5B%22%2A%2AUnidade%20de%20gerenciamento%2A%2A%22%2C%22Unidade%20organizacional%22%2C%22Unidade%20de%20conta%20individual%22%5D%2C%5B%22%2A%2AUso%2A%2A%22%2C%22Recursos%20de%20IA%20no%20Admin%22%2C%22Recursos%20de%20IA%20no%20servi%C3%A7o%20LumiTeach%22%5D%2C%5B%22%2A%2ATransfer%C3%AAncia%20para%20professores%2A%2A%22%2C%22Pode%20ser%20compartilhado%20e%20transferido%20para%20professores%20vinculados%22%2C%22N%C3%A3o%20pode%20ser%20compartilhado%20nem%20transferido%20entre%20professores%22%5D%5D%7D]]\n\n[[callout:💡||**O valor de 1 crédito é o mesmo.** Admin e serviço usam o mesmo preço e padrão de conversão de tokens por 1 crédito.]]\n\n### 3. Critérios de desconto de créditos por recurso de IA\n\nOs créditos são descontados por recurso de acordo com o uso real de tokens. A tabela abaixo mostra a **média aproximada de desconto por uso**. O desconto real por uso pode variar conforme a quantidade de dados processados.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Recurso%20de%20IA%22%2C%22Detalhe%22%2C%22Desconto%20m%C3%A9dio%20por%20uso%22%2C%22Plano%20dispon%C3%ADvel%22%5D%2C%5B%22%2A%2AAI%20Make%2A%2A%20%28gera%C3%A7%C3%A3o%20de%20Atividades%29%22%2C%22Upload%20de%20texto%22%2C%22100%20cr%C3%A9ditos%22%2C%22Free%20ou%20superior%22%5D%2C%5B%22%22%2C%22Upload%20de%20texto%20%2B%20imagem%22%2C%22100%20cr%C3%A9ditos%22%2C%22Free%20ou%20superior%22%5D%2C%5B%22%22%2C%22Upload%20de%20v%C3%ADdeo%22%2C%22150%20cr%C3%A9ditos%22%2C%22Free%20ou%20superior%22%5D%2C%5B%22%2A%2AQuadro%20de%20brainstorming%2A%2A%22%2C%22Wordcloud%22%2C%223%20cr%C3%A9ditos%22%2C%22Free%20ou%20superior%22%5D%2C%5B%22%22%2C%22Classification%22%2C%223%20cr%C3%A9ditos%22%2C%22Free%20ou%20superior%22%5D%2C%5B%22%22%2C%22Mindmap%22%2C%225%20cr%C3%A9ditos%22%2C%22Free%20ou%20superior%22%5D%2C%5B%22%2A%2ARewrite%2A%2A%20%28corre%C3%A7%C3%A3o%20de%20texto%29%22%2C%22-%22%2C%221%20cr%C3%A9dito%22%2C%22Free%20ou%20superior%22%5D%2C%5B%22%2A%2AAuto-Tagging%2A%2A%20%28administrador%29%22%2C%22Tagging%20de%20curr%C3%ADculo%22%2C%2210%20cr%C3%A9ditos%22%2C%22Pro%20ou%20superior%22%5D%2C%5B%22%22%2C%22Tagging%20de%20conte%C3%BAdo%22%2C%2210%20cr%C3%A9ditos%22%2C%22Pro%20ou%20superior%22%5D%5D%7D]]\n\n[[callout:📐||A média de desconto por uso do AI Make é calculada com base na geração de **10 Atividades**. Os critérios de desconto são recalculados periodicamente com base nos dados de operação do serviço.]]\n\n### 4. Uso e desconto de créditos\n\nDevido às características dos LLMs, não é possível saber a quantidade exata de tokens antes da entrada. Por isso, o processo ocorre em duas etapas: **validação prévia (desconto estimado)** e **acerto posterior (desconto real)**.\n\n### 4-1. Validação prévia\n\nNo momento em que o recurso de IA é executado (clique no botão), o **uso estimado de tokens** é convertido em créditos e comparado com o saldo.\n\n- Se os créditos disponíveis forem insuficientes, o recurso não poderá ser executado.\n\n### 4-2. Acerto posterior\n\n- Se o resultado for gerado normalmente, o desconto final será baseado nos **tokens realmente usados**.\n\n- Se uma tarefa de IA for **cancelada no meio**: somente os tokens gerados até o momento do cancelamento serão descontados.\n\n- Se ocorrer **erro de sistema do motor de IA**: os créditos serão restaurados integralmente.\n\n### 5. Ordem de consumo e validade dos créditos\n\nSe houver vários tipos de créditos, eles são consumidos na seguinte ordem.\n\n- **Créditos mensais recorrentes**\n\n- **Créditos adicionais concedidos/comprados**\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Alvo%22%2C%22Transfer%C3%AAncia%20para%20o%20m%C3%AAs%20seguinte%22%5D%2C%5B%22Cr%C3%A9ditos%20mensais%20recorrentes%22%2C%22Conta%20individual%20de%20professor%22%2C%22Dispon%C3%ADvel%22%5D%2C%5B%22Cr%C3%A9ditos%20adicionais%22%2C%22Conta%20individual%20de%20professor%22%2C%22Dispon%C3%ADvel%22%5D%5D%7D]]",
        "### 6. Guia do administrador (operação de créditos da organização)\n\n> Esta seção se aplica a **administradores superiores** (admins de agências, empresas, instituições e parceiros de conteúdo).\n\n### 6-1. Quando Créditos Admin são concedidos\n\n- São concedidos em lote na quantidade acordada no **momento do contrato**.\n\n- Se forem necessários créditos adicionais, é preciso firmar um **contrato adicional separado**.\n\n- A data de referência é definida automaticamente como a **data de início do contrato** da empresa vinculada.\n\n### 6-2. Política de concessão de créditos recorrentes para professores\n\n- **Data de concessão**: concedidos automaticamente todo mês às **00:00:00 (UTC)** na mesma data, com base na data de início do contrato (ou data definida pelo cliente).\n\n- **Se a data de referência for no fim do mês (29 / 30 / 31)**\n\n- Se a data de referência não existir naquele mês, os créditos serão concedidos no último dia do mês. Exemplo: se a data de referência for 31, 31 de março → 30 de abril → 31 de maio → 30 de junho. Em fevereiro de ano não bissexto, serão concedidos em 28 de fevereiro.\n\n- **Professores que entram no meio do mês**: os créditos fixos daquele mês são concedidos imediatamente no momento da verificação e não são transferidos.\n\n- **Professores com vínculo removido/conta encerrada**: o uso é suspenso imediatamente.\n\n- Reingresso após remoção de vínculo/encerramento\n\n- Reverificação na mesma empresa: se já houve concessão de créditos mensais recorrentes no mês, eles não serão concedidos novamente.\n\n- Reverificação em outra empresa: os créditos recorrentes da nova afiliação serão concedidos.\n\n- **Não é possível conceder:** se a empresa vinculada não tiver Créditos Admin suficientes, os créditos mensais recorrentes do professor não serão concedidos.\n\n### 6-3. Processamento de solicitações de créditos adicionais\n\n### Professor solicita ao administrador\n\n- Quando o professor clica em **[Solicitar créditos]** em sua página de créditos, um administrador superior pode verificar a solicitação.\n\n- O administrador **aprova ou recusa** no Admin.\n\n- Após aprovação, os créditos são descontados imediatamente do pool compartilhado do Admin e concedidos à conta do professor.\n\n### Administrador (organização) solicita ao administrador superior\n\n- Não há função separada de solicitação no Admin. A solicitação deve ser feita **online/offline ao administrador superior direto conforme a relação contratual**.\n\n- Os créditos são concedidos após a conclusão de um contrato adicional.\n\n### 6-4. Modificar informações de concessão de créditos\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item%22%2C%22Pol%C3%ADtica%22%2C%22Observa%C3%A7%C3%A3o%22%5D%2C%5B%22Concess%C3%A3o%20adicional%20de%20Cr%C3%A9dito%20Admin%22%2C%22Concess%C3%A3o%20imediata%22%2C%22Adicionado%20ao%20saldo%20existente%22%5D%2C%5B%22Concess%C3%A3o%20adicional%20de%20cr%C3%A9dito%20para%20professor%22%2C%22Concess%C3%A3o%20imediata%22%2C%22Adicionado%20ao%20saldo%20existente%22%5D%2C%5B%22Alterar%20quantidade%20de%20cr%C3%A9dito%20recorrente%20do%20professor%22%2C%22Aplicado%20a%20partir%20da%20pr%C3%B3xima%20data%20de%20concess%C3%A3o%22%2C%22-%22%5D%5D%7D]]",
        "[[table:%7B%22rows%22%3A%5B%5B%22Categoria%22%2C%22Reembolso%2FCancelamento%22%2C%22Ao%20remover%20v%C3%ADnculo%2Fencerrar%20conta%22%5D%2C%5B%22Cr%C3%A9ditos%20b%C3%A1sicos%20concedidos%22%2C%22N%C3%A3o%20dispon%C3%ADvel%22%2C%22Uso%20suspenso%20imediatamente%22%5D%2C%5B%22Cr%C3%A9ditos%20adicionais%22%2C%22N%C3%A3o%20dispon%C3%ADvel%22%2C%22Uso%20suspenso%20imediatamente%22%5D%2C%5B%22Tarefa%20de%20IA%20cancelada%20no%20meio%22%2C%22Tokens%20usados%20at%C3%A9%20o%20cancelamento%20n%C3%A3o%20s%C3%A3o%20reembols%C3%A1veis%3B%20parte%20n%C3%A3o%20processada%20%C3%A9%20devolvida%22%2C%22-%22%5D%2C%5B%22Erro%20de%20sistema%22%2C%22100%25%20reembolsado%20se%20nenhum%20resultado%20for%20fornecido%22%2C%22-%22%5D%5D%7D]]"
      ],
      "cat-admin-faq": [
        "### **P. Qual é a diferença entre professor e administrador?**\n\nO professor cria materiais de ensino e conduz Lições ou Tarefas no serviço LumiTeach. O administrador realiza tarefas de gestão no Admin, como gerenciamento de currículo e conteúdo e gerenciamento de membros. Uma mesma conta pode ter permissões de professor e de administrador. Nesse caso, a verificação de instituição deve ser concluída separadamente no serviço e no Admin.\n\n### **P. Um membro enviou uma solicitação de cadastro. Onde posso aprová-la?**\n\nNa área **[Alertas principais]** da página inicial do Admin, é possível verificar a quantidade de cadastros aguardando aprovação. Em **Gerenciamento de membros > Lista de membros**, clique no botão **Ação (⋯)** do membro cujo status esteja como Pendente e aprove ou recuse a solicitação.\n\n### **P. Se uma pessoa solicitar permissões de professor e administrador ao mesmo tempo, é preciso aprovar cada uma separadamente?**\n\nSim. A permissão de professor e a permissão de administrador devem ser aprovadas ou recusadas separadamente.\n\n### **P. Posso conceder permissão antes de o usuário se cadastrar?**\n\nSim. Use o botão **[Pré-registro de permissões]** no canto superior direito de **Gerenciamento de membros > Lista de membros** para pré-registrar a conta e conceder permissão antes do cadastro. Uma conta pré-registrada pode ser usada imediatamente após o cadastro, sem solicitação de aprovação separada.\n\n### **P. O que acontece se eu inserir o e-mail incorreto no pré-registro de permissões?**\n\nSe o e-mail pré-registrado for diferente da conta Google usada no cadastro real, a aprovação automática não será aplicada e o usuário precisará enviar uma solicitação de aprovação de cadastro separada. Ao pré-registrar permissões, insira exatamente o mesmo e-mail da conta Google.\n\n### **P. Como devo tratar a conta de um funcionário que saiu da organização?**\n\nEm Gerenciamento de membros, libere o vínculo desse membro. Um professor cujo vínculo foi liberado passa a ser um membro gratuito do LumiTeach. Um administrador cujo vínculo foi liberado não pode mais acessar o Admin.\n\n### **P. O que devo fazer para desativar permanentemente uma conta de administrador?**\n\nUm administrador superior ou outro administrador pode definir a conta de administrador como **Suspender uso** em Gerenciamento de membros. Um administrador suspenso não pode usar o Admin. (Contas de professor usam exclusão de conta, e o próprio professor também pode excluir a conta diretamente.)\n\n### **P. Qual é a diferença entre liberar vínculo e excluir/suspender conta?**\n\nLiberar vínculo encerra apenas a relação com aquela organização. O administrador pode solicitar verificação de instituição para outra empresa usando a mesma conta. O professor passa a ser um membro gratuito e pode continuar usando o serviço, além de poder solicitar verificação por outra empresa. Excluir ou suspender a conta remove ou desativa a própria conta; por isso, professores/administradores excluídos ou suspensos não podem mais usar o serviço LumiTeach nem o Admin.\n\n### P. Se sobrarem créditos recorrentes mensais, eles são transferidos para o mês seguinte?\n\nSim. O saldo restante dos créditos recorrentes mensais pode ser transferido e usado no mês seguinte.\n\n### P. O que devo fazer se os créditos forem insuficientes?\n\n- **Professor**: Na página Meu Crédito, clique em **[Solicitar créditos]** para solicitar uma concessão adicional ao administrador vinculado.\n\n- **Administrador**: Se o pool compartilhado for insuficiente, solicite um **contrato adicional** ao administrador superior direto.\n\n### P. Se eu interromper uma tarefa de IA no meio do processo, os créditos são reembolsados?\n\nOs tokens dos resultados **efetivamente gerados até o momento do cancelamento não são reembolsados.**\n\n### P. O que acontece se a IA apresentar erro?\n\nSe nenhum resultado for fornecido por erro de sistema do mecanismo de IA, os **créditos reservados são restaurados integralmente.**\n\n### P. O que acontece com os créditos restantes após a exclusão da conta?\n\n- **Exclusão de conta/liberação de vínculo do professor**: O uso é interrompido imediatamente, e os créditos adicionais restantes são devolvidos ao pool compartilhado do Admin.\n\n- **Nova verificação com a mesma empresa**: Se já houver histórico de concessão de créditos no mês vigente, eles não serão concedidos novamente.\n\n- **Nova verificação com outra empresa**: Os créditos da nova afiliação serão concedidos novamente.\n\n### P. Onde posso ver o histórico de uso de créditos?\n\n- **Professor**: Na página Gerenciamento de Meu Crédito, é possível verificar o saldo restante e o histórico recente de uso.\n\n- **Administrador**: 1. Verifique o histórico recente em **Perfil > Informações básicas > Crédito de IA**. 2. Verifique o histórico recente na aba **Gerenciamento de vínculo > Informações de vínculo > Crédito de IA**.\n\n### **P. Um membro solicitou ajuda porque o Crédito de IA é insuficiente. Como devo processar?**\n\nQuando um professor solicita créditos adicionais, um alerta aparece na lista de gerenciamento de membros. Clique em **[Verificar solicitação]** para revisar os detalhes, selecione a quantidade de créditos a conceder e aprove. A quantidade é deduzida dos créditos compartilhados da organização e concedida imediatamente. Tenha atenção, pois créditos já concedidos não podem ser recuperados."
      ]
    },
    "articleIntros": {
      "cat-admin-dashboard": "[[callout:🕑||**Horário de agregação do painel:** os dados do painel são agregados **a cada hora cheia**.]]",
      "cat-admin-member-management": "> Cadastre os membros que usarão o serviço LumiTeach e o Admin. É possível controlar permissões dos membros e gerenciar Crédito de IA.",
      "cat-admin-approval-permission": "> A verificação da empresa/instituição vinculada é necessária para usar o LumiTeach Admin e o serviço. Administradores podem aprovar ou recusar solicitações de cadastro no Admin, ou pré-registrar contas de membros com antecedência.",
      "cat-admin-standard-management": "> Esta é a primeira etapa para gerenciar currículo e conteúdo no LumiTeach Admin.",
      "cat-admin-curriculum-management": "> Você pode estruturar o currículo e os conteúdos próprios da sua instituição ou empresa para o sistema LumiTeach. Ofereça conteúdos otimizados aos usuários por meio de um currículo personalizado.",
      "cat-admin-lesson-activity": "> O menu **Gerenciamento de lições** é usado para cadastrar e gerenciar Lições e Atividades alinhadas ao currículo educacional. Você pode verificar e editar as informações de vínculo ao currículo, palavras-chave de conceitos e metadados das Lições cadastradas.",
      "cat-admin-lesson-bulk-upload": "> O cadastro em lote de Lições permite registrar várias Lições e Atividades de uma só vez com um único arquivo Excel. É mais rápido do que inserir Lições uma por uma.",
      "cat-admin-lesson-ai-make": "> Com o AI Make, a IA cria Lições automaticamente ao enviar materiais de origem, como arquivos PDF ou PPT. Você pode revisar as Lições geradas na aba **[Revisão]**, editar o conteúdo e aprovar a publicação.",
      "cat-admin-lesson-recommendation": "> Faça curadoria de Lições registradas conforme a estrutura do currículo. Os conteúdos registrados em Gerenciamento de recomendações aparecem na tela inicial do serviço LumiTeach, melhorando o acesso dos usuários.",
      "cat-admin-assessment-question": "> Crie e gerencie as questões que compõem uma Avaliação.",
      "cat-admin-assessment-paper": "> Você pode agrupar questões alinhadas ao currículo para cadastrar e gerenciar Avaliações estruturadas. Essas Avaliações podem ser atribuídas pelos professores aos alunos como tarefas ou testes no serviço LumiTeach.",
      "cat-admin-report-management": "> Verifique conteúdos denunciados no serviço LumiTeach e tome as medidas adequadas.",
      "cat-admin-inquiry": "> Se ocorrer um problema ou se houver dúvidas ao usar o serviço LumiTeach ou o Admin, use o menu Consulta 1:1.",
      "cat-admin-affiliation-release": "> Se precisar remover seu vínculo atual por transferência, desligamento ou outro motivo, siga o processo de remoção de vínculo.",
      "cat-admin-ai-credit": "> Os recursos de IA do LumiTeach operam em um modelo **baseado em créditos por uso**. Este documento explica como o Crédito de IA funciona, quanto é descontado por recurso e o que fazer quando os créditos são insuficientes."
    }
  },
  "es": {
    "manualTree": {
      "cat-admin-login-signup": {
        "title": "Inicio de sesión y solicitud de registro",
        "description": "Cómo iniciar sesión en LumiTeach Admin con una cuenta de Google, solicitar permiso de administrador en el primer acceso y configurar la autenticación Google OTP."
      },
      "cat-admin-dashboard": {
        "title": "Panel de inicio",
        "description": "El menú de inicio de Admin recopila y presenta datos relacionados con usuarios y contenidos de LumiTeach. Usa los indicadores principales para aprovechar mejor LumiTeach."
      },
      "cat-admin-member-management": {
        "title": "Gestión de información de miembros",
        "description": "Registra a los miembros que usarán el servicio LumiTeach y Admin. Puedes controlar permisos de miembros y gestionar Crédito de IA."
      },
      "cat-admin-approval-permission": {
        "title": "Aprobación de registro y preinscripción de permisos",
        "description": "Para usar LumiTeach Admin y el servicio se requiere verificación de institución. Los administradores pueden aprobar o rechazar solicitudes de registro en Admin, o preinscribir cuentas de miembros."
      },
      "cat-admin-standard-management": {
        "title": "Gestión de estándares",
        "description": "Este es el primer paso para gestionar currículo y contenido en LumiTeach Admin."
      },
      "cat-admin-curriculum-management": {
        "title": "Gestión de currículo",
        "description": "Puedes estructurar el currículo y los contenidos propios de tu institución o empresa para el sistema LumiTeach. Ofrece contenido optimizado a los usuarios mediante un currículo personalizado."
      },
      "cat-admin-lesson-activity": {
        "title": "Gestión de lecciones: Gestión de Lección y Actividad",
        "description": "El menú Gestión de lecciones permite registrar y administrar Lecciones y Actividades alineadas con el currículo educativo. Puedes revisar y editar vínculos curriculares, palabras clave conceptuales y metadatos de las Lecciones registradas."
      },
      "cat-admin-lesson-bulk-upload": {
        "title": "Gestión de lecciones: carga masiva",
        "description": "La carga masiva de Lecciones permite registrar varias Lecciones y Actividades a la vez con un solo archivo Excel. Es más rápida que ingresar Lecciones una por una."
      },
      "cat-admin-lesson-ai-make": {
        "title": "Gestión de lecciones: crear y revisar Lecciones con AI Make",
        "description": "Con AI Make, la IA crea Lecciones automáticamente al subir materiales de origen, como archivos PDF o PPT. Puedes revisar las Lecciones generadas en la pestaña Revisión, editarlas y aprobar su publicación."
      },
      "cat-admin-lesson-recommendation": {
        "title": "Gestión de lecciones: gestión de recomendaciones",
        "description": "Cura Lecciones registradas según la estructura del currículo. El contenido registrado en Gestión de recomendaciones aparece en la pantalla de inicio del servicio LumiTeach para mejorar el acceso."
      },
      "cat-admin-assessment-question": {
        "title": "Gestión de evaluaciones: gestión y registro de preguntas",
        "description": "Crea y gestiona las preguntas que componen una Evaluación."
      },
      "cat-admin-assessment-paper": {
        "title": "Gestión de evaluaciones: gestión y registro de pruebas",
        "description": "Registra y gestiona pruebas estructuradas agrupando preguntas alineadas con el currículo. Los docentes pueden asignar estas pruebas a estudiantes como tareas o exámenes en LumiTeach."
      },
      "cat-admin-report-management": {
        "title": "Gestión de reportes",
        "description": "Revisa el contenido reportado en el servicio LumiTeach y toma la acción correspondiente."
      },
      "cat-admin-inquiry": {
        "title": "Consulta 1:1",
        "description": "Si tienes un problema o una pregunta al usar el servicio LumiTeach o Admin, usa el menú Consulta 1:1."
      },
      "cat-admin-affiliation-release": {
        "title": "Baja de afiliación",
        "description": "Si necesitas dejar tu institución actual por traslado, renuncia u otro motivo, sigue el proceso de baja de afiliación."
      },
      "cat-admin-ai-credit": {
        "title": "Crédito de IA",
        "description": "Las funciones de IA de LumiTeach funcionan con un modelo por créditos. Este documento explica cómo funciona el Crédito de IA, qué funciones descuentan cuánto crédito y qué hacer cuando el crédito es insuficiente."
      },
      "cat-admin-faq": {
        "title": "Preguntas frecuentes",
        "description": "Esta página explica las funciones principales y los procedimientos que debes revisar en el menú de preguntas frecuentes."
      }
    },
    "articles": {
      "cat-admin-login-signup": {
        "category": "Guía Admin LumiTeach",
        "title": "Inicio de sesión y solicitud de registro",
        "desc": "Cómo iniciar sesión en LumiTeach Admin con una cuenta de Google, solicitar permiso de administrador en el primer acceso y configurar la autenticación Google OTP.",
        "note": "Si un administrador superior aprobó tu permiso con anticipación, puedes acceder directamente a Admin sin pasar por el proceso de solicitud de permiso.",
        "sections": [
          "Iniciar sesión",
          "Solicitud de registro",
          "Autenticación Google OTP"
        ]
      },
      "cat-admin-dashboard": {
        "category": "Guía Admin LumiTeach",
        "title": "Panel de inicio",
        "desc": "El menú de inicio de Admin recopila y presenta datos relacionados con usuarios y contenidos de LumiTeach. Usa los indicadores principales para aprovechar mejor LumiTeach.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Alertas principales",
          "Insights de usuarios",
          "Insights del servicio",
          "Consulta 1:1"
        ]
      },
      "cat-admin-member-management": {
        "category": "Guía Admin LumiTeach",
        "title": "Gestión de información de miembros",
        "desc": "Registra a los miembros que usarán el servicio LumiTeach y Admin. Puedes controlar permisos de miembros y gestionar Crédito de IA.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Tipos de miembros",
          "Gestión de miembros",
          "Baja / suspensión de miembros",
          "Baja de afiliación",
          "Consultar estado de Crédito de IA y otorgar crédito"
        ]
      },
      "cat-admin-approval-permission": {
        "category": "Guía Admin LumiTeach",
        "title": "Aprobación de registro y preinscripción de permisos",
        "desc": "Para usar LumiTeach Admin y el servicio se requiere verificación de institución. Los administradores pueden aprobar o rechazar solicitudes de registro en Admin, o preinscribir cuentas de miembros.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Gestionar solicitudes de aprobación de registro",
          "Preinscribir permisos"
        ]
      },
      "cat-admin-standard-management": {
        "category": "Guía Admin LumiTeach",
        "title": "Gestión de estándares",
        "desc": "Este es el primer paso para gestionar currículo y contenido en LumiTeach Admin.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "¿Qué son los estándares?",
          "Configurar grado",
          "Configurar asignatura",
          "Configurar ítem"
        ]
      },
      "cat-admin-curriculum-management": {
        "category": "Guía Admin LumiTeach",
        "title": "Gestión de currículo",
        "desc": "Puedes estructurar el currículo y los contenidos propios de tu institución o empresa para el sistema LumiTeach. Ofrece contenido optimizado a los usuarios mediante un currículo personalizado.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "¿Dónde se usa el currículo?",
          "Registrar currículo",
          "Clasificación de currículo con IA",
          "Gestionar currículo"
        ]
      },
      "cat-admin-lesson-activity": {
        "category": "Guía Admin LumiTeach",
        "title": "Gestión de lecciones: Gestión de Lección y Actividad",
        "desc": "El menú Gestión de lecciones permite registrar y administrar Lecciones y Actividades alineadas con el currículo educativo. Puedes revisar y editar vínculos curriculares, palabras clave conceptuales y metadatos de las Lecciones registradas.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Consultar lista de Lecciones",
          "Consultar detalles de la Lección",
          "Editar Lección",
          "Registrar Lección"
        ]
      },
      "cat-admin-lesson-bulk-upload": {
        "category": "Guía Admin LumiTeach",
        "title": "Gestión de lecciones: carga masiva",
        "desc": "La carga masiva de Lecciones permite registrar varias Lecciones y Actividades a la vez con un solo archivo Excel. Es más rápida que ingresar Lecciones una por una.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Método de carga masiva"
        ]
      },
      "cat-admin-lesson-ai-make": {
        "category": "Guía Admin LumiTeach",
        "title": "Gestión de lecciones: crear y revisar Lecciones con AI Make",
        "desc": "Con AI Make, la IA crea Lecciones automáticamente al subir materiales de origen, como archivos PDF o PPT. Puedes revisar las Lecciones generadas en la pestaña Revisión, editarlas y aprobar su publicación.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Crear Lecciones con AI Make",
          "Revisar y aprobar Lecciones"
        ]
      },
      "cat-admin-lesson-recommendation": {
        "category": "Guía Admin LumiTeach",
        "title": "Gestión de lecciones: gestión de recomendaciones",
        "desc": "Cura Lecciones registradas según la estructura del currículo. El contenido registrado en Gestión de recomendaciones aparece en la pantalla de inicio del servicio LumiTeach para mejorar el acceso.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Gestionar contenido recomendado",
          "Registrar recomendación: tema 1",
          "Registrar recomendación: tema 2"
        ]
      },
      "cat-admin-assessment-question": {
        "category": "Guía Admin LumiTeach",
        "title": "Gestión de evaluaciones: gestión y registro de preguntas",
        "desc": "Crea y gestiona las preguntas que componen una Evaluación.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Gestión de preguntas",
          "Registro de preguntas",
          "Registro de preguntas: individual",
          "Registro de preguntas: carga masiva"
        ]
      },
      "cat-admin-assessment-paper": {
        "category": "Guía Admin LumiTeach",
        "title": "Gestión de evaluaciones: gestión y registro de pruebas",
        "desc": "Registra y gestiona pruebas estructuradas agrupando preguntas alineadas con el currículo. Los docentes pueden asignar estas pruebas a estudiantes como tareas o exámenes en LumiTeach.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Gestión de pruebas",
          "Registro de prueba: individual",
          "Registro de prueba: carga masiva"
        ]
      },
      "cat-admin-report-management": {
        "category": "Guía Admin LumiTeach",
        "title": "Gestión de reportes",
        "desc": "Revisa el contenido reportado en el servicio LumiTeach y toma la acción correspondiente.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Lista de contenido reportado",
          "Revisar contenido reportado",
          "Rechazar reporte",
          "Desactivar contenido reportado",
          "🚨 Guía y criterios de reporte de contenido"
        ]
      },
      "cat-admin-inquiry": {
        "category": "Guía Admin LumiTeach",
        "title": "Consulta 1:1",
        "desc": "Si tienes un problema o una pregunta al usar el servicio LumiTeach o Admin, usa el menú Consulta 1:1.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Enviar consulta",
          "Consultar respuesta"
        ]
      },
      "cat-admin-affiliation-release": {
        "category": "Guía Admin LumiTeach",
        "title": "Baja de afiliación",
        "desc": "Si necesitas dejar tu institución actual por traslado, renuncia u otro motivo, sigue el proceso de baja de afiliación.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Dar de baja afiliación desde Perfil"
        ]
      },
      "cat-admin-ai-credit": {
        "category": "Guía Admin LumiTeach",
        "title": "Crédito de IA",
        "desc": "Las funciones de IA de LumiTeach funcionan con un modelo por créditos. Este documento explica cómo funciona el Crédito de IA, qué funciones descuentan cuánto crédito y qué hacer cuando el crédito es insuficiente.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Acerca de la IA de LumiTeach",
          "Otorgamiento y uso de Crédito de IA",
          "Gestionar Crédito de IA",
          "Política de reembolso y cancelación de créditos"
        ]
      },
      "cat-admin-faq": {
        "category": "Guía Admin LumiTeach",
        "title": "Preguntas frecuentes",
        "desc": "Esta página explica las funciones principales y los procedimientos que debes revisar en el menú de preguntas frecuentes.",
        "note": "Consulta según los nombres de menús y botones que se usan realmente en la pantalla Admin.",
        "sections": [
          "Resumen"
        ]
      }
    },
    "articleBodies": {
      "cat-admin-login-signup": [
        "Haz clic en **Continuar con Google** en la primera pantalla de Admin.\n\n[[image:admin-login-signup/01.png|Botón Continuar con Google en la primera pantalla de Admin]]\n\nCuando se abra la pantalla de inicio de sesión de Google, inicia sesión con tu cuenta de Google.\n\n[[image:admin-login-signup/02.png|Pantalla de inicio de sesión de cuenta de Google]]",
        "Si es la primera vez que inicias sesión en Admin, debes solicitar permiso de acceso. En el popup **Solicitud de aprobación de permiso de administrador**, ingresa tu nombre y la información de tu empresa/institución.\n\n[[image:admin-login-signup/03.png|Popup de solicitud de aprobación de permiso de administrador]]\n\n- **Nombre**: Ingresa tu nombre real.\n- **Correo electrónico**: Se muestra automáticamente el correo de tu cuenta de Google.\n- **Buscar empresa/institución**: Ingresa y busca el nombre de tu empresa o institución.\n\nEl nombre de la empresa debe coincidir exactamente con el nombre registrado en el sistema. Si el nombre no coincide y no puedes enviar la solicitud, contacta a un administrador superior.\n\nDespués de solicitar el permiso, un administrador superior debe aprobarlo para que puedas acceder a Admin.\n\n[[callout:💡|Aprobación previa por un administrador superior|Si un administrador superior **aprobó** tu permiso con anticipación, puedes acceder directamente a Admin sin pasar por el proceso de solicitud de permiso.]]",
        "LumiTeach Admin usa autenticación de dos factores Google OTP por seguridad.\n\n### Primer inicio de sesión — Configurar OTP\n\nSolo necesitas configurar OTP una vez durante el primer inicio de sesión. En los siguientes inicios, ingresa el código de verificación de 6 dígitos que aparece en la aplicación.\n\n[[image:admin-login-signup/04.png|Pantalla de configuración y autenticación Google OTP]]\n\n- Instala la aplicación **Google Authenticator** desde App Store o Play Store.\n- Abre **Google Authenticator** y toca el botón **+** en la parte inferior.\n- Selecciona **Escanear código QR** y escanea el código QR que aparece en la pantalla de inicio de sesión de Admin.\n- Ingresa el código de verificación de 6 dígitos que aparece en la aplicación para completar la configuración.\n\n### Siguientes inicios — Autenticación OTP\n\n- Inicia sesión con tu cuenta de Google.\n- Abre **Google Authenticator** e ingresa el código de verificación de 6 dígitos mostrado.\n\n[[callout:✅|Por seguridad, revisa lo siguiente.|- Si no hay actividad durante 60 minutos después de iniciar sesión, la sesión se cerrará automáticamente.\\n- No se permite iniciar sesión simultáneamente en varios dispositivos con una misma cuenta.\\n- Si vas a ausentarte durante mucho tiempo, asegúrate de cerrar sesión.\\n- Si ingresas incorrectamente el código OTP 5 veces o más, el inicio de sesión quedará restringido durante 5 minutos.]]"
      ],
      "cat-admin-dashboard": [
        "- Se muestran alertas principales que requieren revisión rápida y acción. Haz clic en cada elemento para ver los detalles.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Elemento%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22Miembros%20pendientes%20de%20aprobaci%C3%B3n%20de%20registro%22%2C%22Miembros%20que%20solicitaron%20verificaci%C3%B3n%20de%20instituci%C3%B3n%20para%20usar%20el%20servicio%20premium%20de%20LumiTeach%20y%20administradores%20que%20solicitaron%20verificaci%C3%B3n%20de%20instituci%C3%B3n%20para%20acceder%20a%20LumiTeach%20Admin%22%5D%2C%5B%22Cantidad%20de%20contenido%20reportado%22%2C%22Contenido%20publicado%20en%20LumiTeach%20Explore%20que%20ha%20sido%20reportado%22%5D%2C%5B%22Miembros%20casi%20sin%20cr%C3%A9ditos%20%2F%20con%20cr%C3%A9ditos%20insuficientes%22%2C%22Miembros%20de%20la%20instituci%C3%B3n%20que%20usaron%20todo%20el%20Cr%C3%A9dito%20de%20IA%20o%20cuyo%20saldo%20restante%20es%20inferior%20al%2010%25%22%5D%5D%7D]]",
        "- El área de insights de usuarios muestra el total de miembros y estadísticas de visitantes.\n\n- Total de miembros (acumulado), nuevos miembros y miembros dados de baja\n\n> Revisa las tendencias diarias, mensuales y anuales de miembros.\n\n- Número de usuarios de LumiTeach y visitantes de Admin\n\n> Se muestran los datos agregados más recientes al momento de consultar el panel.",
        "- Puedes comprobar cómo los miembros de la institución usan el servicio LumiTeach.\n\n- Número de clases iniciadas en los modos Interacción, Modo Batalla y Presentación\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22Estudio%20independiente%22%2C%22N%C3%BAmero%20de%20veces%20que%20una%20Lecci%C3%B3n%20se%20public%C3%B3%20como%20Tarea%20en%20formato%20Individual%2C%20Desaf%C3%ADo%20o%20Tarjeta%20Did%C3%A1ctica%22%5D%2C%5B%22Evaluaci%C3%B3n%22%2C%22N%C3%BAmero%20de%20veces%20que%20una%20Evaluaci%C3%B3n%20se%20public%C3%B3%20como%20Tarea%22%5D%5D%7D]]\n\n- Número de veces que los miembros de la institución crearon y guardaron Lecciones.\n\n- Duración media por clase\n\n> 📌 **Criterio de agregación - Interacción · Modo Batalla**: solo se incluyen en el tiempo medio las clases con al menos 1 estudiante participante. - **Presentación**: se incluye en la media el tiempo desde Start Lesson hasta End Lesson.",
        "- Puedes revisar las consultas 1:1 recibidas más recientemente."
      ],
      "cat-admin-member-management": [
        "[[table:%7B%22rows%22%3A%5B%5B%22%22%2C%22%2A%2ADocentes%2A%2A%22%2C%22%2A%2AAdministradores%2A%2A%22%5D%2C%5B%22Usuarios%22%2C%22Usan%20el%20servicio%20LumiTeach%22%2C%22Usan%20LumiTeach%20Admin%22%5D%2C%5B%22Rol%20principal%22%2C%22Crear%20materiales%20docentes%20y%20realizar%20Lecciones%2FTareas%22%2C%22Gestionar%20curr%C3%ADculo%20y%20contenido%2C%20gestionar%20miembros%20y%20realizar%20otras%20tareas%20administrativas%22%5D%5D%7D]]\n\nPara usar el servicio premium de LumiTeach y Admin, se requiere la **verificación de institución**.\n\n[[callout:💡||Si necesitas desempeñar roles de docente y administrador, completa la verificación de institución por separado en el servicio y en Admin.]]",
        "Puedes consultar y gestionar la lista de miembros. Para revisar la información detallada de un miembro específico, haz clic en **Acción (⋯)** > **[Detalles de información del miembro]**.\n\nLas acciones disponibles para **miembros docentes** son las siguientes.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Acci%C3%B3n%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22Aprobar%2Frechazar%20registro%22%2C%22Aprueba%20o%20rechaza%20el%20registro%20de%20miembros%20docentes%20que%20solicitaron%20verificaci%C3%B3n%20de%20instituci%C3%B3n.%22%5D%2C%5B%22Dar%20de%20baja%22%2C%22Da%20de%20baja%20a%20un%20miembro%20docente%20del%20servicio%20LumiTeach.%22%5D%2C%5B%22Ver%20detalles%20de%20informaci%C3%B3n%20del%20miembro%22%2C%22Consulta%20la%20informaci%C3%B3n%20b%C3%A1sica%20y%20el%20historial%20de%20actividad%20del%20miembro.%22%5D%2C%5B%22Liberar%20afiliaci%C3%B3n%22%2C%22Libera%20la%20afiliaci%C3%B3n%20del%20miembro%20por%20renuncia%2C%20cambio%20de%20afiliaci%C3%B3n%20u%20otra%20raz%C3%B3n%20similar.%22%5D%2C%5B%22Ver%20estado%20de%20Cr%C3%A9dito%20de%20IA%20y%20otorgar%20cr%C3%A9ditos%20adicionales%22%2C%22Consulta%20el%20saldo%20de%20cr%C3%A9ditos%20del%20miembro%20y%20otorga%20cr%C3%A9ditos%20adicionales.%22%5D%5D%7D]]\n\nLas acciones disponibles para **miembros administradores** son las siguientes.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Acci%C3%B3n%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22Aprobar%2Frechazar%20registro%22%2C%22Aprueba%20o%20rechaza%20el%20registro%20de%20miembros%20administradores%20que%20solicitaron%20verificaci%C3%B3n%20de%20instituci%C3%B3n.%22%5D%2C%5B%22Suspender%20uso%22%2C%22Suspende%20el%20acceso%20del%20miembro%20administrador%20a%20Admin.%22%5D%2C%5B%22Ver%20detalles%20de%20informaci%C3%B3n%20del%20miembro%22%2C%22Consulta%20la%20informaci%C3%B3n%20b%C3%A1sica%20y%20el%20historial%20de%20actividad%20del%20miembro.%22%5D%2C%5B%22Liberar%20afiliaci%C3%B3n%22%2C%22Libera%20la%20afiliaci%C3%B3n%20del%20miembro%20por%20renuncia%2C%20cambio%20de%20afiliaci%C3%B3n%20u%20otra%20raz%C3%B3n%20similar.%22%5D%2C%5B%22Ver%20estado%20de%20Cr%C3%A9dito%20de%20IA%22%2C%22Consulta%20el%20saldo%20de%20cr%C3%A9ditos%20del%20miembro.%22%5D%5D%7D]]",
        "- Los miembros docentes dados de baja no pueden usar el servicio LumiTeach.\n\n- Los miembros administradores suspendidos no pueden usar Admin.\n\n[[callout:💡||Los miembros docentes pueden darse de baja directamente.\\nEn el caso de miembros administradores, un administrador superior o un administrador par debe suspender el uso.]]",
        "Puedes liberar la afiliación de un miembro específico por renuncia, cambio de afiliación u otra razón similar.\n\n- Un **miembro docente** cuya afiliación fue liberada pasa a ser miembro gratuito del servicio LumiTeach.\n\n- Un **miembro administrador** cuya afiliación fue liberada ya no puede acceder a Admin.",
        "Si un miembro solicita Crédito de IA adicional, la solicitud aparece en la lista de gestión de miembros. Haz clic en **[Verificar solicitud]** para revisar los detalles.\n\n**Aprobar otorgamiento adicional**\n\nSelecciona la cantidad de créditos que se otorgarán y aprueba la solicitud. La cantidad seleccionada se descuenta del fondo compartido de créditos de la empresa/institución afiliada y se otorga a la cuenta del docente solicitante.\n\n[[callout:⚠️||Los créditos ya otorgados no pueden recuperarse. Asegúrate de revisar la cantidad antes de otorgarlos.]]\n\n**Rechazar otorgamiento adicional**\n\nDespués de revisar la solicitud, puedes rechazarla si no corresponde aprobarla."
      ],
      "cat-admin-approval-permission": [
        "- En el área **[Alertas principales]** de la página de inicio de Admin, revisa la cantidad de registros pendientes de aprobación.\n\n- Ve a **Gestión de miembros > Lista de miembros**.\n\n- Para un miembro cuyo permiso/estado esté Pendiente, haz clic en **Acción (⋯)** para aprobar o rechazar.\n\n[[callout:✅||Una misma cuenta puede solicitar permisos de docente y administrador por separado. Aprueba o rechaza los permisos de docente y administrador de forma individual.]]",
        "Antes de que un usuario se registre, puedes prerregistrar la cuenta y otorgar permisos. Una cuenta prerregistrada puede usar el servicio inmediatamente después del registro sin una solicitud de aprobación adicional.\n\nHaz clic en **[Prerregistro de permisos]** en la parte superior derecha de **Gestión de miembros > Lista de miembros** para comenzar.\n\n**Registro masivo**\n\nPuedes registrar varias cuentas a la vez con la misma afiliación y permiso.\n\n- Ingresa los correos electrónicos de las cuentas de docentes o administradores que se registrarán.\n\n- Si ingresas varias cuentas, sepáralas con espacio, Enter o coma.\n\n[[image:admin-approval-permission/01.png|Ejemplo de pantalla]]\n\n**Registro individual**\n\nPuedes registrar varias cuentas a la vez con distintas afiliaciones y permisos.\n\n- Ingresa los correos electrónicos de las cuentas de docentes o administradores que se registrarán.\n\n- Configura individualmente la afiliación y el permiso de cada cuenta.\n\n> 📌 Puedes registrar hasta 50 cuentas por vez.\n\n> ⚠️ El correo electrónico prerregistrado debe coincidir con la cuenta de Google utilizada en el registro real para poder usar el servicio inmediatamente sin una solicitud de aprobación. Si el correo es diferente, se requerirá un proceso de aprobación separado."
      ],
      "cat-admin-standard-management": [
        "En Gestión de estándares, defines **Grado, Materia y Tipo de ítem**. La información registrada aquí se utiliza en todo LumiTeach Admin y en el servicio.",
        "Registra la información de Grado que se utilizará en el servicio LumiTeach.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Campo%22%2C%22Descripci%C3%B3n%22%2C%22Ejemplo%22%5D%2C%5B%22%60Education_Lv%60%22%2C%22Nombre%20del%20grado%22%2C%221.%C2%BA%20grado%2C%202.%C2%BA%20grado%2C%2012.%C2%BA%20grado%22%5D%2C%5B%22%60Education_Lv_ID%60%22%2C%22ID%20%C3%BAnico%20correspondiente%20al%20Grado%22%2C%2212.%C2%BA%20grado%20%E2%86%92%20%6012%60%22%5D%5D%7D]]\n\n> 📌 El rango de configuración de `Education_Lv_ID` es **K-12**, y no se pueden usar ID duplicados.",
        "Registra la información de Materia que se utilizará en el servicio LumiTeach.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Campo%22%2C%22Descripci%C3%B3n%22%2C%22Ejemplo%22%5D%2C%5B%22%60Subject_title%60%22%2C%22Nombre%20de%20la%20materia%22%2C%22Matem%C3%A1ticas%2C%20Ingl%C3%A9s%2C%20Ciencias%22%5D%5D%7D]]",
        "Tipo de ítem se refiere a cada elemento que compone el currículo.\n\n> Ejemplo: nivel escolar, grado, unidad, subunidad, estándar de logro, área/tema, etc.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Campo%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22%60Item_Title%60%22%2C%22Nombre%20del%20componente%20del%20curr%C3%ADculo%22%5D%2C%5B%22%60Orden%60%22%2C%22Config%C3%BAralo%20de%20acuerdo%20con%20la%20jerarqu%C3%ADa%20de%20la%20estructura%20del%20curr%C3%ADculo.%22%5D%2C%5B%22%60Auto-Tagging%60%22%2C%22M%C3%A1rcalo%20para%20los%20elementos%20que%20no%20pertenecen%20a%20la%20jerarqu%C3%ADa%20y%20se%20usan%20como%20metadatos%20de%20contenido.%22%5D%5D%7D]]\n\n[[callout:💡||El orden de los Tipos de ítem debe reflejar la estructura jerárquica del currículo. Para elementos que no pertenecen a la jerarquía, como nivel de dificultad o etiquetas de tipo, marca **Auto-Tagging** y úsalos como metadatos.]]"
      ],
      "cat-admin-curriculum-management": [
        "Los currículos registrados en Admin se vinculan en tiempo real con el menú **Currículo** del servicio para usuarios y se visualizan allí. Después de estructurar un currículo, crea Lecciones y Evaluaciones adecuadas para ofrecer materiales docentes a los docentes afiliados.\n\n### Definiciones de términos\n\n[[table:%7B%22rows%22%3A%5B%5B%22T%C3%A9rmino%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%22%2C%22El%20curr%C3%ADculo%20educativo%20que%20posee%20una%20empresa%20o%20instituci%C3%B3n%22%5D%2C%5B%22%2A%2ASubject%2A%2A%22%2C%22Clasificaci%C3%B3n%20de%20materia%20%28ej.%3A%20Matem%C3%A1ticas%2C%20Ciencias%2C%20Ingl%C3%A9s%29%22%5D%2C%5B%22%2A%2AEducation%20Level%2A%2A%22%2C%22Etapa%20de%20aprendizaje%20o%20grado%22%5D%2C%5B%22%2A%2AItem%20Type%2A%2A%22%2C%22Tipo%20que%20distingue%20los%20elementos%20y%20caracter%C3%ADsticas%20que%20componen%20un%20curr%C3%ADculo%20%28ej.%3A%20est%C3%A1ndar%20de%20logro%2C%20unidad%2C%20nivel%20escolar%29%22%5D%2C%5B%22%2A%2AItem%2A%2A%22%2C%22Datos%20reales%20de%20cada%20Item%20Type%20%28ej.%3A%20%5C%22Puede%20sumar%20n%C3%BAmeros%20de%20tres%20cifras%20sin%20reagrupar%5C%22%29%22%5D%5D%7D]]",
        "El registro de currículo se realiza en el orden **Step 1: Información básica → Step 2: Ingreso de ítems**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Paso%22%2C%22Elementos%20de%20entrada%22%5D%2C%5B%22%2A%2AStep%201%3A%20Informaci%C3%B3n%20b%C3%A1sica%2A%2A%22%2C%22Nombre%20del%20curr%C3%ADculo%2C%20materia%2C%20editorial%2C%20versi%C3%B3n%2C%20memo%2Fdescripci%C3%B3n%2C%20etc.%22%5D%2C%5B%22%2A%2AStep%202%3A%20%C3%8Dtems%2A%2A%22%2C%22Ingresar%20datos%20reales%20por%20Item%20Type%20y%20configurar%20la%20estructura%20jer%C3%A1rquica%20%28SmartLevel%29%22%5D%5D%7D]]\n\n### Step 1: Ingresar información básica\n\nIngresa la información básica del currículo.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%C3%8Dtem%22%2C%22Obligatorio%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22Nombre%20del%20curr%C3%ADculo%22%2C%22%E2%9C%85%22%2C%22Nombre%20del%20curr%C3%ADculo%20que%20los%20docentes%20pueden%20identificar%20en%20el%20servicio%22%5D%2C%5B%22Materia%22%2C%22%E2%9C%85%22%2C%22Selecciona%20entre%20las%20materias%20prerregistradas%20en%20Gesti%C3%B3n%20de%20est%C3%A1ndares%22%5D%2C%5B%22Editorial%22%2C%22%22%2C%22Nombre%20de%20la%20empresa%20o%20instituci%C3%B3n%20administradora%20que%20public%C3%B3%20el%20curr%C3%ADculo%22%5D%2C%5B%22Versi%C3%B3n%22%2C%22%22%2C%22A%C3%B1o%20de%20publicaci%C3%B3n%20o%20versi%C3%B3n%20del%20curr%C3%ADculo%22%5D%2C%5B%22Descripci%C3%B3n%22%2C%22%22%2C%22Descripci%C3%B3n%20adicional%20del%20curr%C3%ADculo%22%5D%5D%7D]]\n\n[[image:admin-curriculum-management/03.png|Ejemplo de pantalla]]\n\n### Step 2: Ingresar ítems\n\nUn Ítem es la unidad de datos real que compone el currículo. Las materias detalladas, los nombres de unidades y los estándares de logro son ejemplos de Ítems.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Nombre%20de%20columna%22%2C%22Obligatorio%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22%2A%2AItem_content%2A%2A%22%2C%22Obligatorio%22%2C%22Contenido%20real%20del%20%C3%8Dtem.%22%5D%2C%5B%22%2A%2AhumanCodingScheme%2A%2A%22%2C%22Opcional%22%2C%22C%C3%B3digo%20oficial%20utilizado%20en%20el%20curr%C3%ADculo.%20%28Ejemplo%3A%20%60A.1%60%29%22%5D%2C%5B%22%2A%2Asmartlevel%2A%2A%22%2C%22Obligatorio%22%2C%22N%C3%BAmero%20que%20representa%20la%20jerarqu%C3%ADa%20superior-inferior%20entre%20%C3%8Dtems.%22%5D%2C%5B%22%2A%2Aitemtype_title%2A%2A%22%2C%22Obligatorio%22%2C%22Tipo%20del%20%C3%8Dtem.%20%28Ejemplos%3A%20nivel%20escolar%2C%20grado%2C%20semestre%2C%20unidad%2C%20subunidad%2C%20est%C3%A1ndar%20de%20logro%29%22%5D%2C%5B%22%2A%2AeducationLevel%2A%2A%22%2C%22Opcional%22%2C%22C%C3%B3digo%20del%20grado%20al%20que%20pertenece%20el%20%C3%8Dtem.%20%28Ejemplo%3A%20%6011%60%20%E2%86%92%2011.%C2%BA%20grado%29%22%5D%5D%7D]]\n\n[[image:admin-curriculum-management/01.png|Ejemplo de pantalla]]\n\n[[callout:⚠️||**Si los elementos obligatorios están vacíos o si** `**itemtype_title**` **no coincide con un nombre prerregistrado en Gestión de estándares, se producirá un error durante la carga.**\\nRevísalo siempre antes de cargar.]]\n\n### ¿Qué es la estructura jerárquica (SmartLevel)?\n\n`smartlevel` es una columna clave que expresa con números la relación superior-inferior entre Ítems. Los pasos se separan con `.` (punto), y la profundidad del número representa la jerarquía.\n\n[[callout:📌||Un ítem hijo solo se reconoce si incluye el número del ítem padre. No se permiten números `smartlevel` duplicados, ítems hijos sin ítem padre ni estructuras circulares.]]\n\n### Descargar/importar plantilla\n\n- Haz clic en **[Importar]** en la parte superior derecha de la página de registro masivo.\n\n- Haz clic en **[Descargar plantilla]** para descargar la plantilla de Excel.\n\n- Después de completar la plantilla, haz clic nuevamente en **[Importar]** para cargar el archivo.\n\n### Guardado temporal\n\n- Si necesitas detenerte durante el trabajo, puedes guardar temporalmente.\n\n- Haz clic en **[Guardar temporalmente]** en la parte superior derecha.\n\n[[callout:⚠️||LumiTeach Admin **no guarda automáticamente los cambios del archivo** mientras preparas datos de registro masivo.]]",
        "Al usar Clasificación con IA, puedes organizar automáticamente el formulario de ingreso de ítems simplemente adjuntando un documento de currículo.\n\n- Haz clic en **[Clasificación con IA]** en la parte superior derecha de la pantalla Step 2.\n\n- Adjunta el documento de currículo que deseas registrar y haz clic en **[Registrar]**.\n\n[[image:admin-curriculum-management/02.png|Ejemplo de pantalla]]\n\n[[callout:⚠️||Si ya hay contenido ingresado en Step 2, será reemplazado por el resultado del análisis de IA y no podrá restaurarse. Clasificación con IA es una herramienta que ayuda a crear un borrador del formulario de registro de currículo. Los resultados generados por IA pueden contener errores, así que revisa cuidadosamente el contenido antes de aprobarlo.]]",
        "Los currículos registrados se pueden revisar y gestionar haciendo clic en **[Detalles]**.\n\n**Cambiar activo/inactivo**\n\n[[table:%7B%22rows%22%3A%5B%5B%22Estado%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22%2A%2AActivo%2A%2A%22%2C%22El%20curr%C3%ADculo%20se%20muestra%20en%20el%20servicio%20LumiTeach%2C%20y%20los%20usuarios%20pueden%20ver%20y%20utilizar%20el%20contenido.%22%5D%2C%5B%22%2A%2AInactivo%2A%2A%22%2C%22El%20curr%C3%ADculo%20y%20el%20contenido%20conectado%20de%20Lecciones%2FEvaluaciones%20no%20se%20muestran%20en%20el%20servicio%20LumiTeach.%22%5D%5D%7D]]\n\nLa información básica y los datos de ítems del currículo se pueden editar en cualquier momento."
      ],
      "cat-admin-lesson-activity": [
        "Al entrar en el menú Gestión de lecciones, puedes ver la lista de Lecciones registradas.",
        "Haz clic en el nombre de una Lección en la lista o en el botón de información detallada a la derecha para abrir el modal de información detallada de esa Lección.\n\nEn el modal de información detallada puedes revisar lo siguiente.\n\n**Información básica (panel izquierdo)**\n\n- **País, nombre de la empresa**: Institución/empresa a la que pertenece la Lección\n\n- **Item ID**: Ítem detallado del currículo conectado\n\n- **Currículo**: Currículo conectado\n\n- **Grado**\n\n- **Nombre de la Lección**\n\n- **Orden de la Lección**: Número de orden de la Lección dentro del currículo\n\n**Conceptos y estándares (panel superior derecho)**\n\n- **Conceptos**: Lista de palabras clave de los conceptos principales tratados en esta Lección\n\n- **Metadatos**: Ítems de metadatos registrados en Gestión de estándares\n\n**Miniatura de la Lección (panel inferior derecho)**\n\n- Si no se registra una imagen separada, la **primera pantalla de Actividad de la página 1 se establece automáticamente como miniatura** al guardar o aprobar.\n\n- Si se subió una imagen manualmente, esa imagen se mantiene sin actualización automática.",
        "Haz clic en **Edit Lesson** en la parte inferior del modal de información detallada para ir a la pantalla de edición de la Lección.\n\nEn la pantalla de edición puedes realizar las siguientes acciones.\n\n- Editar el contenido de las Actividades dentro de la Lección\n\n- Cambiar el orden de las Actividades\n\n- Agregar una nueva Actividad\n\n- Guardar el contenido creado",
        "Haz clic en el botón de registro en la parte superior derecha de la pantalla de lista para registrar una nueva Lección.\n\nHay dos métodos de registro. Consulta la guía detallada de cada método.\n\n- Registro masivo\n\n- AI Make"
      ],
      "cat-admin-lesson-bulk-upload": [
        "### Paso 1: Descargar la plantilla de Excel\n\nEn la página Admin, ve a la **pantalla de registro masivo de Lecciones** y haz clic en **Importar > Descargar plantilla** para descargar el archivo Excel.\n\n⚠️ Asegúrate de usar la plantilla proporcionada. Si agregas o eliminas columnas arbitrariamente, puede ocurrir un error de carga.\n\n### Paso 2: Completar la plantilla de Excel\n\nPuedes **ingresar datos directamente** en la plantilla de la cuadrícula web o completar un archivo Excel e **Importarlo**.\n\n### Método A: Ingresar directamente en la cuadrícula web\n\nHaz clic en cada celda e ingresa directamente los datos de la Lección y la Actividad.\n\n- **Add Row Above / Add Row Below**: Agrega una fila encima o debajo de la fila seleccionada.\n\n- **Delete Selected Row**: Elimina la fila seleccionada.\n\n### Método B: Importar un archivo Excel\n\n- Haz clic en **Import** en la parte superior derecha.\n\n- Arrastra y suelta el archivo completado en el área de carga del popup o haz clic en **SELECT FILE** para adjuntarlo.\n\n- Haz clic en **Submit** para cargar los datos en la cuadrícula web.\n\n> Formatos compatibles: XLSX, XLS / Máximo 10 MB\n\n### Cómo completar la plantilla\n\nCada fila representa una Actividad. Las Actividades que pertenecen a la misma Lección deben repetir la **misma información de la Lección**.\n\n### Ejemplo de estructura básica\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item_ID%22%2C%22Lesson_order%22%2C%22Lesson_title%22%2C%22Activity_order%22%2C%22Activity_type%22%2C%22Activity_title%22%5D%2C%5B%22ITEM001%22%2C%221%22%2C%22Primera%20lecci%C3%B3n%22%2C%221%22%2C%22text%20only%20%28G%29%22%2C%22Objetivo%20de%20aprendizaje%20de%20hoy%22%5D%2C%5B%22ITEM001%22%2C%221%22%2C%22Primera%20lecci%C3%B3n%22%2C%222%22%2C%22true%20or%20false%20%28Q%29%22%2C%22%C2%BFCu%C3%A1l%20de%20las%20siguientes%20opciones%20es%20correcta%3F%22%5D%2C%5B%22ITEM001%22%2C%222%22%2C%22Segunda%20lecci%C3%B3n%22%2C%221%22%2C%22multiple%20choice%20%28Q%29%22%2C%22Elige%20la%20respuesta%20correcta%22%5D%5D%7D]]\n\n### Descripción de columnas\n\n### Información básica de la Lección\n\n[[table:%7B%22rows%22%3A%5B%5B%22Nombre%20de%20columna%22%2C%22Obligatorio%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22Item_ID%22%2C%22%E2%9C%85%20Obligatorio%22%2C%22ID%20del%20Item%20al%20que%20pertenece%20la%20Lecci%C3%B3n.%20Solo%20se%20pueden%20usar%20ID%20registrados%20en%20Gesti%C3%B3n%20de%20curr%C3%ADculo.%22%5D%2C%5B%22Lesson_order%22%2C%22%E2%9C%85%20Obligatorio%22%2C%22Orden%20de%20la%20Lecci%C3%B3n%20%28empieza%20en%201%2C%20solo%20n%C3%BAmeros%29%22%5D%2C%5B%22Lesson_title%22%2C%22%E2%9C%85%20Obligatorio%22%2C%22T%C3%ADtulo%20de%20la%20Lecci%C3%B3n%20%28hasta%20100%20caracteres%29%22%5D%2C%5B%22Lesson_image%22%2C%22Opcional%22%2C%22Imagen%20representativa%20de%20la%20Lecci%C3%B3n.%20Solo%20se%20puede%20subir%201%20imagen%20por%20Lecci%C3%B3n.%22%5D%2C%5B%22Lesson_objective%22%2C%22Opcional%22%2C%22Objetivo%20de%20aprendizaje%20de%20la%20Lecci%C3%B3n%22%5D%5D%7D]]\n\n### Información básica de la Actividad\n\n[[table:%7B%22rows%22%3A%5B%5B%22Nombre%20de%20columna%22%2C%22Obligatorio%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22Activity_order%22%2C%22%E2%9C%85%20Obligatorio%22%2C%22Orden%20de%20la%20Actividad%20%28empieza%20en%201%2C%20solo%20n%C3%BAmeros%29%22%5D%2C%5B%22Activity_type%22%2C%22%E2%9C%85%20Obligatorio%22%2C%22Tipo%20de%20Actividad%20%28consulta%20la%20lista%20de%20abajo%29%22%5D%2C%5B%22Activity_color%22%2C%22Opcional%22%2C%22Color%20de%20fondo%2Ffuente.%20Si%20queda%20vac%C3%ADo%2C%20se%20aplica%20Black%20%26%20White.%22%5D%2C%5B%22Activity_title%22%2C%22%E2%9C%85%20Obligatorio%22%2C%22T%C3%ADtulo%20o%20pregunta%20de%20la%20Actividad%20%28hasta%2050%20caracteres%29%22%5D%2C%5B%22Activity_description%22%2C%22Opcional%22%2C%22Descripci%C3%B3n%20de%20la%20Actividad%20%28hasta%2080%20caracteres%29%22%5D%2C%5B%22Activity_image%22%2C%22Opcional%22%2C%22Imagen%20de%20la%20Actividad%22%5D%5D%7D]]\n\nLos tipos de Actividad se dividen en 4 categorías principales.\n\n### Contenido general (G)\n\nPantalla que muestra contenido de aprendizaje. Coloca texto, imágenes u otros elementos sin ingresar una respuesta separada.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22text%20only%20%28G%29%22%2C%22Muestra%20solo%20texto%22%5D%2C%5B%22text%20%26%20text%20%28G%29%22%2C%22Muestra%20dos%20bloques%20de%20texto%20en%20paralelo%22%5D%2C%5B%22image%20only%20%28G%29%22%2C%22Muestra%20solo%20imagen%22%5D%2C%5B%22text%20top%20%28G%29%22%2C%22Texto%20arriba%2C%20imagen%20abajo%22%5D%2C%5B%22image%20top%20%28G%29%22%2C%22Imagen%20arriba%2C%20texto%20abajo%22%5D%2C%5B%22image%20middle%20%28G%29%22%2C%22Imagen%20entre%20bloques%20de%20texto%22%5D%2C%5B%22image%20left%20%28G%29%22%2C%22Imagen%20a%20la%20izquierda%2C%20texto%20a%20la%20derecha%22%5D%2C%5B%22image%20right%20%28G%29%22%2C%22Imagen%20a%20la%20derecha%2C%20texto%20a%20la%20izquierda%22%5D%5D%7D]]\n\n### Contenido externo (E)\n\nActividad que inserta un archivo o enlace externo.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Descripci%C3%B3n%22%2C%22Columna%20requerida%22%5D%2C%5B%22webviewer%20%28E%29%22%2C%22Inserta%20una%20URL%20de%20sitio%20web%22%2C%22Activity_url%22%5D%2C%5B%22Youtube%20%28E%29%22%2C%22Inserta%20un%20video%20de%20YouTube%22%2C%22Activity_url%22%5D%2C%5B%22document%20%28E%29%22%2C%22Adjunta%20un%20archivo%20de%20documento%22%2C%22Activity_document%20%28pdf%2C%20doc%2C%20docx%2C%20pptx%2C%20ppt%20%2F%20m%C3%A1ximo%20500%20MB%29%22%5D%2C%5B%22sound%20%28E%29%22%2C%22Adjunta%20un%20archivo%20de%20audio%22%2C%22Activity_sound%20%28mp3%20%2F%20m%C3%A1ximo%2020%20MB%29%22%5D%5D%7D]]\n\n### Quiz (Q)\n\nActividad en la que el estudiante ingresa o selecciona una respuesta.\n\n### true or false (Q) — Quiz OX\n\n- Ingresa la respuesta correcta en la columna **TF_correct_answer** (✅ Obligatorio)\n\n- Ejemplo: O o X\n\n### short answer (Q) — Respuesta corta\n\n- Ingresa la respuesta correcta en la columna **SA_correct_answer** (✅ Obligatorio)\n\n- Si hay varias respuestas aceptables, sepáralas con comas (,).\n\n- Ejemplo: manzana, apple, maçã\n\n### multiple choice (Q) — Opción múltiple\n\n- **MC_type**: Selecciona text o image (✅ Obligatorio)\n\n- **MC_correct_answer**: Ingresa el número de la opción correcta (✅ Obligatorio). Si hay varias respuestas correctas, sepáralas con comas.\n\n- Ejemplo: 1 o 1,3\n\n- **MC_option1 ~ MC_option5**: Ingresa el contenido de las opciones (mínimo 2 obligatorias, máximo 50 caracteres)\n\n- Para tipo image, sube imágenes en MC_option1_image ~ MC_option5_image.\n\n### open-ended (Q) — Respuesta abierta\n\n- **OE_correct_answer**: Ingresa una respuesta modelo (Opcional)\n\n### fill in the blank (Q) — Completar espacios\n\n- En la columna **Activity_title**, encierra con [ ] la palabra que se convertirá en espacio en blanco.\n\n- Ejemplo: Apple en inglés es [apple].\n\n### sequencing (Q) — Secuenciación\n\n- **SQ_type**: Selecciona text o image (✅ Obligatorio)\n\n- **SQ_option1 ~ SQ_option5**: Contenido de las opciones (mínimo 2 obligatorias)\n\n- **SQ_option1_seq ~ SQ_option5_seq**: Ingresa el número de orden correcto para cada opción (✅ Obligatorio)\n\n- Ejemplo: option1_seq=2, option2_seq=1 (option2 primero, option1 segundo)\n\n### matching (Q) — Emparejar\n\n- **MA_type**: Selecciona text o image (✅ Obligatorio)\n\n- **MA_correct_answer**: Ingresa los pares correctos en formato número-letra (✅ Obligatorio)\n\n- Ejemplo: 1-a,2-b,3-c\n\n- **MA_option1 ~ MA_option4**: Opciones superiores (números 1~4)\n\n- **MA_option_a ~ MA_option_d**: Opciones inferiores (letras a~d)\n\n### sorting (Q) — Clasificación\n\n- **SR_type**: Selecciona text o image (✅ Obligatorio)\n\n- **SR_groupA**: Título del Grupo A (✅ Obligatorio, máximo 30 caracteres)\n\n- **SR_groupB**: Título del Grupo B (✅ Obligatorio, máximo 30 caracteres)\n\n- **SR_option1 ~ SR_option5**: Contenido de las opciones (mínimo 2 obligatorias)\n\n- **SR_option1_group ~ SR_option5_group**: Ingresa el grupo al que pertenece cada opción (✅ Obligatorio)\n\n- Valor de entrada: Group A o Group B\n\n### Opinión/Discusión (D)\n\nActividad que recopila opiniones de los estudiantes. No hay respuesta correcta; solo se configuran la pregunta y las opciones.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Descripci%C3%B3n%22%2C%22Columna%20requerida%22%5D%2C%5B%22vote%20%28D%29%22%2C%22Votaci%C3%B3n%22%2C%22Vote_option1%20~%20Vote_option5%20%28m%C3%ADnimo%202%29%22%5D%2C%5B%22traffic%20light%20%28D%29%22%2C%22Sem%C3%A1foro%20%28verificaci%C3%B3n%20de%20comprensi%C3%B3n%29%22%2C%22No%20requiere%20ingreso%20de%20opciones%20separadas%22%5D%2C%5B%22agree-disagree%20%28D%29%22%2C%22Opini%C3%B3n%20de%20acuerdo%2Fdesacuerdo%22%2C%22No%20requiere%20ingreso%20de%20opciones%20separadas%22%5D%2C%5B%22opinion%20scale%20%28D%29%22%2C%22Escala%20de%20opini%C3%B3n%22%2C%22No%20requiere%20ingreso%20de%20opciones%20separadas%22%5D%5D%7D]]\n\n### Tablero de ideas (I)\n\nActividad en la que los estudiantes escriben ideas libremente. No hay respuesta correcta; solo se configura la pregunta.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Descripci%C3%B3n%22%2C%22Columna%20requerida%22%5D%2C%5B%22brainstorming%20%28I%29%22%2C%22Brainstorming%22%2C%22Ingresa%20solo%20Activity_title.%20No%20requiere%20opciones%20separadas.%22%5D%2C%5B%22whiteboard%20%28I%29%22%2C%22Whiteboard%22%2C%22Ingresa%20solo%20Activity_title.%20No%20requiere%20opciones%20separadas.%22%5D%5D%7D]]\n\n### Activity_color — Opciones de color\n\nPara el color de fondo/fuente, ingresa exactamente uno de los siguientes valores.\n\n`Black&White` / `Red` / `Orange` / `Yellow` / `Green` / `Blue` / `Purple` / `Pink`\n\n> Si queda vacío, `Black&White` se aplica automáticamente.\n\n### Paso 3: Adjuntar archivos\n\nLas imágenes, documentos y archivos de audio no se pueden importar mediante la plantilla Excel y deben **adjuntarse directamente en la cuadrícula web**. Haz clic en cada celda para adjuntar el archivo.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Columna%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22%2A%2AActivity_image%2A%2A%22%2C%22Adjuntar%20archivo%20de%20imagen%20de%20la%20Actividad%2C%20m%C3%A1ximo%201%20archivo%2C%2020%20MB%20o%20menos%22%5D%2C%5B%22%2A%2AActivity_document%2A%2A%22%2C%22Adjuntar%20archivo%20de%20documento%20de%20la%20Actividad%2C%20m%C3%A1ximo%201%20archivo%2C%2020%20MB%20o%20menos%22%5D%2C%5B%22%2A%2AActivity_sound%2A%2A%22%2C%22Adjuntar%20archivo%20de%20audio%20de%20la%20Actividad%2C%20m%C3%A1ximo%201%20archivo%2C%2020%20MB%20o%20menos%22%5D%2C%5B%22%2A%2ALesson_image%2A%2A%22%2C%22Adjuntar%20imagen%20de%20miniatura%20de%20la%20Lecci%C3%B3n%2C%20m%C3%A1ximo%201%20archivo%2C%2020%20MB%20o%20menos.%20Si%20no%20se%20registra%20una%20miniatura%2C%20la%20primera%20Actividad%20se%20muestra%20como%20miniatura.%22%5D%5D%7D]]\n\n### Paso 4: Guardar borrador\n\nSi necesitas ausentarte o detener el trabajo, haz clic en **Save Draft** para guardar temporalmente los datos que estás ingresando.\n\n### Paso 5: Enviar\n\nCuando termines de ingresar los datos, haz clic en **Submit** para completar el registro.\n\n> ⚠️ Si hay elementos con error al enviar, se mostrará un mensaje de error en la celda correspondiente. Revisa el mensaje, corrige el contenido y vuelve a enviar."
      ],
      "cat-admin-lesson-ai-make": [
        "### Paso 1: Ejecutar AI Make\n\nHaz clic en **AI Make** en la parte superior de la pantalla de edición de la Lección.\n\n### Paso 2: Configurar información básica\n\n[[table:%7B%22rows%22%3A%5B%5B%22%C3%8Dtem%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%20%28Obligatorio%29%22%2C%22Selecciona%20el%20curr%C3%ADculo%20que%20se%20aplicar%C3%A1%20a%20la%20Lecci%C3%B3n.%22%5D%2C%5B%22%2A%2AGrade%2A%2A%20%28Obligatorio%29%22%2C%22Selecciona%20el%20grado%20objetivo.%22%5D%2C%5B%22%2A%2AIdioma%2A%2A%20%28Opcional%29%22%2C%22Selecciona%20el%20idioma%20de%20extracci%C3%B3n%20de%20contenido.%22%5D%5D%7D]]\n\n### Paso 3: Configurar Auto-tagging\n\nEsta función etiqueta automáticamente **palabras clave de conceptos** y **metadatos** en la Lección generada.\n\n- **Usar**: Después de analizar la Lección, la IA etiqueta automáticamente palabras clave de conceptos y metadatos. (Se descuenta Crédito de IA)\n\n- **No usar**: Omite Auto-tagging.\n\n### Paso 4: Adjuntar material de origen\n\nArrastra y suelta el archivo o haz clic en el botón de selección de archivo para adjuntar el material de origen.\n\n> Formatos compatibles: pdf, doc, docx, ppt, pptx / Límite de tamaño: 100 MB por archivo\n\n### Paso 5: Configurar categorías de Lección\n\nSi divides el material de origen en varias Lecciones, ingresa el rango de páginas y la cantidad de Actividades que se generarán para cada Lección.\n\n- Si no configuras ningún valor de categoría, todo el material de origen se genera como **una Lección**.\n\n- Puedes agregar categorías de Lección con el botón **+ Add Lesson Category**.\n\n- Haz clic en **AI Classification** para que la IA analice el material de origen y clasifique automáticamente los rangos de páginas de las Lecciones. Después también puedes editarlos manualmente.\n\n### Paso 6: Iniciar generación\n\nHaz clic en **Create**. Cuando comience la generación, podrás revisar el progreso en la capa de la parte inferior derecha de la pantalla. Mientras se genera, puedes usar libremente otras funciones de Admin.",
        "### Revisar la pestaña Revisión\n\nCuando finalice la generación de Lecciones por IA, revisa la lista de Lecciones generadas en la pestaña **[Revisión]**.\n\n### Revisar detalles\n\nHaz clic en el nombre de la Lección generada o en el ícono de información detallada para revisar los detalles.\n\n- Si Auto-tagging está aplicado, **palabras clave de conceptos** y **metadatos** se ingresan automáticamente. Puedes editarlos según sea necesario.\n\n- Configura **Item ID** para especificar el ítem al que se mapeará la Lección.\n\n- Ingresa el **orden de la Lección**.\n\n### Revisar y editar contenido de la Lección\n\nHaz clic en **Edit Lesson** para revisar el contenido generado por IA. Edita las partes necesarias y guarda.\n\n### Aprobar y publicar\n\nCuando finalice la revisión, haz clic en **[Aprobar]**. La Lección se publica inmediatamente después de la aprobación.\n\n[[callout:⚠️||Notas\n- Cuanta menos información contenga el material de origen, más probable es que el contenido se duplique o se simplifique. Para obtener la mejor calidad, configura bien la información básica y ajusta adecuadamente la cantidad de páginas para generar Actividades.\n- AI Make es una herramienta que ayuda a crear borradores. Los resultados generados por IA pueden contener errores, así que revisa cuidadosamente el contenido antes de aprobarlo.\n- Se descuenta Crédito de IA al usar Auto-tagging y AI Make.]]"
      ],
      "cat-admin-lesson-recommendation": [
        "- Haz clic en la pestaña **Gestión de currículo/contenido > Gestión de lecciones > Gestión de recomendaciones**.\n\n- En la pantalla Gestión de recomendaciones, puedes consultar y gestionar el contenido recomendado registrado (Tema recomendado 1, Tema recomendado 2).\n\n[[table:%7B%22rows%22%3A%5B%5B%22%C3%8Dtem%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22%2A%2ATema%20recomendado%201%2A%2A%22%2C%22Estado%20Activo%20o%20Inactivo%20de%20la%20primera%20%C3%A1rea%20de%20recomendaci%C3%B3n%22%5D%2C%5B%22%2A%2ATema%20recomendado%202%2A%2A%22%2C%22Estado%20Activo%20o%20Inactivo%20de%20la%20segunda%20%C3%A1rea%20de%20recomendaci%C3%B3n%22%5D%2C%5B%22%2A%2AFecha%20de%20%C3%BAltima%20modificaci%C3%B3n%2A%2A%22%2C%22Fecha%20en%20que%20se%20actualiz%C3%B3%20por%20%C3%BAltima%20vez%20la%20configuraci%C3%B3n%20de%20recomendaci%C3%B3n%20%28yyyy-mm-dd%29%22%5D%5D%7D]]\n\n### Revisar detalles de recomendación\n\n- Haz clic en el **ícono ↗** de la columna **[Detalles]** de la lista para abrir la página de detalles en una **nueva ventana**.\n\n- En la página de detalles, puedes revisar el público de visibilidad, Tema 1 y Tema 2.\n\n- Haz clic en **[Ver tema/descripción por idioma]** en cada área de tema para revisar el título y la descripción por idioma en un popup.\n\n### Editar configuración de recomendación\n\n- Haz clic en **[Editar]** en la parte superior derecha de la página de detalles para ir a la página de edición.",
        "- Haz clic en **[Nuevo registro]** en la parte superior derecha de la pantalla de lista de recomendaciones.\n\n### Ingresar título del tema (registrar traducciones por idioma)\n\n- Haz clic en **[Editar]** para abrir el modal **Editar traducción del Tema recomendado 1**.\n\n- En el modal, ingresa el título del tema para cada idioma.\n\n- Haz clic en **[Agregar traducción]** para agregar un idioma.\n\n[[callout:⚠️||Si no hay datos de traducción para el idioma seleccionado por el usuario en el servicio LumiTeach, la clave de traducción puede mostrarse tal cual.]]\n\n### Agregar ítem conectado (Item ID)\n\n- Haz clic en **[+ Agregar Item ID]** para abrir el modal **Agregar Item ID**.\n\n- Selecciona en el orden Company → Curriculum y luego busca.\n\n- Puedes agregar hasta **4 ítems**.\n\n### Cambiar orden y eliminar ítems\n\n- Usa el botón **flecha arriba/abajo (↕)** a la izquierda de cada fila de ítem para cambiar el orden.\n\n- Haz clic en el **ícono de eliminar 🗑️** a la derecha de la fila del ítem para eliminar ese ítem.",
        "- El Tema 2 se configura de la misma forma que el Tema 1.\n\n### Diferencia con el Tema 1\n\n- En el modal **[Editar]**, además del **título**, también ingresa la **descripción por cada Item ID** conectado.\n\n- Puedes agregar hasta **2 ítems conectados**.\n\nDespués de ingresar todos los elementos, haz clic en **[Registrar]** en la parte superior derecha."
      ],
      "cat-admin-assessment-question": [
        "- Haz clic en **Gestión de evaluaciones** en el menú superior y selecciona la pestaña **[Gestión de preguntas]**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%C3%8Dtem%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22%2A%2AID%20de%20pregunta%2A%2A%22%2C%22N%C3%BAmero%20de%20identificaci%C3%B3n%20%C3%BAnico%20de%20la%20pregunta%22%5D%2C%5B%22%2A%2ATipo%20de%20pregunta%2A%2A%22%2C%22Distingue%20tipos%20de%20pregunta%20como%20opci%C3%B3n%20m%C3%BAltiple%2C%20respuesta%20corta%2C%20quiz%20OX%2C%20emparejar%2C%20etc.%22%5D%2C%5B%22%2A%2AFecha%20de%20%C3%BAltima%20modificaci%C3%B3n%2A%2A%22%2C%22Fecha%20en%20que%20los%20datos%20se%20registraron%20por%20primera%20vez%20o%20se%20modificaron%20por%20%C3%BAltima%20vez%20%28YYYY-MM-DD%29%22%5D%5D%7D]]\n\n### Revisar detalles de pregunta\n\n- Haz clic en el **ícono ↗ (detalles)** de la lista para abrir la **página de detalles** de esa pregunta.\n\n- Puedes revisar país, empresa, ID de pregunta, dificultad, cuenta de registro/modificación más reciente y fecha de última modificación.\n\n### Vista previa de pregunta\n\n- Haz clic en **[Vista previa]** en la parte superior derecha de la página de detalles para abrir el modal de vista previa.\n\n- Puedes elegir entre **versión PC** y **versión móvil** para revisar.\n\n### Editar pregunta\n\n- Haz clic en **[Editar]** en la parte superior derecha de la página de detalles para cambiar al **modo de edición de pregunta**.",
        "Las preguntas se pueden registrar de dos formas: **registro individual** y **registro masivo**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Categor%C3%ADa%22%2C%22%22%2C%22Obligatorio%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22question_ID%22%2C%22ID%20de%20pregunta%22%2C%22Obligatorio%22%2C%22Usa%20letras%20may%C3%BAsculas%2Fmin%C3%BAsculas%20en%20ingl%C3%A9s%2C%20n%C3%BAmeros%2C%20puntos%20y%20guiones%20%28-%29.%20No%20se%20permiten%20duplicados.%22%5D%2C%5B%22question_type%22%2C%22Tipo%20de%20pregunta%22%2C%22Obligatorio%22%2C%22Distingue%20el%20tipo%20de%20pregunta.%22%5D%2C%5B%22question_Difficulty%22%2C%22Dificultad%22%2C%22Opcional%22%2C%22Hard%2C%20Normal%2C%20Easy%22%5D%2C%5B%22question_text%22%2C%22Enunciado%22%2C%22Obligatorio%22%2C%22Escribe%20la%20pregunta.%22%5D%2C%5B%22question_description%22%2C%22Descripci%C3%B3n%22%2C%22Opcional%22%2C%22Escribe%20una%20explicaci%C3%B3n%20adicional%20o%20un%20texto%20de%20apoyo.%22%5D%2C%5B%22question_image%22%2C%22Imagen%22%2C%22Opcional%22%2C%22Agrega%20una%20imagen%20para%20la%20pregunta.%22%5D%2C%5B%22correct_answer%22%2C%22Respuesta%20correcta%22%2C%22Obligatorio%22%2C%22Escribe%20la%20respuesta%20correcta%20de%20cada%20pregunta.%22%5D%2C%5B%22option%22%2C%22Opciones%22%2C%22Obligatorio%2FOpcional%22%2C%22Ingresa%20las%20opciones%20de%20la%20pregunta.%22%5D%5D%7D]]\n\n### Tipos de pregunta\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Nombre%20en%20ingl%C3%A9s%22%5D%2C%5B%22Quiz%20OX%22%2C%22True%20or%20False%22%5D%2C%5B%22Respuesta%20corta%22%2C%22Short%20Answer%22%5D%2C%5B%22Opci%C3%B3n%20m%C3%BAltiple%22%2C%22Multiple%20Choice%22%5D%2C%5B%22Secuenciaci%C3%B3n%22%2C%22Sequencing%22%5D%2C%5B%22Emparejar%22%2C%22Matching%22%5D%2C%5B%22Completar%20espacios%22%2C%22Fill%20in%20the%20Blank%22%5D%2C%5B%22Clasificaci%C3%B3n%22%2C%22Sorting%22%5D%5D%7D]]",
        "Este método registra una pregunta a la vez mediante entrada directa.\n\n### Ingresar información básica\n\n- **Tipo de pregunta:** Selecciona el tipo de pregunta en el menú desplegable.\n\n- **Enunciado:** Ingresa la pregunta. (Obligatorio, máximo 50 caracteres)\n\n- **Descripción:** Ingresa una descripción adicional. (Opcional, máximo 80 caracteres)\n\n- **Imagen de pregunta:** Puedes adjuntar una imagen con el botón **[Adjuntar archivo]**. (1 archivo / 20 MB o menos / jpg, jpeg, png)\n\nDespués de ingresar todos los elementos, haz clic en **[Registrar]** en la parte superior derecha.",
        "Este método registra varias preguntas a la vez según la plantilla de Excel.\n\n### Descargar/importar plantilla\n\n- Haz clic en **[Importar]** en la parte superior derecha.\n\n- Haz clic en **[Descargar plantilla]** para descargar la plantilla de Excel.\n\n- Después de completar la plantilla, haz clic nuevamente en **[Importar]** para subir el archivo.\n\n[[callout:💡||**Nota:** LumiTeach Admin **no guarda automáticamente los cambios del archivo** mientras preparas datos de registro masivo.]]\n\n### Consideraciones para el registro masivo de preguntas\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%20de%20validaci%C3%B3n%22%2C%22Condici%C3%B3n%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22Obligatorios%20comunes%22%2C%22Cuando%20falta%20question_id%2C%20question_type%20o%20question_text%22%2C%22El%20ID%20de%20pregunta%2C%20el%20tipo%20de%20pregunta%20y%20el%20contenido%20de%20la%20pregunta%20son%20campos%20obligatorios.%22%5D%2C%5B%22Requisitos%20de%20imagen%22%2C%22Cuando%20la%20extensi%C3%B3n%20no%20es%20jpg%2Fpng%20o%20el%20archivo%20supera%2020%20MB%22%2C%22Los%20archivos%20de%20imagen%20solo%20admiten%20formatos%20jpg%20y%20png%2C%20y%20se%20pueden%20subir%20hasta%2020%20MB.%22%5D%2C%5B%22Requisitos%20de%20datos%20por%20pregunta%22%2C%22Cuando%20falta%20la%20respuesta%20correcta%20o%20las%20opciones%2C%20o%20el%20formato%20es%20incorrecto%22%2C%22Ingresa%20la%20respuesta%20correcta%20y%20las%20opciones%20de%20acuerdo%20con%20el%20tipo%20de%20pregunta.%22%5D%5D%7D]]\n\nDespués de ingresar todos los elementos, haz clic en **[Registrar]** en la parte superior derecha."
      ],
      "cat-admin-assessment-paper": [
        "- En el menú Gestión de evaluaciones, selecciona la pestaña **[Gestión de evaluaciones]**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%C3%8Dtem%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22%2A%2ANombre%20de%20la%20Evaluaci%C3%B3n%2A%2A%22%2C%22Nombre%20de%20la%20Evaluaci%C3%B3n%22%5D%2C%5B%22%2A%2ACurr%C3%ADculo%2A%2A%22%2C%22Unidad%20curricular%20mapeada%20a%20la%20Evaluaci%C3%B3n%22%5D%2C%5B%22%2A%2AGrado%2A%2A%22%2C%22Informaci%C3%B3n%20de%20grado%20mapeada%20a%20la%20Evaluaci%C3%B3n%22%5D%2C%5B%22%2A%2AN%C3%BAmero%20de%20preguntas%2A%2A%22%2C%22N%C3%BAmero%20total%20de%20preguntas%20registradas%20en%20la%20Evaluaci%C3%B3n%22%5D%2C%5B%22%2A%2AEstado%2A%2A%22%2C%22Estado%20Activo%20%2F%20Inactivo%20de%20la%20Evaluaci%C3%B3n%22%5D%2C%5B%22%2A%2AFecha%20de%20%C3%BAltima%20modificaci%C3%B3n%2A%2A%22%2C%22Muestra%20la%20fecha%20de%20modificaci%C3%B3n%20si%20hubo%20una%20modificaci%C3%B3n%20reciente%3B%20de%20lo%20contrario%2C%20muestra%20la%20fecha%20de%20registro%20inicial%22%5D%5D%7D]]\n\n### Revisar detalles de Evaluación\n\n- Haz clic en el **ícono ↗ (detalles)** de la lista para abrir la **página de detalles** de esa Evaluación.\n\n### Editar Evaluación\n\n- Haz clic en **[Editar]** en la parte superior derecha de la página de detalles para cambiar al **modo de edición**.\n\n- Después de editar, haz clic en **[Guardar]** en la parte superior derecha.",
        "Este método ingresa directamente la información de una Evaluación, configura las preguntas y la registra.\n\n[[table:%7B%22rows%22%3A%5B%5B%22%C3%8Dtem%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22%2A%2ANombre%20de%20la%20Evaluaci%C3%B3n%2A%2A%22%2C%22Obligatorio%2C%20m%C3%A1ximo%20100%20bytes%22%5D%2C%5B%22%2A%2AOrden%20de%20la%20Evaluaci%C3%B3n%2A%2A%22%2C%22Obligatorio%2C%20solo%20n%C3%BAmeros%22%5D%2C%5B%22%2A%2ACurr%C3%ADculo%2A%2A%22%2C%22Obligatorio%2C%20seleccionar%20de%20la%20lista%20de%20curr%C3%ADculos%22%5D%2C%5B%22%2A%2AItem%20ID%2A%2A%22%2C%22Obligatorio%2C%20aparece%20un%20modal%20al%20hacer%20clic%20en%20%5BAgregar%20Item%20ID%5D%22%5D%2C%5B%22%2A%2AMiniatura%20de%20la%20Evaluaci%C3%B3n%2A%2A%22%2C%22Si%20no%20se%20registra%20una%20imagen%20separada%2C%20la%20primera%20pantalla%20de%20pregunta%20de%20la%20p%C3%A1gina%201%20se%20guarda%20autom%C3%A1ticamente%20al%20guardar%20o%20aprobar%22%5D%2C%5B%22%2A%2AFuente%2A%2A%22%2C%22Opcional%2C%20m%C3%A1ximo%20100%20bytes%22%5D%5D%7D]]\n\n### Configurar preguntas\n\n- Haz clic en **[Agregar pregunta]** para abrir el modal **Agregar pregunta**.\n\n- Selecciona las preguntas con casillas de verificación. Puedes seleccionar varias.\n\n- Las preguntas agregadas pueden reordenarse con los botones ▲▼ y eliminarse con el ícono 🗑️.\n\nDespués de ingresar todos los elementos obligatorios y configurar las preguntas, haz clic en **[Registrar]** en la parte superior derecha.",
        "Este método registra varias Evaluaciones a la vez según la plantilla de Excel.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Categor%C3%ADa%22%2C%22%22%2C%22Obligatorio%22%2C%22Descripci%C3%B3n%22%5D%2C%5B%22Item_id%22%2C%22Item%20ID%22%2C%22Obligatorio%22%2C%22Item%20ID%20del%20curr%C3%ADculo%20al%20que%20se%20conectar%C3%A1%20la%20Evaluaci%C3%B3n%22%5D%2C%5B%22assessment_order%22%2C%22Orden%20de%20la%20Evaluaci%C3%B3n%22%2C%22Obligatorio%22%2C%22Orden%20en%20que%20la%20Evaluaci%C3%B3n%20se%20clasificar%C3%A1%20dentro%20del%20curr%C3%ADculo%22%5D%2C%5B%22assessment_name%22%2C%22Nombre%20de%20la%20Evaluaci%C3%B3n%22%2C%22Obligatorio%22%2C%22Ingresa%20el%20nombre%20de%20la%20Evaluaci%C3%B3n.%22%5D%2C%5B%22assessment_thumbnail%22%2C%22Miniatura%20de%20la%20Evaluaci%C3%B3n%22%2C%22Opcional%22%2C%22Adjunta%20una%20imagen%20representativa%20de%20la%20Evaluaci%C3%B3n.%22%5D%2C%5B%22question_order%22%2C%22Orden%20de%20pregunta%22%2C%22Obligatorio%22%2C%22Ingresa%20el%20orden%20de%20la%20pregunta.%22%5D%2C%5B%22question_id%22%2C%22ID%20de%20pregunta%22%2C%22Obligatorio%22%2C%22Ingresa%20el%20ID%20de%20la%20pregunta%20que%20compondr%C3%A1%20la%20Evaluaci%C3%B3n.%22%5D%5D%7D]]\n\n[[callout:💡||**Nota:** LumiTeach Admin **no guarda automáticamente los cambios del archivo** mientras preparas datos de registro masivo.]]\n\nDespués de ingresar todos los elementos, haz clic en **[Registrar]** en la parte superior derecha."
      ],
      "cat-admin-report-management": [
        "- Puedes revisar el contenido reportado entre los contenidos publicados en el menú Explore del servicio para usuarios.\n\n- En la parte superior, también puedes consultar el estado de **total de reportes**, **recibidos**, **rechazados** y **acción completada**.\n\n- Haz clic en el botón de información detallada de la lista para ir a la pantalla de detalles del contenido reportado.\n\n[[callout:✅||El estado de un reporte se divide en 3 tipos.\n- **Recibido**: el reporte fue recibido y necesita revisión\n- **Rechazado**: el reporte fue rechazado y el contenido sigue visible\n- **Desactivado**: después de revisar el reporte, el contenido fue ocultado]]",
        "- En la pantalla de detalles, revisa el registrante que publicó el contenido reportado, la fecha de registro, la materia y el grado.\n\n- Haz clic en **[Vista previa]** para revisar los detalles del contenido en formato de imagen.",
        "- Si el equipo de operaciones no está de acuerdo con el reporte o considera que el contenido publicado es adecuado, procesa el reporte como **Rechazado**. El contenido seguirá publicado.\n\n- Haz clic en **[Rechazar]** en la parte superior derecha de la pantalla de detalles.\n\n- Cuando se rechaza un reporte, el contenido continúa visible para los usuarios y el reportante recibe el resultado por correo electrónico.",
        "- Si el equipo de operaciones considera que el contenido no debe permanecer público, procésalo como **Desactivado**. El contenido desactivado no se mostrará en el menú Explore.\n\n- Haz clic en **[Acción completada]** en la parte superior derecha de la pantalla de detalles.\n\n- Selecciona el motivo para ocultar el contenido.\n\n- Al completar la acción, el contenido se oculta inmediatamente del servicio para usuarios, y el reportante y el publicador del contenido reciben el resultado por correo electrónico.",
        "**1. Contenido inapropiado**\n\n- Incluye insultos o lenguaje vulgar\n\n- Incluye contenido sexualmente explícito\n\n- Incluye contenido de odio o violencia\n\n- Incluye elementos discriminatorios\n\n**2. Contenido publicitario o promocional**\n\n- Incluye contenido con fines promocionales\n\n- Inserta enlaces comerciales\n\n**3. Contenido que infringe derechos de autor**\n\n- Carga no autorizada de materiales didácticos\n\n- Uso no autorizado de imágenes o videos\n\n- Copia de materiales de aprendizaje de otras personas\n\n**4. Contenido que expone información personal**\n\n- Publica información sensible como número de teléfono, correo electrónico, dirección, número de identificación, etc.\n\n**5. Otros motivos**\n\n- Contenido que no corresponde claramente a los criterios anteriores, pero contradice los principios de operación del servicio"
      ],
      "cat-admin-inquiry": [
        "- Haz clic en **[Registrar consulta]**.\n\n- Ingresa el título, la categoría y el contenido de la consulta, y regístrala.\n\n- En categoría, selecciona el elemento que corresponda al contenido de la consulta. Elegir la categoría correcta ayuda a recibir una respuesta más rápida.\n\n- Las consultas registradas se pueden revisar en la lista.\n\n[[callout:💡||Las consultas registradas no se pueden editar ni eliminar. Revisa bien el contenido antes de registrarla.]]",
        "- Cuando un administrador de la sede registra una respuesta, el estado de la consulta cambia a **[Completado]**.\n\n- Haz clic en una consulta con estado Completado para revisar la respuesta.\n\n[[image:admin-inquiry/01.png|Ejemplo de pantalla]]"
      ],
      "cat-admin-affiliation-release": [
        "- Haz clic en **Perfil > Configuración**.\n\n- Haz clic en **[Baja de afiliación]** a la derecha de la información de la empresa afiliada en Información básica.\n\n[[image:admin-affiliation-release/01.png|Ejemplo de pantalla]]\n\n- Al dar de baja la afiliación, esta cuenta ya no podrá consultar los datos de la empresa y deberá completar nuevamente la verificación de institución.\n\n[[callout:💡||Si deseas suspender el uso de una cuenta de administrador, solicita ayuda al administrador de la institución o escribe a service@lumiteach.ai.]]"
      ],
      "cat-admin-ai-credit": [
        "### 1. Funciones y herramientas de IA\n\nEn la plataforma LumiTeach puedes usar funciones y herramientas de IA mientras creas y utilizas materiales docentes. Las funciones de IA ayudan a producir, ajustar y usar rápidamente materiales de enseñanza y aprendizaje en Lecciones o Tareas.\n\n[[table:%7B%22rows%22%3A%5B%5B%22D%C3%B3nde%20se%20usa%22%2C%22Funciones%20proporcionadas%22%5D%2C%5B%22%2A%2AEdit%20Lesson%2A%2A%22%2C%22Rewrite%2C%20AI%20Make%22%5D%2C%5B%22%2A%2AStart%20teaching%2A%2A%22%2C%22Brainstorming%20%28Wordcloud%2C%20Classification%2C%20Mindmap%29%22%5D%2C%5B%22%2A%2AAdmin%2A%2A%22%2C%22Etiquetado%20de%20curr%C3%ADculo%2C%20etiquetado%20de%20metadatos%20de%20contenido%2C%20AI%20Make%22%5D%5D%7D]]\n\n### 1-1. ¿Qué es Crédito de IA?\n\nCrédito de IA se usa para ejecutar tareas de IA en toda la plataforma LumiTeach.\n\n- El descuento se basa en **1 crédito = 1 token (unidad de procesamiento LLM)**.\n\n- Según el plan, se otorga automáticamente cada mes una cantidad determinada de **créditos básicos**.\n\n- Si los créditos son insuficientes, puedes **comprar un paquete de créditos adicional** o **solicitar créditos adicionales** al administrador de tu institución.",
        "### 2. Estructura de créditos de un vistazo\n\nLos créditos de LumiTeach se operan por separado en dos tipos según quién los usa.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Categor%C3%ADa%22%2C%22Cr%C3%A9dito%20Admin%20%28Administrador%29%22%2C%22Cr%C3%A9dito%20del%20servicio%20%28Docente%29%22%5D%2C%5B%22%2A%2AUsuario%2A%2A%22%2C%22Administradores%20de%20instituciones%2C%20empresas%20o%20agencias%22%2C%22Cuentas%20individuales%20de%20docentes%22%5D%2C%5B%22%2A%2AM%C3%A9todo%20de%20otorgamiento%2A%2A%22%2C%22Otorgado%20en%20bloque%20en%20la%20cantidad%20acordada%20al%20momento%20del%20contrato%22%2C%22Otorgamiento%20autom%C3%A1tico%20mensual%2C%20reinicio%20mensual%22%5D%2C%5B%22%2A%2AUnidad%20de%20gesti%C3%B3n%2A%2A%22%2C%22Unidad%20organizacional%22%2C%22Unidad%20de%20cuenta%20individual%22%5D%2C%5B%22%2A%2AUso%2A%2A%22%2C%22Funciones%20de%20IA%20dentro%20de%20Admin%22%2C%22Funciones%20de%20IA%20dentro%20del%20servicio%20LumiTeach%22%5D%2C%5B%22%2A%2ATransferencia%20a%20docentes%2A%2A%22%2C%22Puede%20compartirse%20y%20transferirse%20a%20docentes%20afiliados%22%2C%22No%20puede%20compartirse%20ni%20transferirse%20entre%20docentes%22%5D%5D%7D]]\n\n[[callout:💡||**El valor de 1 crédito es el mismo.** Admin y el servicio usan el mismo precio y estándar de conversión de tokens por 1 crédito.]]\n\n### 3. Criterios de descuento de créditos por función de IA\n\nLos créditos se descuentan por función según el uso real de tokens. La tabla siguiente muestra el **descuento promedio aproximado por uso**. El descuento real por uso puede variar según la cantidad de datos procesados.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Funci%C3%B3n%20de%20IA%22%2C%22Detalle%22%2C%22Descuento%20promedio%20por%20uso%22%2C%22Plan%20disponible%22%5D%2C%5B%22%2A%2AAI%20Make%2A%2A%20%28generaci%C3%B3n%20de%20Actividades%29%22%2C%22Carga%20de%20texto%22%2C%22100%20cr%C3%A9ditos%22%2C%22Free%20o%20superior%22%5D%2C%5B%22%22%2C%22Carga%20de%20texto%20%2B%20imagen%22%2C%22100%20cr%C3%A9ditos%22%2C%22Free%20o%20superior%22%5D%2C%5B%22%22%2C%22Carga%20de%20video%22%2C%22150%20cr%C3%A9ditos%22%2C%22Free%20o%20superior%22%5D%2C%5B%22%2A%2ATablero%20de%20brainstorming%2A%2A%22%2C%22Wordcloud%22%2C%223%20cr%C3%A9ditos%22%2C%22Free%20o%20superior%22%5D%2C%5B%22%22%2C%22Classification%22%2C%223%20cr%C3%A9ditos%22%2C%22Free%20o%20superior%22%5D%2C%5B%22%22%2C%22Mindmap%22%2C%225%20cr%C3%A9ditos%22%2C%22Free%20o%20superior%22%5D%2C%5B%22%2A%2ARewrite%2A%2A%20%28correcci%C3%B3n%20de%20texto%29%22%2C%22-%22%2C%221%20cr%C3%A9dito%22%2C%22Free%20o%20superior%22%5D%2C%5B%22%2A%2AAuto-Tagging%2A%2A%20%28administrador%29%22%2C%22Etiquetado%20de%20curr%C3%ADculo%22%2C%2210%20cr%C3%A9ditos%22%2C%22Pro%20o%20superior%22%5D%2C%5B%22%22%2C%22Etiquetado%20de%20contenido%22%2C%2210%20cr%C3%A9ditos%22%2C%22Pro%20o%20superior%22%5D%5D%7D]]\n\n[[callout:📐||El descuento promedio por uso de AI Make se calcula con base en la generación de **10 Actividades**. Los criterios de descuento se recalculan periódicamente según los datos de operación del servicio.]]\n\n### 4. Uso y descuento de créditos\n\nPor las características de los LLM, no se puede conocer la cantidad exacta de tokens antes de la entrada. Por eso, el proceso se realiza en dos etapas: **validación previa (descuento estimado)** y **liquidación posterior (descuento real)**.\n\n### 4-1. Validación previa\n\nCuando se ejecuta una función de IA (clic en el botón), el **uso estimado de tokens** se convierte en créditos y se compara con el saldo.\n\n- Si los créditos disponibles son insuficientes, la función no se puede ejecutar.\n\n### 4-2. Liquidación posterior\n\n- Si el resultado se genera correctamente, el descuento final se basa en los **tokens realmente utilizados**.\n\n- Si una tarea de IA se **cancela a la mitad**: solo se descuentan los tokens generados hasta el momento de la cancelación.\n\n- Si ocurre un **error del sistema del motor de IA**: los créditos se restauran por completo.\n\n### 5. Orden de consumo y validez de créditos\n\nSi tienes varios tipos de créditos, se consumen en el siguiente orden.\n\n- **Créditos mensuales recurrentes**\n\n- **Créditos adicionales otorgados/comprados**\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tipo%22%2C%22Destino%22%2C%22Arrastre%22%5D%2C%5B%22Cr%C3%A9ditos%20mensuales%20recurrentes%22%2C%22Cuenta%20individual%20de%20docente%22%2C%22Disponible%22%5D%2C%5B%22Cr%C3%A9ditos%20adicionales%22%2C%22Cuenta%20individual%20de%20docente%22%2C%22Disponible%22%5D%5D%7D]]",
        "### 6. Guía del administrador (operación de créditos de la organización)\n\n> Esta sección corresponde a **administradores superiores** (admins de agencias, empresas, instituciones y socios de contenido).\n\n### 6-1. Momento de otorgamiento de Créditos Admin\n\n- Se otorgan en bloque por la cantidad acordada al **momento del contrato**.\n\n- Si se necesitan créditos adicionales, se debe firmar un **contrato adicional separado**.\n\n- La fecha de referencia se establece automáticamente como la **fecha de inicio del contrato** de la empresa afiliada.\n\n### 6-2. Política de otorgamiento de créditos recurrentes para docentes\n\n- **Fecha de otorgamiento**: se otorgan automáticamente cada mes a las **00:00:00 (UTC)** en la misma fecha, con base en la fecha de inicio del contrato (o fecha designada por el cliente).\n\n- **Si la fecha de referencia es fin de mes (29 / 30 / 31)**\n\n- Si la fecha de referencia no existe en ese mes, los créditos se otorgan el último día del mes. Ejemplo: si la fecha de referencia es 31, 31 de marzo → 30 de abril → 31 de mayo → 30 de junio. En febrero de un año no bisiesto, se otorgan el 28 de febrero.\n\n- **Docentes que ingresan a mitad de mes**: los créditos fijos de ese mes se otorgan inmediatamente al momento de la verificación y no se arrastran.\n\n- **Docentes con afiliación dada de baja o cuenta retirada**: el uso se suspende inmediatamente.\n\n- Reingreso después de baja de afiliación/retiro\n\n- Nueva verificación con la misma empresa: si ya se otorgaron créditos mensuales recurrentes ese mes, no se otorgan de nuevo.\n\n- Nueva verificación con otra empresa: se otorgan nuevos créditos recurrentes de la nueva afiliación.\n\n- **No se puede otorgar:** si la empresa afiliada no tiene suficientes Créditos Admin, no se otorgan los créditos mensuales recurrentes del docente.\n\n### 6-3. Procesamiento de solicitudes de créditos adicionales\n\n### El docente solicita al administrador\n\n- Cuando el docente hace clic en **[Solicitar créditos]** en su página de créditos, un administrador superior puede revisar la solicitud.\n\n- El administrador la **aprueba o rechaza** en Admin.\n\n- Al aprobarse, los créditos se descuentan inmediatamente del fondo compartido de Admin y se otorgan a la cuenta del docente.\n\n### El administrador (organización) solicita al administrador superior\n\n- No hay una función de solicitud separada en Admin. La solicitud se realiza **online/offline al administrador superior directo según la relación contractual**.\n\n- Los créditos se otorgan después de completar un contrato adicional.\n\n### 6-4. Modificar información de otorgamiento de créditos\n\n[[table:%7B%22rows%22%3A%5B%5B%22%C3%8Dtem%22%2C%22Pol%C3%ADtica%22%2C%22Nota%22%5D%2C%5B%22Otorgamiento%20adicional%20de%20Cr%C3%A9dito%20Admin%22%2C%22Otorgamiento%20inmediato%22%2C%22Se%20agrega%20al%20saldo%20existente%22%5D%2C%5B%22Otorgamiento%20adicional%20de%20cr%C3%A9ditos%20para%20docente%22%2C%22Otorgamiento%20inmediato%22%2C%22Se%20agrega%20al%20saldo%20existente%22%5D%2C%5B%22Cambio%20de%20cantidad%20de%20cr%C3%A9ditos%20recurrentes%20del%20docente%22%2C%22Se%20aplica%20desde%20la%20pr%C3%B3xima%20fecha%20de%20otorgamiento%22%2C%22-%22%5D%5D%7D]]",
        "[[table:%7B%22rows%22%3A%5B%5B%22Categor%C3%ADa%22%2C%22Reembolso%2FCancelaci%C3%B3n%22%2C%22Al%20dar%20de%20baja%20afiliaci%C3%B3n%2Fretirar%20cuenta%22%5D%2C%5B%22Cr%C3%A9ditos%20b%C3%A1sicos%20otorgados%22%2C%22No%20disponible%22%2C%22Uso%20suspendido%20inmediatamente%22%5D%2C%5B%22Cr%C3%A9ditos%20adicionales%22%2C%22No%20disponible%22%2C%22Uso%20suspendido%20inmediatamente%22%5D%2C%5B%22Tarea%20de%20IA%20cancelada%20a%20la%20mitad%22%2C%22Los%20tokens%20usados%20hasta%20la%20cancelaci%C3%B3n%20no%20son%20reembolsables%3B%20se%20devuelve%20la%20parte%20no%20procesada%22%2C%22-%22%5D%2C%5B%22Error%20del%20sistema%22%2C%22100%25%20reembolsado%20si%20no%20se%20proporciona%20resultado%22%2C%22-%22%5D%5D%7D]]"
      ],
      "cat-admin-faq": [
        "### **P. ¿Cuál es la diferencia entre un docente y un administrador?**\n\nEl docente crea materiales de enseñanza y realiza Lecciones o Tareas en el servicio LumiTeach. El administrador realiza tareas de gestión en Admin, como gestión de currículo y contenido, y gestión de miembros. Una misma cuenta puede tener permisos de docente y de administrador. En ese caso, la verificación de institución debe completarse por separado en el servicio y en Admin.\n\n### **P. Un miembro envió una solicitud de registro. ¿Dónde puedo aprobarla?**\n\nEn el área **[Alertas principales]** de la página de inicio de Admin, puedes revisar la cantidad de registros pendientes de aprobación. En **Gestión de miembros > Lista de miembros**, haz clic en el botón **Acción (⋯)** del miembro cuyo estado sea Pendiente y aprueba o rechaza la solicitud.\n\n### **P. Si alguien solicita permisos de docente y administrador al mismo tiempo, ¿debo aprobarlos por separado?**\n\nSí. El permiso de docente y el permiso de administrador deben aprobarse o rechazarse por separado.\n\n### **P. ¿Puedo otorgar permisos antes de que el usuario se registre?**\n\nSí. Usa el botón **[Prerregistro de permisos]** en la parte superior derecha de **Gestión de miembros > Lista de miembros** para prerregistrar la cuenta y otorgar permisos antes del registro. Una cuenta prerregistrada puede usarse inmediatamente después del registro sin una solicitud de aprobación adicional.\n\n### **P. ¿Qué ocurre si ingreso mal el correo electrónico durante el prerregistro de permisos?**\n\nSi el correo prerregistrado es diferente de la cuenta de Google usada para el registro real, la aprobación automática no se aplica y el usuario deberá enviar una solicitud de aprobación de registro separada. Al prerregistrar permisos, ingresa exactamente el mismo correo que la cuenta de Google.\n\n### **P. ¿Cómo debo gestionar la cuenta de un empleado que dejó la organización?**\n\nEn Gestión de miembros, libera la afiliación de ese miembro. Un docente cuya afiliación fue liberada pasa a ser miembro gratuito de LumiTeach. Un administrador cuya afiliación fue liberada ya no puede acceder a Admin.\n\n### **P. ¿Qué debo hacer si quiero desactivar permanentemente una cuenta de administrador?**\n\nUn administrador superior o un administrador par puede configurar la cuenta de administrador como **Suspender uso** en Gestión de miembros. Un administrador suspendido no puede usar Admin. (Las cuentas de docente usan la baja de cuenta, y el propio docente también puede darse de baja directamente.)\n\n### **P. ¿Cuál es la diferencia entre liberar afiliación y baja/suspensión?**\n\nLiberar afiliación solo termina la relación con esa organización. El administrador puede solicitar verificación de institución para otra empresa con la misma cuenta. El docente pasa a ser miembro gratuito y puede seguir usando el servicio, y también puede solicitar verificación bajo otra empresa. La baja o suspensión elimina o desactiva la cuenta en sí; por eso, los docentes/administradores dados de baja o suspendidos ya no pueden usar el servicio LumiTeach ni Admin.\n\n### P. Si quedan créditos recurrentes mensuales, ¿se transfieren al mes siguiente?\n\nSí. El saldo restante de los créditos recurrentes mensuales puede transferirse y usarse el mes siguiente.\n\n### P. ¿Qué debo hacer si los créditos son insuficientes?\n\n- **Docente**: En la página Mi Crédito, haz clic en **[Solicitar créditos]** para pedir un otorgamiento adicional al administrador afiliado.\n\n- **Administrador**: Si el fondo compartido es insuficiente, solicita un **contrato adicional** al administrador superior directo.\n\n### P. Si detengo una tarea de IA a mitad del proceso, ¿se reembolsan los créditos?\n\nLos tokens de los resultados **generados efectivamente hasta el momento de la cancelación no se reembolsan.**\n\n### P. ¿Qué sucede si la IA presenta un error?\n\nSi no se proporciona ningún resultado por un error del sistema del motor de IA, los **créditos reservados se restauran por completo.**\n\n### P. ¿Qué pasa con los créditos restantes después de la baja?\n\n- **Baja de docente / liberación de afiliación**: El uso se detiene inmediatamente, y los créditos adicionales restantes se devuelven al fondo compartido de Admin.\n\n- **Nueva verificación con la misma empresa**: Si ya hubo un otorgamiento de créditos durante el mes actual, no se otorgan de nuevo.\n\n- **Nueva verificación con otra empresa**: Se otorgan nuevos créditos de la nueva afiliación.\n\n### P. ¿Dónde puedo ver el historial de uso de créditos?\n\n- **Docente**: En la página Gestión de Mi Crédito, puedes revisar el saldo restante y el historial reciente de uso.\n\n- **Administrador**: 1. Revisa el historial reciente en **Perfil > Información básica > Crédito de IA**. 2. Revisa el historial reciente en la pestaña **Gestión de afiliación > Información de afiliación > Crédito de IA**.\n\n### **P. Un miembro solicitó ayuda porque su Crédito de IA es insuficiente. ¿Cómo debo procesarlo?**\n\nCuando un docente solicita créditos adicionales, aparece una alerta en la lista de gestión de miembros. Haz clic en **[Verificar solicitud]** para revisar los detalles, selecciona la cantidad de créditos que se otorgarán y aprueba. La cantidad se descuenta de los créditos compartidos de la organización y se otorga inmediatamente. Ten cuidado, porque los créditos otorgados no pueden recuperarse."
      ]
    },
    "articleIntros": {
      "cat-admin-dashboard": "[[callout:🕑||**Hora de agregación del panel:** los datos del panel se agregan **al inicio de cada hora**.]]",
      "cat-admin-member-management": "> Registra a los miembros que usarán el servicio LumiTeach y Admin. Puedes controlar los permisos de los miembros y gestionar Crédito de IA.",
      "cat-admin-approval-permission": "> Se requiere verificación de la empresa/institución afiliada para usar LumiTeach Admin y el servicio. Los administradores pueden aprobar o rechazar solicitudes de registro en Admin, o prerregistrar cuentas de miembros con anticipación.",
      "cat-admin-standard-management": "> Este es el primer paso para gestionar el currículo y el contenido en LumiTeach Admin.",
      "cat-admin-curriculum-management": "> Puedes estructurar el currículo y los contenidos propios de tu institución o empresa para el sistema LumiTeach. Ofrece contenido optimizado a los usuarios mediante un currículo personalizado.",
      "cat-admin-lesson-activity": "> El menú **Gestión de lecciones** se utiliza para registrar y gestionar Lecciones y Actividades alineadas con el currículo educativo. Puedes revisar y editar la información de vinculación al currículo, palabras clave de conceptos y metadatos de las Lecciones registradas.",
      "cat-admin-lesson-bulk-upload": "> El registro masivo de Lecciones permite registrar varias Lecciones y Actividades a la vez con un solo archivo Excel. Es más rápido que ingresar Lecciones una por una.",
      "cat-admin-lesson-ai-make": "> Con AI Make, la IA crea Lecciones automáticamente al subir materiales de origen, como archivos PDF o PPT. Puedes revisar las Lecciones generadas en la pestaña **[Revisión]**, editarlas y aprobar su publicación.",
      "cat-admin-lesson-recommendation": "> Cura Lecciones registradas según la estructura del currículo. El contenido registrado en Gestión de recomendaciones aparece en la pantalla de inicio del servicio LumiTeach para mejorar el acceso.",
      "cat-admin-assessment-question": "> Crea y gestiona las preguntas que componen una Evaluación.",
      "cat-admin-assessment-paper": "> Puedes agrupar preguntas alineadas con el currículo para registrar y gestionar Evaluaciones estructuradas. Los docentes pueden asignar estas Evaluaciones a los estudiantes como tareas o pruebas dentro del servicio LumiTeach.",
      "cat-admin-report-management": "> Revisa el contenido reportado en el servicio LumiTeach y toma la acción correspondiente.",
      "cat-admin-inquiry": "> Si tienes un problema o una pregunta al usar el servicio LumiTeach o Admin, usa el menú Consulta 1:1.",
      "cat-admin-affiliation-release": "> Si necesitas dejar tu institución actual por traslado, renuncia u otro motivo, sigue el proceso de baja de afiliación.",
      "cat-admin-ai-credit": "> Las funciones de IA de LumiTeach operan con un modelo **basado en créditos por uso**. Este documento explica cómo funciona el Crédito de IA, cuánto se descuenta por función y qué hacer cuando los créditos son insuficientes."
    }
  },
  "ja": {
    "manualTree": {
      "cat-admin-login-signup": {
        "title": "ログインと登録申請",
        "description": "GoogleアカウントでLumiTeach Adminにログインし、初回アクセス時に管理者権限を申請してGoogle OTP認証を設定する方法です。"
      },
      "cat-admin-dashboard": {
        "title": "ホームダッシュボード",
        "description": "Adminのホームメニューでは、LumiTeachのユーザーとコンテンツに関するデータを集計して表示します。主要指標をもとにLumiTeachをより活用してください。"
      },
      "cat-admin-member-management": {
        "title": "会員情報管理",
        "description": "LumiTeachサービスとAdminを利用する会員を登録します。会員ごとの権限を制御し、AIクレジットを管理できます。"
      },
      "cat-admin-approval-permission": {
        "title": "登録承認と権限事前登録",
        "description": "LumiTeach Adminとサービスを利用するには所属機関の認証が必要です。管理者はAdminで登録申請を承認・却下したり、所属会員アカウントを事前登録したりできます。"
      },
      "cat-admin-standard-management": {
        "title": "基準管理",
        "description": "LumiTeach Adminでカリキュラムとコンテンツを管理するための最初のステップです。"
      },
      "cat-admin-curriculum-management": {
        "title": "カリキュラム管理",
        "description": "機関や企業独自のカリキュラムとコンテンツをLumiTeachシステムに合わせて構造化できます。カスタマイズされたカリキュラムを通じて、ユーザーに最適なコンテンツを提供してください。"
      },
      "cat-admin-lesson-activity": {
        "title": "授業管理：授業・アクティビティ管理",
        "description": "授業管理メニューでは、教育カリキュラムに沿った授業とアクティビティを登録・管理できます。登録された授業のカリキュラム連携情報、概念キーワード、メタデータを確認・修正できます。"
      },
      "cat-admin-lesson-bulk-upload": {
        "title": "授業管理：一括登録",
        "description": "授業一括登録は、1つのExcelファイルで複数の授業とアクティビティをまとめて登録する機能です。授業を1つずつ入力するよりも素早く大量のコンテンツを登録できます。"
      },
      "cat-admin-lesson-ai-make": {
        "title": "授業管理：AI Makeによる授業生成と確認",
        "description": "AI Makeを使うと、PDFやPPTなどの元資料をアップロードするだけで、AIが自動で授業を生成します。生成された授業は「確認」タブで確認し、内容を修正して承認・公開できます。"
      },
      "cat-admin-lesson-recommendation": {
        "title": "授業管理：おすすめ管理",
        "description": "カリキュラム構造に合わせて登録済みの授業をキュレーションできます。おすすめ管理に登録されたコンテンツはLumiTeachサービスのホーム画面に表示され、ユーザーがアクセスしやすくなります。"
      },
      "cat-admin-assessment-question": {
        "title": "評価管理：問題管理と登録",
        "description": "評価を構成する問題を作成・管理できます。"
      },
      "cat-admin-assessment-paper": {
        "title": "評価管理：テスト用紙管理と登録",
        "description": "カリキュラムに沿った問題をまとめ、体系的なテスト用紙を登録・管理できます。構成したテスト用紙は、LumiTeachサービス内で教師が学生に課題やテストとして出題できます。"
      },
      "cat-admin-report-management": {
        "title": "通報管理",
        "description": "LumiTeachサービスで通報されたコンテンツを確認し、適切な対応を行います。"
      },
      "cat-admin-inquiry": {
        "title": "1:1お問い合わせ",
        "description": "LumiTeachサービスまたはAdminの利用中に問題や質問がある場合は、1:1お問い合わせメニューを利用してください。"
      },
      "cat-admin-affiliation-release": {
        "title": "所属解除",
        "description": "異動や退職などの理由で現在の所属を解除する必要がある場合は、所属解除手順に従ってください。"
      },
      "cat-admin-ai-credit": {
        "title": "AIクレジット",
        "description": "LumiTeachのAI機能はクレジット従量制で運用されます。この文書では、AIクレジットの仕組み、各機能での消費量、不足時の対応を案内します。"
      },
      "cat-admin-faq": {
        "title": "よくある質問",
        "description": "よくある質問メニューで確認すべき主な機能と処理手順を案内します。"
      }
    },
    "articles": {
      "cat-admin-login-signup": {
        "category": "LumiTeach Admin Guide",
        "title": "ログインと登録申請",
        "desc": "GoogleアカウントでLumiTeach Adminにログインし、初回アクセス時に管理者権限を申請してGoogle OTP認証を設定する方法です。",
        "note": "上位管理者が事前に権限を承認している場合は、権限申請手順なしでAdminに直接アクセスできます。",
        "sections": [
          "ログインする",
          "登録申請",
          "Google OTP認証"
        ]
      },
      "cat-admin-dashboard": {
        "category": "LumiTeach Admin Guide",
        "title": "ホームダッシュボード",
        "desc": "Adminのホームメニューでは、LumiTeachのユーザーとコンテンツに関するデータを集計して表示します。主要指標をもとにLumiTeachをより活用してください。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "主なアラート",
          "ユーザーインサイト",
          "サービスインサイト",
          "1:1お問い合わせ"
        ]
      },
      "cat-admin-member-management": {
        "category": "LumiTeach Admin Guide",
        "title": "会員情報管理",
        "desc": "LumiTeachサービスとAdminを利用する会員を登録します。会員ごとの権限を制御し、AIクレジットを管理できます。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "会員タイプ",
          "会員管理",
          "会員退会 / 利用停止",
          "所属解除",
          "AIクレジット状況確認とクレジット付与"
        ]
      },
      "cat-admin-approval-permission": {
        "category": "LumiTeach Admin Guide",
        "title": "登録承認と権限事前登録",
        "desc": "LumiTeach Adminとサービスを利用するには所属機関の認証が必要です。管理者はAdminで登録申請を承認・却下したり、所属会員アカウントを事前登録したりできます。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "登録承認申請を管理する",
          "権限を事前登録する"
        ]
      },
      "cat-admin-standard-management": {
        "category": "LumiTeach Admin Guide",
        "title": "基準管理",
        "desc": "LumiTeach Adminでカリキュラムとコンテンツを管理するための最初のステップです。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "基準とは？",
          "学年設定",
          "科目設定",
          "アイテム設定"
        ]
      },
      "cat-admin-curriculum-management": {
        "category": "LumiTeach Admin Guide",
        "title": "カリキュラム管理",
        "desc": "機関や企業独自のカリキュラムとコンテンツをLumiTeachシステムに合わせて構造化できます。カスタマイズされたカリキュラムを通じて、ユーザーに最適なコンテンツを提供してください。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "カリキュラムはどこで使われますか？",
          "カリキュラム登録",
          "カリキュラムAI分類",
          "カリキュラム管理"
        ]
      },
      "cat-admin-lesson-activity": {
        "category": "LumiTeach Admin Guide",
        "title": "授業管理：授業・アクティビティ管理",
        "desc": "授業管理メニューでは、教育カリキュラムに沿った授業とアクティビティを登録・管理できます。登録された授業のカリキュラム連携情報、概念キーワード、メタデータを確認・修正できます。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "授業一覧を確認",
          "授業詳細情報を確認",
          "授業編集",
          "授業登録"
        ]
      },
      "cat-admin-lesson-bulk-upload": {
        "category": "LumiTeach Admin Guide",
        "title": "授業管理：一括登録",
        "desc": "授業一括登録は、1つのExcelファイルで複数の授業とアクティビティをまとめて登録する機能です。授業を1つずつ入力するよりも素早く大量のコンテンツを登録できます。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "一括登録方法"
        ]
      },
      "cat-admin-lesson-ai-make": {
        "category": "LumiTeach Admin Guide",
        "title": "授業管理：AI Makeによる授業生成と確認",
        "desc": "AI Makeを使うと、PDFやPPTなどの元資料をアップロードするだけで、AIが自動で授業を生成します。生成された授業は「確認」タブで確認し、内容を修正して承認・公開できます。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "AI Makeで授業を作成する方法",
          "授業の確認と承認"
        ]
      },
      "cat-admin-lesson-recommendation": {
        "category": "LumiTeach Admin Guide",
        "title": "授業管理：おすすめ管理",
        "desc": "カリキュラム構造に合わせて登録済みの授業をキュレーションできます。おすすめ管理に登録されたコンテンツはLumiTeachサービスのホーム画面に表示され、ユーザーがアクセスしやすくなります。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "おすすめコンテンツ管理",
          "おすすめ登録：トピック1",
          "おすすめ登録：トピック2"
        ]
      },
      "cat-admin-assessment-question": {
        "category": "LumiTeach Admin Guide",
        "title": "評価管理：問題管理と登録",
        "desc": "評価を構成する問題を作成・管理できます。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "問題管理",
          "問題登録",
          "問題登録：個別登録",
          "問題登録：一括登録"
        ]
      },
      "cat-admin-assessment-paper": {
        "category": "LumiTeach Admin Guide",
        "title": "評価管理：テスト用紙管理と登録",
        "desc": "カリキュラムに沿った問題をまとめ、体系的なテスト用紙を登録・管理できます。構成したテスト用紙は、LumiTeachサービス内で教師が学生に課題やテストとして出題できます。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "テスト用紙管理",
          "テスト用紙登録：個別登録",
          "テスト用紙登録：一括登録"
        ]
      },
      "cat-admin-report-management": {
        "category": "LumiTeach Admin Guide",
        "title": "通報管理",
        "desc": "LumiTeachサービスで通報されたコンテンツを確認し、適切な対応を行います。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "通報コンテンツ一覧",
          "通報されたコンテンツを確認する",
          "通報を却下する",
          "通報されたコンテンツを非アクティブ化する",
          "🚨 コンテンツ通報案内と基準"
        ]
      },
      "cat-admin-inquiry": {
        "category": "LumiTeach Admin Guide",
        "title": "1:1お問い合わせ",
        "desc": "LumiTeachサービスまたはAdminの利用中に問題や質問がある場合は、1:1お問い合わせメニューを利用してください。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "問い合わせる",
          "回答を確認する"
        ]
      },
      "cat-admin-affiliation-release": {
        "category": "LumiTeach Admin Guide",
        "title": "所属解除",
        "desc": "異動や退職などの理由で現在の所属を解除する必要がある場合は、所属解除手順に従ってください。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "プロフィールで所属を解除する"
        ]
      },
      "cat-admin-ai-credit": {
        "category": "LumiTeach Admin Guide",
        "title": "AIクレジット",
        "desc": "LumiTeachのAI機能はクレジット従量制で運用されます。この文書では、AIクレジットの仕組み、各機能での消費量、不足時の対応を案内します。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "LumiTeach AIについて",
          "AIクレジットの付与と使用",
          "AIクレジット管理",
          "クレジット返金・キャンセルポリシー"
        ]
      },
      "cat-admin-faq": {
        "category": "LumiTeach Admin Guide",
        "title": "よくある質問",
        "desc": "よくある質問メニューで確認すべき主な機能と処理手順を案内します。",
        "note": "Admin画面で実際に使用されるメニュー名とボタン名を基準に確認してください。",
        "sections": [
          "概要"
        ]
      }
    },
    "articleBodies": {
      "cat-admin-login-signup": [
        "Adminの最初の画面で **Googleで続行** ボタンをクリックします。\n\n[[image:admin-login-signup/01.png|Admin最初の画面のGoogleで続行ボタン]]\n\nGoogleログイン画面に移動したら、Googleアカウントでログインします。\n\n[[image:admin-login-signup/02.png|Googleアカウントログイン画面]]",
        "初めてAdminにログインする場合は、Adminへのアクセス権限を申請する必要があります。**管理者権限承認申請**ポップアップで、名前と会社/機関情報を入力します。\n\n[[image:admin-login-signup/03.png|管理者権限承認申請ポップアップ]]\n\n- **名前**：実名を入力します。\n- **メール**：Googleアカウントのメールアドレスが自動で表示されます。\n- **会社/機関検索**：所属会社または機関名を入力して検索します。\n\n所属会社名は、システムに登録されている会社名と完全に一致している必要があります。会社名が一致せず申請が難しい場合は、上位管理者にお問い合わせください。\n\n権限申請後、上位管理者の承認が完了するとAdminにアクセスできます。\n\n[[callout:💡|上位管理者による事前承認|上位管理者が権限を**事前に**承認している場合は、権限申請手順なしでAdminに直接アクセスできます。]]",
        "LumiTeach Adminでは、セキュリティのためGoogle OTPによる二段階認証を使用します。\n\n### 初回ログイン時 — OTP設定\n\nOTPは初回ログイン時に1回だけ設定すればよいです。以降のログイン時は、アプリに表示される6桁の認証コードを入力します。\n\n[[image:admin-login-signup/04.png|Google OTP設定および認証画面]]\n\n- App StoreまたはPlayストアから **Google Authenticator** アプリをインストールします。\n- **Google Authenticator** アプリを開き、下部の **+** ボタンをタップします。\n- **QRコードをスキャン** を選択し、Adminログイン画面に表示されたQRコードをスキャンします。\n- アプリに表示された6桁の認証コードを入力すると設定が完了します。\n\n### 以降のログイン時 — OTP認証\n\n- Googleアカウントでログインします。\n- **Google Authenticator** アプリを開き、表示された6桁の認証コードを入力します。\n\n[[callout:✅|セキュリティのため、以下を確認してください。|- ログイン後60分間操作がない場合、自動的にログアウトされます。\\n- 1つのアカウントで複数端末から同時ログインすることはできません。\\n- 長時間席を離れる場合は、必ずログアウトしてください。\\n- OTP認証コードを5回以上誤って入力すると、5分間ログインが制限されます。]]"
      ],
      "cat-admin-dashboard": [
        "- すばやく確認して対応が必要な主なアラートを表示します。各項目をクリックすると詳細を確認できます。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E9%A0%85%E7%9B%AE%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%E7%99%BB%E9%8C%B2%E6%89%BF%E8%AA%8D%E5%BE%85%E3%81%A1%E4%BC%9A%E5%93%A1%E6%95%B0%22%2C%22LumiTeach%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E5%88%A9%E7%94%A8%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB%E6%89%80%E5%B1%9E%E8%AA%8D%E8%A8%BC%E3%82%92%E7%94%B3%E8%AB%8B%E3%81%97%E3%81%9F%E4%BC%9A%E5%93%A1%E3%80%81%E3%81%8A%E3%82%88%E3%81%B3LumiTeach%20Admin%E3%81%B8%E3%81%AE%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB%E6%89%80%E5%B1%9E%E8%AA%8D%E8%A8%BC%E3%82%92%E7%94%B3%E8%AB%8B%E3%81%97%E3%81%9F%E7%AE%A1%E7%90%86%E8%80%85%22%5D%2C%5B%22%E9%80%9A%E5%A0%B1%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E6%95%B0%22%2C%22LumiTeach%20Explore%E3%81%AB%E6%8E%B2%E8%BC%89%E3%81%95%E3%82%8C%E3%81%9F%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%AE%E3%81%86%E3%81%A1%E3%80%81%E9%80%9A%E5%A0%B1%E3%82%92%E5%8F%97%E3%81%91%E4%BB%98%E3%81%91%E3%81%9F%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%22%5D%2C%5B%22%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E6%AE%8B%E9%87%8F%E4%B8%8D%E8%B6%B3%2F%E6%AE%8B%E9%87%8F%E3%82%8F%E3%81%9A%E3%81%8B%E3%81%AE%E4%BC%9A%E5%93%A1%E6%95%B0%22%2C%22AI%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%92%E3%81%99%E3%81%B9%E3%81%A6%E4%BD%BF%E3%81%84%E5%88%87%E3%81%A3%E3%81%9F%E3%80%81%E3%81%BE%E3%81%9F%E3%81%AF%E6%AE%8B%E9%87%8F%E3%81%8C10%25%E6%9C%AA%E6%BA%80%E3%81%AE%E6%89%80%E5%B1%9E%E4%BC%9A%E5%93%A1%22%5D%5D%7D]]",
        "- ユーザーインサイト領域では、総会員数と訪問者統計を表示します。\n\n- 全体会員数（累計）、新規会員数、退会会員数\n\n> 日別、月別、年別の会員推移を確認してください。\n\n- LumiTeachユーザー、Adminの訪問者数\n\n> ダッシュボード表示時点で最新集計されたデータが表示されます。",
        "- 所属会員のLumiTeachサービス活用状況を確認できます。\n\n- インタラクション、対戦モード、プレゼンテーションモードで授業を開始した回数\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E3%82%BF%E3%82%A4%E3%83%97%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%E8%87%AA%E4%B8%BB%E5%AD%A6%E7%BF%92%22%2C%22%E6%8E%88%E6%A5%AD%E3%82%92%E5%80%8B%E5%88%A5%E3%80%81%E3%83%81%E3%83%A3%E3%83%AC%E3%83%B3%E3%82%B8%E3%80%81%E3%83%95%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%82%AB%E3%83%BC%E3%83%89%E5%BD%A2%E5%BC%8F%E3%81%AE%E8%AA%B2%E9%A1%8C%E3%81%A8%E3%81%97%E3%81%A6%E7%99%BA%E8%A1%8C%E3%81%97%E3%81%9F%E5%9B%9E%E6%95%B0%22%5D%2C%5B%22%E8%A9%95%E4%BE%A1%22%2C%22%E8%A9%95%E4%BE%A1%E3%82%92%E8%AA%B2%E9%A1%8C%E3%81%A8%E3%81%97%E3%81%A6%E7%99%BA%E8%A1%8C%E3%81%97%E3%81%9F%E5%9B%9E%E6%95%B0%22%5D%5D%7D]]\n\n- 所属会員が授業を作成して保存した回数です。\n\n- 授業1件あたりの平均実施時間\n\n> 📌 **集計基準 - インタラクション・対戦モード**：学生が1名以上参加した授業のみ平均時間に含まれます。- **プレゼンテーション**：Start LessonからEnd Lessonまでの時間が平均に含まれます。",
        "- 最近受け付けた1:1お問い合わせ履歴を確認できます。"
      ],
      "cat-admin-member-management": [
        "[[table:%7B%22rows%22%3A%5B%5B%22%22%2C%22%2A%2A%E6%95%99%E5%B8%AB%2A%2A%22%2C%22%2A%2A%E7%AE%A1%E7%90%86%E8%80%85%2A%2A%22%5D%2C%5B%22%E5%88%A9%E7%94%A8%E5%AF%BE%E8%B1%A1%22%2C%22LumiTeach%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E5%88%A9%E7%94%A8%22%2C%22LumiTeach%20Admin%E3%82%92%E5%88%A9%E7%94%A8%22%5D%2C%5B%22%E4%B8%BB%E3%81%AA%E5%BD%B9%E5%89%B2%22%2C%22%E6%95%99%E6%9D%90%E3%82%92%E4%BD%9C%E6%88%90%E3%81%97%E3%80%81%E6%8E%88%E6%A5%AD%2F%E8%AA%B2%E9%A1%8C%E3%82%92%E5%AE%9F%E6%96%BD%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E3%81%8A%E3%82%88%E3%81%B3%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E7%AE%A1%E7%90%86%E3%80%81%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E7%AE%A1%E7%90%86%E3%81%AA%E3%81%A9%E3%81%AE%E7%AE%A1%E7%90%86%E6%A5%AD%E5%8B%99%E3%82%92%E5%AE%9F%E8%A1%8C%22%5D%5D%7D]]\n\nLumiTeachのプレミアムサービスおよびAdminを利用するには、**所属機関の認証**が必要です。\n\n[[callout:💡||教師と管理者の両方の役割を担う場合は、サービスとAdminでそれぞれ別途、所属機関の認証を行う必要があります。]]",
        "メンバー一覧を確認して管理できます。特定のメンバーの詳細情報を確認するには、**操作 (⋯)** > **[メンバー情報詳細]** をクリックします。\n\n**教師メンバー**に対して実行できる操作は次のとおりです。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E6%93%8D%E4%BD%9C%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%E7%99%BB%E9%8C%B2%E6%89%BF%E8%AA%8D%2F%E5%8D%B4%E4%B8%8B%22%2C%22%E6%89%80%E5%B1%9E%E6%A9%9F%E9%96%A2%E3%81%AE%E8%AA%8D%E8%A8%BC%E3%82%92%E7%94%B3%E8%AB%8B%E3%81%97%E3%81%9F%E6%95%99%E5%B8%AB%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AE%E7%99%BB%E9%8C%B2%E3%82%92%E6%89%BF%E8%AA%8D%E3%81%BE%E3%81%9F%E3%81%AF%E5%8D%B4%E4%B8%8B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22%E9%80%80%E4%BC%9A%22%2C%22%E6%95%99%E5%B8%AB%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%82%92LumiTeach%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%8B%E3%82%89%E9%80%80%E4%BC%9A%E5%87%A6%E7%90%86%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E6%83%85%E5%A0%B1%E8%A9%B3%E7%B4%B0%E3%81%AE%E7%A2%BA%E8%AA%8D%22%2C%22%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AE%E5%9F%BA%E6%9C%AC%E6%83%85%E5%A0%B1%E3%81%8A%E3%82%88%E3%81%B3%E6%B4%BB%E5%8B%95%E5%B1%A5%E6%AD%B4%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22%E6%89%80%E5%B1%9E%E8%A7%A3%E9%99%A4%22%2C%22%E9%80%80%E8%81%B7%E3%83%BB%E6%89%80%E5%B1%9E%E5%A4%89%E6%9B%B4%E3%81%AA%E3%81%A9%E3%81%AE%E7%90%86%E7%94%B1%E3%81%A7%E6%89%80%E5%B1%9E%E3%82%92%E8%A7%A3%E9%99%A4%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22AI%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E7%8A%B6%E6%B3%81%E3%81%AE%E7%A2%BA%E8%AA%8D%E3%81%8A%E3%82%88%E3%81%B3%E8%BF%BD%E5%8A%A0%E4%BB%98%E4%B8%8E%22%2C%22%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AE%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E6%AE%8B%E9%AB%98%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%97%E3%80%81%E8%BF%BD%E5%8A%A0%E3%81%A7%E4%BB%98%E4%B8%8E%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%5D%7D]]\n\n**管理者メンバー**に対して実行できる操作は次のとおりです。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E6%93%8D%E4%BD%9C%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%E7%99%BB%E9%8C%B2%E6%89%BF%E8%AA%8D%2F%E5%8D%B4%E4%B8%8B%22%2C%22%E6%89%80%E5%B1%9E%E6%A9%9F%E9%96%A2%E3%81%AE%E8%AA%8D%E8%A8%BC%E3%82%92%E7%94%B3%E8%AB%8B%E3%81%97%E3%81%9F%E7%AE%A1%E7%90%86%E8%80%85%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AE%E7%99%BB%E9%8C%B2%E3%82%92%E6%89%BF%E8%AA%8D%E3%81%BE%E3%81%9F%E3%81%AF%E5%8D%B4%E4%B8%8B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22%E5%88%A9%E7%94%A8%E5%81%9C%E6%AD%A2%22%2C%22%E7%AE%A1%E7%90%86%E8%80%85%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AEAdmin%E3%81%B8%E3%81%AE%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%82%92%E5%81%9C%E6%AD%A2%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E6%83%85%E5%A0%B1%E8%A9%B3%E7%B4%B0%E3%81%AE%E7%A2%BA%E8%AA%8D%22%2C%22%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AE%E5%9F%BA%E6%9C%AC%E6%83%85%E5%A0%B1%E3%81%8A%E3%82%88%E3%81%B3%E6%B4%BB%E5%8B%95%E5%B1%A5%E6%AD%B4%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22%E6%89%80%E5%B1%9E%E8%A7%A3%E9%99%A4%22%2C%22%E9%80%80%E8%81%B7%E3%83%BB%E6%89%80%E5%B1%9E%E5%A4%89%E6%9B%B4%E3%81%AA%E3%81%A9%E3%81%AE%E7%90%86%E7%94%B1%E3%81%A7%E6%89%80%E5%B1%9E%E3%82%92%E8%A7%A3%E9%99%A4%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22AI%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E7%8A%B6%E6%B3%81%E3%81%AE%E7%A2%BA%E8%AA%8D%22%2C%22%E3%83%A1%E3%83%B3%E3%83%90%E3%83%BC%E3%81%AE%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E6%AE%8B%E9%AB%98%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%5D%7D]]",
        "- 退会処理された教師メンバーはLumiTeachサービスを利用できません。\n\n- 利用停止された管理者メンバーはAdminを利用できません。\n\n[[callout:💡||教師メンバーは自分で退会できます。\\n管理者メンバーの場合は、上位管理者または同僚の管理者が利用停止を行う必要があります。]]",
        "退職・所属変更などの理由で、特定メンバーの所属を解除できます。\n\n- 所属が解除された**教師メンバー**は、LumiTeachサービスの無料メンバーに切り替わります。\n\n- 所属が解除された**管理者メンバー**は、Adminにアクセスできなくなります。",
        "AIクレジットの追加付与を申請したメンバーがいる場合、メンバー管理一覧に表示されます。**[申請を確認]** ボタンをクリックして申請内容を確認してください。\n\n**追加付与を承認**\n\n追加付与するクレジット数を選択して承認すると、所属会社の共有クレジットから該当数が差し引かれ、申請した教師アカウントに付与されます。\n\n[[callout:⚠️||一度付与されたクレジットは回収できません。付与前に数量を必ず確認してください。]]\n\n**追加付与を却下**\n\n申請内容を確認したうえで、承認が難しい場合は却下処理できます。"
      ],
      "cat-admin-approval-permission": [
        "- Adminホームの**[主なアラート]**エリアで、登録承認待ちの件数を確認します。\n\n- **メンバー管理 > メンバー一覧**に移動します。\n\n- 権限/ステータスが待機中のメンバーの**操作 (⋯)**ボタンをクリックして、承認または却下します。\n\n[[callout:✅||1つのアカウントで教師権限と管理者権限をそれぞれ申請できます。教師・管理者の権限は、それぞれ個別に承認または却下してください。]]",
        "ユーザーが登録する前に、あらかじめアカウントを登録して権限を付与できます。事前登録されたアカウントは、登録後に別途承認申請を行わず、すぐにサービスを利用できます。\n\n**メンバー管理 > メンバー一覧**右上の**[権限の事前登録]**ボタンをクリックして開始します。\n\n**一括登録**\n\n同じ所属と権限で複数のアカウントを一度に登録できます。\n\n- 登録する教師または管理者アカウントのメールアドレスを入力します。\n\n- 複数のアカウントを入力する場合は、スペース、Enter、カンマで区切ります。\n\n[[image:admin-approval-permission/01.png|画面例]]\n\n**個別登録**\n\nそれぞれ異なる所属と権限で複数のアカウントを一度に登録できます。\n\n- 登録する教師または管理者アカウントのメールアドレスを入力します。\n\n- 各アカウントの所属と権限を個別に設定します。\n\n> 📌 1回につき最大50アカウントまで登録できます。\n\n> ⚠️ 事前登録したメールアドレスと実際の登録に使用するGoogleアカウントが同じである必要があります。異なる場合は、別途承認手続きが必要です。"
      ],
      "cat-admin-standard-management": [
        "基準管理では、**学年、教科、アイテムタイプ**を定義します。ここで登録した情報は、LumiTeach Adminとサービス全体で使用されます。",
        "LumiTeachサービスで使用する学年情報を登録します。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%22%2C%22%E8%AA%AC%E6%98%8E%22%2C%22%E4%BE%8B%22%5D%2C%5B%22%60Education_Lv%60%22%2C%22%E5%AD%A6%E5%B9%B4%E5%90%8D%22%2C%221%E5%B9%B4%E7%94%9F%E3%80%812%E5%B9%B4%E7%94%9F%E3%80%8112%E5%B9%B4%E7%94%9F%22%5D%2C%5B%22%60Education_Lv_ID%60%22%2C%22%E5%AD%A6%E5%B9%B4%E3%81%AB%E5%AF%BE%E5%BF%9C%E3%81%99%E3%82%8B%E5%9B%BA%E6%9C%89ID%22%2C%2212%E5%B9%B4%E7%94%9F%20%E2%86%92%20%6012%60%22%5D%5D%7D]]\n\n> 📌 `Education_Lv_ID`の設定範囲は**K-12**で、重複したIDは使用できません。",
        "LumiTeachサービスで使用する教科情報を登録します。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%22%2C%22%E8%AA%AC%E6%98%8E%22%2C%22%E4%BE%8B%22%5D%2C%5B%22%60Subject_title%60%22%2C%22%E6%95%99%E7%A7%91%E5%90%8D%22%2C%22%E6%95%B0%E5%AD%A6%E3%80%81%E8%8B%B1%E8%AA%9E%E3%80%81%E7%90%86%E7%A7%91%22%5D%5D%7D]]",
        "アイテムタイプとは、カリキュラムを構成する各要素を指します。\n\n> 例: 学校段階、学年、大単元、中単元、達成基準、領域/トピックなど\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%60Item_Title%60%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E6%A7%8B%E6%88%90%E8%A6%81%E7%B4%A0%E5%90%8D%22%5D%2C%5B%22%60%E9%A0%86%E5%BA%8F%60%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E6%A7%8B%E9%80%A0%E3%81%AE%E9%9A%8E%E5%B1%A4%E3%81%AB%E5%90%88%E3%82%8F%E3%81%9B%E3%81%A6%E8%A8%AD%E5%AE%9A%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22%60Auto-Tagging%60%22%2C%22%E9%9A%8E%E5%B1%A4%E3%81%AB%E5%B1%9E%E3%81%95%E3%81%9A%E3%80%81%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%AE%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF%E3%81%A8%E3%81%97%E3%81%A6%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E9%A0%85%E7%9B%AE%E3%81%AB%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%5D%7D]]\n\n[[callout:💡||アイテムタイプの順序は、カリキュラムの階層構造を反映する必要があります。難易度やタイプタグなど、階層に含まれない項目は**Auto-Tagging**をチェックし、メタデータとして使用してください。]]"
      ],
      "cat-admin-curriculum-management": [
        "Adminに登録されたカリキュラムは、ユーザーサービスの**カリキュラム**メニューとリアルタイムで連動し、可視化されます。カリキュラムを構造化した後、適切な授業と評価を作成し、所属教師に教材を提供してください。\n\n### 用語定義\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E7%94%A8%E8%AA%9E%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%22%2C%22%E4%BC%81%E6%A5%AD%E3%81%BE%E3%81%9F%E3%81%AF%E6%A9%9F%E9%96%A2%E3%81%8C%E4%BF%9D%E6%9C%89%E3%81%99%E3%82%8B%E6%95%99%E8%82%B2%E8%AA%B2%E7%A8%8B%22%5D%2C%5B%22%2A%2ASubject%2A%2A%22%2C%22%E6%95%99%E7%A7%91%E5%88%86%E9%A1%9E%EF%BC%88%E4%BE%8B%3A%20%E6%95%B0%E5%AD%A6%E3%80%81%E7%90%86%E7%A7%91%E3%80%81%E8%8B%B1%E8%AA%9E%EF%BC%89%22%5D%2C%5B%22%2A%2AEducation%20Level%2A%2A%22%2C%22%E5%AD%A6%E7%BF%92%E6%AE%B5%E9%9A%8E%E3%81%BE%E3%81%9F%E3%81%AF%E5%AD%A6%E5%B9%B4%22%5D%2C%5B%22%2A%2AItem%20Type%2A%2A%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E3%82%92%E6%A7%8B%E6%88%90%E3%81%99%E3%82%8B%E8%A6%81%E7%B4%A0%E3%82%84%E6%80%A7%E8%B3%AA%E3%82%92%E5%8C%BA%E5%88%86%E3%81%99%E3%82%8B%E3%82%BF%E3%82%A4%E3%83%97%EF%BC%88%E4%BE%8B%3A%20%E9%81%94%E6%88%90%E5%9F%BA%E6%BA%96%E3%80%81%E5%8D%98%E5%85%83%E3%80%81%E5%AD%A6%E6%A0%A1%E6%AE%B5%E9%9A%8E%E3%81%AA%E3%81%A9%EF%BC%89%22%5D%2C%5B%22%2A%2AItem%2A%2A%22%2C%22Item%20Type%E3%81%94%E3%81%A8%E3%81%AE%E5%AE%9F%E3%83%87%E3%83%BC%E3%82%BF%EF%BC%88%E4%BE%8B%3A%20%E3%80%8C%E7%B9%B0%E3%82%8A%E4%B8%8A%E3%81%8C%E3%82%8A%E3%81%AE%E3%81%AA%E3%81%843%E6%A1%81%E3%81%AE%E6%95%B0%E3%81%AE%E8%B6%B3%E3%81%97%E7%AE%97%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B%E3%80%8D%EF%BC%89%22%5D%5D%7D]]",
        "カリキュラム登録は、**Step 1: 基本情報 → Step 2: アイテム入力**の順で進みます。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E6%AE%B5%E9%9A%8E%22%2C%22%E5%85%A5%E5%8A%9B%E9%A0%85%E7%9B%AE%22%5D%2C%5B%22%2A%2AStep%201%3A%20%E5%9F%BA%E6%9C%AC%E6%83%85%E5%A0%B1%2A%2A%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E5%90%8D%E3%80%81%E6%95%99%E7%A7%91%E3%80%81%E7%99%BA%E8%A1%8C%E8%80%85%E3%80%81%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%80%81%E3%83%A1%E3%83%A2%2F%E8%AA%AC%E6%98%8E%E3%81%AA%E3%81%A9%22%5D%2C%5B%22%2A%2AStep%202%3A%20%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%2A%2A%22%2C%22Item%20Type%E3%81%94%E3%81%A8%E3%81%AE%E5%AE%9F%E3%83%87%E3%83%BC%E3%82%BF%E5%85%A5%E5%8A%9B%E3%81%8A%E3%82%88%E3%81%B3%E9%9A%8E%E5%B1%A4%E6%A7%8B%E9%80%A0%EF%BC%88SmartLevel%EF%BC%89%E8%A8%AD%E5%AE%9A%22%5D%5D%7D]]\n\n### Step 1: 基本情報入力\n\nカリキュラムの基本情報を入力します。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E9%A0%85%E7%9B%AE%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E5%90%8D%22%2C%22%E2%9C%85%22%2C%22%E6%95%99%E5%B8%AB%E3%81%8C%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E4%B8%8A%E3%81%A7%E8%AD%98%E5%88%A5%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E5%90%8D%22%5D%2C%5B%22%E6%95%99%E7%A7%91%22%2C%22%E2%9C%85%22%2C%22%E5%9F%BA%E6%BA%96%E7%AE%A1%E7%90%86%E3%81%A7%E4%BA%8B%E5%89%8D%E7%99%BB%E9%8C%B2%E3%81%95%E3%82%8C%E3%81%9F%E6%95%99%E7%A7%91%E3%81%8B%E3%82%89%E9%81%B8%E6%8A%9E%22%5D%2C%5B%22%E7%99%BA%E8%A1%8C%E8%80%85%22%2C%22%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E3%82%92%E7%99%BA%E8%A1%8C%E3%81%97%E3%81%9F%E4%BC%9A%E7%A4%BE%E3%81%BE%E3%81%9F%E3%81%AF%E7%AE%A1%E7%90%86%E6%A9%9F%E9%96%A2%E5%90%8D%22%5D%2C%5B%22%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%22%2C%22%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E3%81%AE%E7%99%BA%E8%A1%8C%E5%B9%B4%E5%BA%A6%E3%81%BE%E3%81%9F%E3%81%AF%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%22%5D%2C%5B%22%E8%AA%AC%E6%98%8E%22%2C%22%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E8%BF%BD%E5%8A%A0%E8%AA%AC%E6%98%8E%22%5D%5D%7D]]\n\n[[image:admin-curriculum-management/03.png|画面例]]\n\n### Step 2: アイテム入力\n\nアイテム（Item）は、カリキュラムを構成する実データ単位です。詳細教科、単元名、達成基準などが該当します。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E3%82%AB%E3%83%A9%E3%83%A0%E5%90%8D%22%2C%22%E5%BF%85%E9%A0%88%20%EC%97%AC%EB%B6%80%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%2A%2AItem_content%2A%2A%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E3%81%AE%E5%AE%9F%E9%9A%9B%E3%81%AE%E5%86%85%E5%AE%B9%E3%81%A7%E3%81%99%E3%80%82%22%5D%2C%5B%22%2A%2AhumanCodingScheme%2A%2A%22%2C%22%E4%BB%BB%E6%84%8F%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E3%81%A7%E5%85%AC%E5%BC%8F%E3%81%AB%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E3%82%B3%E3%83%BC%E3%83%89%E3%81%A7%E3%81%99%E3%80%82%EF%BC%88%E4%BE%8B%3A%20%60A.1%60%EF%BC%89%22%5D%2C%5B%22%2A%2Asmartlevel%2A%2A%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E9%96%93%E3%81%AE%E4%B8%8A%E4%B8%8B%E9%9A%8E%E5%B1%A4%E3%82%92%E8%A1%A8%E3%81%99%E7%95%AA%E5%8F%B7%E3%81%A7%E3%81%99%E3%80%82%22%5D%2C%5B%22%2A%2Aitemtype_title%2A%2A%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E8%A9%B2%E5%BD%93%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E3%81%AE%E3%82%BF%E3%82%A4%E3%83%97%E3%81%A7%E3%81%99%E3%80%82%EF%BC%88%E4%BE%8B%3A%20%E5%AD%A6%E6%A0%A1%E6%AE%B5%E9%9A%8E%E3%80%81%E5%AD%A6%E5%B9%B4%E3%80%81%E5%AD%A6%E6%9C%9F%E3%80%81%E5%A4%A7%E5%8D%98%E5%85%83%E3%80%81%E4%B8%AD%E5%8D%98%E5%85%83%E3%80%81%E9%81%94%E6%88%90%E5%9F%BA%E6%BA%96%EF%BC%89%22%5D%2C%5B%22%2A%2AeducationLevel%2A%2A%22%2C%22%E4%BB%BB%E6%84%8F%22%2C%22%E8%A9%B2%E5%BD%93%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0%E3%81%8C%E5%B1%9E%E3%81%99%E3%82%8B%E5%AD%A6%E5%B9%B4%E3%82%B3%E3%83%BC%E3%83%89%E3%81%A7%E3%81%99%E3%80%82%EF%BC%88%E4%BE%8B%3A%20%6011%60%20%E2%86%92%20%E9%AB%98%E6%A0%A12%E5%B9%B4%E7%94%9F%EF%BC%89%22%5D%5D%7D]]\n\n[[image:admin-curriculum-management/01.png|画面例]]\n\n[[callout:⚠️||**必須項目が空欄、または** `**itemtype_title**` **が基準管理で事前登録された名称と異なる場合、アップロード時にエラーが発生します。**\\nアップロード前に必ず確認してください。]]\n\n### 階層構造（SmartLevel）とは？\n\n`smartlevel`は、アイテム間の親子関係を数字で表す重要なカラムです。`.`（ドット）で段階を区切り、数字の深さ（depth）が階層を意味します。\n\n[[callout:📌||親項目の番号を必ず含めることで、子項目として認識されます。同じ`smartlevel`番号の重複入力、親項目のない子項目入力、循環構造は許可されません。]]\n\n### テンプレートのダウンロード/インポート\n\n- 一括登録ページ右上の**[インポート]**ボタンをクリックします。\n\n- **[テンプレートをダウンロード]**ボタンをクリックすると、Excelテンプレートがダウンロードされます。\n\n- テンプレート作成後、再度**[インポート]**ボタンをクリックしてファイルをアップロードします。\n\n### 一時保存\n\n- 作業中に中断する必要がある場合、一時保存できます。\n\n- 右上の**[一時保存]**ボタンをクリックします。\n\n[[callout:⚠️||LumiTeach Adminでは、一括登録データの作成中にファイル変更内容を**自動保存しません。**]]",
        "AI分類機能を使用すると、カリキュラム文書を添付するだけでアイテム入力フォームを自動で整理できます。\n\n- Step 2画面右上の**[AI分類]**ボタンをクリックします。\n\n- 登録したいカリキュラム文書を添付し、**[登録]**ボタンをクリックします。\n\n[[image:admin-curriculum-management/02.png|画面例]]\n\n[[callout:⚠️||Step 2に既に入力した内容がある場合、AI分析結果に置き換えられ、復元できません。AI分類機能は、カリキュラム登録フォームの下書き作成を支援するツールです。AIが生成した結果には誤りが含まれる場合があるため、内容を十分に確認してから承認してください。]]",
        "登録が完了したカリキュラムは、**[詳細情報]**ボタンをクリックして確認・管理できます。\n\n**有効/無効の切り替え**\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%2A%2A%E6%9C%89%E5%8A%B9%2A%2A%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E3%81%8CLumiTeach%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%AB%E8%A1%A8%E7%A4%BA%E3%81%95%E3%82%8C%E3%80%81%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%8C%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%97%E3%81%A6%E5%88%A9%E7%94%A8%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22%2A%2A%E7%84%A1%E5%8A%B9%2A%2A%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E3%81%8A%E3%82%88%E3%81%B3%E9%80%A3%E6%90%BA%E3%81%95%E3%82%8C%E3%81%9F%E6%8E%88%E6%A5%AD%E3%83%BB%E8%A9%95%E4%BE%A1%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%AFLumiTeach%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%AB%E8%A1%A8%E7%A4%BA%E3%81%95%E3%82%8C%E3%81%BE%E3%81%9B%E3%82%93%E3%80%82%22%5D%5D%7D]]\n\nカリキュラムの基本情報およびアイテムデータは、いつでも編集できます。"
      ],
      "cat-admin-lesson-activity": [
        "授業管理メニューに入ると、登録済み授業の一覧を確認できます。",
        "一覧で授業名をクリックするか、右側の詳細情報ボタンをクリックすると、その授業の詳細情報モーダルが開きます。\n\n詳細情報モーダルでは、次の内容を確認できます。\n\n**基本情報（左パネル）**\n\n- **国、会社名**: 授業が属する機関/会社\n\n- **Item ID**: 連携されたカリキュラムの詳細項目\n\n- **カリキュラム**: 連携されたカリキュラム\n\n- **学年**\n\n- **授業名**\n\n- **授業順序**: カリキュラム内での授業の順番\n\n**概念およびスタンダード（右上パネル）**\n\n- **概念**: この授業で扱う主要概念キーワードの一覧\n\n- **メタデータ**: 基準管理に登録されたメタデータ項目\n\n**授業サムネイル（右下パネル）**\n\n- 別途画像を登録していない場合、保存または承認時に**1ページ目の最初のアクティビティ画面が自動的にサムネイル**として設定されます。\n\n- 画像を直接アップロードした場合、自動更新されず、その画像が維持されます。",
        "詳細情報モーダル下部の**Edit Lesson**ボタンをクリックすると、授業編集画面に移動します。\n\n編集画面では、次の操作を実行できます。\n\n- 授業内のアクティビティ内容を修正\n\n- アクティビティの順序を変更\n\n- 新しいアクティビティを追加\n\n- 作成内容を保存",
        "一覧画面右上の登録ボタンをクリックして、新しい授業を登録できます。\n\n登録方法は次の2つです。各登録方法については詳細ガイドを参照してください。\n\n- 一括登録\n\n- AI Make"
      ],
      "cat-admin-lesson-bulk-upload": [
        "### Step 1: Excelテンプレートをダウンロード\n\nAdminページで**授業一括登録画面**に移動し、**Import > テンプレートをダウンロード**ボタンをクリックしてExcelファイルを受け取ります。\n\n⚠️ 必ず提供されたテンプレートを使用してください。任意に列を追加または削除すると、アップロードエラーが発生する場合があります。\n\n### Step 2: Excelテンプレートを入力\n\nWebグリッドテンプレートで**直接入力**するか、Excelファイルを作成して**Import**できます。\n\n### 方法A: Webグリッドに直接入力\n\n各セルをクリックし、授業およびActivityデータを直接入力します。\n\n- **Add Row Above / Add Row Below**: 選択した行の上または下に行を追加します。\n\n- **Delete Selected Row**: 選択した行を削除します。\n\n### 方法B: Excelファイルをインポート\n\n- 右上の**Import**ボタンをクリックします。\n\n- 作成したファイルをポップアップのアップロード領域にドラッグ＆ドロップするか、**SELECT FILE**をクリックして添付します。\n\n- **Submit**をクリックすると、Webグリッドにデータが読み込まれます。\n\n> 対応形式: XLSX, XLS / 最大10MB\n\n### テンプレートの入力方法\n\n各行（Row）は1つのActivityを表します。同じ授業に属するActivityは、**同じLesson情報を繰り返し入力**します。\n\n### 基本構造の例\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item_ID%22%2C%22Lesson_order%22%2C%22Lesson_title%22%2C%22Activity_order%22%2C%22Activity_type%22%2C%22Activity_title%22%5D%2C%5B%22ITEM001%22%2C%221%22%2C%22%E6%9C%80%E5%88%9D%E3%81%AE%E6%8E%88%E6%A5%AD%22%2C%221%22%2C%22text%20only%20%28G%29%22%2C%22%E4%BB%8A%E6%97%A5%E3%81%AE%E5%AD%A6%E7%BF%92%E7%9B%AE%E6%A8%99%22%5D%2C%5B%22ITEM001%22%2C%221%22%2C%22%E6%9C%80%E5%88%9D%E3%81%AE%E6%8E%88%E6%A5%AD%22%2C%222%22%2C%22true%20or%20false%20%28Q%29%22%2C%22%E6%AC%A1%E3%81%AE%E3%81%86%E3%81%A1%E6%AD%A3%E3%81%97%E3%81%84%E3%82%82%E3%81%AE%E3%81%AF%E3%81%A9%E3%82%8C%E3%81%A7%E3%81%99%E3%81%8B%EF%BC%9F%22%5D%2C%5B%22ITEM001%22%2C%222%22%2C%222%E3%81%A4%E7%9B%AE%E3%81%AE%E6%8E%88%E6%A5%AD%22%2C%221%22%2C%22multiple%20choice%20%28Q%29%22%2C%22%E6%AD%A3%E3%81%97%E3%81%84%E7%AD%94%E3%81%88%E3%82%92%E9%81%B8%E3%81%B3%E3%81%BE%E3%81%97%E3%82%87%E3%81%86%22%5D%5D%7D]]\n\n### 列（Column）の説明\n\n### 授業基本情報\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E5%88%97%E5%90%8D%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22Item_ID%22%2C%22%E2%9C%85%20%E5%BF%85%E9%A0%88%22%2C%22%E6%8E%88%E6%A5%AD%E3%81%8C%E5%B1%9E%E3%81%99%E3%82%8BItem%E3%81%AEID%E3%80%82%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E7%AE%A1%E7%90%86%E3%81%AB%E7%99%BB%E9%8C%B2%E3%81%95%E3%82%8C%E3%81%9FID%E3%81%AE%E3%81%BF%E4%BD%BF%E7%94%A8%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22Lesson_order%22%2C%22%E2%9C%85%20%E5%BF%85%E9%A0%88%22%2C%22%E6%8E%88%E6%A5%AD%E9%A0%86%E5%BA%8F%EF%BC%881%E3%81%8B%E3%82%89%E9%96%8B%E5%A7%8B%E3%80%81%E6%95%B0%E5%AD%97%E3%81%AE%E3%81%BF%E5%85%A5%E5%8A%9B%EF%BC%89%22%5D%2C%5B%22Lesson_title%22%2C%22%E2%9C%85%20%E5%BF%85%E9%A0%88%22%2C%22%E6%8E%88%E6%A5%AD%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB%EF%BC%88%E6%9C%80%E5%A4%A7100%E6%96%87%E5%AD%97%EF%BC%89%22%5D%2C%5B%22Lesson_image%22%2C%22%E4%BB%BB%E6%84%8F%22%2C%22%E6%8E%88%E6%A5%AD%E4%BB%A3%E8%A1%A8%E7%94%BB%E5%83%8F%E3%80%82%E6%8E%88%E6%A5%AD%E3%81%94%E3%81%A8%E3%81%AB1%E3%81%A4%E3%81%A0%E3%81%91%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%99%E3%80%82%22%5D%2C%5B%22Lesson_objective%22%2C%22%E4%BB%BB%E6%84%8F%22%2C%22%E6%8E%88%E6%A5%AD%E3%81%AE%E5%AD%A6%E7%BF%92%E7%9B%AE%E6%A8%99%22%5D%5D%7D]]\n\n### Activity基本情報\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E5%88%97%E5%90%8D%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22Activity_order%22%2C%22%E2%9C%85%20%E5%BF%85%E9%A0%88%22%2C%22Activity%E9%A0%86%E5%BA%8F%EF%BC%881%E3%81%8B%E3%82%89%E9%96%8B%E5%A7%8B%E3%80%81%E6%95%B0%E5%AD%97%E3%81%AE%E3%81%BF%E5%85%A5%E5%8A%9B%EF%BC%89%22%5D%2C%5B%22Activity_type%22%2C%22%E2%9C%85%20%E5%BF%85%E9%A0%88%22%2C%22Activity%E3%82%BF%E3%82%A4%E3%83%97%EF%BC%88%E4%B8%8B%E8%A8%98%E3%83%AA%E3%82%B9%E3%83%88%E5%8F%82%E7%85%A7%EF%BC%89%22%5D%2C%5B%22Activity_color%22%2C%22%E4%BB%BB%E6%84%8F%22%2C%22%E8%83%8C%E6%99%AF%2F%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E8%89%B2%E3%80%82%E6%9C%AA%E5%85%A5%E5%8A%9B%E3%81%AE%E5%A0%B4%E5%90%88%E3%81%AFBlack%20%26%20White%E3%81%8C%E9%81%A9%E7%94%A8%E3%81%95%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22Activity_title%22%2C%22%E2%9C%85%20%E5%BF%85%E9%A0%88%22%2C%22Activity%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB%E3%81%BE%E3%81%9F%E3%81%AF%E8%B3%AA%E5%95%8F%EF%BC%88%E6%9C%80%E5%A4%A750%E6%96%87%E5%AD%97%EF%BC%89%22%5D%2C%5B%22Activity_description%22%2C%22%E4%BB%BB%E6%84%8F%22%2C%22Activity%E8%AA%AC%E6%98%8E%EF%BC%88%E6%9C%80%E5%A4%A780%E6%96%87%E5%AD%97%EF%BC%89%22%5D%2C%5B%22Activity_image%22%2C%22%E4%BB%BB%E6%84%8F%22%2C%22Activity%E7%94%BB%E5%83%8F%22%5D%5D%7D]]\n\nActivityタイプは大きく4つのカテゴリに分かれます。\n\n### 一般コンテンツ（G）\n\n学習内容を表示する画面です。別途正解を入力せず、テキストや画像などを配置します。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E3%82%BF%E3%82%A4%E3%83%97%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22text%20only%20%28G%29%22%2C%22%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%81%AE%E3%81%BF%E8%A1%A8%E7%A4%BA%22%5D%2C%5B%22text%20%26%20text%20%28G%29%22%2C%222%E3%81%A4%E3%81%AE%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%92%E6%A8%AA%E4%B8%A6%E3%81%B3%E3%81%A7%E8%A1%A8%E7%A4%BA%22%5D%2C%5B%22image%20only%20%28G%29%22%2C%22%E7%94%BB%E5%83%8F%E3%81%AE%E3%81%BF%E8%A1%A8%E7%A4%BA%22%5D%2C%5B%22text%20top%20%28G%29%22%2C%22%E4%B8%8A%E3%81%AB%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%80%81%E4%B8%8B%E3%81%AB%E7%94%BB%E5%83%8F%22%5D%2C%5B%22image%20top%20%28G%29%22%2C%22%E4%B8%8A%E3%81%AB%E7%94%BB%E5%83%8F%E3%80%81%E4%B8%8B%E3%81%AB%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%22%5D%2C%5B%22image%20middle%20%28G%29%22%2C%22%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%81%AE%E9%96%93%E3%81%AB%E7%94%BB%E5%83%8F%22%5D%2C%5B%22image%20left%20%28G%29%22%2C%22%E5%B7%A6%E3%81%AB%E7%94%BB%E5%83%8F%E3%80%81%E5%8F%B3%E3%81%AB%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%22%5D%2C%5B%22image%20right%20%28G%29%22%2C%22%E5%8F%B3%E3%81%AB%E7%94%BB%E5%83%8F%E3%80%81%E5%B7%A6%E3%81%AB%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%22%5D%5D%7D]]\n\n### 外部コンテンツ（E）\n\n外部ファイルやリンクを埋め込むActivityです。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E3%82%BF%E3%82%A4%E3%83%97%22%2C%22%E8%AA%AC%E6%98%8E%22%2C%22%E5%BF%85%E8%A6%81%E3%81%AA%E5%88%97%22%5D%2C%5B%22webviewer%20%28E%29%22%2C%22Web%E3%82%B5%E3%82%A4%E3%83%88URL%E3%82%92%E6%8C%BF%E5%85%A5%22%2C%22Activity_url%22%5D%2C%5B%22Youtube%20%28E%29%22%2C%22YouTube%E5%8B%95%E7%94%BB%E3%82%92%E6%8C%BF%E5%85%A5%22%2C%22Activity_url%22%5D%2C%5B%22document%20%28E%29%22%2C%22%E6%96%87%E6%9B%B8%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E6%B7%BB%E4%BB%98%22%2C%22Activity_document%20%28pdf%2C%20doc%2C%20docx%2C%20pptx%2C%20ppt%20%2F%20%E6%9C%80%E5%A4%A7500MB%29%22%5D%2C%5B%22sound%20%28E%29%22%2C%22%E9%9F%B3%E5%A3%B0%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E6%B7%BB%E4%BB%98%22%2C%22Activity_sound%20%28mp3%20%2F%20%E6%9C%80%E5%A4%A720MB%29%22%5D%5D%7D]]\n\n### Quiz（Q）\n\n学習者が答えを入力または選択するActivityです。\n\n### true or false (Q) — OXクイズ\n\n- **TF_correct_answer**列に正解を入力（✅ 必須）\n\n- 例: O または X\n\n### short answer (Q) — 短答式\n\n- **SA_correct_answer**列に正解を入力（✅ 必須）\n\n- 類似する正解が複数ある場合は、カンマ（,）で区切ります。\n\n- 例: りんご, apple, manzana\n\n### multiple choice (Q) — 選択式\n\n- **MC_type**: text または image を選択（✅ 必須）\n\n- **MC_correct_answer**: 正解の選択肢番号を入力（✅ 必須）。複数正解はカンマで区切ります。\n\n- 例: 1 または 1,3\n\n- **MC_option1 ~ MC_option5**: 選択肢内容を入力（最小2つ必須、最大50文字）\n\n- 画像タイプの場合、MC_option1_image ~ MC_option5_imageに画像をアップロードします。\n\n### open-ended (Q) — 記述式\n\n- **OE_correct_answer**: 模範解答を入力（任意）\n\n### fill in the blank (Q) — 穴埋め\n\n- **Activity_title**列で空欄にする単語を[ ]で囲みます。\n\n- 例: Appleは英語で[apple]です。\n\n### sequencing (Q) — 順序並べ\n\n- **SQ_type**: text または image を選択（✅ 必須）\n\n- **SQ_option1 ~ SQ_option5**: 選択肢内容（最小2つ必須）\n\n- **SQ_option1_seq ~ SQ_option5_seq**: 各選択肢の正しい順序番号を入力（✅ 必須）\n\n- 例: option1_seq=2, option2_seq=1（option2が先、option1が2番目）\n\n### matching (Q) — マッチング\n\n- **MA_type**: text または image を選択（✅ 必須）\n\n- **MA_correct_answer**: 正しい組み合わせを数字-アルファベット形式で入力（✅ 必須）\n\n- 例: 1-a,2-b,3-c\n\n- **MA_option1 ~ MA_option4**: 上側の選択肢（数字1~4）\n\n- **MA_option_a ~ MA_option_d**: 下側の選択肢（アルファベットa~d）\n\n### sorting (Q) — 分類\n\n- **SR_type**: text または image を選択（✅ 必須）\n\n- **SR_groupA**: Group Aタイトル（✅ 必須、最大30文字）\n\n- **SR_groupB**: Group Bタイトル（✅ 必須、最大30文字）\n\n- **SR_option1 ~ SR_option5**: 選択肢内容（最小2つ必須）\n\n- **SR_option1_group ~ SR_option5_group**: 各選択肢が属するグループを入力（✅ 必須）\n\n- 入力値: Group A または Group B\n\n### 意見/ディスカッション（D）\n\n学習者の意見を収集するActivityです。正解はなく、質問と選択肢のみ設定します。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E3%82%BF%E3%82%A4%E3%83%97%22%2C%22%E8%AA%AC%E6%98%8E%22%2C%22%E5%BF%85%E8%A6%81%E3%81%AA%E5%88%97%22%5D%2C%5B%22vote%20%28D%29%22%2C%22%E6%8A%95%E7%A5%A8%22%2C%22Vote_option1%20~%20Vote_option5%EF%BC%88%E6%9C%80%E5%B0%8F2%E3%81%A4%EF%BC%89%22%5D%2C%5B%22traffic%20light%20%28D%29%22%2C%22%E4%BF%A1%E5%8F%B7%EF%BC%88%E7%90%86%E8%A7%A3%E5%BA%A6%E7%A2%BA%E8%AA%8D%EF%BC%89%22%2C%22%E5%88%A5%E9%80%94%E9%81%B8%E6%8A%9E%E8%82%A2%E5%85%A5%E5%8A%9B%E4%B8%8D%E8%A6%81%22%5D%2C%5B%22agree-disagree%20%28D%29%22%2C%22%E8%B3%9B%E6%88%90%2F%E5%8F%8D%E5%AF%BE%E6%84%8F%E8%A6%8B%22%2C%22%E5%88%A5%E9%80%94%E9%81%B8%E6%8A%9E%E8%82%A2%E5%85%A5%E5%8A%9B%E4%B8%8D%E8%A6%81%22%5D%2C%5B%22opinion%20scale%20%28D%29%22%2C%22%E6%84%8F%E8%A6%8B%E5%B0%BA%E5%BA%A6%22%2C%22%E5%88%A5%E9%80%94%E9%81%B8%E6%8A%9E%E8%82%A2%E5%85%A5%E5%8A%9B%E4%B8%8D%E8%A6%81%22%5D%5D%7D]]\n\n### アイデアボード（I）\n\n学習者が自由にアイデアを書くActivityです。正解はなく、質問のみ設定します。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E3%82%BF%E3%82%A4%E3%83%97%22%2C%22%E8%AA%AC%E6%98%8E%22%2C%22%E5%BF%85%E8%A6%81%E3%81%AA%E5%88%97%22%5D%2C%5B%22brainstorming%20%28I%29%22%2C%22%E3%83%96%E3%83%AC%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%9F%E3%83%B3%E3%82%B0%22%2C%22Activity_title%E3%81%AE%E3%81%BF%E5%85%A5%E5%8A%9B%E3%80%82%E5%88%A5%E9%80%94%E9%81%B8%E6%8A%9E%E8%82%A2%E5%85%A5%E5%8A%9B%E4%B8%8D%E8%A6%81%E3%80%82%22%5D%2C%5B%22whiteboard%20%28I%29%22%2C%22%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%22%2C%22Activity_title%E3%81%AE%E3%81%BF%E5%85%A5%E5%8A%9B%E3%80%82%E5%88%A5%E9%80%94%E9%81%B8%E6%8A%9E%E8%82%A2%E5%85%A5%E5%8A%9B%E4%B8%8D%E8%A6%81%E3%80%82%22%5D%5D%7D]]\n\n### Activity_color — 色オプション\n\n背景/フォント色は、以下の一覧からいずれかを正確に入力してください。\n\n`Black&White` / `Red` / `Orange` / `Yellow` / `Green` / `Blue` / `Purple` / `Pink`\n\n> 未入力の場合、自動的に`Black&White`が適用されます。\n\n### Step 3: ファイル添付\n\n画像、文書、音声ファイルはExcelテンプレートでは取り込めないため、**Webグリッドで直接添付**する必要があります。各セルをクリックしてファイルを添付してください。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E5%88%97%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%2A%2AActivity_image%2A%2A%22%2C%22Activity%E7%94%BB%E5%83%8F%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E6%B7%BB%E4%BB%98%E3%80%81%E6%9C%80%E5%A4%A71%E5%80%8B%E3%80%8120MB%E4%BB%A5%E4%B8%8B%22%5D%2C%5B%22%2A%2AActivity_document%2A%2A%22%2C%22Activity%E6%96%87%E6%9B%B8%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E6%B7%BB%E4%BB%98%E3%80%81%E6%9C%80%E5%A4%A71%E5%80%8B%E3%80%8120MB%E4%BB%A5%E4%B8%8B%22%5D%2C%5B%22%2A%2AActivity_sound%2A%2A%22%2C%22Activity%E9%9F%B3%E5%A3%B0%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E6%B7%BB%E4%BB%98%E3%80%81%E6%9C%80%E5%A4%A71%E5%80%8B%E3%80%8120MB%E4%BB%A5%E4%B8%8B%22%5D%2C%5B%22%2A%2ALesson_image%2A%2A%22%2C%22%E6%8E%88%E6%A5%AD%E3%82%B5%E3%83%A0%E3%83%8D%E3%82%A4%E3%83%AB%E7%94%BB%E5%83%8F%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E6%B7%BB%E4%BB%98%E3%80%81%E6%9C%80%E5%A4%A71%E5%80%8B%E3%80%8120MB%E4%BB%A5%E4%B8%8B%E3%80%82%E3%82%B5%E3%83%A0%E3%83%8D%E3%82%A4%E3%83%AB%E7%94%BB%E5%83%8F%E3%81%8C%E6%9C%AA%E7%99%BB%E9%8C%B2%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%811%E3%81%A4%E7%9B%AE%E3%81%AEActivity%E3%81%8C%E3%82%B5%E3%83%A0%E3%83%8D%E3%82%A4%E3%83%AB%E3%81%A8%E3%81%97%E3%81%A6%E8%A1%A8%E7%A4%BA%E3%81%95%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82%22%5D%5D%7D]]\n\n### Step 4: 一時保存\n\n作業中に席を外す、または作業を中断する必要がある場合は、**Save Draft**ボタンをクリックして入力中のデータを一時保存できます。\n\n### Step 5: 提出\n\nデータ入力が完了したら、**Submit**ボタンをクリックして登録を完了します。\n\n> ⚠️ 提出時にエラーがある項目がある場合、該当セルにエラーメッセージが表示されます。メッセージを確認し、内容を修正してから再度提出してください。"
      ],
      "cat-admin-lesson-ai-make": [
        "### Step 1: AI Makeを実行\n\n授業編集画面上部の**AI Make**ボタンをクリックします。\n\n### Step 2: 基本情報を設定\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E9%A0%85%E7%9B%AE%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%EF%BC%88%E5%BF%85%E9%A0%88%EF%BC%89%22%2C%22%E6%8E%88%E6%A5%AD%E3%81%AB%E9%81%A9%E7%94%A8%E3%81%99%E3%82%8B%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E3%82%92%E9%81%B8%E6%8A%9E%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22%2A%2AGrade%2A%2A%EF%BC%88%E5%BF%85%E9%A0%88%EF%BC%89%22%2C%22%E5%AF%BE%E8%B1%A1%E5%AD%A6%E5%B9%B4%E3%82%92%E9%81%B8%E6%8A%9E%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22%2A%2A%E8%A8%80%E8%AA%9E%2A%2A%EF%BC%88%E4%BB%BB%E6%84%8F%EF%BC%89%22%2C%22%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E6%8A%BD%E5%87%BA%E8%A8%80%E8%AA%9E%E3%82%92%E9%81%B8%E6%8A%9E%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%5D%7D]]\n\n### Step 3: Auto-taggingを設定\n\n生成された授業に**概念キーワード**と**メタデータ**を自動でタグ付けする機能です。\n\n- **使用**: AIが授業を分析した後、概念キーワードとメタデータを自動でタグ付けします。（AIクレジットが差し引かれます）\n\n- **未使用**: Auto-taggingをスキップします。\n\n### Step 4: 元資料を添付\n\nファイルをドラッグ＆ドロップするか、ファイル選択ボタンをクリックして元資料を添付します。\n\n> 対応形式: pdf, doc, docx, ppt, pptx / 1ファイルの容量制限 100MB\n\n### Step 5: 授業区分を設定\n\n元資料を複数の授業に分ける場合、各授業のページ範囲とActivity生成数を入力します。\n\n- 区分値を設定しない場合、元資料全体が**1つの授業**として生成されます。\n\n- **+ Add Lesson Category**ボタンで授業区分を追加できます。\n\n- **AI Classification**ボタンをクリックすると、AIが元資料を分析し、授業ページ範囲を自動で分類します。その後、直接修正することもできます。\n\n### Step 6: 生成を開始\n\n**Create**ボタンをクリックします。生成が開始されると、画面右下のレイヤーで進行状況を確認できます。生成中でもAdminの他の機能を自由に使用できます。",
        "### 確認タブを確認\n\nAIによる授業生成が完了すると、**[確認]**タブで生成された授業一覧を確認します。\n\n### 詳細情報を確認\n\n生成された授業名または詳細情報アイコンをクリックすると、詳細情報を確認できます。\n\n- Auto-taggingが適用された場合、**概念キーワード**と**メタデータ**が自動入力されています。必要に応じて修正できます。\n\n- **Item ID**を設定して、授業をマッピングするアイテムを指定します。\n\n- **授業順序**を入力します。\n\n### 授業内容を確認・修正\n\n**Edit Lesson**ボタンをクリックして、AIが生成した授業内容を確認し、必要な部分を修正して保存します。\n\n### 承認および公開\n\n確認が完了したら、**[承認]**ボタンをクリックします。承認と同時に授業が公開されます。\n\n[[callout:⚠️||注意事項\n- 元資料の情報が少ないほど、コンテンツの重複や単純化が発生する可能性があります。最適な品質のために、基本情報を十分に設定し、Activity生成ページ数を適切に調整してください。\n- AI Makeは下書き生成を支援するツールです。AIが生成した結果には誤りが含まれる場合があるため、内容を十分に確認してから承認してください。\n- Auto-tagging、AI Makeの使用時にはAIクレジットが差し引かれます。]]"
      ],
      "cat-admin-lesson-recommendation": [
        "- **カリキュラム/コンテンツ管理 > 授業管理 > おすすめ管理**タブをクリックしてください。\n\n- おすすめ管理画面では、登録済みのおすすめコンテンツ（おすすめトピック1、おすすめトピック2）を確認・管理できます。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E9%A0%85%E7%9B%AE%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%2A%2A%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E3%83%88%E3%83%94%E3%83%83%E3%82%AF1%2A%2A%22%2C%221%E3%81%A4%E7%9B%AE%E3%81%AE%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E9%A0%98%E5%9F%9F%E3%81%AE%E6%9C%89%E5%8A%B9%EF%BC%88Active%EF%BC%89%E3%81%BE%E3%81%9F%E3%81%AF%E7%84%A1%E5%8A%B9%EF%BC%88Inactive%EF%BC%89%E7%8A%B6%E6%85%8B%22%5D%2C%5B%22%2A%2A%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E3%83%88%E3%83%94%E3%83%83%E3%82%AF2%2A%2A%22%2C%222%E3%81%A4%E7%9B%AE%E3%81%AE%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E9%A0%98%E5%9F%9F%E3%81%AE%E6%9C%89%E5%8A%B9%EF%BC%88Active%EF%BC%89%E3%81%BE%E3%81%9F%E3%81%AF%E7%84%A1%E5%8A%B9%EF%BC%88Inactive%EF%BC%89%E7%8A%B6%E6%85%8B%22%5D%2C%5B%22%2A%2A%E6%9C%80%E7%B5%82%E6%9B%B4%E6%96%B0%E6%97%A5%2A%2A%22%2C%22%E8%A9%B2%E5%BD%93%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E8%A8%AD%E5%AE%9A%E3%81%8C%E6%9C%80%E5%BE%8C%E3%81%AB%E6%9B%B4%E6%96%B0%E3%81%95%E3%82%8C%E3%81%9F%E6%97%A5%E4%BB%98%EF%BC%88yyyy-mm-dd%EF%BC%89%22%5D%5D%7D]]\n\n### おすすめ詳細情報を確認\n\n- 一覧の**[詳細情報]**列にある**↗アイコン**をクリックすると、詳細情報ページが**新しいウィンドウ**で開きます。\n\n- 詳細ページでは、公開対象、トピック1、トピック2の情報を確認できます。\n\n- 各トピック領域の**[言語別トピック/説明を見る]**ボタンをクリックすると、言語別のタイトルと説明をポップアップで確認できます。\n\n### おすすめ設定を修正\n\n- 詳細情報ページ右上の**[修正]**ボタンをクリックすると、修正ページに移動します。",
        "- おすすめ一覧画面右上の**[新規登録]**ボタンをクリックしてください。\n\n### トピックタイトル入力（言語別翻訳登録）\n\n- **[編集]**ボタンをクリックすると、**おすすめトピック1翻訳編集**モーダルが開きます。\n\n- モーダルで言語別にトピックタイトルを入力します。\n\n- **[翻訳追加]**ボタンを押すと言語を追加できます。\n\n[[callout:⚠️||LumiTeachサービスでユーザーが選択した言語の翻訳データがない場合、翻訳キーがそのまま表示されることがあります。]]\n\n### 連携アイテム（Item ID）を追加\n\n- **[+ Item ID追加]**ボタンをクリックすると、**Item ID追加**モーダルが開きます。\n\n- Company → Curriculumの順に選択してから検索してください。\n\n- アイテムは**最大4個**まで追加できます。\n\n### アイテム順序の変更および削除\n\n- 各アイテム行左側の**上下矢印（↕）**ボタンで順序を変更できます。\n\n- アイテム行右側の**🗑️削除アイコン**をクリックすると、該当アイテムが削除されます。",
        "- トピック2もトピック1と同じ方法で設定します。\n\n### トピック1との違い\n\n- **[編集]**モーダルでは、**タイトル**に加えて、連携された**Item ID別の説明**も入力します。\n\n- 連携アイテムは**最大2個**まで追加できます。\n\nすべての項目を入力したら、右上の**[登録]**ボタンをクリックしてください。"
      ],
      "cat-admin-assessment-question": [
        "- 上部メニューで**評価管理**をクリックし、**[問題管理]**タブを選択してください。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E9%A0%85%E7%9B%AE%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%2A%2A%E5%95%8F%E9%A1%8CID%2A%2A%22%2C%22%E5%95%8F%E9%A1%8C%E3%81%AE%E5%9B%BA%E6%9C%89%E8%AD%98%E5%88%A5%E7%95%AA%E5%8F%B7%22%5D%2C%5B%22%2A%2A%E5%95%8F%E9%A1%8C%E3%82%BF%E3%82%A4%E3%83%97%2A%2A%22%2C%22%E9%81%B8%E6%8A%9E%E5%BC%8F%E3%80%81%E7%9F%AD%E7%AD%94%E5%BC%8F%E3%80%81OX%E3%82%AF%E3%82%A4%E3%82%BA%E3%80%81%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0%E3%81%AA%E3%81%A9%E3%80%81%E5%95%8F%E9%A1%8C%E3%81%AE%E3%82%BF%E3%82%A4%E3%83%97%E3%82%92%E5%8C%BA%E5%88%86%22%5D%2C%5B%22%2A%2A%E6%9C%80%E7%B5%82%E6%9B%B4%E6%96%B0%E6%97%A5%2A%2A%22%2C%22%E3%83%87%E3%83%BC%E3%82%BF%E3%81%8C%E5%88%9D%E5%9B%9E%E7%99%BB%E9%8C%B2%E3%81%BE%E3%81%9F%E3%81%AF%E6%9C%80%E5%BE%8C%E3%81%AB%E4%BF%AE%E6%AD%A3%E3%81%95%E3%82%8C%E3%81%9F%E6%97%A5%E4%BB%98%EF%BC%88YYYY-MM-DD%EF%BC%89%22%5D%5D%7D]]\n\n### 問題詳細情報を確認\n\n- 一覧で**↗アイコン（詳細情報）**をクリックすると、その問題の**詳細情報ページ**が開きます。\n\n- 国、会社、問題ID、難易度、最近登録/修正したアカウント、最終更新日を確認できます。\n\n### 問題プレビュー\n\n- 詳細情報ページ右上の**[プレビュー]**ボタンをクリックすると、プレビューモーダルが開きます。\n\n- **PC版**と**モバイル版**のいずれかを選択して確認できます。\n\n### 問題を修正\n\n- 詳細情報ページ右上の**[修正]**ボタンをクリックすると、**問題修正モード**に切り替わります。",
        "問題は、**個別登録**と**一括登録**の2つの方法で登録できます。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E5%8C%BA%E5%88%86%22%2C%22%22%2C%22%E5%BF%85%E9%A0%88%20%EC%97%AC%EB%B6%80%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22question_ID%22%2C%22%E5%95%8F%E9%A1%8CID%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E8%8B%B1%E5%AD%97%E3%81%AE%E5%A4%A7%E6%96%87%E5%AD%97%2F%E5%B0%8F%E6%96%87%E5%AD%97%E3%80%81%E6%95%B0%E5%AD%97%E3%80%81%E3%83%94%E3%83%AA%E3%82%AA%E3%83%89%E3%80%81%E3%83%8F%E3%82%A4%E3%83%95%E3%83%B3%EF%BC%88-%EF%BC%89%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%E9%87%8D%E8%A4%87%E4%B8%8D%E5%8F%AF%E3%81%A7%E3%81%99%E3%80%82%22%5D%2C%5B%22question_type%22%2C%22%E5%95%8F%E9%A1%8C%E3%82%BF%E3%82%A4%E3%83%97%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E5%95%8F%E9%A1%8C%E3%82%BF%E3%82%A4%E3%83%97%E3%82%92%E5%8C%BA%E5%88%86%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22question_Difficulty%22%2C%22%E9%9B%A3%E6%98%93%E5%BA%A6%22%2C%22%E4%BB%BB%E6%84%8F%22%2C%22Hard%2C%20Normal%2C%20Easy%22%5D%2C%5B%22question_text%22%2C%22%E8%A8%AD%E5%95%8F%E6%96%87%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E5%95%8F%E9%A1%8C%E3%81%AE%E8%B3%AA%E5%95%8F%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22question_description%22%2C%22%E8%AA%AC%E6%98%8E%22%2C%22%E4%BB%BB%E6%84%8F%22%2C%22%E8%A3%9C%E8%B6%B3%E8%AA%AC%E6%98%8E%E3%81%BE%E3%81%9F%E3%81%AF%E6%9C%AC%E6%96%87%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22question_image%22%2C%22%E7%94%BB%E5%83%8F%22%2C%22%E4%BB%BB%E6%84%8F%22%2C%22%E5%95%8F%E9%A1%8C%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E7%94%BB%E5%83%8F%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22correct_answer%22%2C%22%E6%AD%A3%E8%A7%A3%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E5%95%8F%E9%A1%8C%E3%81%94%E3%81%A8%E3%81%AE%E6%AD%A3%E8%A7%A3%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22option%22%2C%22%E9%81%B8%E6%8A%9E%E8%82%A2%22%2C%22%E5%BF%85%E9%A0%88%2F%E4%BB%BB%E6%84%8F%22%2C%22%E5%95%8F%E9%A1%8C%E3%81%AE%E9%81%B8%E6%8A%9E%E8%82%A2%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%5D%7D]]\n\n### 問題タイプ\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E3%82%BF%E3%82%A4%E3%83%97%22%2C%22%E8%8B%B1%E8%AA%9E%E5%90%8D%22%5D%2C%5B%22OX%E3%82%AF%E3%82%A4%E3%82%BA%22%2C%22True%20or%20False%22%5D%2C%5B%22%E7%9F%AD%E7%AD%94%E5%BC%8F%22%2C%22Short%20Answer%22%5D%2C%5B%22%E9%81%B8%E6%8A%9E%E5%BC%8F%22%2C%22Multiple%20Choice%22%5D%2C%5B%22%E9%A0%86%E5%BA%8F%E4%B8%A6%E3%81%B9%22%2C%22Sequencing%22%5D%2C%5B%22%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0%22%2C%22Matching%22%5D%2C%5B%22%E7%A9%B4%E5%9F%8B%E3%82%81%22%2C%22Fill%20in%20the%20Blank%22%5D%2C%5B%22%E5%88%86%E9%A1%9E%22%2C%22Sorting%22%5D%5D%7D]]",
        "1回に問題1件ずつ直接入力して登録する方法です。\n\n### 基本情報入力\n\n- **問題タイプ:** ドロップダウンで問題タイプを選択してください。\n\n- **設問文:** 問題の質問を入力してください。（必須、最大50文字）\n\n- **説明:** 追加説明を入力してください。（任意、最大80文字）\n\n- **問題画像:** **[ファイル添付]**ボタンで画像を添付できます。（1個 / 20MB以下 / jpg, jpeg, png）\n\nすべての項目を入力したら、右上の**[登録]**ボタンをクリックしてください。",
        "Excelテンプレートに合わせて複数の問題を一度に登録する方法です。\n\n### テンプレートのダウンロード/インポート\n\n- 右上の**[インポート]**ボタンをクリックします。\n\n- **[テンプレートをダウンロード]**ボタンをクリックすると、Excelテンプレートがダウンロードされます。\n\n- テンプレート作成後、再度**[インポート]**ボタンをクリックしてファイルをアップロードします。\n\n[[callout:💡||**注意:** LumiTeach Adminでは、一括登録データの作成中にファイル変更内容を**自動保存しません。**]]\n\n### 問題一括登録時の注意事項\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E6%A4%9C%E8%A8%BC%E3%82%BF%E3%82%A4%E3%83%97%22%2C%22%E6%9D%A1%E4%BB%B6%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%E5%85%B1%E9%80%9A%E5%BF%85%E9%A0%88%22%2C%22question_id%2C%20question_type%2C%20question_text%E3%81%8C%E4%B8%8D%E8%B6%B3%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E5%A0%B4%E5%90%88%22%2C%22%E5%95%8F%E9%A1%8CID%E3%80%81%E5%95%8F%E9%A1%8C%E3%82%BF%E3%82%A4%E3%83%97%E3%80%81%E8%B3%AA%E5%95%8F%E5%86%85%E5%AE%B9%E3%81%AF%E5%BF%85%E9%A0%88%E5%85%A5%E5%8A%9B%E9%A0%85%E7%9B%AE%E3%81%A7%E3%81%99%E3%80%82%22%5D%2C%5B%22%E7%94%BB%E5%83%8F%E8%A6%8F%E6%A0%BC%22%2C%22%E6%8B%A1%E5%BC%B5%E5%AD%90%E3%81%8Cjpg%2Fpng%E3%81%A7%E3%81%AA%E3%81%84%E3%80%81%E3%81%BE%E3%81%9F%E3%81%AF20MB%E3%82%92%E8%B6%85%E3%81%88%E3%82%8B%E5%A0%B4%E5%90%88%22%2C%22%E7%94%BB%E5%83%8F%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AFjpg%E3%80%81png%E5%BD%A2%E5%BC%8F%E3%81%AE%E3%81%BF%E5%AF%BE%E5%BF%9C%E3%81%97%E3%80%81%E6%9C%80%E5%A4%A720MB%E3%81%BE%E3%81%A7%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22%E5%95%8F%E9%A1%8C%E5%88%A5%E3%83%87%E3%83%BC%E3%82%BF%E8%A6%8F%E6%A0%BC%22%2C%22%E6%AD%A3%E8%A7%A3%E3%81%BE%E3%81%9F%E3%81%AF%E9%81%B8%E6%8A%9E%E8%82%A2%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%8C%E4%B8%8D%E8%B6%B3%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%80%81%E3%81%BE%E3%81%9F%E3%81%AF%E5%BD%A2%E5%BC%8F%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%AE%E5%A0%B4%E5%90%88%22%2C%22%E5%95%8F%E9%A1%8C%E3%81%AE%E6%AD%A3%E8%A7%A3%E3%81%8A%E3%82%88%E3%81%B3%E9%81%B8%E6%8A%9E%E8%82%A2%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E5%95%8F%E9%A1%8C%E3%82%BF%E3%82%A4%E3%83%97%E3%81%AB%E5%90%88%E3%82%8F%E3%81%9B%E3%81%A6%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%22%5D%5D%7D]]\n\nすべての項目を入力したら、右上の**[登録]**ボタンをクリックしてください。"
      ],
      "cat-admin-assessment-paper": [
        "- 評価管理メニューで**[評価管理]**タブを選択してください。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E9%A0%85%E7%9B%AE%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%2A%2A%E8%A9%95%E4%BE%A1%E5%90%8D%2A%2A%22%2C%22%E8%A9%95%E4%BE%A1%E3%81%AE%E5%90%8D%E5%89%8D%22%5D%2C%5B%22%2A%2A%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%2A%2A%22%2C%22%E8%A9%95%E4%BE%A1%E3%81%AB%E3%83%9E%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%81%95%E3%82%8C%E3%81%9F%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E5%8D%98%E4%BD%8D%E3%81%AE%E8%A1%A8%E7%A4%BA%22%5D%2C%5B%22%2A%2A%E5%AD%A6%E5%B9%B4%2A%2A%22%2C%22%E8%A9%95%E4%BE%A1%E3%81%AB%E3%83%9E%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%81%95%E3%82%8C%E3%81%9F%E5%AD%A6%E5%B9%B4%E6%83%85%E5%A0%B1%22%5D%2C%5B%22%2A%2A%E5%95%8F%E9%A1%8C%E6%95%B0%2A%2A%22%2C%22%E8%A9%95%E4%BE%A1%E3%81%AB%E7%99%BB%E9%8C%B2%E3%81%95%E3%82%8C%E3%81%9F%E5%90%88%E8%A8%88%E5%95%8F%E9%A1%8C%E6%95%B0%22%5D%2C%5B%22%2A%2A%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9%2A%2A%22%2C%22%E8%A9%95%E4%BE%A1%E3%81%AE%E6%9C%89%E5%8A%B9%EF%BC%88Active%EF%BC%89%2F%E7%84%A1%E5%8A%B9%EF%BC%88Inactive%EF%BC%89%E7%8A%B6%E6%85%8B%22%5D%2C%5B%22%2A%2A%E6%9C%80%E7%B5%82%E6%9B%B4%E6%96%B0%E6%97%A5%2A%2A%22%2C%22%E6%9C%80%E8%BF%91%E4%BF%AE%E6%AD%A3%E3%81%8C%E3%81%82%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AF%E4%BF%AE%E6%AD%A3%E6%97%A5%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%97%E3%80%81%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88%E3%81%AF%E5%88%9D%E5%9B%9E%E7%99%BB%E9%8C%B2%E6%97%A5%E3%82%92%E8%A1%A8%E7%A4%BA%22%5D%5D%7D]]\n\n### 評価詳細情報を確認\n\n- 一覧で**↗アイコン（詳細情報）**をクリックすると、その評価の**詳細情報ページ**が開きます。\n\n### 評価を修正\n\n- 詳細情報ページ右上の**[修正]**ボタンをクリックすると、**修正モード**に切り替わります。\n\n- 修正完了後、右上の**[保存]**ボタンをクリックしてください。",
        "評価1件の情報を直接入力し、問題を構成して登録する方法です。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E9%A0%85%E7%9B%AE%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22%2A%2A%E8%A9%95%E4%BE%A1%E5%90%8D%2A%2A%22%2C%22%E5%BF%85%E9%A0%88%E5%85%A5%E5%8A%9B%E3%80%81%E6%9C%80%E5%A4%A7100byte%22%5D%2C%5B%22%2A%2A%E8%A9%95%E4%BE%A1%E9%A0%86%E5%BA%8F%2A%2A%22%2C%22%E5%BF%85%E9%A0%88%E5%85%A5%E5%8A%9B%E3%80%81%E6%95%B0%E5%AD%97%E3%81%AE%E3%81%BF%E5%85%A5%E5%8A%9B%E5%8F%AF%E8%83%BD%22%5D%2C%5B%22%2A%2A%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%2A%2A%22%2C%22%E5%BF%85%E9%A0%88%E5%85%A5%E5%8A%9B%E3%80%81%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E4%B8%80%E8%A6%A7%E3%81%8B%E3%82%89%E9%81%B8%E6%8A%9E%22%5D%2C%5B%22%2A%2AItem%20ID%2A%2A%22%2C%22%E5%BF%85%E9%A0%88%E5%85%A5%E5%8A%9B%E3%80%81%5BItem%20ID%E8%BF%BD%E5%8A%A0%5D%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E6%99%82%E3%81%AB%E3%83%A2%E3%83%BC%E3%83%80%E3%83%AB%E8%A1%A8%E7%A4%BA%22%5D%2C%5B%22%2A%2A%E8%A9%95%E4%BE%A1%E3%82%B5%E3%83%A0%E3%83%8D%E3%82%A4%E3%83%AB%2A%2A%22%2C%22%E5%88%A5%E9%80%94%E7%94%BB%E5%83%8F%E3%81%8C%E6%9C%AA%E7%99%BB%E9%8C%B2%E3%81%AE%E5%A0%B4%E5%90%88%E3%80%81%E4%BF%9D%E5%AD%98%E3%81%BE%E3%81%9F%E3%81%AF%E6%89%BF%E8%AA%8D%E6%99%82%E3%81%AB1%E3%83%9A%E3%83%BC%E3%82%B8%E7%9B%AE%E3%81%AE%E6%9C%80%E5%88%9D%E3%81%AE%E5%95%8F%E9%A1%8C%E7%94%BB%E9%9D%A2%E3%81%8C%E8%87%AA%E5%8B%95%E4%BF%9D%E5%AD%98%E3%81%95%E3%82%8C%E3%81%BE%E3%81%99%22%5D%2C%5B%22%2A%2A%E5%87%BA%E5%85%B8%2A%2A%22%2C%22%E4%BB%BB%E6%84%8F%E5%85%A5%E5%8A%9B%E3%80%81%E6%9C%80%E5%A4%A7100byte%22%5D%5D%7D]]\n\n### 問題構成\n\n- **[問題追加]**ボタンをクリックすると、**問題追加モーダル**が開きます。\n\n- チェックボックスで問題を選択してください（複数選択可能）。\n\n- 追加された問題は▲▼ボタンで順序変更、🗑️アイコンで削除できます。\n\nすべての必須項目の入力および問題構成が完了したら、右上の**[登録]**ボタンをクリックしてください。",
        "Excelテンプレートに合わせて複数の評価を一度に登録する方法です。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E5%8C%BA%E5%88%86%22%2C%22%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E8%AA%AC%E6%98%8E%22%5D%2C%5B%22Item_id%22%2C%22%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0ID%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E8%A9%95%E4%BE%A1%E3%81%8C%E9%80%A3%E6%90%BA%E3%81%95%E3%82%8C%E3%82%8B%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0ID%22%5D%2C%5B%22assessment_order%22%2C%22%E8%A9%95%E4%BE%A1%E9%A0%86%E5%BA%8F%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E5%86%85%E3%81%A7%E8%A9%95%E4%BE%A1%E3%81%8C%E4%B8%A6%E3%81%B6%E9%A0%86%E5%BA%8F%22%5D%2C%5B%22assessment_name%22%2C%22%E8%A9%95%E4%BE%A1%E5%90%8D%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E8%A9%95%E4%BE%A1%E5%90%8D%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22assessment_thumbnail%22%2C%22%E8%A9%95%E4%BE%A1%E3%82%B5%E3%83%A0%E3%83%8D%E3%82%A4%E3%83%AB%22%2C%22%E4%BB%BB%E6%84%8F%22%2C%22%E8%A9%95%E4%BE%A1%E4%BB%A3%E8%A1%A8%E7%94%BB%E5%83%8F%E3%82%92%E6%B7%BB%E4%BB%98%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22question_order%22%2C%22%E5%95%8F%E9%A1%8C%E9%A0%86%E5%BA%8F%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E5%95%8F%E9%A1%8C%E9%A0%86%E5%BA%8F%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%2C%5B%22question_id%22%2C%22%E5%95%8F%E9%A1%8CID%22%2C%22%E5%BF%85%E9%A0%88%22%2C%22%E8%A9%95%E4%BE%A1%E3%82%92%E6%A7%8B%E6%88%90%E3%81%99%E3%82%8B%E5%95%8F%E9%A1%8CID%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%22%5D%5D%7D]]\n\n[[callout:💡||**注意:** LumiTeach Adminでは、一括登録データの作成中にファイル変更内容を**自動保存しません。**]]\n\nすべての項目を入力したら、右上の**[登録]**ボタンをクリックしてください。"
      ],
      "cat-admin-report-management": [
        "- ユーザーサービスのExploreメニューに公開されたコンテンツのうち、通報を受けたコンテンツを確認できます。\n\n- 上部で**総通報件数**、**受付**、**却下**、**対応完了**の状況も確認できます。\n\n- 一覧の詳細情報ボタンをクリックすると、通報されたコンテンツの詳細画面に移動します。\n\n[[callout:✅||通報のステータスは3種類に分かれます。\n- **受付**: 通報が受け付けられ、確認が必要な状態\n- **却下**: 通報が却下され、コンテンツが引き続き表示される状態\n- **無効化**: 通報内容の確認後、コンテンツが非表示処理された状態]]",
        "- 詳細画面で、通報されたコンテンツを公開した登録者、登録日、教科、学年情報を確認します。\n\n- **[プレビュー]**ボタンをクリックして、コンテンツの詳細内容を画像形式で確認します。",
        "- 運営側が通報内容に同意しない、または公開済みコンテンツが適切だと判断した場合は、**却下**処理を行ってください。その場合、該当コンテンツは公開が維持されます。\n\n- 詳細画面右上の**[却下]**ボタンをクリックします。\n\n- 通報を却下した場合、該当コンテンツは引き続きユーザーに表示され、通報者には対応結果がメールで案内されます。",
        "- 運営側が該当コンテンツを公開しないほうがよいと判断した場合は、**無効化**処理を行ってください。無効化されたコンテンツはExploreメニューに表示されません。\n\n- 詳細画面右上の**[対応完了]**ボタンをクリックします。\n\n- コンテンツを非表示にする理由を選択します。\n\n- 対応完了処理時、コンテンツは即時にユーザーサービスで非表示となり、通報者とコンテンツ投稿者に対応結果がメールで案内されます。",
        "**1. 不適切なコンテンツ**\n\n- 暴言や俗語を含む\n\n- 性的な内容を含む\n\n- ヘイトや暴力的な内容を含む\n\n- 差別的要素を含む\n\n**2. 広告または宣伝目的のコンテンツ**\n\n- 宣伝目的の内容を含む\n\n- 商業的リンクを挿入\n\n**3. 著作権侵害コンテンツ**\n\n- 教材の無断アップロード\n\n- 画像および動画の無断使用\n\n- 他人の学習資料の複製\n\n**4. 個人情報を露出するコンテンツ**\n\n- 電話番号、メールアドレス、自宅住所、個人識別番号などの機密情報を投稿\n\n**5. その他の理由**\n\n- 上記の基準に明確には該当しないものの、サービス運営原則に反する内容"
      ],
      "cat-admin-inquiry": [
        "- **[お問い合わせ登録]**ボタンをクリックしてください。\n\n- お問い合わせタイトル、分類、内容を入力して登録します。\n\n- 分類はお問い合わせ内容に合う項目を選択してください。正確な分類を選択すると、より早く回答を受け取ることができます。\n\n- 登録したお問い合わせは一覧で確認できます。\n\n[[callout:💡||登録されたお問い合わせは修正および削除できません。内容を十分に確認してから登録してください。]]",
        "- 本社管理者の回答が登録されると、お問い合わせのステータスが**[完了]**に切り替わります。\n\n- 完了状態のお問い合わせをクリックすると、回答内容を確認できます。\n\n[[image:admin-inquiry/01.png|画面例]]"
      ],
      "cat-admin-affiliation-release": [
        "- **プロフィール > 設定**をクリックしてください。\n\n- 基本情報の所属会社情報右側にある**[所属解除]**ボタンをクリックしてください。\n\n[[image:admin-affiliation-release/01.png|画面例]]\n\n- 所属解除時、このアカウントは会社のデータを閲覧できなくなり、所属機関の認証を再度受ける必要があります。\n\n[[callout:💡||管理者アカウントの利用停止を希望する場合は、所属管理者に依頼するか、service@lumiteach.aiまでお問い合わせください。]]"
      ],
      "cat-admin-ai-credit": [
        "### 1. AI機能およびツール\n\nLumiTeachプラットフォームでは、教材を作成・活用する過程でAI機能とツールを使用できます。AI機能は、教材をすばやく作成・調整し、授業や課題で活用する流れを支援します。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E4%BD%BF%E7%94%A8%E5%A0%B4%E6%89%80%22%2C%22%E6%8F%90%E4%BE%9B%E6%A9%9F%E8%83%BD%22%5D%2C%5B%22%2A%2AEdit%20Lesson%2A%2A%22%2C%22Rewrite%2C%20AI%20Make%22%5D%2C%5B%22%2A%2AStart%20teaching%2A%2A%22%2C%22Brainstorming%20%28Wordcloud%2C%20Classification%2C%20Mindmap%29%22%5D%2C%5B%22%2A%2AAdmin%2A%2A%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E3%82%BF%E3%82%B0%E4%BB%98%E3%81%91%E3%80%81%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%83%A1%E3%82%BF%E3%83%87%E3%83%BC%E3%82%BF%E3%82%BF%E3%82%B0%E4%BB%98%E3%81%91%E3%80%81AI%20Make%22%5D%5D%7D]]\n\n### 1-1. AIクレジットとは？\n\nAIクレジットは、LumiTeachプラットフォーム全体でAI作業を実行するために使用されます。\n\n- **1クレジット = 1トークン（LLM処理単位）**を基準に差し引かれます。\n\n- プランに応じて、毎月一定量の**基本クレジット**が自動で付与されます。\n\n- 不足する場合は、**クレジットパックを追加購入**するか、所属管理者に**追加付与を申請**できます。",
        "### 2. クレジット構造の概要\n\nLumiTeachのクレジットは、使用主体に応じて2種類に分けて運用されます。\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E5%8C%BA%E5%88%86%22%2C%22Admin%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%EF%BC%88%E7%AE%A1%E7%90%86%E8%80%85%EF%BC%89%22%2C%22%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%EF%BC%88%E6%95%99%E5%B8%AB%EF%BC%89%22%5D%2C%5B%22%2A%2A%E4%BD%BF%E7%94%A8%E4%B8%BB%E4%BD%93%2A%2A%22%2C%22%E6%A9%9F%E9%96%A2%E3%83%BB%E4%BC%81%E6%A5%AD%E3%83%BB%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%82%B7%E3%83%BC%E3%81%AE%E7%AE%A1%E7%90%86%E8%80%85%22%2C%22%E6%95%99%E5%B8%AB%E5%80%8B%E4%BA%BA%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%22%5D%2C%5B%22%2A%2A%E4%BB%98%E4%B8%8E%E6%96%B9%E5%BC%8F%2A%2A%22%2C%22%E5%A5%91%E7%B4%84%E6%99%82%E7%82%B9%E3%81%A7%E5%90%88%E6%84%8F%E3%81%97%E3%81%9F%E6%95%B0%E9%87%8F%E3%82%92%E4%B8%80%E6%8B%AC%E4%BB%98%E4%B8%8E%22%2C%22%E6%AF%8E%E6%9C%88%E8%87%AA%E5%8B%95%E4%BB%98%E4%B8%8E%E3%80%81%E6%9C%88%E3%81%94%E3%81%A8%E3%81%AB%E5%88%9D%E6%9C%9F%E5%8C%96%22%5D%2C%5B%22%2A%2A%E7%AE%A1%E7%90%86%E5%8D%98%E4%BD%8D%2A%2A%22%2C%22%E7%B5%84%E7%B9%94%E5%8D%98%E4%BD%8D%22%2C%22%E5%80%8B%E4%BA%BA%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E5%8D%98%E4%BD%8D%22%5D%2C%5B%22%2A%2A%E4%BD%BF%E7%94%A8%E5%85%88%2A%2A%22%2C%22Admin%E5%86%85%E3%81%AEAI%E6%A9%9F%E8%83%BD%22%2C%22LumiTeach%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E5%86%85%E3%81%AEAI%E6%A9%9F%E8%83%BD%22%5D%2C%5B%22%2A%2A%E6%95%99%E5%B8%AB%E3%81%B8%E3%81%AE%E7%A7%BB%E8%BB%A2%2A%2A%22%2C%22%E6%89%80%E5%B1%9E%E6%95%99%E5%B8%AB%E3%81%B8%E3%81%AE%E5%85%B1%E6%9C%89%E3%81%8A%E3%82%88%E3%81%B3%E8%AD%B2%E6%B8%A1%E3%81%8C%E5%8F%AF%E8%83%BD%22%2C%22%E6%95%99%E5%B8%AB%E9%96%93%E3%81%AE%E5%85%B1%E6%9C%89%E3%81%8A%E3%82%88%E3%81%B3%E8%AD%B2%E6%B8%A1%E4%B8%8D%E5%8F%AF%22%5D%5D%7D]]\n\n[[callout:💡||**1クレジットの価値は同じです。** Adminとサービスのどちらも、1クレジットあたりの価格とトークン換算基準は同じです。]]\n\n### 3. AI機能別クレジット差し引き基準\n\n実際の使用トークン量に応じて機能別に差し引かれます。以下は**おおよその1回平均差し引き量**です。処理するデータ量によって、実際の1回あたりの差し引き量は変わる場合があります。\n\n[[table:%7B%22rows%22%3A%5B%5B%22AI%E6%A9%9F%E8%83%BD%22%2C%22%E8%A9%B3%E7%B4%B0%E5%8C%BA%E5%88%86%22%2C%221%E5%9B%9E%E5%B9%B3%E5%9D%87%E5%B7%AE%E3%81%97%E5%BC%95%E3%81%8D%E9%87%8F%22%2C%22%E5%88%A9%E7%94%A8%E5%8F%AF%E8%83%BD%E3%83%97%E3%83%A9%E3%83%B3%22%5D%2C%5B%22%2A%2AAI%20Make%2A%2A%EF%BC%88Activity%E7%94%9F%E6%88%90%EF%BC%89%22%2C%22%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89%22%2C%22100%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%22%2C%22Free%E4%BB%A5%E4%B8%8A%22%5D%2C%5B%22%22%2C%22%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%20%2B%20%E7%94%BB%E5%83%8F%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89%22%2C%22100%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%22%2C%22Free%E4%BB%A5%E4%B8%8A%22%5D%2C%5B%22%22%2C%22%E5%8B%95%E7%94%BB%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89%22%2C%22150%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%22%2C%22Free%E4%BB%A5%E4%B8%8A%22%5D%2C%5B%22%2A%2A%E3%83%96%E3%83%AC%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%9C%E3%83%BC%E3%83%89%2A%2A%22%2C%22Wordcloud%22%2C%223%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%22%2C%22Free%E4%BB%A5%E4%B8%8A%22%5D%2C%5B%22%22%2C%22Classification%22%2C%223%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%22%2C%22Free%E4%BB%A5%E4%B8%8A%22%5D%2C%5B%22%22%2C%22Mindmap%22%2C%225%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%22%2C%22Free%E4%BB%A5%E4%B8%8A%22%5D%2C%5B%22%2A%2ARewrite%2A%2A%EF%BC%88%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E6%A0%A1%E6%AD%A3%EF%BC%89%22%2C%22-%22%2C%221%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%22%2C%22Free%E4%BB%A5%E4%B8%8A%22%5D%2C%5B%22%2A%2AAuto-Tagging%2A%2A%EF%BC%88%E7%AE%A1%E7%90%86%E8%80%85%EF%BC%89%22%2C%22%E3%82%AB%E3%83%AA%E3%82%AD%E3%83%A5%E3%83%A9%E3%83%A0%E3%82%BF%E3%82%B0%E4%BB%98%E3%81%91%22%2C%2210%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%22%2C%22Pro%E4%BB%A5%E4%B8%8A%22%5D%2C%5B%22%22%2C%22%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%82%BF%E3%82%B0%E4%BB%98%E3%81%91%22%2C%2210%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%22%2C%22Pro%E4%BB%A5%E4%B8%8A%22%5D%5D%7D]]\n\n[[callout:📐||AI Makeの1回平均差し引き量は、**Activity 10個**の生成を基準に算定されています。差し引き基準はサービス運用データに基づき、定期的に再算定されます。]]\n\n### 4. クレジットの使用および差し引き方式\n\nLLMの特性上、入力前に正確なトークン量を把握できないため、**事前検証（予想差し引き）**と**事後精算（実際差し引き）**の2段階で処理されます。\n\n### 4-1. 事前検証\n\nAI機能を実行する時点（ボタンクリック）で、**予想使用トークン**をクレジットに換算し、残高と比較します。\n\n- 保有クレジットが不足している場合、機能を実行できません。\n\n### 4-2. 事後精算\n\n- 成果物が正常に生成されると、**実際に使用されたトークン**を基準に最終差し引きされます。\n\n- AI作業を**途中キャンセル**した場合: キャンセル時点までに生成された成果物のトークンのみ差し引かれます。\n\n- AIエンジンの**システムエラー**が発生した場合: クレジットは全額復元されます。\n\n### 5. クレジット消費順序および有効期間\n\n複数種類のクレジットを保有している場合、次の順序で消費されます。\n\n- **月次定期クレジット**\n\n- **追加付与/購入クレジット**\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E3%82%BF%E3%82%A4%E3%83%97%22%2C%22%E5%AF%BE%E8%B1%A1%22%2C%22%E7%B9%B0%E3%82%8A%E8%B6%8A%E3%81%97%22%5D%2C%5B%22%E6%9C%88%E6%AC%A1%E5%AE%9A%E6%9C%9F%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%22%2C%22%E6%95%99%E5%B8%AB%E5%80%8B%E4%BA%BA%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%22%2C%22%E5%8F%AF%E8%83%BD%22%5D%2C%5B%22%E8%BF%BD%E5%8A%A0%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%22%2C%22%E6%95%99%E5%B8%AB%E5%80%8B%E4%BA%BA%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%22%2C%22%E5%8F%AF%E8%83%BD%22%5D%5D%7D]]",
        "### 6. 管理者ガイド（組織クレジット運用）\n\n> このセクションは**上位管理者**（エージェンシー・企業・機関・コンテンツ提携先Admin）に該当します。\n\n### 6-1. Adminクレジット付与時点\n\n- **契約時点**に合意した数量を一括付与します。\n\n- 追加クレジットが必要な場合は、**別途追加契約を締結**する必要があります。\n\n- 基準日は所属会社の**契約開始日**として自動設定されます。\n\n### 6-2. 教師定期クレジット付与ポリシー\n\n- **付与日**: 契約開始日（または取引先指定日）を基準日として、毎月同じ日付の**00:00:00 (UTC)**に自動付与されます。\n\n- **付与基準日が月末の場合（29日 / 30日 / 31日）**\n\n- 該当月に基準日が存在しない場合、その月の最終日に付与されます。例: 基準日が31日の場合、3月31日 → 4月30日 → 5月31日 → 6月30日。うるう年ではない2月は2月28日に付与されます。\n\n- **月途中に入社した教師**: 認証時点で該当月の定額クレジットが即時付与され、繰り越しはされません。\n\n- **所属解除/退会した教師**: 即時に使用停止されます。\n\n- 所属解除/退会後の再加入\n\n- 同じ会社で再認証: 当月の定期クレジット付与履歴がある場合、付与されません。\n\n- 別会社で再認証: 新しい所属の定期クレジットが新規付与されます。\n\n- **付与不可:** 所属会社のAdminクレジットが不足している場合、教師の月次定期クレジットは付与されません。\n\n### 6-3. 追加クレジット申請処理\n\n### 教師が管理者に申請\n\n- 教師が自分のクレジットページで**[クレジットを申請]**ボタンをクリックすると、上位管理者が確認できます。\n\n- 管理者がAdminで**承認または却下**します。\n\n- 承認時、Admin共用プールから即時に差し引かれ、教師アカウントに付与されます。\n\n### 管理者（組織）が上位管理者に申請\n\n- Admin内に別途申請機能はなく、**契約関係上の直属上位管理者にオンライン/オフラインで申請**します。\n\n- 追加契約の進行後に付与されます。\n\n### 6-4. クレジット付与情報の修正\n\n[[table:%7B%22rows%22%3A%5B%5B%22%E9%A0%85%E7%9B%AE%22%2C%22%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC%22%2C%22%E5%82%99%E8%80%83%22%5D%2C%5B%22Admin%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E8%BF%BD%E5%8A%A0%E4%BB%98%E4%B8%8E%22%2C%22%E5%8D%B3%E6%99%82%E8%BF%BD%E5%8A%A0%E4%BB%98%E4%B8%8E%22%2C%22%E6%97%A2%E5%AD%98%E6%AE%8B%E9%AB%98%E3%81%AB%E8%BF%BD%E5%8A%A0%22%5D%2C%5B%22%E6%95%99%E5%B8%AB%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E8%BF%BD%E5%8A%A0%E4%BB%98%E4%B8%8E%22%2C%22%E5%8D%B3%E6%99%82%E8%BF%BD%E5%8A%A0%E4%BB%98%E4%B8%8E%22%2C%22%E6%97%A2%E5%AD%98%E6%AE%8B%E9%AB%98%E3%81%AB%E8%BF%BD%E5%8A%A0%22%5D%2C%5B%22%E6%95%99%E5%B8%AB%E5%AE%9A%E6%9C%9F%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E6%95%B0%E9%87%8F%E5%A4%89%E6%9B%B4%22%2C%22%E6%AC%A1%E5%9B%9E%E4%BB%98%E4%B8%8E%E6%97%A5%E3%81%8B%E3%82%89%E9%81%A9%E7%94%A8%22%2C%22-%22%5D%5D%7D]]",
        "[[table:%7B%22rows%22%3A%5B%5B%22%E5%8C%BA%E5%88%86%22%2C%22%E8%BF%94%E9%87%91%2F%E3%82%AD%E3%83%A3%E3%83%B3%E3%82%BB%E3%83%AB%22%2C%22%E6%89%80%E5%B1%9E%E8%A7%A3%E9%99%A4%2F%E9%80%80%E4%BC%9A%E6%99%82%22%5D%2C%5B%22%E5%9F%BA%E6%9C%AC%E4%BB%98%E4%B8%8E%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%22%2C%22%E4%B8%8D%E5%8F%AF%22%2C%22%E5%8D%B3%E6%99%82%E4%BD%BF%E7%94%A8%E5%81%9C%E6%AD%A2%22%5D%2C%5B%22%E8%BF%BD%E5%8A%A0%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%22%2C%22%E4%B8%8D%E5%8F%AF%22%2C%22%E5%8D%B3%E6%99%82%E4%BD%BF%E7%94%A8%E5%81%9C%E6%AD%A2%22%5D%2C%5B%22AI%E4%BD%9C%E6%A5%AD%E3%81%AE%E9%80%94%E4%B8%AD%E3%82%AD%E3%83%A3%E3%83%B3%E3%82%BB%E3%83%AB%22%2C%22%E3%82%AD%E3%83%A3%E3%83%B3%E3%82%BB%E3%83%AB%E6%99%82%E7%82%B9%E3%81%BE%E3%81%A7%E3%81%AB%E4%BD%BF%E7%94%A8%E3%81%95%E3%82%8C%E3%81%9F%E3%83%88%E3%83%BC%E3%82%AF%E3%83%B3%E5%88%86%E3%81%AF%E8%BF%94%E9%87%91%E4%B8%8D%E5%8F%AF%E3%80%81%E6%9C%AA%E5%87%A6%E7%90%86%E5%88%86%E3%81%AF%E8%BF%94%E9%82%84%22%2C%22-%22%5D%2C%5B%22%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%82%A8%E3%83%A9%E3%83%BC%22%2C%22%E6%88%90%E6%9E%9C%E7%89%A9%E3%81%8C%E6%8F%90%E4%BE%9B%E3%81%95%E3%82%8C%E3%81%AA%E3%81%84%E5%A0%B4%E5%90%88100%25%E8%BF%94%E9%87%91%22%2C%22-%22%5D%5D%7D]]"
      ],
      "cat-admin-faq": [
        "### **Q. 教師と管理者の違いは何ですか？**\n\n教師はLumiTeachサービスで教材を作成し、授業や課題を実施する役割です。管理者はAdminでカリキュラム・コンテンツ管理、メンバー管理などの管理業務を行います。1つのアカウントで教師権限と管理者権限を同時に持つことができます。この場合、サービスとAdminでそれぞれ別途、所属機関の認証を行う必要があります。\n\n### **Q. メンバーが登録申請をしました。どこで承認できますか？**\n\nAdminホームの**[主なアラート]**エリアで、登録承認待ちの件数を確認できます。**メンバー管理 > メンバー一覧**で、ステータスが待機中のメンバーの**操作 (⋯)**ボタンをクリックし、承認または却下できます。\n\n### **Q. 教師権限と管理者権限を同時に申請した場合、それぞれ別に承認する必要がありますか？**\n\nはい。教師権限と管理者権限は、それぞれ個別に承認または却下する必要があります。\n\n### **Q. ユーザーが登録する前に、あらかじめ権限を付与できますか？**\n\nはい。**メンバー管理 > メンバー一覧**右上の**[権限の事前登録]**ボタンから、登録前のアカウントを事前登録し、権限を付与できます。事前登録されたアカウントは、登録後に別途承認申請を行わず、すぐに利用できます。\n\n### **Q. 権限の事前登録時にメールアドレスを誤って入力するとどうなりますか？**\n\n事前登録したメールアドレスが実際の登録に使用したGoogleアカウントと異なる場合、自動承認は適用されず、別途登録承認申請が必要になります。権限を事前登録する際は、Googleアカウントと同じメールアドレスを正確に入力してください。\n\n### **Q. 退職した従業員のアカウントはどのように処理しますか？**\n\nメンバー管理で該当メンバーの所属を解除します。所属が解除された教師はLumiTeachの無料メンバーに切り替わり、所属が解除された管理者はAdminにアクセスできなくなります。\n\n### **Q. 管理者アカウントを恒久的に使用停止したい場合はどうしますか？**\n\n上位管理者または同僚の管理者が、メンバー管理で該当管理者アカウントを**利用停止**に設定できます。利用停止された管理者はAdminを利用できません。（教師アカウントは退会処理を使用し、教師本人が直接退会することもできます。）\n\n### **Q. 所属解除と退会（停止）の違いは何ですか？**\n\n所属解除は、該当組織との所属関係だけを解除するものです。管理者は同じアカウントで別会社への所属機関認証を申請できます。教師は無料メンバーに切り替わってサービスを引き続き利用でき、別会社所属として認証申請することもできます。退会または利用停止はアカウント自体を削除または無効化するもので、退会済みまたは利用停止中の教師/管理者はLumiTeachサービスとAdminを再び利用できなくなります。\n\n### Q. 月次定期クレジットが残っている場合、翌月に繰り越されますか？\n\nはい。毎月付与される定期クレジットの残高は、翌月にも繰り越して使用できます。\n\n### Q. クレジットが不足している場合はどうしますか？\n\n- **教師**: 自分のクレジットページで**[クレジットを申請]**ボタンをクリックし、所属管理者に追加付与を申請してください。\n\n- **管理者**: 共用プールが不足している場合は、直属の上位管理者に**追加契約**を依頼してください。\n\n### Q. AI作業を途中で停止した場合、クレジットは返金されますか？\n\nキャンセル時点までに**実際に生成された結果物のトークン分は返金されません。**\n\n### Q. AIでエラーが発生した場合はどうなりますか？\n\nAIエンジンのシステムエラーにより結果物が提供されなかった場合、**確保されたクレジットは全額復元**されます。\n\n### Q. 退会すると残りのクレジットはどうなりますか？\n\n- **教師の退会/所属解除**: 直ちに使用停止となり、残っている追加クレジットはAdmin共用プールに回収されます。\n\n- **同じ会社で再認証**: 当月に付与履歴がある場合、再付与されません。\n\n- **別会社で再認証**: 新しい所属のクレジットが新規付与されます。\n\n### Q. クレジット使用履歴はどこで確認できますか？\n\n- **教師**: 自分のクレジット管理ページで、残高と最近の使用履歴を確認できます。\n\n- **管理者**: 1. **プロフィール > 基本情報 > AIクレジット**で最近の使用履歴を確認できます。2. **所属管理 > 所属情報 > AIクレジット**タブで最近の使用履歴を確認できます。\n\n### **Q. メンバーからAIクレジット不足の依頼が来た場合、どのように処理しますか？**\n\n教師がクレジット追加を申請すると、メンバー管理一覧にアラートが表示されます。**[申請を確認]**ボタンをクリックして詳細を確認し、付与するクレジット数を選択して承認すると、組織の共用クレジットから差し引かれて即時に付与されます。ただし、一度付与したクレジットは回収できないため注意してください。"
      ]
    },
    "articleIntros": {
      "cat-admin-dashboard": "[[callout:🕑||**ダッシュボード集計時点：** ダッシュボードデータは**毎時0分**に集計されます。]]",
      "cat-admin-member-management": "> LumiTeachサービスとAdminを利用するメンバーを登録します。メンバーごとの権限を制御し、AIクレジットを管理できます。",
      "cat-admin-approval-permission": "> LumiTeach Adminとサービスを利用するには、所属会社/機関の認証手続きが必要です。管理者はAdminで登録申請を承認・却下したり、事前に所属メンバーのアカウントを登録したりできます。",
      "cat-admin-standard-management": "> LumiTeach Adminでカリキュラムおよびコンテンツを管理するための最初のステップです。",
      "cat-admin-curriculum-management": "> 機関や企業独自のカリキュラムとコンテンツをLumiTeachシステムに合わせて構造化できます。カスタマイズされたカリキュラムを通じて、ユーザーに最適なコンテンツを提供してください。",
      "cat-admin-lesson-activity": "> **授業管理**メニューは、教育カリキュラムに合った授業とアクティビティを登録・管理する機能です。登録済み授業のカリキュラム連携情報、概念キーワード、メタデータを確認・修正できます。",
      "cat-admin-lesson-bulk-upload": "> 授業の一括登録は、1つのExcelファイルで複数の授業とアクティビティをまとめて登録する機能です。授業を1つずつ直接入力するよりも、大量のコンテンツをすばやく登録できます。",
      "cat-admin-lesson-ai-make": "> AI Makeを使用すると、PDFやPPTなどの元資料をアップロードするだけで、AIが自動的に授業を生成します。生成された授業は**[確認]**タブで確認し、内容を修正した後、承認して公開できます。",
      "cat-admin-lesson-recommendation": "> カリキュラム構造に合わせて登録済みの授業をキュレーションできます。おすすめ管理に登録されたコンテンツはLumiTeachサービスのホーム画面に表示され、ユーザーがアクセスしやすくなります。",
      "cat-admin-assessment-question": "> 評価を構成する問題を作成・管理できます。",
      "cat-admin-assessment-paper": "> カリキュラムに合った問題をまとめて、体系的な評価を登録・管理できます。このように構成された評価は、LumiTeachサービス内で教師が生徒に課題やテストとして簡単に出題できます。",
      "cat-admin-report-management": "> LumiTeachサービスで通報されたコンテンツを確認し、適切な対応を行います。",
      "cat-admin-inquiry": "> LumiTeachサービスまたはAdminの利用中に問題や質問がある場合は、1:1お問い合わせメニューを利用してください。",
      "cat-admin-affiliation-release": "> 異動や退職などの理由で現在の所属を解除する必要がある場合は、所属解除手順に従ってください。",
      "cat-admin-ai-credit": "> LumiTeachのAI機能は**クレジット従量制**で運用されます。この文書では、AIクレジットの仕組み、各機能でどの程度差し引かれるか、不足した場合の対応方法を案内します。"
    }
  },
  "vi": {
    "manualTree": {
      "cat-admin-login-signup": {
        "title": "Đăng nhập và yêu cầu đăng ký",
        "description": "Cách đăng nhập vào LumiTeach Admin bằng tài khoản Google, yêu cầu quyền quản trị viên trong lần truy cập đầu tiên và thiết lập xác thực Google OTP."
      },
      "cat-admin-dashboard": {
        "title": "Bảng điều khiển trang chủ",
        "description": "Menu Trang chủ Admin tổng hợp và hiển thị dữ liệu liên quan đến người dùng và nội dung LumiTeach. Hãy dùng các chỉ số chính để khai thác LumiTeach hiệu quả hơn."
      },
      "cat-admin-member-management": {
        "title": "Quản lý thông tin thành viên",
        "description": "Đăng ký các thành viên sẽ sử dụng dịch vụ LumiTeach và Admin. Bạn có thể kiểm soát quyền của từng thành viên và quản lý Tín dụng AI."
      },
      "cat-admin-approval-permission": {
        "title": "Phê duyệt đăng ký và đăng ký trước quyền",
        "description": "Cần xác thực tổ chức để sử dụng LumiTeach Admin và dịch vụ. Quản trị viên có thể phê duyệt hoặc từ chối yêu cầu đăng ký trong Admin, hoặc đăng ký trước tài khoản thành viên."
      },
      "cat-admin-standard-management": {
        "title": "Quản lý tiêu chuẩn",
        "description": "Đây là bước đầu tiên để quản lý chương trình giảng dạy và nội dung trong LumiTeach Admin."
      },
      "cat-admin-curriculum-management": {
        "title": "Quản lý chương trình giảng dạy",
        "description": "Bạn có thể cấu trúc chương trình giảng dạy và nội dung riêng của tổ chức hoặc doanh nghiệp theo hệ thống LumiTeach. Cung cấp nội dung tối ưu cho người dùng thông qua chương trình giảng dạy tùy chỉnh."
      },
      "cat-admin-lesson-activity": {
        "title": "Quản lý bài học: Quản lý Bài học & Hoạt động",
        "description": "Menu Quản lý bài học cho phép đăng ký và quản lý các Bài học và Hoạt động phù hợp với chương trình giảng dạy. Bạn có thể kiểm tra và chỉnh sửa liên kết chương trình, từ khóa khái niệm và siêu dữ liệu của các Bài học đã đăng ký."
      },
      "cat-admin-lesson-bulk-upload": {
        "title": "Quản lý bài học: Đăng ký hàng loạt",
        "description": "Đăng ký hàng loạt Bài học cho phép đăng ký nhiều Bài học và Hoạt động cùng lúc bằng một tệp Excel. Cách này nhanh hơn so với nhập từng Bài học."
      },
      "cat-admin-lesson-ai-make": {
        "title": "Quản lý bài học: Tạo và xem xét Bài học bằng AI Make",
        "description": "Với AI Make, AI tự động tạo Bài học chỉ bằng cách tải lên tài liệu nguồn như tệp PDF hoặc PPT. Bạn có thể xem xét Bài học đã tạo trong tab Xem xét, chỉnh sửa nội dung rồi phê duyệt để xuất bản."
      },
      "cat-admin-lesson-recommendation": {
        "title": "Quản lý bài học: Quản lý đề xuất",
        "description": "Tuyển chọn các Bài học đã đăng ký theo cấu trúc chương trình giảng dạy. Nội dung được đăng ký trong Quản lý đề xuất sẽ hiển thị trên màn hình Trang chủ của dịch vụ LumiTeach để người dùng dễ truy cập hơn."
      },
      "cat-admin-assessment-question": {
        "title": "Quản lý đánh giá: Quản lý và đăng ký câu hỏi",
        "description": "Tạo và quản lý các câu hỏi cấu thành một Đánh giá."
      },
      "cat-admin-assessment-paper": {
        "title": "Quản lý đánh giá: Quản lý và đăng ký đề kiểm tra",
        "description": "Đăng ký và quản lý đề kiểm tra có cấu trúc bằng cách nhóm các câu hỏi phù hợp với chương trình giảng dạy. Giáo viên có thể giao các đề này cho học sinh dưới dạng bài tập hoặc bài kiểm tra trong LumiTeach."
      },
      "cat-admin-report-management": {
        "title": "Quản lý báo cáo",
        "description": "Kiểm tra nội dung bị báo cáo trong dịch vụ LumiTeach và thực hiện hành động phù hợp."
      },
      "cat-admin-inquiry": {
        "title": "Yêu cầu 1:1",
        "description": "Nếu gặp vấn đề hoặc có câu hỏi khi sử dụng dịch vụ LumiTeach hoặc Admin, hãy dùng menu Yêu cầu 1:1."
      },
      "cat-admin-affiliation-release": {
        "title": "Gỡ liên kết tổ chức",
        "description": "Nếu cần rời khỏi tổ chức hiện tại vì chuyển công tác, nghỉ việc hoặc lý do khác, hãy làm theo quy trình gỡ liên kết tổ chức."
      },
      "cat-admin-ai-credit": {
        "title": "Tín dụng AI",
        "description": "Các tính năng AI của LumiTeach hoạt động theo mô hình tính phí theo tín dụng. Tài liệu này giải thích cách Tín dụng AI hoạt động, tính năng nào trừ bao nhiêu tín dụng và cần làm gì khi tín dụng không đủ."
      },
      "cat-admin-faq": {
        "title": "Câu hỏi thường gặp",
        "description": "Trang này hướng dẫn các tính năng chính và quy trình xử lý cần kiểm tra trong menu Câu hỏi thường gặp."
      }
    },
    "articles": {
      "cat-admin-login-signup": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Đăng nhập và yêu cầu đăng ký",
        "desc": "Cách đăng nhập vào LumiTeach Admin bằng tài khoản Google, yêu cầu quyền quản trị viên trong lần truy cập đầu tiên và thiết lập xác thực Google OTP.",
        "note": "Nếu quản trị viên cấp trên đã phê duyệt quyền của bạn trước, bạn có thể truy cập Admin trực tiếp mà không cần quy trình yêu cầu quyền.",
        "sections": [
          "Đăng nhập",
          "Yêu cầu đăng ký",
          "Xác thực Google OTP"
        ]
      },
      "cat-admin-dashboard": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Bảng điều khiển trang chủ",
        "desc": "Menu Trang chủ Admin tổng hợp và hiển thị dữ liệu liên quan đến người dùng và nội dung LumiTeach. Hãy dùng các chỉ số chính để khai thác LumiTeach hiệu quả hơn.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Cảnh báo chính",
          "Thông tin người dùng",
          "Thông tin dịch vụ",
          "Yêu cầu 1:1"
        ]
      },
      "cat-admin-member-management": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Quản lý thông tin thành viên",
        "desc": "Đăng ký các thành viên sẽ sử dụng dịch vụ LumiTeach và Admin. Bạn có thể kiểm soát quyền của từng thành viên và quản lý Tín dụng AI.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Loại thành viên",
          "Quản lý thành viên",
          "Thành viên rời khỏi / tạm dừng sử dụng",
          "Gỡ liên kết tổ chức",
          "Kiểm tra trạng thái Tín dụng AI và cấp tín dụng"
        ]
      },
      "cat-admin-approval-permission": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Phê duyệt đăng ký và đăng ký trước quyền",
        "desc": "Cần xác thực tổ chức để sử dụng LumiTeach Admin và dịch vụ. Quản trị viên có thể phê duyệt hoặc từ chối yêu cầu đăng ký trong Admin, hoặc đăng ký trước tài khoản thành viên.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Quản lý yêu cầu phê duyệt đăng ký",
          "Đăng ký trước quyền"
        ]
      },
      "cat-admin-standard-management": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Quản lý tiêu chuẩn",
        "desc": "Đây là bước đầu tiên để quản lý chương trình giảng dạy và nội dung trong LumiTeach Admin.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Tiêu chuẩn là gì?",
          "Thiết lập lớp",
          "Thiết lập môn học",
          "Thiết lập mục"
        ]
      },
      "cat-admin-curriculum-management": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Quản lý chương trình giảng dạy",
        "desc": "Bạn có thể cấu trúc chương trình giảng dạy và nội dung riêng của tổ chức hoặc doanh nghiệp theo hệ thống LumiTeach. Cung cấp nội dung tối ưu cho người dùng thông qua chương trình giảng dạy tùy chỉnh.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Chương trình giảng dạy được dùng ở đâu?",
          "Đăng ký chương trình giảng dạy",
          "Phân loại chương trình giảng dạy bằng AI",
          "Quản lý chương trình giảng dạy"
        ]
      },
      "cat-admin-lesson-activity": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Quản lý bài học: Quản lý Bài học & Hoạt động",
        "desc": "Menu Quản lý bài học cho phép đăng ký và quản lý các Bài học và Hoạt động phù hợp với chương trình giảng dạy. Bạn có thể kiểm tra và chỉnh sửa liên kết chương trình, từ khóa khái niệm và siêu dữ liệu của các Bài học đã đăng ký.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Kiểm tra danh sách Bài học",
          "Kiểm tra chi tiết Bài học",
          "Chỉnh sửa bài học",
          "Đăng ký Bài học"
        ]
      },
      "cat-admin-lesson-bulk-upload": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Quản lý bài học: Đăng ký hàng loạt",
        "desc": "Đăng ký hàng loạt Bài học cho phép đăng ký nhiều Bài học và Hoạt động cùng lúc bằng một tệp Excel. Cách này nhanh hơn so với nhập từng Bài học.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Phương pháp đăng ký hàng loạt"
        ]
      },
      "cat-admin-lesson-ai-make": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Quản lý bài học: Tạo và xem xét Bài học bằng AI Make",
        "desc": "Với AI Make, AI tự động tạo Bài học chỉ bằng cách tải lên tài liệu nguồn như tệp PDF hoặc PPT. Bạn có thể xem xét Bài học đã tạo trong tab Xem xét, chỉnh sửa nội dung rồi phê duyệt để xuất bản.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Cách tạo Bài học bằng AI Make",
          "Xem xét và phê duyệt Bài học"
        ]
      },
      "cat-admin-lesson-recommendation": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Quản lý bài học: Quản lý đề xuất",
        "desc": "Tuyển chọn các Bài học đã đăng ký theo cấu trúc chương trình giảng dạy. Nội dung được đăng ký trong Quản lý đề xuất sẽ hiển thị trên màn hình Trang chủ của dịch vụ LumiTeach để người dùng dễ truy cập hơn.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Quản lý nội dung đề xuất",
          "Đăng ký đề xuất: chủ đề 1",
          "Đăng ký đề xuất: chủ đề 2"
        ]
      },
      "cat-admin-assessment-question": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Quản lý đánh giá: Quản lý và đăng ký câu hỏi",
        "desc": "Tạo và quản lý các câu hỏi cấu thành một Đánh giá.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Quản lý câu hỏi",
          "Đăng ký câu hỏi",
          "Đăng ký câu hỏi: từng mục",
          "Đăng ký câu hỏi: hàng loạt"
        ]
      },
      "cat-admin-assessment-paper": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Quản lý đánh giá: Quản lý và đăng ký đề kiểm tra",
        "desc": "Đăng ký và quản lý đề kiểm tra có cấu trúc bằng cách nhóm các câu hỏi phù hợp với chương trình giảng dạy. Giáo viên có thể giao các đề này cho học sinh dưới dạng bài tập hoặc bài kiểm tra trong LumiTeach.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Quản lý đề kiểm tra",
          "Đăng ký đề kiểm tra: từng mục",
          "Đăng ký đề kiểm tra: hàng loạt"
        ]
      },
      "cat-admin-report-management": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Quản lý báo cáo",
        "desc": "Kiểm tra nội dung bị báo cáo trong dịch vụ LumiTeach và thực hiện hành động phù hợp.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Danh sách nội dung bị báo cáo",
          "Kiểm tra nội dung bị báo cáo",
          "Từ chối báo cáo",
          "Vô hiệu hóa nội dung bị báo cáo",
          "🚨 Hướng dẫn và tiêu chí báo cáo nội dung"
        ]
      },
      "cat-admin-inquiry": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Yêu cầu 1:1",
        "desc": "Nếu gặp vấn đề hoặc có câu hỏi khi sử dụng dịch vụ LumiTeach hoặc Admin, hãy dùng menu Yêu cầu 1:1.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Gửi yêu cầu",
          "Kiểm tra phản hồi"
        ]
      },
      "cat-admin-affiliation-release": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Gỡ liên kết tổ chức",
        "desc": "Nếu cần rời khỏi tổ chức hiện tại vì chuyển công tác, nghỉ việc hoặc lý do khác, hãy làm theo quy trình gỡ liên kết tổ chức.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Gỡ liên kết tổ chức trong Hồ sơ"
        ]
      },
      "cat-admin-ai-credit": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Tín dụng AI",
        "desc": "Các tính năng AI của LumiTeach hoạt động theo mô hình tính phí theo tín dụng. Tài liệu này giải thích cách Tín dụng AI hoạt động, tính năng nào trừ bao nhiêu tín dụng và cần làm gì khi tín dụng không đủ.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Giới thiệu LumiTeach AI",
          "Cấp và sử dụng Tín dụng AI",
          "Quản lý Tín dụng AI",
          "Chính sách hoàn và hủy tín dụng"
        ]
      },
      "cat-admin-faq": {
        "category": "Hướng dẫn Admin LumiTeach",
        "title": "Câu hỏi thường gặp",
        "desc": "Trang này hướng dẫn các tính năng chính và quy trình xử lý cần kiểm tra trong menu Câu hỏi thường gặp.",
        "note": "Hãy kiểm tra theo tên menu và nút thực tế được dùng trên màn hình Admin.",
        "sections": [
          "Tổng quan"
        ]
      }
    },
    "articleBodies": {
      "cat-admin-login-signup": [
        "Trên màn hình Admin đầu tiên, nhấp vào nút **Tiếp tục với Google**.\n\n[[image:admin-login-signup/01.png|Nút Tiếp tục với Google trên màn hình Admin đầu tiên]]\n\nKhi chuyển đến màn hình đăng nhập Google, hãy đăng nhập bằng tài khoản Google của bạn.\n\n[[image:admin-login-signup/02.png|Màn hình đăng nhập tài khoản Google]]",
        "Nếu đây là lần đầu bạn đăng nhập vào Admin, bạn cần yêu cầu quyền để truy cập Admin. Trong popup **Yêu cầu phê duyệt quyền quản trị viên**, nhập tên và thông tin công ty/tổ chức.\n\n[[image:admin-login-signup/03.png|Popup yêu cầu phê duyệt quyền quản trị viên]]\n\n- **Tên**: Nhập tên thật của bạn.\n- **Email**: Email tài khoản Google sẽ được hiển thị tự động.\n- **Tìm kiếm công ty/tổ chức**: Nhập và tìm kiếm tên công ty hoặc tổ chức của bạn.\n\nTên công ty phải trùng khớp chính xác với tên công ty đã đăng ký trong hệ thống. Nếu tên không khớp và bạn gặp khó khăn khi gửi yêu cầu, hãy liên hệ với quản trị viên cấp trên.\n\nSau khi yêu cầu quyền, bạn chỉ có thể truy cập Admin khi quản trị viên cấp trên phê duyệt.\n\n[[callout:💡|Quản trị viên cấp trên phê duyệt trước|Nếu quản trị viên cấp trên đã **phê duyệt** quyền của bạn trước, bạn có thể truy cập Admin trực tiếp mà không cần quy trình yêu cầu quyền.]]",
        "LumiTeach Admin sử dụng xác thực hai bước Google OTP để bảo mật.\n\n### Khi đăng nhập lần đầu — Thiết lập OTP\n\nOTP chỉ cần thiết lập một lần khi đăng nhập lần đầu. Ở các lần đăng nhập sau, chỉ cần nhập mã xác thực 6 chữ số hiển thị trong ứng dụng.\n\n[[image:admin-login-signup/04.png|Màn hình thiết lập và xác thực Google OTP]]\n\n- Cài đặt ứng dụng **Google Authenticator** từ App Store hoặc Play Store.\n- Mở ứng dụng **Google Authenticator** và nhấn nút **+** ở phía dưới.\n- Chọn **Quét mã QR**, sau đó quét mã QR hiển thị trên màn hình đăng nhập Admin.\n- Nhập mã xác thực 6 chữ số hiển thị trong ứng dụng để hoàn tất thiết lập.\n\n### Các lần đăng nhập sau — Xác thực OTP\n\n- Đăng nhập bằng tài khoản Google.\n- Mở ứng dụng **Google Authenticator** và nhập mã xác thực 6 chữ số được hiển thị.\n\n[[callout:✅|Vì bảo mật, vui lòng kiểm tra các mục sau.|- Nếu không có hoạt động trong 60 phút sau khi đăng nhập, bạn sẽ tự động bị đăng xuất.\\n- Không thể đăng nhập đồng thời trên nhiều thiết bị bằng một tài khoản.\\n- Nếu rời khỏi chỗ trong thời gian dài, hãy nhớ đăng xuất.\\n- Nếu nhập sai mã OTP từ 5 lần trở lên, đăng nhập sẽ bị hạn chế trong 5 phút.]]"
      ],
      "cat-admin-dashboard": [
        "- Hiển thị các cảnh báo chính cần kiểm tra và xử lý nhanh. Nhấp vào từng mục để xem chi tiết.\n\n[[table:%7B%22rows%22%3A%5B%5B%22M%E1%BB%A5c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22S%E1%BB%91%20th%C3%A0nh%20vi%C3%AAn%20ch%E1%BB%9D%20ph%C3%AA%20duy%E1%BB%87t%20%C4%91%C4%83ng%20k%C3%BD%22%2C%22Th%C3%A0nh%20vi%C3%AAn%20%C4%91%C3%A3%20y%C3%AAu%20c%E1%BA%A7u%20x%C3%A1c%20th%E1%BB%B1c%20t%E1%BB%95%20ch%E1%BB%A9c%20%C4%91%E1%BB%83%20s%E1%BB%AD%20d%E1%BB%A5ng%20d%E1%BB%8Bch%20v%E1%BB%A5%20premium%20LumiTeach%20v%C3%A0%20qu%E1%BA%A3n%20tr%E1%BB%8B%20vi%C3%AAn%20%C4%91%C3%A3%20y%C3%AAu%20c%E1%BA%A7u%20x%C3%A1c%20th%E1%BB%B1c%20t%E1%BB%95%20ch%E1%BB%A9c%20%C4%91%E1%BB%83%20truy%20c%E1%BA%ADp%20LumiTeach%20Admin%22%5D%2C%5B%22S%E1%BB%91%20n%E1%BB%99i%20dung%20b%E1%BB%8B%20b%C3%A1o%20c%C3%A1o%22%2C%22N%E1%BB%99i%20dung%20%C4%91%C6%B0%E1%BB%A3c%20%C4%91%C4%83ng%20tr%C3%AAn%20LumiTeach%20Explore%20%C4%91%C3%A3%20%C4%91%C6%B0%E1%BB%A3c%20b%C3%A1o%20c%C3%A1o%22%5D%2C%5B%22S%E1%BB%91%20th%C3%A0nh%20vi%C3%AAn%20s%E1%BA%AFp%20h%E1%BA%BFt%20%2F%20thi%E1%BA%BFu%20t%C3%ADn%20d%E1%BB%A5ng%22%2C%22Th%C3%A0nh%20vi%C3%AAn%20thu%E1%BB%99c%20t%E1%BB%95%20ch%E1%BB%A9c%20%C4%91%C3%A3%20d%C3%B9ng%20h%E1%BA%BFt%20T%C3%ADn%20d%E1%BB%A5ng%20AI%20ho%E1%BA%B7c%20c%C3%B3%20s%E1%BB%91%20d%C6%B0%20d%C6%B0%E1%BB%9Bi%2010%25%22%5D%5D%7D]]",
        "- Khu vực thông tin người dùng hiển thị tổng số thành viên và thống kê lượt truy cập.\n\n- Tổng số thành viên (lũy kế), số thành viên mới, số thành viên đã rời khỏi\n\n> Kiểm tra xu hướng thành viên theo ngày, tháng và năm.\n\n- Số người dùng LumiTeach và số lượt truy cập Admin\n\n> Dữ liệu tổng hợp mới nhất tại thời điểm xem bảng điều khiển sẽ được hiển thị.",
        "- Bạn có thể kiểm tra tình hình sử dụng dịch vụ LumiTeach của các thành viên trong tổ chức.\n\n- Số lần bắt đầu lớp học bằng các chế độ Tương tác, Chế độ thi đấu và Bài thuyết trình\n\n[[table:%7B%22rows%22%3A%5B%5B%22Lo%E1%BA%A1i%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22T%E1%BB%B1%20h%E1%BB%8Dc%22%2C%22S%E1%BB%91%20l%E1%BA%A7n%20B%C3%A0i%20h%E1%BB%8Dc%20%C4%91%C6%B0%E1%BB%A3c%20giao%20d%C6%B0%E1%BB%9Bi%20d%E1%BA%A1ng%20B%C3%A0i%20t%E1%BA%ADp%20theo%20h%C3%ACnh%20th%E1%BB%A9c%20C%C3%A1%20nh%C3%A2n%2C%20Th%E1%BB%AD%20th%C3%A1ch%20ho%E1%BA%B7c%20Th%E1%BA%BB%20h%E1%BB%8Dc%20t%E1%BA%ADp%22%5D%2C%5B%22%C4%90%C3%A1nh%20gi%C3%A1%22%2C%22S%E1%BB%91%20l%E1%BA%A7n%20%C4%90%C3%A1nh%20gi%C3%A1%20%C4%91%C6%B0%E1%BB%A3c%20giao%20d%C6%B0%E1%BB%9Bi%20d%E1%BA%A1ng%20B%C3%A0i%20t%E1%BA%ADp%22%5D%5D%7D]]\n\n- Số lần thành viên trong tổ chức tạo và lưu Bài học.\n\n- Thời lượng trung bình cho mỗi lớp học\n\n> 📌 **Tiêu chí tổng hợp - Tương tác · Chế độ thi đấu**: Chỉ các lớp có ít nhất 1 học sinh tham gia mới được tính vào thời lượng trung bình. - **Bài thuyết trình**: Thời gian từ Start Lesson đến End Lesson được tính vào trung bình.",
        "- Bạn có thể kiểm tra các yêu cầu 1:1 được gửi gần đây nhất."
      ],
      "cat-admin-member-management": [
        "[[table:%7B%22rows%22%3A%5B%5B%22%22%2C%22%2A%2AGi%C3%A1o%20vi%C3%AAn%2A%2A%22%2C%22%2A%2AQu%E1%BA%A3n%20tr%E1%BB%8B%20vi%C3%AAn%2A%2A%22%5D%2C%5B%22%C4%90%E1%BB%91i%20t%C6%B0%E1%BB%A3ng%20s%E1%BB%AD%20d%E1%BB%A5ng%22%2C%22S%E1%BB%AD%20d%E1%BB%A5ng%20d%E1%BB%8Bch%20v%E1%BB%A5%20LumiTeach%22%2C%22S%E1%BB%AD%20d%E1%BB%A5ng%20LumiTeach%20Admin%22%5D%2C%5B%22Vai%20tr%C3%B2%20ch%C3%ADnh%22%2C%22T%E1%BA%A1o%20t%C3%A0i%20li%E1%BB%87u%20gi%E1%BA%A3ng%20d%E1%BA%A1y%20v%C3%A0%20ti%E1%BA%BFn%20h%C3%A0nh%20B%C3%A0i%20h%E1%BB%8Dc%2FB%C3%A0i%20t%E1%BA%ADp%22%2C%22Qu%E1%BA%A3n%20l%C3%BD%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%20v%C3%A0%20n%E1%BB%99i%20dung%2C%20qu%E1%BA%A3n%20l%C3%BD%20th%C3%A0nh%20vi%C3%AAn%20v%C3%A0%20th%E1%BB%B1c%20hi%E1%BB%87n%20c%C3%A1c%20c%C3%B4ng%20vi%E1%BB%87c%20qu%E1%BA%A3n%20tr%E1%BB%8B%20kh%C3%A1c%22%5D%5D%7D]]\n\nĐể sử dụng dịch vụ cao cấp của LumiTeach và Admin, cần hoàn tất **xác thực tổ chức**.\n\n[[callout:💡||Nếu cần đảm nhiệm cả vai trò giáo viên và quản trị viên, hãy thực hiện xác thực tổ chức riêng trên dịch vụ và trên Admin.]]",
        "Bạn có thể xem và quản lý danh sách thành viên. Để kiểm tra thông tin chi tiết của một thành viên cụ thể, nhấp **Thao tác (⋯)** > **[Chi tiết thông tin thành viên]**.\n\nCác thao tác có thể thực hiện với **thành viên giáo viên** như sau.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Thao%20t%C3%A1c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22Ph%C3%AA%20duy%E1%BB%87t%2Ft%E1%BB%AB%20ch%E1%BB%91i%20%C4%91%C4%83ng%20k%C3%BD%22%2C%22Ph%C3%AA%20duy%E1%BB%87t%20ho%E1%BA%B7c%20t%E1%BB%AB%20ch%E1%BB%91i%20%C4%91%C4%83ng%20k%C3%BD%20c%E1%BB%A7a%20th%C3%A0nh%20vi%C3%AAn%20gi%C3%A1o%20vi%C3%AAn%20%C4%91%C3%A3%20y%C3%AAu%20c%E1%BA%A7u%20x%C3%A1c%20th%E1%BB%B1c%20t%E1%BB%95%20ch%E1%BB%A9c.%22%5D%2C%5B%22R%C3%BAt%20kh%E1%BB%8Fi%20d%E1%BB%8Bch%20v%E1%BB%A5%22%2C%22X%E1%BB%AD%20l%C3%BD%20cho%20th%C3%A0nh%20vi%C3%AAn%20gi%C3%A1o%20vi%C3%AAn%20r%C3%BAt%20kh%E1%BB%8Fi%20d%E1%BB%8Bch%20v%E1%BB%A5%20LumiTeach.%22%5D%2C%5B%22Xem%20chi%20ti%E1%BA%BFt%20th%C3%B4ng%20tin%20th%C3%A0nh%20vi%C3%AAn%22%2C%22Ki%E1%BB%83m%20tra%20th%C3%B4ng%20tin%20c%C6%A1%20b%E1%BA%A3n%20v%C3%A0%20l%E1%BB%8Bch%20s%E1%BB%AD%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20c%E1%BB%A7a%20th%C3%A0nh%20vi%C3%AAn.%22%5D%2C%5B%22H%E1%BB%A7y%20li%C3%AAn%20k%E1%BA%BFt%20t%E1%BB%95%20ch%E1%BB%A9c%22%2C%22H%E1%BB%A7y%20li%C3%AAn%20k%E1%BA%BFt%20t%E1%BB%95%20ch%E1%BB%A9c%20do%20ngh%E1%BB%89%20vi%E1%BB%87c%2C%20thay%20%C4%91%E1%BB%95i%20t%E1%BB%95%20ch%E1%BB%A9c%20ho%E1%BA%B7c%20l%C3%BD%20do%20t%C6%B0%C6%A1ng%20t%E1%BB%B1.%22%5D%2C%5B%22Ki%E1%BB%83m%20tra%20tr%E1%BA%A1ng%20th%C3%A1i%20T%C3%ADn%20d%E1%BB%A5ng%20AI%20v%C3%A0%20c%E1%BA%A5p%20th%C3%AAm%20t%C3%ADn%20d%E1%BB%A5ng%22%2C%22Ki%E1%BB%83m%20tra%20s%E1%BB%91%20d%C6%B0%20t%C3%ADn%20d%E1%BB%A5ng%20c%E1%BB%A7a%20th%C3%A0nh%20vi%C3%AAn%20v%C3%A0%20c%E1%BA%A5p%20th%C3%AAm%20t%C3%ADn%20d%E1%BB%A5ng.%22%5D%5D%7D]]\n\nCác thao tác có thể thực hiện với **thành viên quản trị viên** như sau.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Thao%20t%C3%A1c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22Ph%C3%AA%20duy%E1%BB%87t%2Ft%E1%BB%AB%20ch%E1%BB%91i%20%C4%91%C4%83ng%20k%C3%BD%22%2C%22Ph%C3%AA%20duy%E1%BB%87t%20ho%E1%BA%B7c%20t%E1%BB%AB%20ch%E1%BB%91i%20%C4%91%C4%83ng%20k%C3%BD%20c%E1%BB%A7a%20th%C3%A0nh%20vi%C3%AAn%20qu%E1%BA%A3n%20tr%E1%BB%8B%20vi%C3%AAn%20%C4%91%C3%A3%20y%C3%AAu%20c%E1%BA%A7u%20x%C3%A1c%20th%E1%BB%B1c%20t%E1%BB%95%20ch%E1%BB%A9c.%22%5D%2C%5B%22T%E1%BA%A1m%20d%E1%BB%ABng%20s%E1%BB%AD%20d%E1%BB%A5ng%22%2C%22T%E1%BA%A1m%20d%E1%BB%ABng%20quy%E1%BB%81n%20truy%20c%E1%BA%ADp%20Admin%20c%E1%BB%A7a%20th%C3%A0nh%20vi%C3%AAn%20qu%E1%BA%A3n%20tr%E1%BB%8B%20vi%C3%AAn.%22%5D%2C%5B%22Xem%20chi%20ti%E1%BA%BFt%20th%C3%B4ng%20tin%20th%C3%A0nh%20vi%C3%AAn%22%2C%22Ki%E1%BB%83m%20tra%20th%C3%B4ng%20tin%20c%C6%A1%20b%E1%BA%A3n%20v%C3%A0%20l%E1%BB%8Bch%20s%E1%BB%AD%20ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20c%E1%BB%A7a%20th%C3%A0nh%20vi%C3%AAn.%22%5D%2C%5B%22H%E1%BB%A7y%20li%C3%AAn%20k%E1%BA%BFt%20t%E1%BB%95%20ch%E1%BB%A9c%22%2C%22H%E1%BB%A7y%20li%C3%AAn%20k%E1%BA%BFt%20t%E1%BB%95%20ch%E1%BB%A9c%20do%20ngh%E1%BB%89%20vi%E1%BB%87c%2C%20thay%20%C4%91%E1%BB%95i%20t%E1%BB%95%20ch%E1%BB%A9c%20ho%E1%BA%B7c%20l%C3%BD%20do%20t%C6%B0%C6%A1ng%20t%E1%BB%B1.%22%5D%2C%5B%22Ki%E1%BB%83m%20tra%20tr%E1%BA%A1ng%20th%C3%A1i%20T%C3%ADn%20d%E1%BB%A5ng%20AI%22%2C%22Ki%E1%BB%83m%20tra%20s%E1%BB%91%20d%C6%B0%20t%C3%ADn%20d%E1%BB%A5ng%20c%E1%BB%A7a%20th%C3%A0nh%20vi%C3%AAn.%22%5D%5D%7D]]",
        "- Thành viên giáo viên đã rút khỏi dịch vụ không thể sử dụng dịch vụ LumiTeach.\n\n- Thành viên quản trị viên bị tạm dừng không thể sử dụng Admin.\n\n[[callout:💡||Thành viên giáo viên có thể tự rút khỏi dịch vụ.\\nĐối với thành viên quản trị viên, quản trị viên cấp trên hoặc quản trị viên ngang cấp phải tạm dừng quyền sử dụng.]]",
        "Bạn có thể hủy liên kết tổ chức của một thành viên cụ thể do nghỉ việc, thay đổi tổ chức hoặc lý do tương tự.\n\n- **Thành viên giáo viên** bị hủy liên kết tổ chức sẽ chuyển thành thành viên miễn phí của dịch vụ LumiTeach.\n\n- **Thành viên quản trị viên** bị hủy liên kết tổ chức sẽ không thể truy cập Admin nữa.",
        "Nếu có thành viên yêu cầu cấp thêm Tín dụng AI, yêu cầu sẽ hiển thị trong danh sách quản lý thành viên. Nhấp nút **[Kiểm tra yêu cầu]** để xem nội dung yêu cầu.\n\n**Phê duyệt cấp thêm**\n\nChọn số lượng tín dụng cần cấp thêm và phê duyệt. Số lượng đã chọn sẽ được trừ khỏi quỹ tín dụng dùng chung của công ty/tổ chức trực thuộc và được cấp cho tài khoản giáo viên đã yêu cầu.\n\n[[callout:⚠️||Không thể thu hồi tín dụng sau khi đã cấp. Hãy kiểm tra kỹ số lượng trước khi cấp.]]\n\n**Từ chối cấp thêm**\n\nSau khi xem xét nội dung yêu cầu, bạn có thể từ chối nếu khó phê duyệt."
      ],
      "cat-admin-approval-permission": [
        "- Trong khu vực **[Cảnh báo chính]** trên trang chủ Admin, kiểm tra số lượng yêu cầu đăng ký đang chờ phê duyệt.\n\n- Đi tới **Quản lý thành viên > Danh sách thành viên**.\n\n- Với thành viên có quyền/trạng thái là Đang chờ, nhấp nút **Thao tác (⋯)** để phê duyệt hoặc từ chối.\n\n[[callout:✅||Một tài khoản có thể yêu cầu riêng quyền giáo viên và quyền quản trị viên. Hãy phê duyệt hoặc từ chối từng quyền giáo viên và quản trị viên riêng biệt.]]",
        "Trước khi người dùng đăng ký, bạn có thể đăng ký trước tài khoản và cấp quyền. Tài khoản đã được đăng ký trước có thể sử dụng dịch vụ ngay sau khi đăng ký mà không cần yêu cầu phê duyệt riêng.\n\nNhấp nút **[Đăng ký trước quyền]** ở góc trên bên phải của **Quản lý thành viên > Danh sách thành viên** để bắt đầu.\n\n**Đăng ký hàng loạt**\n\nBạn có thể đăng ký nhiều tài khoản cùng lúc với cùng tổ chức trực thuộc và quyền.\n\n- Nhập email của tài khoản giáo viên hoặc quản trị viên cần đăng ký.\n\n- Khi nhập nhiều tài khoản, hãy phân tách bằng dấu cách, phím Enter hoặc dấu phẩy.\n\n[[image:admin-approval-permission/01.png|Ví dụ màn hình]]\n\n**Đăng ký riêng lẻ**\n\nBạn có thể đăng ký nhiều tài khoản cùng lúc với tổ chức trực thuộc và quyền khác nhau.\n\n- Nhập email của tài khoản giáo viên hoặc quản trị viên cần đăng ký.\n\n- Thiết lập riêng tổ chức trực thuộc và quyền cho từng tài khoản.\n\n> 📌 Có thể đăng ký tối đa 50 tài khoản mỗi lần.\n\n> ⚠️ Email đã đăng ký trước phải trùng với tài khoản Google dùng để đăng ký thực tế thì mới có thể sử dụng ngay mà không cần yêu cầu phê duyệt. Nếu email khác nhau, cần thực hiện quy trình phê duyệt riêng."
      ],
      "cat-admin-standard-management": [
        "Trong Quản lý tiêu chuẩn, bạn định nghĩa **Lớp, Môn học và Loại mục**. Thông tin được đăng ký tại đây sẽ được sử dụng trên toàn bộ LumiTeach Admin và dịch vụ.",
        "Đăng ký thông tin Lớp sẽ được sử dụng trong dịch vụ LumiTeach.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tr%C6%B0%E1%BB%9Dng%22%2C%22M%C3%B4%20t%E1%BA%A3%22%2C%22V%C3%AD%20d%E1%BB%A5%22%5D%2C%5B%22%60Education_Lv%60%22%2C%22T%C3%AAn%20l%E1%BB%9Bp%22%2C%22L%E1%BB%9Bp%201%2C%20L%E1%BB%9Bp%202%2C%20L%E1%BB%9Bp%2012%22%5D%2C%5B%22%60Education_Lv_ID%60%22%2C%22ID%20duy%20nh%E1%BA%A5t%20t%C6%B0%C6%A1ng%20%E1%BB%A9ng%20v%E1%BB%9Bi%20L%E1%BB%9Bp%22%2C%22L%E1%BB%9Bp%2012%20%E2%86%92%20%6012%60%22%5D%5D%7D]]\n\n> 📌 Phạm vi thiết lập `Education_Lv_ID` là **K-12**, và không thể sử dụng ID trùng lặp.",
        "Đăng ký thông tin Môn học sẽ được sử dụng trong dịch vụ LumiTeach.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tr%C6%B0%E1%BB%9Dng%22%2C%22M%C3%B4%20t%E1%BA%A3%22%2C%22V%C3%AD%20d%E1%BB%A5%22%5D%2C%5B%22%60Subject_title%60%22%2C%22T%C3%AAn%20m%C3%B4n%20h%E1%BB%8Dc%22%2C%22To%C3%A1n%2C%20Ti%E1%BA%BFng%20Anh%2C%20Khoa%20h%E1%BB%8Dc%22%5D%5D%7D]]",
        "Loại mục là từng thành phần cấu tạo nên chương trình giảng dạy.\n\n> Ví dụ: cấp học, lớp, đơn vị lớn, đơn vị nhỏ, tiêu chuẩn thành tích, lĩnh vực/chủ đề, v.v.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tr%C6%B0%E1%BB%9Dng%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22%60Item_Title%60%22%2C%22T%C3%AAn%20th%C3%A0nh%20ph%E1%BA%A7n%20c%E1%BB%A7a%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%22%5D%2C%5B%22%60Th%E1%BB%A9%20t%E1%BB%B1%60%22%2C%22Thi%E1%BA%BFt%20l%E1%BA%ADp%20theo%20th%E1%BB%A9%20b%E1%BA%ADc%20c%E1%BB%A7a%20c%E1%BA%A5u%20tr%C3%BAc%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y.%22%5D%2C%5B%22%60Auto-Tagging%60%22%2C%22%C4%90%C3%A1nh%20d%E1%BA%A5u%20cho%20c%C3%A1c%20m%E1%BB%A5c%20kh%C3%B4ng%20thu%E1%BB%99c%20th%E1%BB%A9%20b%E1%BA%ADc%20v%C3%A0%20%C4%91%C6%B0%E1%BB%A3c%20d%C3%B9ng%20l%C3%A0m%20si%C3%AAu%20d%E1%BB%AF%20li%E1%BB%87u%20c%E1%BB%A7a%20n%E1%BB%99i%20dung.%22%5D%5D%7D]]\n\n[[callout:💡||Thứ tự của Loại mục phải phản ánh cấu trúc thứ bậc của chương trình giảng dạy. Với các mục không nằm trong thứ bậc, chẳng hạn như độ khó hoặc thẻ loại, hãy chọn **Auto-Tagging** để sử dụng làm siêu dữ liệu.]]"
      ],
      "cat-admin-curriculum-management": [
        "Chương trình giảng dạy được đăng ký trong Admin sẽ được liên kết theo thời gian thực và hiển thị trong menu **Chương trình giảng dạy** của dịch vụ người dùng. Sau khi cấu trúc chương trình giảng dạy, hãy tạo Bài học và Đánh giá phù hợp để cung cấp tài liệu giảng dạy cho giáo viên trực thuộc.\n\n### Định nghĩa thuật ngữ\n\n[[table:%7B%22rows%22%3A%5B%5B%22Thu%E1%BA%ADt%20ng%E1%BB%AF%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%22%2C%22Ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%20do%20doanh%20nghi%E1%BB%87p%20ho%E1%BA%B7c%20t%E1%BB%95%20ch%E1%BB%A9c%20s%E1%BB%9F%20h%E1%BB%AFu%22%5D%2C%5B%22%2A%2ASubject%2A%2A%22%2C%22Ph%C3%A2n%20lo%E1%BA%A1i%20m%C3%B4n%20h%E1%BB%8Dc%20%28v%C3%AD%20d%E1%BB%A5%3A%20To%C3%A1n%2C%20Khoa%20h%E1%BB%8Dc%2C%20Ti%E1%BA%BFng%20Anh%29%22%5D%2C%5B%22%2A%2AEducation%20Level%2A%2A%22%2C%22Giai%20%C4%91o%E1%BA%A1n%20h%E1%BB%8Dc%20t%E1%BA%ADp%20ho%E1%BA%B7c%20l%E1%BB%9Bp%22%5D%2C%5B%22%2A%2AItem%20Type%2A%2A%22%2C%22Lo%E1%BA%A1i%20d%C3%B9ng%20%C4%91%E1%BB%83%20ph%C3%A2n%20bi%E1%BB%87t%20c%C3%A1c%20th%C3%A0nh%20ph%E1%BA%A7n%20v%C3%A0%20%C4%91%E1%BA%B7c%20%C4%91i%E1%BB%83m%20c%E1%BA%A5u%20th%C3%A0nh%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%20%28v%C3%AD%20d%E1%BB%A5%3A%20ti%C3%AAu%20chu%E1%BA%A9n%20th%C3%A0nh%20t%C3%ADch%2C%20%C4%91%C6%A1n%20v%E1%BB%8B%20b%C3%A0i%20h%E1%BB%8Dc%2C%20c%E1%BA%A5p%20h%E1%BB%8Dc%29%22%5D%2C%5B%22%2A%2AItem%2A%2A%22%2C%22D%E1%BB%AF%20li%E1%BB%87u%20th%E1%BB%B1c%20t%E1%BA%BF%20theo%20t%E1%BB%ABng%20Item%20Type%20%28v%C3%AD%20d%E1%BB%A5%3A%20%5C%22C%C3%B3%20th%E1%BB%83%20c%E1%BB%99ng%20c%C3%A1c%20s%E1%BB%91%20c%C3%B3%20ba%20ch%E1%BB%AF%20s%E1%BB%91%20kh%C3%B4ng%20nh%E1%BB%9B%5C%22%29%22%5D%5D%7D]]",
        "Đăng ký chương trình giảng dạy được thực hiện theo thứ tự **Step 1: Thông tin cơ bản → Step 2: Nhập mục**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22B%C6%B0%E1%BB%9Bc%22%2C%22M%E1%BB%A5c%20nh%E1%BA%ADp%22%5D%2C%5B%22%2A%2AStep%201%3A%20Th%C3%B4ng%20tin%20c%C6%A1%20b%E1%BA%A3n%2A%2A%22%2C%22T%C3%AAn%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%2C%20m%C3%B4n%20h%E1%BB%8Dc%2C%20nh%C3%A0%20ph%C3%A1t%20h%C3%A0nh%2C%20phi%C3%AAn%20b%E1%BA%A3n%2C%20ghi%20ch%C3%BA%2Fm%C3%B4%20t%E1%BA%A3%2C%20v.v.%22%5D%2C%5B%22%2A%2AStep%202%3A%20M%E1%BB%A5c%2A%2A%22%2C%22Nh%E1%BA%ADp%20d%E1%BB%AF%20li%E1%BB%87u%20th%E1%BB%B1c%20t%E1%BA%BF%20theo%20t%E1%BB%ABng%20Item%20Type%20v%C3%A0%20thi%E1%BA%BFt%20l%E1%BA%ADp%20c%E1%BA%A5u%20tr%C3%BAc%20th%E1%BB%A9%20b%E1%BA%ADc%20%28SmartLevel%29%22%5D%5D%7D]]\n\n### Step 1: Nhập thông tin cơ bản\n\nNhập thông tin cơ bản của chương trình giảng dạy.\n\n[[table:%7B%22rows%22%3A%5B%5B%22M%E1%BB%A5c%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22T%C3%AAn%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%22%2C%22%E2%9C%85%22%2C%22T%C3%AAn%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%20%C4%91%E1%BB%83%20gi%C3%A1o%20vi%C3%AAn%20c%C3%B3%20th%E1%BB%83%20nh%E1%BA%ADn%20bi%E1%BA%BFt%20trong%20d%E1%BB%8Bch%20v%E1%BB%A5%22%5D%2C%5B%22M%C3%B4n%20h%E1%BB%8Dc%22%2C%22%E2%9C%85%22%2C%22Ch%E1%BB%8Dn%20trong%20c%C3%A1c%20m%C3%B4n%20h%E1%BB%8Dc%20%C4%91%C3%A3%20%C4%91%C6%B0%E1%BB%A3c%20%C4%91%C4%83ng%20k%C3%BD%20tr%C6%B0%E1%BB%9Bc%20%E1%BB%9F%20Qu%E1%BA%A3n%20l%C3%BD%20ti%C3%AAu%20chu%E1%BA%A9n%22%5D%2C%5B%22Nh%C3%A0%20ph%C3%A1t%20h%C3%A0nh%22%2C%22%22%2C%22T%C3%AAn%20c%C3%B4ng%20ty%20ho%E1%BA%B7c%20t%E1%BB%95%20ch%E1%BB%A9c%20qu%E1%BA%A3n%20l%C3%BD%20%C4%91%C3%A3%20ph%C3%A1t%20h%C3%A0nh%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%22%5D%2C%5B%22Phi%C3%AAn%20b%E1%BA%A3n%22%2C%22%22%2C%22N%C4%83m%20ph%C3%A1t%20h%C3%A0nh%20ho%E1%BA%B7c%20phi%C3%AAn%20b%E1%BA%A3n%20c%E1%BB%A7a%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%22%5D%2C%5B%22M%C3%B4%20t%E1%BA%A3%22%2C%22%22%2C%22M%C3%B4%20t%E1%BA%A3%20b%E1%BB%95%20sung%20v%E1%BB%81%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%22%5D%5D%7D]]\n\n[[image:admin-curriculum-management/03.png|Ví dụ màn hình]]\n\n### Step 2: Nhập mục\n\nItem là đơn vị dữ liệu thực tế cấu thành chương trình giảng dạy. Môn học chi tiết, tên đơn vị bài học và tiêu chuẩn thành tích là ví dụ về Item.\n\n[[table:%7B%22rows%22%3A%5B%5B%22T%C3%AAn%20c%E1%BB%99t%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22%2A%2AItem_content%2A%2A%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22N%E1%BB%99i%20dung%20th%E1%BB%B1c%20t%E1%BA%BF%20c%E1%BB%A7a%20Item.%22%5D%2C%5B%22%2A%2AhumanCodingScheme%2A%2A%22%2C%22T%C3%B9y%20ch%E1%BB%8Dn%22%2C%22M%C3%A3%20ch%C3%ADnh%20th%E1%BB%A9c%20%C4%91%C6%B0%E1%BB%A3c%20s%E1%BB%AD%20d%E1%BB%A5ng%20trong%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y.%20%28V%C3%AD%20d%E1%BB%A5%3A%20%60A.1%60%29%22%5D%2C%5B%22%2A%2Asmartlevel%2A%2A%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22S%E1%BB%91%20th%E1%BB%83%20hi%E1%BB%87n%20th%E1%BB%A9%20b%E1%BA%ADc%20tr%C3%AAn-d%C6%B0%E1%BB%9Bi%20gi%E1%BB%AFa%20c%C3%A1c%20Item.%22%5D%2C%5B%22%2A%2Aitemtype_title%2A%2A%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Lo%E1%BA%A1i%20c%E1%BB%A7a%20Item%20t%C6%B0%C6%A1ng%20%E1%BB%A9ng.%20%28V%C3%AD%20d%E1%BB%A5%3A%20c%E1%BA%A5p%20h%E1%BB%8Dc%2C%20l%E1%BB%9Bp%2C%20h%E1%BB%8Dc%20k%E1%BB%B3%2C%20%C4%91%C6%A1n%20v%E1%BB%8B%20l%E1%BB%9Bn%2C%20%C4%91%C6%A1n%20v%E1%BB%8B%20nh%E1%BB%8F%2C%20ti%C3%AAu%20chu%E1%BA%A9n%20th%C3%A0nh%20t%C3%ADch%29%22%5D%2C%5B%22%2A%2AeducationLevel%2A%2A%22%2C%22T%C3%B9y%20ch%E1%BB%8Dn%22%2C%22M%C3%A3%20l%E1%BB%9Bp%20m%C3%A0%20Item%20t%C6%B0%C6%A1ng%20%E1%BB%A9ng%20thu%E1%BB%99c%20v%E1%BB%81.%20%28V%C3%AD%20d%E1%BB%A5%3A%20%6011%60%20%E2%86%92%20L%E1%BB%9Bp%2011%29%22%5D%5D%7D]]\n\n[[image:admin-curriculum-management/01.png|Ví dụ màn hình]]\n\n[[callout:⚠️||**Nếu mục bắt buộc bị bỏ trống hoặc** `**itemtype_title**` **khác với tên đã được đăng ký trước trong Quản lý tiêu chuẩn, lỗi sẽ xảy ra khi tải lên.**\\nHãy kiểm tra kỹ trước khi tải lên.]]\n\n### Cấu trúc thứ bậc (SmartLevel) là gì?\n\n`smartlevel` là cột quan trọng biểu thị mối quan hệ cha-con giữa các Item bằng số. Các cấp được phân tách bằng dấu `.` (dấu chấm), và độ sâu của số thể hiện thứ bậc.\n\n[[callout:📌||Một mục con chỉ được nhận diện khi bao gồm số của mục cha. Không cho phép nhập trùng số `smartlevel`, nhập mục con không có mục cha hoặc tạo cấu trúc vòng lặp.]]\n\n### Tải xuống/nhập mẫu\n\n- Nhấp nút **[Nhập]** ở góc trên bên phải của trang đăng ký hàng loạt.\n\n- Nhấp nút **[Tải xuống mẫu]** để tải xuống mẫu Excel.\n\n- Sau khi hoàn thành mẫu, nhấp lại **[Nhập]** để tải tệp lên.\n\n### Lưu tạm thời\n\n- Nếu cần dừng giữa chừng, bạn có thể lưu tạm thời.\n\n- Nhấp nút **[Lưu tạm thời]** ở góc trên bên phải.\n\n[[callout:⚠️||LumiTeach Admin **không tự động lưu các thay đổi của tệp** trong khi bạn đang chuẩn bị dữ liệu đăng ký hàng loạt.]]",
        "Sử dụng tính năng Phân loại AI, bạn có thể tự động sắp xếp mẫu nhập mục chỉ bằng cách đính kèm tài liệu chương trình giảng dạy.\n\n- Nhấp nút **[Phân loại AI]** ở góc trên bên phải của màn hình Step 2.\n\n- Đính kèm tài liệu chương trình giảng dạy muốn đăng ký và nhấp nút **[Đăng ký]**.\n\n[[image:admin-curriculum-management/02.png|Ví dụ màn hình]]\n\n[[callout:⚠️||Nếu đã có nội dung được nhập trong Step 2, nội dung đó sẽ bị thay thế bằng kết quả phân tích AI và không thể khôi phục. Tính năng Phân loại AI là công cụ hỗ trợ tạo bản nháp mẫu đăng ký chương trình giảng dạy. Kết quả do AI tạo có thể chứa lỗi, vì vậy hãy xem xét kỹ nội dung trước khi phê duyệt.]]",
        "Chương trình giảng dạy đã đăng ký hoàn tất có thể được kiểm tra và quản lý bằng cách nhấp nút **[Chi tiết]**.\n\n**Chuyển đổi kích hoạt/không kích hoạt**\n\n[[table:%7B%22rows%22%3A%5B%5B%22Tr%E1%BA%A1ng%20th%C3%A1i%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22%2A%2AK%C3%ADch%20ho%E1%BA%A1t%2A%2A%22%2C%22Ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%20%C4%91%C6%B0%E1%BB%A3c%20hi%E1%BB%83n%20th%E1%BB%8B%20trong%20d%E1%BB%8Bch%20v%E1%BB%A5%20LumiTeach%2C%20v%C3%A0%20ng%C6%B0%E1%BB%9Di%20d%C3%B9ng%20c%C3%B3%20th%E1%BB%83%20xem%20c%C5%A9ng%20nh%C6%B0%20s%E1%BB%AD%20d%E1%BB%A5ng%20n%E1%BB%99i%20dung.%22%5D%2C%5B%22%2A%2AKh%C3%B4ng%20k%C3%ADch%20ho%E1%BA%A1t%2A%2A%22%2C%22Ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%20v%C3%A0%20n%E1%BB%99i%20dung%20B%C3%A0i%20h%E1%BB%8Dc%2F%C4%90%C3%A1nh%20gi%C3%A1%20%C4%91%C6%B0%E1%BB%A3c%20li%C3%AAn%20k%E1%BA%BFt%20s%E1%BA%BD%20kh%C3%B4ng%20hi%E1%BB%83n%20th%E1%BB%8B%20trong%20d%E1%BB%8Bch%20v%E1%BB%A5%20LumiTeach.%22%5D%5D%7D]]\n\nCó thể chỉnh sửa thông tin cơ bản và dữ liệu Item của chương trình giảng dạy bất cứ lúc nào."
      ],
      "cat-admin-lesson-activity": [
        "Khi vào menu Quản lý bài học, bạn có thể xem danh sách các Bài học đã đăng ký.",
        "Nhấp vào tên Bài học trong danh sách hoặc nhấp nút thông tin chi tiết ở bên phải để mở hộp thoại thông tin chi tiết của Bài học đó.\n\nTrong hộp thoại thông tin chi tiết, bạn có thể kiểm tra các nội dung sau.\n\n**Thông tin cơ bản (bảng bên trái)**\n\n- **Quốc gia, tên công ty**: Tổ chức/công ty mà Bài học thuộc về\n\n- **Item ID**: Mục chi tiết của chương trình giảng dạy được liên kết\n\n- **Chương trình giảng dạy**: Chương trình giảng dạy được liên kết\n\n- **Lớp**\n\n- **Tên Bài học**\n\n- **Thứ tự Bài học**: Thứ tự của Bài học trong chương trình giảng dạy\n\n**Khái niệm và tiêu chuẩn (bảng phía trên bên phải)**\n\n- **Khái niệm**: Danh sách từ khóa khái niệm chính được đề cập trong Bài học này\n\n- **Siêu dữ liệu**: Các mục siêu dữ liệu đã đăng ký trong Quản lý tiêu chuẩn\n\n**Hình thu nhỏ Bài học (bảng phía dưới bên phải)**\n\n- Nếu không đăng ký hình ảnh riêng, **màn hình Hoạt động đầu tiên của trang 1 sẽ tự động được đặt làm hình thu nhỏ** khi lưu hoặc phê duyệt.\n\n- Nếu hình ảnh được tải lên trực tiếp, hình ảnh đó sẽ được giữ nguyên mà không tự động cập nhật.",
        "Nhấp nút **Edit Lesson** ở cuối hộp thoại thông tin chi tiết để chuyển đến màn hình chỉnh sửa Bài học.\n\nTrên màn hình chỉnh sửa, bạn có thể thực hiện các thao tác sau.\n\n- Chỉnh sửa nội dung Hoạt động trong Bài học\n\n- Thay đổi thứ tự Hoạt động\n\n- Thêm Hoạt động mới\n\n- Lưu nội dung đã tạo",
        "Nhấp nút đăng ký ở góc trên bên phải của màn hình danh sách để đăng ký Bài học mới.\n\nCó hai phương thức đăng ký dưới đây. Hãy tham khảo hướng dẫn chi tiết cho từng phương thức.\n\n- Đăng ký hàng loạt\n\n- AI Make"
      ],
      "cat-admin-lesson-bulk-upload": [
        "### Bước 1: Tải xuống mẫu Excel\n\nTrên trang Admin, đi tới **màn hình đăng ký Bài học hàng loạt**, sau đó nhấp **Nhập > Tải xuống mẫu** để tải tệp Excel.\n\n⚠️ Hãy sử dụng đúng mẫu được cung cấp. Nếu tự ý thêm hoặc xóa cột, có thể xảy ra lỗi tải lên.\n\n### Bước 2: Điền mẫu Excel\n\nBạn có thể **nhập trực tiếp** trong mẫu lưới web hoặc điền tệp Excel rồi **Nhập** vào hệ thống.\n\n### Cách A: Nhập trực tiếp trên lưới web\n\nNhấp vào từng ô để nhập trực tiếp dữ liệu Bài học và Hoạt động.\n\n- **Add Row Above / Add Row Below**: Thêm một hàng phía trên hoặc phía dưới hàng đã chọn.\n\n- **Delete Selected Row**: Xóa hàng đã chọn.\n\n### Cách B: Nhập tệp Excel\n\n- Nhấp nút **Import** ở góc trên bên phải.\n\n- Kéo và thả tệp đã hoàn thành vào khu vực tải lên của popup hoặc nhấp **SELECT FILE** để đính kèm.\n\n- Nhấp **Submit** để tải dữ liệu vào lưới web.\n\n> Định dạng hỗ trợ: XLSX, XLS / Tối đa 10 MB\n\n### Cách điền mẫu\n\nMỗi hàng đại diện cho một Hoạt động. Các Hoạt động thuộc cùng một Bài học cần lặp lại **cùng thông tin Bài học**.\n\n### Ví dụ cấu trúc cơ bản\n\n[[table:%7B%22rows%22%3A%5B%5B%22Item_ID%22%2C%22Lesson_order%22%2C%22Lesson_title%22%2C%22Activity_order%22%2C%22Activity_type%22%2C%22Activity_title%22%5D%2C%5B%22ITEM001%22%2C%221%22%2C%22B%C3%A0i%20h%E1%BB%8Dc%20%C4%91%E1%BA%A7u%20ti%C3%AAn%22%2C%221%22%2C%22text%20only%20%28G%29%22%2C%22M%E1%BB%A5c%20ti%C3%AAu%20h%E1%BB%8Dc%20t%E1%BA%ADp%20h%C3%B4m%20nay%22%5D%2C%5B%22ITEM001%22%2C%221%22%2C%22B%C3%A0i%20h%E1%BB%8Dc%20%C4%91%E1%BA%A7u%20ti%C3%AAn%22%2C%222%22%2C%22true%20or%20false%20%28Q%29%22%2C%22N%E1%BB%99i%20dung%20n%C3%A0o%20sau%20%C4%91%C3%A2y%20l%C3%A0%20%C4%91%C3%BAng%3F%22%5D%2C%5B%22ITEM001%22%2C%222%22%2C%22B%C3%A0i%20h%E1%BB%8Dc%20th%E1%BB%A9%20hai%22%2C%221%22%2C%22multiple%20choice%20%28Q%29%22%2C%22Ch%E1%BB%8Dn%20%C4%91%C3%A1p%20%C3%A1n%20%C4%91%C3%BAng%22%5D%5D%7D]]\n\n### Mô tả cột\n\n### Thông tin cơ bản của Bài học\n\n[[table:%7B%22rows%22%3A%5B%5B%22T%C3%AAn%20c%E1%BB%99t%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22Item_ID%22%2C%22%E2%9C%85%20B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22ID%20c%E1%BB%A7a%20Item%20m%C3%A0%20B%C3%A0i%20h%E1%BB%8Dc%20thu%E1%BB%99c%20v%E1%BB%81.%20Ch%E1%BB%89%20c%C3%B3%20th%E1%BB%83%20d%C3%B9ng%20ID%20%C4%91%C3%A3%20%C4%91%C4%83ng%20k%C3%BD%20trong%20Qu%E1%BA%A3n%20l%C3%BD%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y.%22%5D%2C%5B%22Lesson_order%22%2C%22%E2%9C%85%20B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Th%E1%BB%A9%20t%E1%BB%B1%20B%C3%A0i%20h%E1%BB%8Dc%20%28b%E1%BA%AFt%20%C4%91%E1%BA%A7u%20t%E1%BB%AB%201%2C%20ch%E1%BB%89%20nh%E1%BA%ADp%20s%E1%BB%91%29%22%5D%2C%5B%22Lesson_title%22%2C%22%E2%9C%85%20B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Ti%C3%AAu%20%C4%91%E1%BB%81%20B%C3%A0i%20h%E1%BB%8Dc%20%28t%E1%BB%91i%20%C4%91a%20100%20k%C3%BD%20t%E1%BB%B1%29%22%5D%2C%5B%22Lesson_image%22%2C%22T%C3%B9y%20ch%E1%BB%8Dn%22%2C%22H%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%A1i%20di%E1%BB%87n%20c%E1%BB%A7a%20B%C3%A0i%20h%E1%BB%8Dc.%20Ch%E1%BB%89%20c%C3%B3%20th%E1%BB%83%20t%E1%BA%A3i%20l%C3%AAn%201%20h%C3%ACnh%20cho%20m%E1%BB%97i%20B%C3%A0i%20h%E1%BB%8Dc.%22%5D%2C%5B%22Lesson_objective%22%2C%22T%C3%B9y%20ch%E1%BB%8Dn%22%2C%22M%E1%BB%A5c%20ti%C3%AAu%20h%E1%BB%8Dc%20t%E1%BA%ADp%20c%E1%BB%A7a%20B%C3%A0i%20h%E1%BB%8Dc%22%5D%5D%7D]]\n\n### Thông tin cơ bản của Hoạt động\n\n[[table:%7B%22rows%22%3A%5B%5B%22T%C3%AAn%20c%E1%BB%99t%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22Activity_order%22%2C%22%E2%9C%85%20B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Th%E1%BB%A9%20t%E1%BB%B1%20Ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20%28b%E1%BA%AFt%20%C4%91%E1%BA%A7u%20t%E1%BB%AB%201%2C%20ch%E1%BB%89%20nh%E1%BA%ADp%20s%E1%BB%91%29%22%5D%2C%5B%22Activity_type%22%2C%22%E2%9C%85%20B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Lo%E1%BA%A1i%20Ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20%28xem%20danh%20s%C3%A1ch%20b%C3%AAn%20d%C6%B0%E1%BB%9Bi%29%22%5D%2C%5B%22Activity_color%22%2C%22T%C3%B9y%20ch%E1%BB%8Dn%22%2C%22M%C3%A0u%20n%E1%BB%81n%2Fph%C3%B4ng%20ch%E1%BB%AF.%20N%E1%BA%BFu%20%C4%91%E1%BB%83%20tr%E1%BB%91ng%2C%20Black%20%26%20White%20s%E1%BA%BD%20%C4%91%C6%B0%E1%BB%A3c%20%C3%A1p%20d%E1%BB%A5ng.%22%5D%2C%5B%22Activity_title%22%2C%22%E2%9C%85%20B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Ti%C3%AAu%20%C4%91%E1%BB%81%20ho%E1%BA%B7c%20c%C3%A2u%20h%E1%BB%8Fi%20c%E1%BB%A7a%20Ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20%28t%E1%BB%91i%20%C4%91a%2050%20k%C3%BD%20t%E1%BB%B1%29%22%5D%2C%5B%22Activity_description%22%2C%22T%C3%B9y%20ch%E1%BB%8Dn%22%2C%22M%C3%B4%20t%E1%BA%A3%20Ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20%28t%E1%BB%91i%20%C4%91a%2080%20k%C3%BD%20t%E1%BB%B1%29%22%5D%2C%5B%22Activity_image%22%2C%22T%C3%B9y%20ch%E1%BB%8Dn%22%2C%22H%C3%ACnh%20%E1%BA%A3nh%20Ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%22%5D%5D%7D]]\n\nLoại Hoạt động được chia thành 4 danh mục chính.\n\n### Nội dung thông thường (G)\n\nMàn hình hiển thị nội dung học tập. Đặt văn bản, hình ảnh và nội dung khác mà không cần nhập đáp án riêng.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Lo%E1%BA%A1i%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22text%20only%20%28G%29%22%2C%22Ch%E1%BB%89%20hi%E1%BB%83n%20th%E1%BB%8B%20v%C4%83n%20b%E1%BA%A3n%22%5D%2C%5B%22text%20%26%20text%20%28G%29%22%2C%22Hi%E1%BB%83n%20th%E1%BB%8B%20hai%20kh%E1%BB%91i%20v%C4%83n%20b%E1%BA%A3n%20c%E1%BA%A1nh%20nhau%22%5D%2C%5B%22image%20only%20%28G%29%22%2C%22Ch%E1%BB%89%20hi%E1%BB%83n%20th%E1%BB%8B%20h%C3%ACnh%20%E1%BA%A3nh%22%5D%2C%5B%22text%20top%20%28G%29%22%2C%22V%C4%83n%20b%E1%BA%A3n%20%E1%BB%9F%20tr%C3%AAn%2C%20h%C3%ACnh%20%E1%BA%A3nh%20%E1%BB%9F%20d%C6%B0%E1%BB%9Bi%22%5D%2C%5B%22image%20top%20%28G%29%22%2C%22H%C3%ACnh%20%E1%BA%A3nh%20%E1%BB%9F%20tr%C3%AAn%2C%20v%C4%83n%20b%E1%BA%A3n%20%E1%BB%9F%20d%C6%B0%E1%BB%9Bi%22%5D%2C%5B%22image%20middle%20%28G%29%22%2C%22H%C3%ACnh%20%E1%BA%A3nh%20n%E1%BA%B1m%20gi%E1%BB%AFa%20c%C3%A1c%20kh%E1%BB%91i%20v%C4%83n%20b%E1%BA%A3n%22%5D%2C%5B%22image%20left%20%28G%29%22%2C%22H%C3%ACnh%20%E1%BA%A3nh%20b%C3%AAn%20tr%C3%A1i%2C%20v%C4%83n%20b%E1%BA%A3n%20b%C3%AAn%20ph%E1%BA%A3i%22%5D%2C%5B%22image%20right%20%28G%29%22%2C%22H%C3%ACnh%20%E1%BA%A3nh%20b%C3%AAn%20ph%E1%BA%A3i%2C%20v%C4%83n%20b%E1%BA%A3n%20b%C3%AAn%20tr%C3%A1i%22%5D%5D%7D]]\n\n### Nội dung bên ngoài (E)\n\nHoạt động chèn tệp hoặc liên kết bên ngoài.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Lo%E1%BA%A1i%22%2C%22M%C3%B4%20t%E1%BA%A3%22%2C%22C%E1%BB%99t%20c%E1%BA%A7n%20thi%E1%BA%BFt%22%5D%2C%5B%22webviewer%20%28E%29%22%2C%22Ch%C3%A8n%20URL%20trang%20web%22%2C%22Activity_url%22%5D%2C%5B%22Youtube%20%28E%29%22%2C%22Ch%C3%A8n%20video%20YouTube%22%2C%22Activity_url%22%5D%2C%5B%22document%20%28E%29%22%2C%22%C4%90%C3%ADnh%20k%C3%A8m%20t%E1%BB%87p%20t%C3%A0i%20li%E1%BB%87u%22%2C%22Activity_document%20%28pdf%2C%20doc%2C%20docx%2C%20pptx%2C%20ppt%20%2F%20t%E1%BB%91i%20%C4%91a%20500%20MB%29%22%5D%2C%5B%22sound%20%28E%29%22%2C%22%C4%90%C3%ADnh%20k%C3%A8m%20t%E1%BB%87p%20%C3%A2m%20thanh%22%2C%22Activity_sound%20%28mp3%20%2F%20t%E1%BB%91i%20%C4%91a%2020%20MB%29%22%5D%5D%7D]]\n\n### Quiz (Q)\n\nHoạt động trong đó người học nhập hoặc chọn đáp án.\n\n### true or false (Q) — Quiz OX\n\n- Nhập đáp án đúng vào cột **TF_correct_answer** (✅ Bắt buộc)\n\n- Ví dụ: O hoặc X\n\n### short answer (Q) — Trả lời ngắn\n\n- Nhập đáp án đúng vào cột **SA_correct_answer** (✅ Bắt buộc)\n\n- Nếu có nhiều đáp án được chấp nhận, hãy phân tách bằng dấu phẩy (,).\n\n- Ví dụ: táo, apple, manzana\n\n### multiple choice (Q) — Trắc nghiệm\n\n- **MC_type**: Chọn text hoặc image (✅ Bắt buộc)\n\n- **MC_correct_answer**: Nhập số của lựa chọn đúng (✅ Bắt buộc). Nếu có nhiều đáp án đúng, phân tách bằng dấu phẩy.\n\n- Ví dụ: 1 hoặc 1,3\n\n- **MC_option1 ~ MC_option5**: Nhập nội dung lựa chọn (tối thiểu 2 mục bắt buộc, tối đa 50 ký tự)\n\n- Nếu là dạng image, tải hình ảnh lên MC_option1_image ~ MC_option5_image.\n\n### open-ended (Q) — Câu hỏi mở\n\n- **OE_correct_answer**: Nhập câu trả lời mẫu (Tùy chọn)\n\n### fill in the blank (Q) — Điền vào chỗ trống\n\n- Trong cột **Activity_title**, đặt từ cần tạo chỗ trống trong dấu [ ].\n\n- Ví dụ: Apple trong tiếng Anh là [apple].\n\n### sequencing (Q) — Sắp xếp thứ tự\n\n- **SQ_type**: Chọn text hoặc image (✅ Bắt buộc)\n\n- **SQ_option1 ~ SQ_option5**: Nội dung lựa chọn (tối thiểu 2 mục bắt buộc)\n\n- **SQ_option1_seq ~ SQ_option5_seq**: Nhập số thứ tự đúng cho từng lựa chọn (✅ Bắt buộc)\n\n- Ví dụ: option1_seq=2, option2_seq=1 (option2 trước, option1 thứ hai)\n\n### matching (Q) — Ghép nối\n\n- **MA_type**: Chọn text hoặc image (✅ Bắt buộc)\n\n- **MA_correct_answer**: Nhập cặp ghép đúng theo định dạng số-chữ cái (✅ Bắt buộc)\n\n- Ví dụ: 1-a,2-b,3-c\n\n- **MA_option1 ~ MA_option4**: Lựa chọn phía trên (số 1~4)\n\n- **MA_option_a ~ MA_option_d**: Lựa chọn phía dưới (chữ cái a~d)\n\n### sorting (Q) — Phân loại\n\n- **SR_type**: Chọn text hoặc image (✅ Bắt buộc)\n\n- **SR_groupA**: Tiêu đề Nhóm A (✅ Bắt buộc, tối đa 30 ký tự)\n\n- **SR_groupB**: Tiêu đề Nhóm B (✅ Bắt buộc, tối đa 30 ký tự)\n\n- **SR_option1 ~ SR_option5**: Nội dung lựa chọn (tối thiểu 2 mục bắt buộc)\n\n- **SR_option1_group ~ SR_option5_group**: Nhập nhóm mà từng lựa chọn thuộc về (✅ Bắt buộc)\n\n- Giá trị nhập: Group A hoặc Group B\n\n### Ý kiến/Thảo luận (D)\n\nHoạt động thu thập ý kiến của người học. Không có đáp án đúng; chỉ thiết lập câu hỏi và lựa chọn.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Lo%E1%BA%A1i%22%2C%22M%C3%B4%20t%E1%BA%A3%22%2C%22C%E1%BB%99t%20c%E1%BA%A7n%20thi%E1%BA%BFt%22%5D%2C%5B%22vote%20%28D%29%22%2C%22B%E1%BB%8F%20phi%E1%BA%BFu%22%2C%22Vote_option1%20~%20Vote_option5%20%28t%E1%BB%91i%20thi%E1%BB%83u%202%29%22%5D%2C%5B%22traffic%20light%20%28D%29%22%2C%22%C4%90%C3%A8n%20giao%20th%C3%B4ng%20%28ki%E1%BB%83m%20tra%20m%E1%BB%A9c%20%C4%91%E1%BB%99%20hi%E1%BB%83u%29%22%2C%22Kh%C3%B4ng%20c%E1%BA%A7n%20nh%E1%BA%ADp%20l%E1%BB%B1a%20ch%E1%BB%8Dn%20ri%C3%AAng%22%5D%2C%5B%22agree-disagree%20%28D%29%22%2C%22%C3%9D%20ki%E1%BA%BFn%20%C4%91%E1%BB%93ng%20%C3%BD%2Fkh%C3%B4ng%20%C4%91%E1%BB%93ng%20%C3%BD%22%2C%22Kh%C3%B4ng%20c%E1%BA%A7n%20nh%E1%BA%ADp%20l%E1%BB%B1a%20ch%E1%BB%8Dn%20ri%C3%AAng%22%5D%2C%5B%22opinion%20scale%20%28D%29%22%2C%22Thang%20%C4%91o%20%C3%BD%20ki%E1%BA%BFn%22%2C%22Kh%C3%B4ng%20c%E1%BA%A7n%20nh%E1%BA%ADp%20l%E1%BB%B1a%20ch%E1%BB%8Dn%20ri%C3%AAng%22%5D%5D%7D]]\n\n### Bảng ý tưởng (I)\n\nHoạt động trong đó người học tự do viết ý tưởng. Không có đáp án đúng; chỉ thiết lập câu hỏi.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Lo%E1%BA%A1i%22%2C%22M%C3%B4%20t%E1%BA%A3%22%2C%22C%E1%BB%99t%20c%E1%BA%A7n%20thi%E1%BA%BFt%22%5D%2C%5B%22brainstorming%20%28I%29%22%2C%22Brainstorming%22%2C%22Ch%E1%BB%89%20nh%E1%BA%ADp%20Activity_title.%20Kh%C3%B4ng%20c%E1%BA%A7n%20nh%E1%BA%ADp%20l%E1%BB%B1a%20ch%E1%BB%8Dn%20ri%C3%AAng.%22%5D%2C%5B%22whiteboard%20%28I%29%22%2C%22Whiteboard%22%2C%22Ch%E1%BB%89%20nh%E1%BA%ADp%20Activity_title.%20Kh%C3%B4ng%20c%E1%BA%A7n%20nh%E1%BA%ADp%20l%E1%BB%B1a%20ch%E1%BB%8Dn%20ri%C3%AAng.%22%5D%5D%7D]]\n\n### Activity_color — Tùy chọn màu\n\nĐối với màu nền/phông chữ, hãy nhập chính xác một trong các giá trị sau.\n\n`Black&White` / `Red` / `Orange` / `Yellow` / `Green` / `Blue` / `Purple` / `Pink`\n\n> Nếu để trống, `Black&White` sẽ tự động được áp dụng.\n\n### Bước 3: Đính kèm tệp\n\nKhông thể nhập hình ảnh, tài liệu và tệp âm thanh thông qua mẫu Excel; cần **đính kèm trực tiếp trên lưới web**. Nhấp vào từng ô để đính kèm tệp.\n\n[[table:%7B%22rows%22%3A%5B%5B%22C%E1%BB%99t%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22%2A%2AActivity_image%2A%2A%22%2C%22%C4%90%C3%ADnh%20k%C3%A8m%20t%E1%BB%87p%20h%C3%ACnh%20%E1%BA%A3nh%20Ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%2C%20t%E1%BB%91i%20%C4%91a%201%20t%E1%BB%87p%2C%20kh%C3%B4ng%20qu%C3%A1%2020%20MB%22%5D%2C%5B%22%2A%2AActivity_document%2A%2A%22%2C%22%C4%90%C3%ADnh%20k%C3%A8m%20t%E1%BB%87p%20t%C3%A0i%20li%E1%BB%87u%20Ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%2C%20t%E1%BB%91i%20%C4%91a%201%20t%E1%BB%87p%2C%20kh%C3%B4ng%20qu%C3%A1%2020%20MB%22%5D%2C%5B%22%2A%2AActivity_sound%2A%2A%22%2C%22%C4%90%C3%ADnh%20k%C3%A8m%20t%E1%BB%87p%20%C3%A2m%20thanh%20Ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%2C%20t%E1%BB%91i%20%C4%91a%201%20t%E1%BB%87p%2C%20kh%C3%B4ng%20qu%C3%A1%2020%20MB%22%5D%2C%5B%22%2A%2ALesson_image%2A%2A%22%2C%22%C4%90%C3%ADnh%20k%C3%A8m%20t%E1%BB%87p%20h%C3%ACnh%20thu%20nh%E1%BB%8F%20B%C3%A0i%20h%E1%BB%8Dc%2C%20t%E1%BB%91i%20%C4%91a%201%20t%E1%BB%87p%2C%20kh%C3%B4ng%20qu%C3%A1%2020%20MB.%20N%E1%BA%BFu%20kh%C3%B4ng%20%C4%91%C4%83ng%20k%C3%BD%20h%C3%ACnh%20thu%20nh%E1%BB%8F%2C%20Ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%20%C4%91%E1%BA%A7u%20ti%C3%AAn%20s%E1%BA%BD%20%C4%91%C6%B0%E1%BB%A3c%20hi%E1%BB%83n%20th%E1%BB%8B%20l%C3%A0m%20h%C3%ACnh%20thu%20nh%E1%BB%8F.%22%5D%5D%7D]]\n\n### Bước 4: Lưu bản nháp\n\nNếu cần rời khỏi hoặc dừng công việc trong lúc nhập, nhấp **Save Draft** để lưu tạm thời dữ liệu đang nhập.\n\n### Bước 5: Gửi\n\nKhi hoàn tất nhập dữ liệu, nhấp **Submit** để hoàn tất đăng ký.\n\n> ⚠️ Nếu có mục bị lỗi khi gửi, thông báo lỗi sẽ hiển thị trong ô tương ứng. Hãy kiểm tra thông báo, chỉnh sửa nội dung rồi gửi lại."
      ],
      "cat-admin-lesson-ai-make": [
        "### Bước 1: Chạy AI Make\n\nNhấp nút **AI Make** ở phía trên màn hình chỉnh sửa Bài học.\n\n### Bước 2: Thiết lập thông tin cơ bản\n\n[[table:%7B%22rows%22%3A%5B%5B%22M%E1%BB%A5c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22%2A%2ACurriculum%2A%2A%20%28B%E1%BA%AFt%20bu%E1%BB%99c%29%22%2C%22Ch%E1%BB%8Dn%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%20%C3%A1p%20d%E1%BB%A5ng%20cho%20B%C3%A0i%20h%E1%BB%8Dc.%22%5D%2C%5B%22%2A%2AGrade%2A%2A%20%28B%E1%BA%AFt%20bu%E1%BB%99c%29%22%2C%22Ch%E1%BB%8Dn%20l%E1%BB%9Bp%20m%E1%BB%A5c%20ti%C3%AAu.%22%5D%2C%5B%22%2A%2ANg%C3%B4n%20ng%E1%BB%AF%2A%2A%20%28T%C3%B9y%20ch%E1%BB%8Dn%29%22%2C%22Ch%E1%BB%8Dn%20ng%C3%B4n%20ng%E1%BB%AF%20tr%C3%ADch%20xu%E1%BA%A5t%20n%E1%BB%99i%20dung.%22%5D%5D%7D]]\n\n### Bước 3: Thiết lập Auto-tagging\n\nĐây là chức năng tự động gắn **từ khóa khái niệm** và **siêu dữ liệu** cho Bài học đã tạo.\n\n- **Sử dụng**: Sau khi phân tích Bài học, AI tự động gắn từ khóa khái niệm và siêu dữ liệu. (Tín dụng AI sẽ bị trừ)\n\n- **Không sử dụng**: Bỏ qua Auto-tagging.\n\n### Bước 4: Đính kèm tài liệu nguồn\n\nKéo và thả tệp hoặc nhấp nút chọn tệp để đính kèm tài liệu nguồn.\n\n> Định dạng hỗ trợ: pdf, doc, docx, ppt, pptx / Giới hạn dung lượng mỗi tệp: 100 MB\n\n### Bước 5: Thiết lập phân loại Bài học\n\nNếu chia tài liệu nguồn thành nhiều Bài học, hãy nhập phạm vi trang và số lượng Hoạt động cần tạo cho từng Bài học.\n\n- Nếu không thiết lập giá trị phân loại, toàn bộ tài liệu nguồn sẽ được tạo thành **1 Bài học**.\n\n- Có thể thêm phân loại Bài học bằng nút **+ Add Lesson Category**.\n\n- Khi nhấp nút **AI Classification**, AI sẽ phân tích tài liệu nguồn và tự động phân loại phạm vi trang của Bài học. Sau đó bạn cũng có thể chỉnh sửa trực tiếp.\n\n### Bước 6: Bắt đầu tạo\n\nNhấp nút **Create**. Khi quá trình tạo bắt đầu, bạn có thể kiểm tra tiến độ trong lớp hiển thị ở góc dưới bên phải màn hình. Trong khi hệ thống đang tạo, bạn vẫn có thể sử dụng các chức năng Admin khác.",
        "### Kiểm tra tab Xem xét\n\nKhi quá trình tạo Bài học bằng AI hoàn tất, hãy kiểm tra danh sách Bài học đã tạo trong tab **[Xem xét]**.\n\n### Kiểm tra thông tin chi tiết\n\nNhấp vào tên Bài học đã tạo hoặc biểu tượng thông tin chi tiết để kiểm tra chi tiết.\n\n- Nếu Auto-tagging được áp dụng, **từ khóa khái niệm** và **siêu dữ liệu** sẽ được nhập tự động. Bạn có thể chỉnh sửa nếu cần.\n\n- Thiết lập **Item ID** để chỉ định mục mà Bài học sẽ được ánh xạ đến.\n\n- Nhập **thứ tự Bài học**.\n\n### Xem xét và chỉnh sửa nội dung Bài học\n\nNhấp nút **Edit Lesson** để kiểm tra nội dung Bài học do AI tạo, chỉnh sửa các phần cần thiết rồi lưu.\n\n### Phê duyệt và đăng\n\nKhi hoàn tất xem xét, nhấp nút **[Phê duyệt]**. Bài học sẽ được đăng ngay sau khi được phê duyệt.\n\n[[callout:⚠️||Lưu ý\n- Tài liệu nguồn càng ít thông tin thì nội dung càng có thể bị trùng lặp hoặc đơn giản hóa. Để đạt chất lượng tốt nhất, hãy thiết lập đầy đủ thông tin cơ bản và điều chỉnh phù hợp số trang tạo Hoạt động.\n- AI Make là công cụ hỗ trợ tạo bản nháp. Kết quả do AI tạo có thể chứa lỗi, vì vậy hãy xem xét kỹ nội dung trước khi phê duyệt.\n- Tín dụng AI sẽ bị trừ khi sử dụng Auto-tagging và AI Make.]]"
      ],
      "cat-admin-lesson-recommendation": [
        "- Nhấp tab **Quản lý chương trình/nội dung > Quản lý bài học > Quản lý đề xuất**.\n\n- Trên màn hình Quản lý đề xuất, bạn có thể xem và quản lý nội dung đề xuất đã đăng ký (Chủ đề đề xuất 1, Chủ đề đề xuất 2).\n\n[[table:%7B%22rows%22%3A%5B%5B%22M%E1%BB%A5c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22%2A%2ACh%E1%BB%A7%20%C4%91%E1%BB%81%20%C4%91%E1%BB%81%20xu%E1%BA%A5t%201%2A%2A%22%2C%22Tr%E1%BA%A1ng%20th%C3%A1i%20k%C3%ADch%20ho%E1%BA%A1t%20%28Active%29%20ho%E1%BA%B7c%20kh%C3%B4ng%20k%C3%ADch%20ho%E1%BA%A1t%20%28Inactive%29%20c%E1%BB%A7a%20khu%20v%E1%BB%B1c%20%C4%91%E1%BB%81%20xu%E1%BA%A5t%20%C4%91%E1%BA%A7u%20ti%C3%AAn%22%5D%2C%5B%22%2A%2ACh%E1%BB%A7%20%C4%91%E1%BB%81%20%C4%91%E1%BB%81%20xu%E1%BA%A5t%202%2A%2A%22%2C%22Tr%E1%BA%A1ng%20th%C3%A1i%20k%C3%ADch%20ho%E1%BA%A1t%20%28Active%29%20ho%E1%BA%B7c%20kh%C3%B4ng%20k%C3%ADch%20ho%E1%BA%A1t%20%28Inactive%29%20c%E1%BB%A7a%20khu%20v%E1%BB%B1c%20%C4%91%E1%BB%81%20xu%E1%BA%A5t%20th%E1%BB%A9%20hai%22%5D%2C%5B%22%2A%2ANg%C3%A0y%20s%E1%BB%ADa%20%C4%91%E1%BB%95i%20g%E1%BA%A7n%20nh%E1%BA%A5t%2A%2A%22%2C%22Ng%C3%A0y%20thi%E1%BA%BFt%20l%E1%BA%ADp%20%C4%91%E1%BB%81%20xu%E1%BA%A5t%20%C4%91%C6%B0%E1%BB%A3c%20c%E1%BA%ADp%20nh%E1%BA%ADt%20l%E1%BA%A7n%20cu%E1%BB%91i%20%28yyyy-mm-dd%29%22%5D%5D%7D]]\n\n### Kiểm tra thông tin chi tiết đề xuất\n\n- Nhấp **biểu tượng ↗** trong cột **[Chi tiết]** của danh sách để mở trang chi tiết trong **cửa sổ mới**.\n\n- Trên trang chi tiết, bạn có thể kiểm tra đối tượng hiển thị, thông tin Chủ đề 1 và Chủ đề 2.\n\n- Nhấp nút **[Xem chủ đề/mô tả theo ngôn ngữ]** trong từng khu vực chủ đề để xem tiêu đề và mô tả theo ngôn ngữ trong popup.\n\n### Chỉnh sửa thiết lập đề xuất\n\n- Nhấp nút **[Chỉnh sửa]** ở góc trên bên phải trang chi tiết để chuyển đến trang chỉnh sửa.",
        "- Nhấp nút **[Đăng ký mới]** ở góc trên bên phải màn hình danh sách đề xuất.\n\n### Nhập tiêu đề chủ đề (đăng ký bản dịch theo ngôn ngữ)\n\n- Nhấp nút **[Chỉnh sửa]** để mở modal **Chỉnh sửa bản dịch Chủ đề đề xuất 1**.\n\n- Trong modal, nhập tiêu đề chủ đề theo từng ngôn ngữ.\n\n- Nhấp nút **[Thêm bản dịch]** để thêm ngôn ngữ.\n\n[[callout:⚠️||Nếu không có dữ liệu dịch cho ngôn ngữ mà người dùng chọn trong dịch vụ LumiTeach, khóa dịch có thể hiển thị nguyên dạng.]]\n\n### Thêm mục liên kết (Item ID)\n\n- Nhấp nút **[+ Thêm Item ID]** để mở modal **Thêm Item ID**.\n\n- Chọn theo thứ tự Company → Curriculum rồi tìm kiếm.\n\n- Có thể thêm tối đa **4 mục**.\n\n### Thay đổi thứ tự và xóa mục\n\n- Dùng nút **mũi tên lên/xuống (↕)** ở bên trái từng hàng mục để thay đổi thứ tự.\n\n- Nhấp **biểu tượng xóa 🗑️** ở bên phải hàng mục để xóa mục tương ứng.",
        "- Chủ đề 2 cũng được thiết lập theo cách giống Chủ đề 1.\n\n### Khác biệt so với Chủ đề 1\n\n- Trong modal **[Chỉnh sửa]**, ngoài **tiêu đề**, hãy nhập cả **mô tả theo từng Item ID** được liên kết.\n\n- Có thể thêm tối đa **2 mục liên kết**.\n\nSau khi nhập tất cả mục, nhấp nút **[Đăng ký]** ở góc trên bên phải."
      ],
      "cat-admin-assessment-question": [
        "- Nhấp **Quản lý đánh giá** ở menu trên cùng, sau đó chọn tab **[Quản lý câu hỏi]**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22M%E1%BB%A5c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22%2A%2AID%20c%C3%A2u%20h%E1%BB%8Fi%2A%2A%22%2C%22S%E1%BB%91%20nh%E1%BA%ADn%20d%E1%BA%A1ng%20duy%20nh%E1%BA%A5t%20c%E1%BB%A7a%20c%C3%A2u%20h%E1%BB%8Fi%22%5D%2C%5B%22%2A%2ALo%E1%BA%A1i%20c%C3%A2u%20h%E1%BB%8Fi%2A%2A%22%2C%22Ph%C3%A2n%20lo%E1%BA%A1i%20ki%E1%BB%83u%20c%C3%A2u%20h%E1%BB%8Fi%20nh%C6%B0%20tr%E1%BA%AFc%20nghi%E1%BB%87m%2C%20tr%E1%BA%A3%20l%E1%BB%9Di%20ng%E1%BA%AFn%2C%20quiz%20OX%2C%20gh%C3%A9p%20n%E1%BB%91i%2C%20v.v.%22%5D%2C%5B%22%2A%2ANg%C3%A0y%20s%E1%BB%ADa%20%C4%91%E1%BB%95i%20g%E1%BA%A7n%20nh%E1%BA%A5t%2A%2A%22%2C%22Ng%C3%A0y%20d%E1%BB%AF%20li%E1%BB%87u%20%C4%91%C6%B0%E1%BB%A3c%20%C4%91%C4%83ng%20k%C3%BD%20l%E1%BA%A7n%20%C4%91%E1%BA%A7u%20ho%E1%BA%B7c%20s%E1%BB%ADa%20%C4%91%E1%BB%95i%20g%E1%BA%A7n%20nh%E1%BA%A5t%20%28YYYY-MM-DD%29%22%5D%5D%7D]]\n\n### Kiểm tra thông tin chi tiết câu hỏi\n\n- Nhấp **biểu tượng ↗ (chi tiết)** trong danh sách để mở **trang thông tin chi tiết** của câu hỏi đó.\n\n- Bạn có thể kiểm tra quốc gia, công ty, ID câu hỏi, độ khó, tài khoản đăng ký/sửa đổi gần nhất và ngày sửa đổi gần nhất.\n\n### Xem trước câu hỏi\n\n- Nhấp nút **[Xem trước]** ở góc trên bên phải trang chi tiết để mở modal xem trước.\n\n- Có thể chọn **phiên bản PC** hoặc **phiên bản di động** để kiểm tra.\n\n### Chỉnh sửa câu hỏi\n\n- Nhấp nút **[Chỉnh sửa]** ở góc trên bên phải trang chi tiết để chuyển sang **chế độ chỉnh sửa câu hỏi**.",
        "Câu hỏi có thể được đăng ký theo hai cách: **đăng ký từng mục** và **đăng ký hàng loạt**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Ph%C3%A2n%20lo%E1%BA%A1i%22%2C%22%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22question_ID%22%2C%22ID%20c%C3%A2u%20h%E1%BB%8Fi%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22S%E1%BB%AD%20d%E1%BB%A5ng%20ch%E1%BB%AF%20c%C3%A1i%20ti%E1%BA%BFng%20Anh%20vi%E1%BA%BFt%20hoa%2Fvi%E1%BA%BFt%20th%C6%B0%E1%BB%9Dng%2C%20s%E1%BB%91%2C%20d%E1%BA%A5u%20ch%E1%BA%A5m%20v%C3%A0%20d%E1%BA%A5u%20g%E1%BA%A1ch%20ngang%20%28-%29.%20Kh%C3%B4ng%20%C4%91%C6%B0%E1%BB%A3c%20tr%C3%B9ng%20l%E1%BA%B7p.%22%5D%2C%5B%22question_type%22%2C%22Lo%E1%BA%A1i%20c%C3%A2u%20h%E1%BB%8Fi%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Ph%C3%A2n%20bi%E1%BB%87t%20lo%E1%BA%A1i%20c%C3%A2u%20h%E1%BB%8Fi.%22%5D%2C%5B%22question_Difficulty%22%2C%22%C4%90%E1%BB%99%20kh%C3%B3%22%2C%22T%C3%B9y%20ch%E1%BB%8Dn%22%2C%22Hard%2C%20Normal%2C%20Easy%22%5D%2C%5B%22question_text%22%2C%22N%E1%BB%99i%20dung%20c%C3%A2u%20h%E1%BB%8Fi%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Vi%E1%BA%BFt%20c%C3%A2u%20h%E1%BB%8Fi.%22%5D%2C%5B%22question_description%22%2C%22M%C3%B4%20t%E1%BA%A3%22%2C%22T%C3%B9y%20ch%E1%BB%8Dn%22%2C%22Vi%E1%BA%BFt%20m%C3%B4%20t%E1%BA%A3%20b%E1%BB%95%20sung%20ho%E1%BA%B7c%20%C4%91o%E1%BA%A1n%20v%C4%83n.%22%5D%2C%5B%22question_image%22%2C%22H%C3%ACnh%20%E1%BA%A3nh%22%2C%22T%C3%B9y%20ch%E1%BB%8Dn%22%2C%22Th%C3%AAm%20h%C3%ACnh%20%E1%BA%A3nh%20cho%20c%C3%A2u%20h%E1%BB%8Fi.%22%5D%2C%5B%22correct_answer%22%2C%22%C4%90%C3%A1p%20%C3%A1n%20%C4%91%C3%BAng%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Vi%E1%BA%BFt%20%C4%91%C3%A1p%20%C3%A1n%20%C4%91%C3%BAng%20cho%20t%E1%BB%ABng%20c%C3%A2u%20h%E1%BB%8Fi.%22%5D%2C%5B%22option%22%2C%22L%E1%BB%B1a%20ch%E1%BB%8Dn%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%2FT%C3%B9y%20ch%E1%BB%8Dn%22%2C%22Nh%E1%BA%ADp%20c%C3%A1c%20l%E1%BB%B1a%20ch%E1%BB%8Dn%20c%E1%BB%A7a%20c%C3%A2u%20h%E1%BB%8Fi.%22%5D%5D%7D]]\n\n### Loại câu hỏi\n\n[[table:%7B%22rows%22%3A%5B%5B%22Lo%E1%BA%A1i%22%2C%22T%C3%AAn%20ti%E1%BA%BFng%20Anh%22%5D%2C%5B%22Quiz%20OX%22%2C%22True%20or%20False%22%5D%2C%5B%22Tr%E1%BA%A3%20l%E1%BB%9Di%20ng%E1%BA%AFn%22%2C%22Short%20Answer%22%5D%2C%5B%22Tr%E1%BA%AFc%20nghi%E1%BB%87m%22%2C%22Multiple%20Choice%22%5D%2C%5B%22S%E1%BA%AFp%20x%E1%BA%BFp%20th%E1%BB%A9%20t%E1%BB%B1%22%2C%22Sequencing%22%5D%2C%5B%22Gh%C3%A9p%20n%E1%BB%91i%22%2C%22Matching%22%5D%2C%5B%22%C4%90i%E1%BB%81n%20v%C3%A0o%20ch%E1%BB%97%20tr%E1%BB%91ng%22%2C%22Fill%20in%20the%20Blank%22%5D%2C%5B%22Ph%C3%A2n%20lo%E1%BA%A1i%22%2C%22Sorting%22%5D%5D%7D]]",
        "Đây là cách đăng ký trực tiếp từng câu hỏi một.\n\n### Nhập thông tin cơ bản\n\n- **Loại câu hỏi:** Chọn loại câu hỏi trong danh sách thả xuống.\n\n- **Nội dung câu hỏi:** Nhập câu hỏi. (Bắt buộc, tối đa 50 ký tự)\n\n- **Mô tả:** Nhập mô tả bổ sung. (Tùy chọn, tối đa 80 ký tự)\n\n- **Hình ảnh câu hỏi:** Có thể đính kèm hình ảnh bằng nút **[Đính kèm tệp]**. (1 tệp / không quá 20 MB / jpg, jpeg, png)\n\nSau khi nhập tất cả mục, nhấp nút **[Đăng ký]** ở góc trên bên phải.",
        "Đây là cách đăng ký nhiều câu hỏi cùng lúc theo mẫu Excel.\n\n### Tải xuống/nhập mẫu\n\n- Nhấp nút **[Nhập]** ở góc trên bên phải.\n\n- Nhấp nút **[Tải xuống mẫu]** để tải mẫu Excel.\n\n- Sau khi hoàn thành mẫu, nhấp lại **[Nhập]** để tải tệp lên.\n\n[[callout:💡||**Lưu ý:** LumiTeach Admin **không tự động lưu các thay đổi của tệp** trong khi bạn đang chuẩn bị dữ liệu đăng ký hàng loạt.]]\n\n### Lưu ý khi đăng ký câu hỏi hàng loạt\n\n[[table:%7B%22rows%22%3A%5B%5B%22Lo%E1%BA%A1i%20ki%E1%BB%83m%20tra%22%2C%22%C4%90i%E1%BB%81u%20ki%E1%BB%87n%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22B%E1%BA%AFt%20bu%E1%BB%99c%20chung%22%2C%22Khi%20thi%E1%BA%BFu%20question_id%2C%20question_type%20ho%E1%BA%B7c%20question_text%22%2C%22ID%20c%C3%A2u%20h%E1%BB%8Fi%2C%20lo%E1%BA%A1i%20c%C3%A2u%20h%E1%BB%8Fi%20v%C3%A0%20n%E1%BB%99i%20dung%20c%C3%A2u%20h%E1%BB%8Fi%20l%C3%A0%20c%C3%A1c%20m%E1%BB%A5c%20b%E1%BA%AFt%20bu%E1%BB%99c.%22%5D%2C%5B%22Quy%20c%C3%A1ch%20h%C3%ACnh%20%E1%BA%A3nh%22%2C%22Khi%20ph%E1%BA%A7n%20m%E1%BB%9F%20r%E1%BB%99ng%20kh%C3%B4ng%20ph%E1%BA%A3i%20jpg%2Fpng%20ho%E1%BA%B7c%20v%C6%B0%E1%BB%A3t%20qu%C3%A1%2020%20MB%22%2C%22T%E1%BB%87p%20h%C3%ACnh%20%E1%BA%A3nh%20ch%E1%BB%89%20h%E1%BB%97%20tr%E1%BB%A3%20%C4%91%E1%BB%8Bnh%20d%E1%BA%A1ng%20jpg%20v%C3%A0%20png%2C%20c%C3%B3%20th%E1%BB%83%20t%E1%BA%A3i%20l%C3%AAn%20t%E1%BB%91i%20%C4%91a%2020%20MB.%22%5D%2C%5B%22Quy%20c%C3%A1ch%20d%E1%BB%AF%20li%E1%BB%87u%20theo%20c%C3%A2u%20h%E1%BB%8Fi%22%2C%22Khi%20thi%E1%BA%BFu%20%C4%91%C3%A1p%20%C3%A1n%20%C4%91%C3%BAng%20ho%E1%BA%B7c%20l%E1%BB%B1a%20ch%E1%BB%8Dn%2C%20ho%E1%BA%B7c%20sai%20%C4%91%E1%BB%8Bnh%20d%E1%BA%A1ng%22%2C%22H%C3%A3y%20nh%E1%BA%ADp%20%C4%91%C3%A1p%20%C3%A1n%20%C4%91%C3%BAng%20v%C3%A0%20c%C3%A1c%20l%E1%BB%B1a%20ch%E1%BB%8Dn%20ph%C3%B9%20h%E1%BB%A3p%20v%E1%BB%9Bi%20lo%E1%BA%A1i%20c%C3%A2u%20h%E1%BB%8Fi.%22%5D%5D%7D]]\n\nSau khi nhập tất cả mục, nhấp nút **[Đăng ký]** ở góc trên bên phải."
      ],
      "cat-admin-assessment-paper": [
        "- Trong menu Quản lý đánh giá, chọn tab **[Quản lý bài đánh giá]**.\n\n[[table:%7B%22rows%22%3A%5B%5B%22M%E1%BB%A5c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22%2A%2AT%C3%AAn%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%2A%2A%22%2C%22T%C3%AAn%20c%E1%BB%A7a%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%22%5D%2C%5B%22%2A%2ACh%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%2A%2A%22%2C%22%C4%90%C6%A1n%20v%E1%BB%8B%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%20%C4%91%C6%B0%E1%BB%A3c%20%C3%A1nh%20x%E1%BA%A1%20v%E1%BB%9Bi%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%22%5D%2C%5B%22%2A%2AL%E1%BB%9Bp%2A%2A%22%2C%22Th%C3%B4ng%20tin%20l%E1%BB%9Bp%20%C4%91%C6%B0%E1%BB%A3c%20%C3%A1nh%20x%E1%BA%A1%20v%E1%BB%9Bi%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%22%5D%2C%5B%22%2A%2AS%E1%BB%91%20c%C3%A2u%20h%E1%BB%8Fi%2A%2A%22%2C%22T%E1%BB%95ng%20s%E1%BB%91%20c%C3%A2u%20h%E1%BB%8Fi%20%C4%91%C6%B0%E1%BB%A3c%20%C4%91%C4%83ng%20k%C3%BD%20trong%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%22%5D%2C%5B%22%2A%2ATr%E1%BA%A1ng%20th%C3%A1i%2A%2A%22%2C%22Tr%E1%BA%A1ng%20th%C3%A1i%20k%C3%ADch%20ho%E1%BA%A1t%20%28Active%29%20%2F%20kh%C3%B4ng%20k%C3%ADch%20ho%E1%BA%A1t%20%28Inactive%29%20c%E1%BB%A7a%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%22%5D%2C%5B%22%2A%2ANg%C3%A0y%20s%E1%BB%ADa%20%C4%91%E1%BB%95i%20g%E1%BA%A7n%20nh%E1%BA%A5t%2A%2A%22%2C%22N%E1%BA%BFu%20c%C3%B3%20s%E1%BB%ADa%20%C4%91%E1%BB%95i%20g%E1%BA%A7n%20%C4%91%C3%A2y%20th%C3%AC%20hi%E1%BB%83n%20th%E1%BB%8B%20ng%C3%A0y%20s%E1%BB%ADa%20%C4%91%E1%BB%95i%3B%20n%E1%BA%BFu%20kh%C3%B4ng%20th%C3%AC%20hi%E1%BB%83n%20th%E1%BB%8B%20ng%C3%A0y%20%C4%91%C4%83ng%20k%C3%BD%20ban%20%C4%91%E1%BA%A7u%22%5D%5D%7D]]\n\n### Kiểm tra thông tin chi tiết bài đánh giá\n\n- Nhấp **biểu tượng ↗ (chi tiết)** trong danh sách để mở **trang thông tin chi tiết** của bài đánh giá đó.\n\n### Chỉnh sửa bài đánh giá\n\n- Nhấp nút **[Chỉnh sửa]** ở góc trên bên phải trang chi tiết để chuyển sang **chế độ chỉnh sửa**.\n\n- Sau khi chỉnh sửa xong, nhấp nút **[Lưu]** ở góc trên bên phải.",
        "Đây là cách nhập trực tiếp thông tin của một bài đánh giá, cấu hình câu hỏi và đăng ký.\n\n[[table:%7B%22rows%22%3A%5B%5B%22M%E1%BB%A5c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22%2A%2AT%C3%AAn%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%2A%2A%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%2C%20t%E1%BB%91i%20%C4%91a%20100%20byte%22%5D%2C%5B%22%2A%2ATh%E1%BB%A9%20t%E1%BB%B1%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%2A%2A%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%2C%20ch%E1%BB%89%20nh%E1%BA%ADp%20s%E1%BB%91%22%5D%2C%5B%22%2A%2ACh%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%2A%2A%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%2C%20ch%E1%BB%8Dn%20t%E1%BB%AB%20danh%20s%C3%A1ch%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%22%5D%2C%5B%22%2A%2AItem%20ID%2A%2A%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%2C%20modal%20hi%E1%BB%83n%20th%E1%BB%8B%20khi%20nh%E1%BA%A5p%20n%C3%BAt%20%5BTh%C3%AAm%20Item%20ID%5D%22%5D%2C%5B%22%2A%2AH%C3%ACnh%20thu%20nh%E1%BB%8F%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%2A%2A%22%2C%22N%E1%BA%BFu%20kh%C3%B4ng%20%C4%91%C4%83ng%20k%C3%BD%20h%C3%ACnh%20%E1%BA%A3nh%20ri%C3%AAng%2C%20m%C3%A0n%20h%C3%ACnh%20c%C3%A2u%20h%E1%BB%8Fi%20%C4%91%E1%BA%A7u%20ti%C3%AAn%20c%E1%BB%A7a%20trang%201%20s%E1%BA%BD%20t%E1%BB%B1%20%C4%91%E1%BB%99ng%20%C4%91%C6%B0%E1%BB%A3c%20l%C6%B0u%20khi%20l%C6%B0u%20ho%E1%BA%B7c%20ph%C3%AA%20duy%E1%BB%87t%22%5D%2C%5B%22%2A%2ANgu%E1%BB%93n%2A%2A%22%2C%22T%C3%B9y%20ch%E1%BB%8Dn%2C%20t%E1%BB%91i%20%C4%91a%20100%20byte%22%5D%5D%7D]]\n\n### Cấu hình câu hỏi\n\n- Nhấp nút **[Thêm câu hỏi]** để mở modal **Thêm câu hỏi**.\n\n- Chọn câu hỏi bằng checkbox. Có thể chọn nhiều câu hỏi.\n\n- Các câu hỏi đã thêm có thể thay đổi thứ tự bằng nút ▲▼ và xóa bằng biểu tượng 🗑️.\n\nSau khi nhập tất cả mục bắt buộc và cấu hình câu hỏi xong, nhấp nút **[Đăng ký]** ở góc trên bên phải.",
        "Đây là cách đăng ký nhiều bài đánh giá cùng lúc theo mẫu Excel.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Ph%C3%A2n%20lo%E1%BA%A1i%22%2C%22%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22M%C3%B4%20t%E1%BA%A3%22%5D%2C%5B%22Item_id%22%2C%22Item%20ID%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Item%20ID%20c%E1%BB%A7a%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%20m%C3%A0%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%20s%E1%BA%BD%20%C4%91%C6%B0%E1%BB%A3c%20li%C3%AAn%20k%E1%BA%BFt%22%5D%2C%5B%22assessment_order%22%2C%22Th%E1%BB%A9%20t%E1%BB%B1%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Th%E1%BB%A9%20t%E1%BB%B1%20s%E1%BA%AFp%20x%E1%BA%BFp%20c%E1%BB%A7a%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%20trong%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%22%5D%2C%5B%22assessment_name%22%2C%22T%C3%AAn%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Nh%E1%BA%ADp%20t%C3%AAn%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1.%22%5D%2C%5B%22assessment_thumbnail%22%2C%22H%C3%ACnh%20thu%20nh%E1%BB%8F%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1%22%2C%22T%C3%B9y%20ch%E1%BB%8Dn%22%2C%22%C4%90%C3%ADnh%20k%C3%A8m%20h%C3%ACnh%20%E1%BA%A3nh%20%C4%91%E1%BA%A1i%20di%E1%BB%87n%20c%E1%BB%A7a%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1.%22%5D%2C%5B%22question_order%22%2C%22Th%E1%BB%A9%20t%E1%BB%B1%20c%C3%A2u%20h%E1%BB%8Fi%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Nh%E1%BA%ADp%20th%E1%BB%A9%20t%E1%BB%B1%20c%C3%A2u%20h%E1%BB%8Fi.%22%5D%2C%5B%22question_id%22%2C%22ID%20c%C3%A2u%20h%E1%BB%8Fi%22%2C%22B%E1%BA%AFt%20bu%E1%BB%99c%22%2C%22Nh%E1%BA%ADp%20ID%20c%C3%A2u%20h%E1%BB%8Fi%20c%E1%BA%A5u%20th%C3%A0nh%20b%C3%A0i%20%C4%91%C3%A1nh%20gi%C3%A1.%22%5D%5D%7D]]\n\n[[callout:💡||**Lưu ý:** LumiTeach Admin **không tự động lưu các thay đổi của tệp** trong khi bạn đang chuẩn bị dữ liệu đăng ký hàng loạt.]]\n\nSau khi nhập tất cả mục, nhấp nút **[Đăng ký]** ở góc trên bên phải."
      ],
      "cat-admin-report-management": [
        "- Bạn có thể kiểm tra các nội dung đã được báo cáo trong số nội dung được đăng trên menu Explore của dịch vụ người dùng.\n\n- Ở phía trên, bạn cũng có thể kiểm tra trạng thái **tổng số báo cáo**, **đã tiếp nhận**, **đã từ chối** và **đã xử lý xong**.\n\n- Nhấp nút thông tin chi tiết trong danh sách để chuyển đến màn hình chi tiết của nội dung bị báo cáo.\n\n[[callout:✅||Trạng thái báo cáo được chia thành 3 loại.\n- **Đã tiếp nhận**: báo cáo đã được tiếp nhận và cần xem xét\n- **Đã từ chối**: báo cáo bị từ chối và nội dung tiếp tục hiển thị\n- **Đã vô hiệu hóa**: sau khi kiểm tra báo cáo, nội dung đã được xử lý ẩn]]",
        "- Trên màn hình chi tiết, kiểm tra người đăng nội dung bị báo cáo, ngày đăng ký, môn học và thông tin lớp.\n\n- Nhấp nút **[Xem trước]** để kiểm tra nội dung chi tiết dưới dạng hình ảnh.",
        "- Nếu đội ngũ vận hành không đồng ý với nội dung báo cáo hoặc đánh giá rằng nội dung đã đăng là phù hợp, hãy xử lý là **Từ chối**. Khi đó nội dung vẫn tiếp tục được công khai.\n\n- Nhấp nút **[Từ chối]** ở góc trên bên phải màn hình chi tiết.\n\n- Khi từ chối báo cáo, nội dung vẫn tiếp tục hiển thị cho người dùng và người báo cáo sẽ nhận kết quả xử lý qua email.",
        "- Nếu đội ngũ vận hành đánh giá rằng nội dung này không nên tiếp tục công khai, hãy xử lý là **Vô hiệu hóa**. Nội dung đã vô hiệu hóa sẽ không hiển thị trong menu Explore.\n\n- Nhấp nút **[Đã xử lý xong]** ở góc trên bên phải màn hình chi tiết.\n\n- Chọn lý do ẩn nội dung.\n\n- Khi xử lý hoàn tất, nội dung sẽ được ẩn ngay khỏi dịch vụ người dùng, và người báo cáo cùng người đăng nội dung sẽ nhận kết quả xử lý qua email.",
        "**1. Nội dung không phù hợp**\n\n- Chứa lời lẽ tục tĩu hoặc ngôn từ thô tục\n\n- Chứa nội dung nhạy cảm về tình dục\n\n- Chứa nội dung thù ghét hoặc bạo lực\n\n- Chứa yếu tố phân biệt đối xử\n\n**2. Nội dung quảng cáo hoặc quảng bá**\n\n- Chứa nội dung nhằm mục đích quảng bá\n\n- Chèn liên kết thương mại\n\n**3. Nội dung vi phạm bản quyền**\n\n- Tải lên trái phép tài liệu giảng dạy\n\n- Sử dụng trái phép hình ảnh và video\n\n- Sao chép tài liệu học tập của người khác\n\n**4. Nội dung làm lộ thông tin cá nhân**\n\n- Đăng thông tin nhạy cảm như số điện thoại, địa chỉ email, địa chỉ nhà, số định danh cá nhân, v.v.\n\n**5. Lý do khác**\n\n- Nội dung không rõ ràng thuộc các tiêu chí trên nhưng trái với nguyên tắc vận hành dịch vụ"
      ],
      "cat-admin-inquiry": [
        "- Nhấp nút **[Đăng ký yêu cầu]**.\n\n- Nhập tiêu đề, phân loại và nội dung yêu cầu rồi đăng ký.\n\n- Với phân loại, hãy chọn mục phù hợp với nội dung yêu cầu. Chọn đúng phân loại sẽ giúp bạn nhận phản hồi nhanh hơn.\n\n- Yêu cầu đã đăng ký có thể được kiểm tra trong danh sách.\n\n[[callout:💡||Yêu cầu đã đăng ký không thể chỉnh sửa hoặc xóa. Hãy kiểm tra kỹ nội dung trước khi đăng ký.]]",
        "- Khi quản trị viên trụ sở đăng ký phản hồi, trạng thái yêu cầu sẽ chuyển thành **[Hoàn tất]**.\n\n- Nhấp vào yêu cầu ở trạng thái Hoàn tất để xem nội dung phản hồi.\n\n[[image:admin-inquiry/01.png|Ví dụ màn hình]]"
      ],
      "cat-admin-affiliation-release": [
        "- Nhấp **Hồ sơ > Cài đặt**.\n\n- Nhấp nút **[Gỡ liên kết tổ chức]** ở bên phải thông tin công ty trực thuộc trong Thông tin cơ bản.\n\n[[image:admin-affiliation-release/01.png|Ví dụ màn hình]]\n\n- Khi gỡ liên kết tổ chức, tài khoản này sẽ không thể xem dữ liệu của công ty nữa và cần thực hiện xác thực tổ chức lại.\n\n[[callout:💡||Nếu muốn tạm dừng sử dụng tài khoản quản trị viên, hãy yêu cầu quản trị viên tổ chức hoặc liên hệ service@lumiteach.ai.]]"
      ],
      "cat-admin-ai-credit": [
        "### 1. Tính năng và công cụ AI\n\nTrên nền tảng LumiTeach, bạn có thể sử dụng các tính năng và công cụ AI trong quá trình tạo và sử dụng tài liệu giảng dạy. Các tính năng AI hỗ trợ tạo nhanh, chỉnh sửa và sử dụng tài liệu dạy học trong Bài học hoặc Bài tập.\n\n[[table:%7B%22rows%22%3A%5B%5B%22V%E1%BB%8B%20tr%C3%AD%20s%E1%BB%AD%20d%E1%BB%A5ng%22%2C%22T%C3%ADnh%20n%C4%83ng%20cung%20c%E1%BA%A5p%22%5D%2C%5B%22%2A%2AEdit%20Lesson%2A%2A%22%2C%22Rewrite%2C%20AI%20Make%22%5D%2C%5B%22%2A%2AStart%20teaching%2A%2A%22%2C%22Brainstorming%20%28Wordcloud%2C%20Classification%2C%20Mindmap%29%22%5D%2C%5B%22%2A%2AAdmin%2A%2A%22%2C%22G%E1%BA%AFn%20th%E1%BA%BB%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%2C%20g%E1%BA%AFn%20th%E1%BA%BB%20si%C3%AAu%20d%E1%BB%AF%20li%E1%BB%87u%20n%E1%BB%99i%20dung%2C%20AI%20Make%22%5D%5D%7D]]\n\n### 1-1. Tín dụng AI là gì?\n\nTín dụng AI được sử dụng để chạy các tác vụ AI trên toàn bộ nền tảng LumiTeach.\n\n- Việc trừ tín dụng dựa trên **1 tín dụng = 1 token (đơn vị xử lý LLM)**.\n\n- Tùy theo gói, một lượng **tín dụng cơ bản** nhất định sẽ được tự động cấp hằng tháng.\n\n- Nếu không đủ tín dụng, bạn có thể **mua thêm gói tín dụng** hoặc **yêu cầu cấp thêm** từ quản trị viên tổ chức.",
        "### 2. Tổng quan cấu trúc tín dụng\n\nTín dụng của LumiTeach được vận hành tách thành hai loại tùy theo chủ thể sử dụng.\n\n[[table:%7B%22rows%22%3A%5B%5B%22Ph%C3%A2n%20lo%E1%BA%A1i%22%2C%22T%C3%ADn%20d%E1%BB%A5ng%20Admin%20%28Qu%E1%BA%A3n%20tr%E1%BB%8B%20vi%C3%AAn%29%22%2C%22T%C3%ADn%20d%E1%BB%A5ng%20d%E1%BB%8Bch%20v%E1%BB%A5%20%28Gi%C3%A1o%20vi%C3%AAn%29%22%5D%2C%5B%22%2A%2ANg%C6%B0%E1%BB%9Di%20s%E1%BB%AD%20d%E1%BB%A5ng%2A%2A%22%2C%22Qu%E1%BA%A3n%20tr%E1%BB%8B%20vi%C3%AAn%20c%E1%BB%A7a%20t%E1%BB%95%20ch%E1%BB%A9c%2C%20doanh%20nghi%E1%BB%87p%20ho%E1%BA%B7c%20agency%22%2C%22T%C3%A0i%20kho%E1%BA%A3n%20c%C3%A1%20nh%C3%A2n%20c%E1%BB%A7a%20gi%C3%A1o%20vi%C3%AAn%22%5D%2C%5B%22%2A%2AC%C3%A1ch%20c%E1%BA%A5p%2A%2A%22%2C%22C%E1%BA%A5p%20h%C3%A0ng%20lo%E1%BA%A1t%20theo%20s%E1%BB%91%20l%C6%B0%E1%BB%A3ng%20%C4%91%C3%A3%20th%E1%BB%8Fa%20thu%E1%BA%ADn%20t%E1%BA%A1i%20th%E1%BB%9Di%20%C4%91i%E1%BB%83m%20h%E1%BB%A3p%20%C4%91%E1%BB%93ng%22%2C%22T%E1%BB%B1%20%C4%91%E1%BB%99ng%20c%E1%BA%A5p%20h%E1%BA%B1ng%20th%C3%A1ng%2C%20%C4%91%E1%BA%B7t%20l%E1%BA%A1i%20theo%20th%C3%A1ng%22%5D%2C%5B%22%2A%2A%C4%90%C6%A1n%20v%E1%BB%8B%20qu%E1%BA%A3n%20l%C3%BD%2A%2A%22%2C%22Theo%20t%E1%BB%95%20ch%E1%BB%A9c%22%2C%22Theo%20t%C3%A0i%20kho%E1%BA%A3n%20c%C3%A1%20nh%C3%A2n%22%5D%2C%5B%22%2A%2AN%C6%A1i%20s%E1%BB%AD%20d%E1%BB%A5ng%2A%2A%22%2C%22T%C3%ADnh%20n%C4%83ng%20AI%20trong%20Admin%22%2C%22T%C3%ADnh%20n%C4%83ng%20AI%20trong%20d%E1%BB%8Bch%20v%E1%BB%A5%20LumiTeach%22%5D%2C%5B%22%2A%2AChuy%E1%BB%83n%20cho%20gi%C3%A1o%20vi%C3%AAn%2A%2A%22%2C%22C%C3%B3%20th%E1%BB%83%20chia%20s%E1%BA%BB%20v%C3%A0%20chuy%E1%BB%83n%20cho%20gi%C3%A1o%20vi%C3%AAn%20tr%E1%BB%B1c%20thu%E1%BB%99c%22%2C%22Kh%C3%B4ng%20th%E1%BB%83%20chia%20s%E1%BA%BB%20ho%E1%BA%B7c%20chuy%E1%BB%83n%20gi%E1%BB%AFa%20gi%C3%A1o%20vi%C3%AAn%22%5D%5D%7D]]\n\n[[callout:💡||**Giá trị của 1 tín dụng là như nhau.** Cả Admin và dịch vụ đều dùng cùng một mức giá và tiêu chuẩn quy đổi token cho 1 tín dụng.]]\n\n### 3. Tiêu chuẩn trừ tín dụng theo tính năng AI\n\nTín dụng được trừ theo từng tính năng dựa trên lượng token sử dụng thực tế. Bảng dưới đây là **mức trừ trung bình ước tính cho mỗi lần sử dụng**. Mức trừ thực tế mỗi lần có thể thay đổi tùy theo lượng dữ liệu được xử lý.\n\n[[table:%7B%22rows%22%3A%5B%5B%22T%C3%ADnh%20n%C4%83ng%20AI%22%2C%22Chi%20ti%E1%BA%BFt%22%2C%22M%E1%BB%A9c%20tr%E1%BB%AB%20trung%20b%C3%ACnh%20m%E1%BB%97i%20l%E1%BA%A7n%22%2C%22G%C3%B3i%20c%C3%B3%20th%E1%BB%83%20s%E1%BB%AD%20d%E1%BB%A5ng%22%5D%2C%5B%22%2A%2AAI%20Make%2A%2A%20%28t%E1%BA%A1o%20Ho%E1%BA%A1t%20%C4%91%E1%BB%99ng%29%22%2C%22T%E1%BA%A3i%20l%C3%AAn%20v%C4%83n%20b%E1%BA%A3n%22%2C%22100%20t%C3%ADn%20d%E1%BB%A5ng%22%2C%22Free%20tr%E1%BB%9F%20l%C3%AAn%22%5D%2C%5B%22%22%2C%22T%E1%BA%A3i%20l%C3%AAn%20v%C4%83n%20b%E1%BA%A3n%20%2B%20h%C3%ACnh%20%E1%BA%A3nh%22%2C%22100%20t%C3%ADn%20d%E1%BB%A5ng%22%2C%22Free%20tr%E1%BB%9F%20l%C3%AAn%22%5D%2C%5B%22%22%2C%22T%E1%BA%A3i%20l%C3%AAn%20video%22%2C%22150%20t%C3%ADn%20d%E1%BB%A5ng%22%2C%22Free%20tr%E1%BB%9F%20l%C3%AAn%22%5D%2C%5B%22%2A%2AB%E1%BA%A3ng%20brainstorming%2A%2A%22%2C%22Wordcloud%22%2C%223%20t%C3%ADn%20d%E1%BB%A5ng%22%2C%22Free%20tr%E1%BB%9F%20l%C3%AAn%22%5D%2C%5B%22%22%2C%22Classification%22%2C%223%20t%C3%ADn%20d%E1%BB%A5ng%22%2C%22Free%20tr%E1%BB%9F%20l%C3%AAn%22%5D%2C%5B%22%22%2C%22Mindmap%22%2C%225%20t%C3%ADn%20d%E1%BB%A5ng%22%2C%22Free%20tr%E1%BB%9F%20l%C3%AAn%22%5D%2C%5B%22%2A%2ARewrite%2A%2A%20%28hi%E1%BB%87u%20ch%E1%BB%89nh%20v%C4%83n%20b%E1%BA%A3n%29%22%2C%22-%22%2C%221%20t%C3%ADn%20d%E1%BB%A5ng%22%2C%22Free%20tr%E1%BB%9F%20l%C3%AAn%22%5D%2C%5B%22%2A%2AAuto-Tagging%2A%2A%20%28qu%E1%BA%A3n%20tr%E1%BB%8B%20vi%C3%AAn%29%22%2C%22G%E1%BA%AFn%20th%E1%BA%BB%20ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20gi%E1%BA%A3ng%20d%E1%BA%A1y%22%2C%2210%20t%C3%ADn%20d%E1%BB%A5ng%22%2C%22Pro%20tr%E1%BB%9F%20l%C3%AAn%22%5D%2C%5B%22%22%2C%22G%E1%BA%AFn%20th%E1%BA%BB%20n%E1%BB%99i%20dung%22%2C%2210%20t%C3%ADn%20d%E1%BB%A5ng%22%2C%22Pro%20tr%E1%BB%9F%20l%C3%AAn%22%5D%5D%7D]]\n\n[[callout:📐||Mức trừ trung bình mỗi lần của AI Make được tính dựa trên việc tạo **10 Hoạt động**. Tiêu chuẩn trừ tín dụng được tính lại định kỳ dựa trên dữ liệu vận hành dịch vụ.]]\n\n### 4. Cách sử dụng và trừ tín dụng\n\nDo đặc tính của LLM, không thể biết chính xác lượng token trước khi nhập dữ liệu, nên hệ thống xử lý theo hai bước: **kiểm tra trước (mức trừ ước tính)** và **quyết toán sau (mức trừ thực tế)**.\n\n### 4-1. Kiểm tra trước\n\nKhi chạy tính năng AI (nhấp nút), **số token ước tính** được quy đổi thành tín dụng và so sánh với số dư.\n\n- Nếu số tín dụng đang có không đủ, không thể chạy tính năng.\n\n### 4-2. Quyết toán sau\n\n- Nếu kết quả được tạo bình thường, mức trừ cuối cùng dựa trên **số token thực tế đã sử dụng**.\n\n- Khi **hủy giữa chừng** tác vụ AI: chỉ trừ phần token của kết quả đã tạo đến thời điểm hủy.\n\n- Khi xảy ra **lỗi hệ thống của AI engine**: tín dụng được khôi phục toàn bộ.\n\n### 5. Thứ tự sử dụng và thời hạn tín dụng\n\nNếu có nhiều loại tín dụng, chúng được sử dụng theo thứ tự sau.\n\n- **Tín dụng định kỳ hằng tháng**\n\n- **Tín dụng được cấp/mua thêm**\n\n[[table:%7B%22rows%22%3A%5B%5B%22Lo%E1%BA%A1i%22%2C%22%C4%90%E1%BB%91i%20t%C6%B0%E1%BB%A3ng%22%2C%22Chuy%E1%BB%83n%20sang%20k%E1%BB%B3%20sau%22%5D%2C%5B%22T%C3%ADn%20d%E1%BB%A5ng%20%C4%91%E1%BB%8Bnh%20k%E1%BB%B3%20h%E1%BA%B1ng%20th%C3%A1ng%22%2C%22T%C3%A0i%20kho%E1%BA%A3n%20c%C3%A1%20nh%C3%A2n%20c%E1%BB%A7a%20gi%C3%A1o%20vi%C3%AAn%22%2C%22C%C3%B3%20th%E1%BB%83%22%5D%2C%5B%22T%C3%ADn%20d%E1%BB%A5ng%20b%E1%BB%95%20sung%22%2C%22T%C3%A0i%20kho%E1%BA%A3n%20c%C3%A1%20nh%C3%A2n%20c%E1%BB%A7a%20gi%C3%A1o%20vi%C3%AAn%22%2C%22C%C3%B3%20th%E1%BB%83%22%5D%5D%7D]]",
        "### 6. Hướng dẫn cho quản trị viên (vận hành tín dụng tổ chức)\n\n> Phần này áp dụng cho **quản trị viên cấp trên** (Admin của agency, doanh nghiệp, tổ chức, đối tác nội dung).\n\n### 6-1. Thời điểm cấp Tín dụng Admin\n\n- Cấp hàng loạt theo số lượng đã thỏa thuận tại **thời điểm hợp đồng**.\n\n- Nếu cần thêm tín dụng, cần ký **hợp đồng bổ sung riêng**.\n\n- Ngày tham chiếu được tự động đặt là **ngày bắt đầu hợp đồng** của công ty trực thuộc.\n\n### 6-2. Chính sách cấp tín dụng định kỳ cho giáo viên\n\n- **Ngày cấp**: Tự động cấp vào **00:00:00 (UTC)** cùng ngày mỗi tháng, dựa trên ngày bắt đầu hợp đồng (hoặc ngày do khách hàng chỉ định).\n\n- **Nếu ngày tham chiếu cấp là cuối tháng (ngày 29 / 30 / 31)**\n\n- Nếu tháng đó không có ngày tham chiếu, tín dụng sẽ được cấp vào ngày cuối cùng của tháng đó. Ví dụ: nếu ngày tham chiếu là 31, 31/3 → 30/4 → 31/5 → 30/6. Với tháng 2 không phải năm nhuận, tín dụng được cấp vào 28/2.\n\n- **Giáo viên vào giữa tháng**: tín dụng cố định của tháng đó được cấp ngay tại thời điểm xác thực và không được chuyển sang kỳ sau.\n\n- **Giáo viên bị gỡ liên kết tổ chức/rút khỏi dịch vụ**: bị dừng sử dụng ngay lập tức.\n\n- Tham gia lại sau khi gỡ liên kết/rút khỏi dịch vụ\n\n- Xác thực lại với cùng công ty: nếu trong tháng đã có lịch sử cấp tín dụng định kỳ, sẽ không cấp lại.\n\n- Xác thực lại với công ty khác: tín dụng định kỳ của tổ chức mới sẽ được cấp mới.\n\n- **Không thể cấp:** nếu công ty trực thuộc không đủ Tín dụng Admin, tín dụng định kỳ hằng tháng của giáo viên sẽ không được cấp.\n\n### 6-3. Xử lý yêu cầu tín dụng bổ sung\n\n### Giáo viên yêu cầu quản trị viên\n\n- Khi giáo viên nhấp nút **[Yêu cầu tín dụng]** trên trang tín dụng của mình, quản trị viên cấp trên có thể kiểm tra yêu cầu.\n\n- Quản trị viên **phê duyệt hoặc từ chối** trong Admin.\n\n- Khi phê duyệt, tín dụng sẽ bị trừ ngay khỏi quỹ dùng chung của Admin và được cấp cho tài khoản giáo viên.\n\n### Quản trị viên (tổ chức) yêu cầu quản trị viên cấp trên\n\n- Không có chức năng yêu cầu riêng trong Admin; yêu cầu được thực hiện **online/offline với quản trị viên cấp trên trực tiếp theo quan hệ hợp đồng**.\n\n- Tín dụng được cấp sau khi hoàn tất hợp đồng bổ sung.\n\n### 6-4. Sửa thông tin cấp tín dụng\n\n[[table:%7B%22rows%22%3A%5B%5B%22M%E1%BB%A5c%22%2C%22Ch%C3%ADnh%20s%C3%A1ch%22%2C%22Ghi%20ch%C3%BA%22%5D%2C%5B%22C%E1%BA%A5p%20th%C3%AAm%20T%C3%ADn%20d%E1%BB%A5ng%20Admin%22%2C%22C%E1%BA%A5p%20th%C3%AAm%20ngay%22%2C%22C%E1%BB%99ng%20v%C3%A0o%20s%E1%BB%91%20d%C6%B0%20hi%E1%BB%87n%20c%C3%B3%22%5D%2C%5B%22C%E1%BA%A5p%20th%C3%AAm%20t%C3%ADn%20d%E1%BB%A5ng%20cho%20gi%C3%A1o%20vi%C3%AAn%22%2C%22C%E1%BA%A5p%20th%C3%AAm%20ngay%22%2C%22C%E1%BB%99ng%20v%C3%A0o%20s%E1%BB%91%20d%C6%B0%20hi%E1%BB%87n%20c%C3%B3%22%5D%2C%5B%22Thay%20%C4%91%E1%BB%95i%20s%E1%BB%91%20l%C6%B0%E1%BB%A3ng%20t%C3%ADn%20d%E1%BB%A5ng%20%C4%91%E1%BB%8Bnh%20k%E1%BB%B3%20c%E1%BB%A7a%20gi%C3%A1o%20vi%C3%AAn%22%2C%22%C3%81p%20d%E1%BB%A5ng%20t%E1%BB%AB%20ng%C3%A0y%20c%E1%BA%A5p%20ti%E1%BA%BFp%20theo%22%2C%22-%22%5D%5D%7D]]",
        "[[table:%7B%22rows%22%3A%5B%5B%22Ph%C3%A2n%20lo%E1%BA%A1i%22%2C%22Ho%C3%A0n%20ti%E1%BB%81n%2FH%E1%BB%A7y%22%2C%22Khi%20g%E1%BB%A1%20li%C3%AAn%20k%E1%BA%BFt%2Fr%C3%BAt%20kh%E1%BB%8Fi%20d%E1%BB%8Bch%20v%E1%BB%A5%22%5D%2C%5B%22T%C3%ADn%20d%E1%BB%A5ng%20c%C6%A1%20b%E1%BA%A3n%20%C4%91%C3%A3%20c%E1%BA%A5p%22%2C%22Kh%C3%B4ng%20th%E1%BB%83%22%2C%22D%E1%BB%ABng%20s%E1%BB%AD%20d%E1%BB%A5ng%20ngay%20l%E1%BA%ADp%20t%E1%BB%A9c%22%5D%2C%5B%22T%C3%ADn%20d%E1%BB%A5ng%20b%E1%BB%95%20sung%22%2C%22Kh%C3%B4ng%20th%E1%BB%83%22%2C%22D%E1%BB%ABng%20s%E1%BB%AD%20d%E1%BB%A5ng%20ngay%20l%E1%BA%ADp%20t%E1%BB%A9c%22%5D%2C%5B%22T%C3%A1c%20v%E1%BB%A5%20AI%20b%E1%BB%8B%20h%E1%BB%A7y%20gi%E1%BB%AFa%20ch%E1%BB%ABng%22%2C%22Kh%C3%B4ng%20ho%C3%A0n%20ti%E1%BB%81n%20ph%E1%BA%A7n%20token%20%C4%91%C3%A3%20d%C3%B9ng%20%C4%91%E1%BA%BFn%20th%E1%BB%9Di%20%C4%91i%E1%BB%83m%20h%E1%BB%A7y%3B%20ho%C3%A0n%20l%E1%BA%A1i%20ph%E1%BA%A7n%20ch%C6%B0a%20x%E1%BB%AD%20l%C3%BD%22%2C%22-%22%5D%2C%5B%22L%E1%BB%97i%20h%E1%BB%87%20th%E1%BB%91ng%22%2C%22Ho%C3%A0n%20100%25%20n%E1%BA%BFu%20kh%C3%B4ng%20cung%20c%E1%BA%A5p%20k%E1%BA%BFt%20qu%E1%BA%A3%22%2C%22-%22%5D%5D%7D]]"
      ],
      "cat-admin-faq": [
        "### **H. Giáo viên và quản trị viên khác nhau như thế nào?**\n\nGiáo viên tạo tài liệu giảng dạy và tiến hành Bài học hoặc Bài tập trong dịch vụ LumiTeach. Quản trị viên thực hiện các công việc quản lý trong Admin, chẳng hạn như quản lý chương trình giảng dạy, nội dung và thành viên. Một tài khoản có thể có đồng thời quyền giáo viên và quyền quản trị viên. Trong trường hợp đó, cần hoàn tất xác thực tổ chức riêng trên dịch vụ và trên Admin.\n\n### **H. Thành viên đã gửi yêu cầu đăng ký. Tôi có thể phê duyệt ở đâu?**\n\nTrong khu vực **[Cảnh báo chính]** trên trang chủ Admin, bạn có thể kiểm tra số lượng yêu cầu đăng ký đang chờ phê duyệt. Trong **Quản lý thành viên > Danh sách thành viên**, nhấp nút **Thao tác (⋯)** của thành viên có trạng thái Đang chờ, rồi phê duyệt hoặc từ chối yêu cầu.\n\n### **H. Nếu một người yêu cầu đồng thời quyền giáo viên và quyền quản trị viên, có cần phê duyệt riêng từng quyền không?**\n\nCó. Quyền giáo viên và quyền quản trị viên phải được phê duyệt hoặc từ chối riêng từng quyền.\n\n### **H. Có thể cấp quyền trước khi người dùng đăng ký không?**\n\nCó. Sử dụng nút **[Đăng ký trước quyền]** ở góc trên bên phải của **Quản lý thành viên > Danh sách thành viên** để đăng ký trước tài khoản và cấp quyền trước khi đăng ký. Tài khoản đã được đăng ký trước có thể sử dụng ngay sau khi đăng ký mà không cần yêu cầu phê duyệt riêng.\n\n### **H. Nếu nhập sai địa chỉ email khi đăng ký trước quyền thì sao?**\n\nNếu email đã đăng ký trước khác với tài khoản Google dùng để đăng ký thực tế, phê duyệt tự động sẽ không được áp dụng và người dùng phải gửi yêu cầu phê duyệt đăng ký riêng. Khi đăng ký trước quyền, hãy nhập chính xác cùng địa chỉ email với tài khoản Google.\n\n### **H. Cần xử lý tài khoản của nhân viên đã nghỉ việc như thế nào?**\n\nTrong Quản lý thành viên, hãy gỡ liên kết tổ chức của thành viên đó. Giáo viên bị gỡ liên kết tổ chức sẽ chuyển thành thành viên miễn phí của LumiTeach. Quản trị viên bị gỡ liên kết tổ chức sẽ không thể truy cập Admin nữa.\n\n### **H. Nếu muốn vô hiệu hóa vĩnh viễn tài khoản quản trị viên thì phải làm gì?**\n\nQuản trị viên cấp trên hoặc quản trị viên ngang cấp có thể đặt tài khoản quản trị viên đó thành **Tạm dừng sử dụng** trong Quản lý thành viên. Quản trị viên bị tạm dừng không thể sử dụng Admin. (Tài khoản giáo viên dùng quy trình rút khỏi dịch vụ, và giáo viên cũng có thể tự rút khỏi dịch vụ trực tiếp.)\n\n### **H. Gỡ liên kết tổ chức và rút khỏi dịch vụ/tạm dừng khác nhau như thế nào?**\n\nGỡ liên kết tổ chức chỉ chấm dứt quan hệ với tổ chức đó. Quản trị viên có thể dùng cùng tài khoản để yêu cầu xác thực tổ chức với công ty khác. Giáo viên sẽ chuyển thành thành viên miễn phí và vẫn có thể tiếp tục sử dụng dịch vụ, đồng thời cũng có thể yêu cầu xác thực với công ty khác. Rút khỏi dịch vụ hoặc tạm dừng là xóa hoặc vô hiệu hóa chính tài khoản; vì vậy giáo viên/quản trị viên đã rút khỏi dịch vụ hoặc bị tạm dừng sẽ không thể sử dụng lại dịch vụ LumiTeach hoặc Admin.\n\n### H. Nếu còn tín dụng định kỳ hằng tháng, có được chuyển sang tháng sau không?\n\nCó. Số dư tín dụng định kỳ được cấp hằng tháng có thể được chuyển sang và sử dụng trong tháng tiếp theo.\n\n### H. Cần làm gì khi không đủ tín dụng?\n\n- **Giáo viên**: Trên trang Tín dụng của tôi, nhấp **[Yêu cầu tín dụng]** để yêu cầu quản trị viên trực thuộc cấp thêm.\n\n- **Quản trị viên**: Nếu quỹ dùng chung không đủ, hãy yêu cầu **hợp đồng bổ sung** từ quản trị viên cấp trên trực tiếp.\n\n### H. Nếu dừng tác vụ AI giữa chừng, tín dụng có được hoàn lại không?\n\nPhần token của kết quả **đã thực sự được tạo đến thời điểm hủy sẽ không được hoàn lại.**\n\n### H. Nếu AI phát sinh lỗi thì sao?\n\nNếu không có kết quả nào được cung cấp do lỗi hệ thống của AI engine, **tín dụng đã giữ sẽ được khôi phục toàn bộ.**\n\n### H. Khi rút khỏi dịch vụ, tín dụng còn lại sẽ như thế nào?\n\n- **Giáo viên rút khỏi dịch vụ / gỡ liên kết tổ chức**: Việc sử dụng bị dừng ngay lập tức, và tín dụng bổ sung còn lại được thu hồi về quỹ dùng chung của Admin.\n\n- **Xác thực lại với cùng công ty**: Nếu trong tháng hiện tại đã có lịch sử cấp tín dụng, sẽ không cấp lại.\n\n- **Xác thực lại với công ty khác**: Tín dụng của tổ chức mới sẽ được cấp mới.\n\n### H. Có thể xem lịch sử sử dụng tín dụng ở đâu?\n\n- **Giáo viên**: Trên trang Quản lý Tín dụng của tôi, có thể kiểm tra số dư còn lại và lịch sử sử dụng gần đây.\n\n- **Quản trị viên**: 1. Kiểm tra lịch sử sử dụng gần đây trong **Hồ sơ > Thông tin cơ bản > Tín dụng AI**. 2. Kiểm tra lịch sử sử dụng gần đây trong tab **Quản lý tổ chức trực thuộc > Thông tin tổ chức trực thuộc > Tín dụng AI**.\n\n### **H. Thành viên yêu cầu hỗ trợ vì không đủ Tín dụng AI. Cần xử lý như thế nào?**\n\nKhi giáo viên yêu cầu cấp thêm tín dụng, cảnh báo sẽ hiển thị trong danh sách quản lý thành viên. Nhấp **[Kiểm tra yêu cầu]** để xem chi tiết, chọn số lượng tín dụng cần cấp rồi phê duyệt. Số lượng đó sẽ được trừ khỏi tín dụng dùng chung của tổ chức và được cấp ngay lập tức. Hãy lưu ý vì tín dụng đã cấp không thể thu hồi."
      ]
    },
    "articleIntros": {
      "cat-admin-dashboard": "[[callout:🕑||**Thời điểm tổng hợp bảng điều khiển:** dữ liệu bảng điều khiển được tổng hợp **vào đầu mỗi giờ**.]]",
      "cat-admin-member-management": "> Đăng ký các thành viên sẽ sử dụng dịch vụ LumiTeach và Admin. Bạn có thể kiểm soát quyền của từng thành viên và quản lý Tín dụng AI.",
      "cat-admin-approval-permission": "> Cần thực hiện xác thực công ty/tổ chức trực thuộc để sử dụng LumiTeach Admin và dịch vụ. Quản trị viên có thể phê duyệt hoặc từ chối yêu cầu đăng ký trong Admin, hoặc đăng ký trước tài khoản thành viên.",
      "cat-admin-standard-management": "> Đây là bước đầu tiên để quản lý chương trình giảng dạy và nội dung trong LumiTeach Admin.",
      "cat-admin-curriculum-management": "> Bạn có thể cấu trúc chương trình giảng dạy và nội dung riêng của tổ chức hoặc doanh nghiệp theo hệ thống LumiTeach. Cung cấp nội dung tối ưu cho người dùng thông qua chương trình giảng dạy tùy chỉnh.",
      "cat-admin-lesson-activity": "> Menu **Quản lý bài học** là chức năng đăng ký và quản lý Bài học và Hoạt động phù hợp với chương trình giảng dạy. Bạn có thể kiểm tra và chỉnh sửa thông tin liên kết chương trình giảng dạy, từ khóa khái niệm và siêu dữ liệu của các Bài học đã đăng ký.",
      "cat-admin-lesson-bulk-upload": "> Đăng ký Bài học hàng loạt là chức năng cho phép đăng ký nhiều Bài học và Hoạt động cùng lúc bằng một tệp Excel. Cách này nhanh hơn so với việc nhập từng Bài học thủ công.",
      "cat-admin-lesson-ai-make": "> Với AI Make, AI tự động tạo Bài học chỉ bằng cách tải lên tài liệu nguồn như tệp PDF hoặc PPT. Bài học đã tạo có thể được xem xét trong tab **[Xem xét]**, chỉnh sửa nội dung rồi phê duyệt để đăng.",
      "cat-admin-lesson-recommendation": "> Bạn có thể tuyển chọn các Bài học đã đăng ký theo cấu trúc chương trình giảng dạy. Nội dung được đăng ký trong Quản lý đề xuất sẽ hiển thị trên màn hình Trang chủ của dịch vụ LumiTeach để người dùng dễ truy cập hơn.",
      "cat-admin-assessment-question": "> Tạo và quản lý các câu hỏi cấu thành một Đánh giá.",
      "cat-admin-assessment-paper": "> Bạn có thể nhóm các câu hỏi phù hợp với chương trình giảng dạy để đăng ký và quản lý các bài đánh giá có cấu trúc. Các bài đánh giá này có thể được giáo viên giao cho học sinh dưới dạng bài tập hoặc bài kiểm tra trong dịch vụ LumiTeach.",
      "cat-admin-report-management": "> Kiểm tra nội dung bị báo cáo trong dịch vụ LumiTeach và thực hiện hành động phù hợp.",
      "cat-admin-inquiry": "> Nếu gặp vấn đề hoặc có câu hỏi khi sử dụng dịch vụ LumiTeach hoặc Admin, hãy dùng menu Yêu cầu 1:1.",
      "cat-admin-affiliation-release": "> Nếu cần rời khỏi tổ chức hiện tại vì chuyển công tác, nghỉ việc hoặc lý do khác, hãy làm theo quy trình gỡ liên kết tổ chức.",
      "cat-admin-ai-credit": "> Các tính năng AI của LumiTeach hoạt động theo mô hình **tính phí theo tín dụng sử dụng**. Tài liệu này hướng dẫn cách Tín dụng AI hoạt động, mỗi tính năng bị trừ bao nhiêu và cần làm gì khi không đủ tín dụng."
    }
  }
};
Object.entries(generatedAdminTranslations).forEach(([language, languagePatch]) => {
  translations[language] = translations[language] || {};
  Object.assign(translations[language], languagePatch);
});
const generatedAdminTermMemory = {
  "en": [],
  "pt": [
    [
      "Admin Guide",
      "Guia Admin"
    ],
    [
      "LumiTeach Admin Guide",
      "Guia Admin LumiTeach"
    ],
    [
      "Lesson",
      "Lição"
    ],
    [
      "Lessons",
      "Lições"
    ],
    [
      "Activity",
      "Atividade"
    ],
    [
      "Activities",
      "Atividades"
    ],
    [
      "Assessment",
      "Avaliação"
    ],
    [
      "Assignment",
      "Tarefa"
    ],
    [
      "AI Credit",
      "Crédito de IA"
    ],
    [
      "Curriculum",
      "Currículo"
    ],
    [
      "Explore",
      "Explorar"
    ],
    [
      "Self Study",
      "Estudo autônomo"
    ],
    [
      "Challenge",
      "Desafio"
    ],
    [
      "Flash Card",
      "Cartão de estudo"
    ],
    [
      "Interaction",
      "Interação"
    ],
    [
      "Battle Mode",
      "Modo batalha"
    ],
    [
      "Presentation",
      "Apresentação"
    ],
    [
      "Profile",
      "Perfil"
    ]
  ],
  "es": [
    [
      "Admin Guide",
      "Guía Admin"
    ],
    [
      "LumiTeach Admin Guide",
      "Guía Admin LumiTeach"
    ],
    [
      "Lesson",
      "Lección"
    ],
    [
      "Lessons",
      "Lecciones"
    ],
    [
      "Activity",
      "Actividad"
    ],
    [
      "Activities",
      "Actividades"
    ],
    [
      "Assessment",
      "Evaluación"
    ],
    [
      "Assignment",
      "Tarea"
    ],
    [
      "AI Credit",
      "Crédito de IA"
    ],
    [
      "Curriculum",
      "Currículo"
    ],
    [
      "Explore",
      "Explorar"
    ],
    [
      "Self Study",
      "Estudio independiente"
    ],
    [
      "Challenge",
      "Desafío"
    ],
    [
      "Flash Card",
      "Tarjeta Didáctica"
    ],
    [
      "Interaction",
      "Interacción"
    ],
    [
      "Battle Mode",
      "Modo Batalla"
    ],
    [
      "Presentation",
      "Presentación"
    ],
    [
      "Profile",
      "Perfil"
    ]
  ],
  "ja": [
    [
      "Lesson",
      "授業"
    ],
    [
      "Lessons",
      "授業"
    ],
    [
      "Activity",
      "アクティビティ"
    ],
    [
      "Activities",
      "アクティビティ"
    ],
    [
      "Assessment",
      "評価"
    ],
    [
      "Assignment",
      "課題"
    ],
    [
      "AI Credit",
      "AIクレジット"
    ],
    [
      "Curriculum",
      "カリキュラム"
    ],
    [
      "Explore",
      "さがす"
    ],
    [
      "Self Study",
      "自主学習"
    ],
    [
      "Challenge",
      "チャレンジ"
    ],
    [
      "Flash Card",
      "フラッシュカード"
    ],
    [
      "Interaction",
      "インタラクション"
    ],
    [
      "Battle Mode",
      "対戦モード"
    ],
    [
      "Presentation",
      "プレゼンテーション"
    ],
    [
      "Profile",
      "プロフィール"
    ]
  ],
  "vi": [
    [
      "Lesson",
      "Bài học"
    ],
    [
      "Lessons",
      "Các bài học"
    ],
    [
      "Activity",
      "Hoạt động"
    ],
    [
      "Activities",
      "Các hoạt động"
    ],
    [
      "Assessment",
      "Đánh giá"
    ],
    [
      "Assignment",
      "Bài tập"
    ],
    [
      "AI Credit",
      "Tín dụng AI"
    ],
    [
      "Curriculum",
      "Chương trình giảng dạy"
    ],
    [
      "Explore",
      "Khám phá"
    ],
    [
      "Self Study",
      "Tự học"
    ],
    [
      "Challenge",
      "Thử thách"
    ],
    [
      "Flash Card",
      "Thẻ học tập"
    ],
    [
      "Interaction",
      "Tương tác"
    ],
    [
      "Battle Mode",
      "Chế độ thi đấu"
    ],
    [
      "Presentation",
      "Bài thuyết trình"
    ],
    [
      "Profile",
      "Hồ sơ"
    ]
  ]
};
Object.entries(generatedAdminTermMemory).forEach(([language, terms]) => {
  translationTermMemory[language] = terms.concat(translationTermMemory[language] || []);
});
// END GENERATED ADMIN TRANSLATIONS
