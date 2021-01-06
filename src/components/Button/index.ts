import { App as Application } from "vue";
import Button from "./Button.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install: (vue: Application) => {
    registerComponent(vue, Button);
  }
};

export default Plugin;

export { Button };
