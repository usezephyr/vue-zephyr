import { App as Application } from "vue";
import Button from "./Button.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Button);
  }
};

export default Plugin;

export { Button };
