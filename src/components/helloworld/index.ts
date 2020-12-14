import { App as Application } from "vue";
import HelloWorld from "./HelloWorld.vue";

import { registerComponent } from "./../../utils/plugins/index";

const Plugin = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install(vue: Application) {
    registerComponent(vue, HelloWorld);
  }
};

export default Plugin;

export { HelloWorld };
