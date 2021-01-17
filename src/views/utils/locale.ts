import { ref } from "vue";
import { createI18n } from "vue-i18n";
import en from "@/views/locales/en";
import es from "@/views/locales/es";
import zhCN from "@/views/locales/zh-CN";

// Set default lang
const locale = ref("en");

// Create
const i18n = createI18n({
  locale: locale.value,
  messages: {
    en: { ...en },
    es: { ...es },
    "zh-CN": { ...zhCN },
  },
});

// Helper method
const updateLocale = (newLocale: string): void => {
  localStorage.setItem("locale", newLocale);
  locale.value = newLocale;
  i18n.global.locale = newLocale;
};

// Installation method
// Interface "I18n" keep throwing an type error.
// Todo: investigate this further is possible for fix
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkLocale = (): void => {
  if (localStorage.getItem("locale") === null) {
    updateLocale("en");
  } else {
    updateLocale(localStorage.getItem("locale") ?? "en");
  }
};

export { checkLocale, i18n, updateLocale, locale };
