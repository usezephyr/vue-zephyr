import { ref, onMounted, watch } from "vue";
// TS
interface Mode {
  isDark: {
    value: boolean;
  };
  toggleScheme(): boolean;
}

// State
const isDark = ref(false);

// Methods
const toggleScheme = (): boolean => {
  const newScheme = !isDark.value;
  localStorage.setItem("darkMode", newScheme.toString());
  isDark.value = newScheme;
  return isDark.value;
};

const setDark = (): void => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("darkMode", "true");
  isDark.value = true;
};

const setLight = (): void => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("darkMode", "false");
  isDark.value = false;
};

const setSchemePreference = (): boolean => {
  if (localStorage.getItem("darkMode") === null) {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setDark()
      : setLight();
  } else {
    localStorage.getItem("darkMode") === "true" ? setDark() : setLight();
  }
  return isDark.value;
};

// All-in-one Method
const darkMode = (): Mode => {
  onMounted(() => setSchemePreference());
  watch(isDark, isDark => {
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  });
  return { isDark, toggleScheme };
};

export {
  isDark,
  toggleScheme,
  setSchemePreference,
  setLight,
  setDark,
  darkMode
};
