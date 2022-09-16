import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import locales from '@/json/locales.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'gb',
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie']
    },
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    backend: {
      loadPath: '/react-ts-eslint-prettier-husky-template/locales/{{lng}}/{{ns}}.json'
    },
    supportedLngs: locales
  });

export default i18n;
