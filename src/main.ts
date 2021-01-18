// Vue
import { createApp } from "vue";
import App from "./App.vue";

// Twind
import { setup, silent } from 'twind';
import typography from '@twind/typography'
import '@/views/assets/style.css'

// Components
import Button from "@/components/Button/Button.vue";
import Dropdown, { DropdownButton, DropdownItems, DropdownItem } from "@/components/Dropdown/Dropdown.vue";
import Table, { TableWrapper, Thead, Tbody, Tr, Th, Td } from "@/components/Table/Table.vue";
import Anchor from "@/components/Anchor/Anchor.vue";

// Router
import VueRouterLayout from 'vue-router-layout'
import router from './router'

// i18n
import {checkLocale, i18n} from "@/views/utils/locale";

// Zephyrs External Theme
import theme from './testTheme';

// Create App
const app = createApp(App);

// Global Components
app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('DropdownButton', DropdownButton);
app.component('DropdownItems', DropdownItems);
app.component('DropdownItem', DropdownItem);
app.component('TableWrapper', TableWrapper);
app.component('Table', Table);
app.component('Thead', Thead);
app.component('Tbody', Tbody);
app.component('Tr', Tr);
app.component('Th', Th);
app.component('Td', Td);
app.component('Anchor', Anchor);

// Router
app.use(router);
app.use(VueRouterLayout);

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

// i18n
checkLocale();
app.use(i18n);


// Go!
app.mount("#app");
