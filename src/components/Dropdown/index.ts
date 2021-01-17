import { App as Application } from "vue";
import Dropdown from "./Dropdown.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install(vue: Application) {
    registerComponent(vue, Dropdown);
  },
};

export default Plugin;

export { Dropdown };
