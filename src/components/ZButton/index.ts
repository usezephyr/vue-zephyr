import { App as Application } from "vue";
import ZButton from "./ZButton.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install: (vue: Application) => {
    registerComponent(vue, ZButton);
  }
};

export default Plugin;

export { ZButton };
