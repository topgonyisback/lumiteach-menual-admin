const defaultLanguage = 'ko';
let currentLanguage = defaultLanguage;

const translations = {};
const translationTermMemory = {};

const nativeLanguageNames = {
  "ko": "한국어",
  "en": "English",
  "pt": "Português",
  "es": "Español",
  "ja": "日本語",
  "vi": "Tiếng Việt"
};

function registerTranslation(language, translationPatch) {
  translations[language] = Object.assign(translations[language] || {}, translationPatch);
}

function registerTranslationTerms(language, terms) {
  translationTermMemory[language] = (terms || []).concat(translationTermMemory[language] || []);
}
