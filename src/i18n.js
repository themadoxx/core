import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import des fichiers de langue
import translationFR from './locales/fr/translation.json';
import translationEN from './locales/en/translation.json';
import translationMA from './locales/ma/translation.json';
import translationAR from './locales/ar/translation.json';
import translationDE from './locales/de/translation.json';

const resources = {
  fr: { translation: translationFR },
  en: { translation: translationEN },
  ma: { translation: translationMA },
  ar: { translation: translationAR },
  de: { translation: translationDE }
};

i18n
  .use(LanguageDetector) // 👈 Active la détection automatique
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr', // Langue par défaut si rien n’est détecté
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'], // priorités
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'], // permet de mémoriser la langue choisie
      checkWhitelist: true
    },
    supportedLngs: ['fr', 'en', 'ma', 'ar', 'de'], // 👈 Très important pour filtrer les langues valides
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;