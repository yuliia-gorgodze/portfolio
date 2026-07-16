import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import uk from "./locales/uk.json";

const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;

i18n.use(initReactI18next).init({
  lng: saved || "en",
  fallbackLng: "en",
  debug: false,
  interpolation: { escapeValue: false },
  resources: {
    en: { translation: en },
    uk: { translation: uk },
  },
});

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language;
  i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
  });
}

export default i18n;
