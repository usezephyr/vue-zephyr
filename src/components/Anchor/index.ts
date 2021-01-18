import { App as Application } from "vue";
import Anchor from "./Anchor.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install: (vue: Application) => {
    registerComponent(vue, Anchor);
  }
};

export default Plugin;

export { Anchor };
