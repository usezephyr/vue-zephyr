// Vue
import { createApp } from "vue";
import App from "./App.vue";
// Twind
import { setup, silent } from 'twind';
import typography from '@twind/typography'
// Components
import Button from "@/components/Button/Button.vue";
// @ts-ignore
import Dropdown, { DropdownButton, DropdownItems, DropdownItem } from "@/components/Dropdown/Dropdown.vue";

import theme from './testTheme';
import router from './router'

// Create App
const app = createApp(App);

// Global Components
app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('DropdownButton', DropdownButton);
app.component('DropdownItems', DropdownItems);
app.component('DropdownItem', DropdownItem);

// Router
app.use(router);

// User Theme
app.provide('userTheme', theme ?? {});

// Twind
const twindEnable = true;
if (twindEnable) {
  setup({
    // preflight: true,
    mode: silent,
    // hash: true,
    theme: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', "-apple-system", 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      extend: {
        colors: {
          'shamrock': {
            DEFAULT: '#07c582',
            '50':  '#eaf8f7',
            '100': '#cef7f0',
            '200': '#9bf2de',
            '300': '#5be9c9',
            '400': '#40cfa3',
            '500': '#07c582',
            '600': '#07ac66',
            '700': '#0d8e57',
            '800': '#106f49',
            '900': '#105a3e',
          },
        }
      }
    },
    darkMode: 'class',
    plugins: {
      ...typography(),
    },
  })
}
app.provide('twindEnable', twindEnable);

// Go!
app.mount("#app");
