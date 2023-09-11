import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from 'src/locales/en.json'; // Import your language files
import translationRU from 'src/locales/ru.json';
import translationUZ from 'src/locales/uz.json';

const resources = {
  uz: {
    translation: translationUZ,
  },
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

function defineDomenUsingLocation() {
  let domenName = window.location.origin.split('.')[1];

  if (domenName == 'uz') {
    return 'uz';
  } else if (domenName == 'org') {
    return 'en';
  }

  return 'uz';
}

const defaultLanguage = defineDomenUsingLocation();

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || defaultLanguage, // Set the default language here
  fallbackLng: defaultLanguage, // Set the fallback language here
  interpolation: {
    escapeValue: false, // React already escapes content by default
  },
});

export default i18n;
