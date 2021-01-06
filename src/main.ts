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
    // theme: {},
    darkMode: 'class',
    plugins: {
    ...typography(),
    },
  })
}
app.provide('twindEnable', twindEnable);

// Go!
app.mount("#app");
