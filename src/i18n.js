import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    supportedLngs: ["en", "ru", "uz"],
    debug: false,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    react: { useSuspense: true },
    backend: {
      loadPath: "/languages/{{lng}}/translation.json",
    },
  });

export default i18next;