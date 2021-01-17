import { App as Application } from "vue";
import Table from "./Table.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install(vue: Application) {
    registerComponent(vue, Table);
  },
};

export default Plugin;

export { Table };
