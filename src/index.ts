import { App as Application, Plugin } from "vue";
import * as componentsAsPlugins from "./components/plugins";
import { setVueInstance } from "./utils/config/index";
import merge from "lodash.merge";
import { setup, silent } from "twind";
import type { Configuration } from 'twind';

// Install
export default function pluginSetup(
  config: {
    theme?: Record<string, unknown> | boolean;
    twind?: {
      enabled: boolean;
      setup: Configuration;
    };
  } = {
    theme: false,
  }
): Exclude<Plugin["install"], undefined> {
  // Merge default config with user config
  const twindOptions = merge(
    {
      enable: true,
      setup: {
        mode: silent,
        darkMode: false,
      },
    },
    config.twind
  );

  // Pass to Twind setup
  if (twindOptions.enable && twindOptions.setup) {
    setup(twindOptions.setup);
  }

  // Install Vue plugin
  const install: Exclude<Plugin["install"], undefined> = (app: Application) => {
    // Components
    setVueInstance(app);
    for (const componentKey in componentsAsPlugins) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      app.use((componentsAsPlugins as any)[componentKey]);
    }

    // Provide data to components
    app.provide("userTheme", config.theme);
    app.provide("twindEnable", twindOptions.enable);
  };
  return install;
}

export * from "./components";
