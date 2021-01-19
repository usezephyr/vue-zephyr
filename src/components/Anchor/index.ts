import { App as Application } from "vue";
import Anchor from "./Anchor.vue";

import { registerComponent } from "../../utils/plugins/index";

const AnchorPlugin = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install: (vue: Application) => {
    registerComponent(vue, Anchor);
  }
};

export default Anchor;

export { AnchorPlugin };
