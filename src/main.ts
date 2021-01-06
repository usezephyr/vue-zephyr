import { createApp } from "vue";
import App from "./App.vue";
import { setup, cssomSheet, silent } from 'twind';

import theme from './testTheme';

// Create App
const app = createApp(App);

// User Theme
app.provide('userTheme', theme ?? {});

// Twind
const twindEnable = true;
if (twindEnable) {
  setup({
    // preflight: true,
    mode: silent,
    // hash: true,
    // theme: {},
    darkMode: 'class',
    // sheet: cssomSheet({ target: new CSSStyleSheet() }),
  })
}
app.provide('twindEnable', twindEnable);

// Go!
app.mount("#app");
