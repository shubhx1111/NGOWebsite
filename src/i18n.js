import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About Us",
      "contact": "Contact",
      "donate": "Donate",
      "login": "Login",
      "logout": "Logout",
      "dashboard": "Dashboard",
      "hero_title": "Every Child Deserves A Brighter Future",
      "hero_subtitle": "Transforming lives through education, health, and sustainable development.",
      "language": "English"
    }
  },
  hi: {
    translation: {
      "home": "मुख्य पृष्ठ",
      "about": "हमारे बारे में",
      "contact": "संपर्क करें",
      "donate": "दान दें",
      "login": "लॉगिन",
      "logout": "लॉगआउट",
      "dashboard": "डैशबोर्ड",
      "hero_title": "हर बच्चे का भविष्य उज्ज्वल होना चाहिए",
      "hero_subtitle": "शिक्षा, स्वास्थ्य और सतत विकास के माध्यम से जीवन बदलना।",
      "language": "हिंदी"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
