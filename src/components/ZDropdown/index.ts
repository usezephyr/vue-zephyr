import { App as Application } from "vue";
import ZDropdown from "./ZDropdown.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install(vue: Application) {
    registerComponent(vue, ZDropdown);
  }
};

export default Plugin;

export { ZDropdown };
