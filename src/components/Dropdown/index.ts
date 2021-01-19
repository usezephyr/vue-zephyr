import { App as Application } from "vue";
import {Dropdown, DropdownButton, DropdownItems, DropdownItem } from "./Dropdown.vue";

import { registerComponent } from "../../utils/plugins/index";

const DropdownPlugin = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install(vue: Application) {
    registerComponent(vue, Dropdown);
  },
};
const DropdownButtonPlugin = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install(vue: Application) {
    registerComponent(vue, DropdownButton);
  },
};
const DropdownItemsPlugin = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install(vue: Application) {
    registerComponent(vue, DropdownItems);
  },
};
const DropdownItemPlugin = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install(vue: Application) {
    registerComponent(vue, DropdownItem);
  },
};

export {
  DropdownPlugin,
  DropdownButtonPlugin,
  DropdownItemsPlugin,
  DropdownItemPlugin,
  Dropdown,
  DropdownButton,
  DropdownItems,
  DropdownItem
};
