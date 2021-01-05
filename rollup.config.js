import fs from "fs";
import path from "path";
import vue from "rollup-plugin-vue";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";
import typescript from 'rollup-plugin-typescript2';
import { terser } from "rollup-plugin-terser";

const { plugins: postCssPlugins } = require('./postcss.config');

const config = {
  preVue: [
    alias({
      entries: [
        {
          find: "@",
          replacement: `${path.resolve(path.resolve(__dirname, "."), "src")}`
        }
      ],
      customResolver: resolve({
        extensions: [".js", ".jsx", ".vue"]
      })
    })
  ],
  replace: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    __VUE_OPTIONS_API__: JSON.stringify(true),
    __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
  },
  vue: {
    postcssPlugins: postCssPlugins,
    compileTemplate: true,
  },
  postVue: [
    // Process only `<style module>` blocks.
    postcss({
      modules: {
        generateScopedName: '[local]___[hash:base64:5]',
      },
      include: /&module=.*\.css$/,
    }),
    // Process all `<style>` blocks except `<style module>`.
    postcss({
      include: /(?<!&module=.*)\.css$/,
      plugins: postCssPlugins
    }),
    url({
      include: [
        '**/*.svg',
        '**/*.png',
        '**/*.gif',
        '**/*.jpg',
        '**/*.jpeg'
      ]
    }),
  ],
  babel: {
    exclude: "node_modules/**",
    extensions: [".js", ".jsx", ".vue"],
    babelHelpers: "runtime"
  }
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  "vue"
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: "Vue"
};

const baseFolder = "./src/";
const componentsFolder = "components/";

const getComponents = fs
  .readdirSync(baseFolder + componentsFolder)
  .filter(f =>
    fs.statSync(path.join(baseFolder + componentsFolder, f)).isDirectory()
  );

const entriespath = {
  index: "./src/index.ts",
  ...getComponents.reduce((obj, name) => {
    obj[name] = baseFolder + componentsFolder + name + "/index.ts";
    return obj;
  }, {})
};

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const mapComponent = name => {
  return [
    {
      input: baseFolder + componentsFolder + `${name}/index.ts`,
      external,
      output: {
        format: "umd",
        name: capitalize(name),
        file: `dist/components/${name}/index.ts`,
        exports: "named",
        globals
      },
      plugins: [
        typescript(),
        ...config.preVue,
        vue({}),
        ...config.postVue,
        commonjs(),
        babel({
          ...config.babel,
          presets: [["@babel/preset-env", { modules: false }]]
        }),
      ]
    }
  ];
};

const components = [
  ...getComponents.map(f => mapComponent(f)).reduce((r, a) => r.concat(a), [])
];

export default [
  {
    input: entriespath,
    external,
    output: {
      format: "esm",
      dir: "dist/esm"
    },
    plugins: [
      typescript(),
      replace(config.replace),
      ...config.preVue,
      vue(config.vue),
      ...config.postVue,
      commonjs(),
      babel({
        ...config.babel,
        presets: [["@babel/preset-env", { modules: false }]]
      }),
    ]
  },
  {
    input: "src/index.ts",
    external,
    output: {
      format: "esm",
      file: "dist/vuelib.esm.js"
    },
    plugins: [
      typescript(),
      replace(config.replace),
      ...config.preVue,
      vue(config.vue),
      ...config.postVue,
      commonjs(),
      babel({
        ...config.babel,
        presets: [["@babel/preset-env", { modules: false }]]
      }),
    ]
  },
  {
    input: "./src/index.ts",
    external,
    output: {
      compact: true,
      file: "dist/vuelib-browser.min.js",
      format: "iife",
      name: "vuelib",
      exports: "named",
      globals
    },
    plugins: {
      ...config,
    },
    plugins: [
      typescript(),
      replace(config.replace),
      ...config.preVue,
      vue(config.vue),
      ...config.postVue,
      commonjs(),
      babel(config.babel),
      terser({
        output: {
          ecma: 5
        }
      }),
    ]
  },
  {
    input: entriespath,
    external,
    output: {
      compact: true,
      format: "cjs",
      dir: "dist/cjs",
      exports: "named",
      globals
    },
    plugins: {
      ...config,
    },
    plugins: [
      typescript(),
      replace(config.replace),
      ...config.preVue,
      vue({
        ...config.vue,
        template: {
          ...config.vue.template,
          optimizeSSR: true
        }
      }),
      ...config.postVue,
      commonjs(),
      babel(config.babel),
    ]
  },
  // Components get their own outputs
  ...components,
];
