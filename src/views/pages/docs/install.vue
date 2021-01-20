<template>
  <DocHeader>
    <template #title> Installation </template>
    <template #subtitle>Get started in Vue Zephyr in minutes.</template>
    <template #right-side>
      <div :class="tw`justify-end flex items-start md:mt-2 space-x-2`">
        <Badge classAppend="bg-yellow-500 text-gray-900">In Progress</Badge>
      </div>
    </template>
  </DocHeader>
  <div :class="tw`mt-12 mb-24 space-y-12`">
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">
        Requirements
      </h3>
      <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div>
      <div :class="tw`space-y-6 mt-6`">
        <p>
          Vue Zephyr currently supports Vue 3 and higher (as released). There
          are no plans to support Vue 2.
        </p>
      </div>
    </section>
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">Install</h3>
      <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div>
      <div :class="tw`space-y-6 mt-6`">
        <p>
          Inside your project directory root install Vue Zephyr via NPM or Yarn:
        </p>
        <div :class="tw`space-y-4`">
          <div :class="tw`rounded-lg overflow-hidden`">
            <Code lang="bash" :code="codes.npmInstall" inline />
          </div>
          <div :class="tw`rounded-lg overflow-hidden`">
            <Code lang="bash" :code="codes.yarnInstall" inline />
          </div>
        </div>
      </div>
    </section>
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">
        Configure
      </h3>
      <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div>
      <div :class="tw`space-y-6 mt-8`">
        <p>There are two methods of adding Vue Zephyr to your application.</p>
        <p>Use as plugin:</p>
        <div :class="tw`rounded-lg overflow-hidden`">
          <Code lang="js" :code="codes.configAsPlugin" />
        </div>
        <p>Or import components individually:</p>
        <div :class="tw`rounded-lg overflow-hidden`">
          <Code lang="vue" :code="codes.configAsComponent" />
        </div>
        <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
          Plugin Options
        </h4>
        <div :class="tw`rounded-lg overflow-hidden`">
          <Code lang="js" :code="codes.pluginConfig" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-useless-escape */
import { defineComponent } from "vue";
import DocHeader from "@/views/components/DocHeader.vue";
import Badge from "@/views/components/Badge.vue";
import Code from "@/views/components/Code.vue";
import { tw } from "twind";

export default defineComponent({
  components: {
    DocHeader,
    Code,
    Badge,
  },
  setup() {
    const codes = {
      npmInstall: `npm i @usezephyr/vue-zephyr`,
      yarnInstall: `yarn add @usezephyr/vue-zephyr`,
      configAsPlugin: `
        import { createApp } from "vue";
        import App from "./App.vue";
        import Zephyr from "@usezephyr/vue-zephyr";

        const app = createApp(App);

        // \`Zephyr\` is a function that needs to be called here
        app.use(Zephyr(/* Config Options here */));
        app.mount("#app");
      `,
      configAsComponent: `
        // Replace \`ExampleComponent\` with whichever component you would like to import
        <template>
          <ExampleComponent />
        </template>

        <script>
        import { ExampleComponent } from "@usezephyr/vue-zephyr";
        export default {
          components: { ExampleComponent }
        };
        <\/script>
      `,
      pluginConfig: `
        import { createApp } from "vue";
        import App from "./App.vue";
        import Zephyr from "@usezephyr/vue-zephyr";
        import myTheme from "./myTheme.js"

        const app = createApp(App);
        const ZConfig = {
          theme: myTheme,
          twind: {
            enabled: true, /* Defaults to true */
            setup: { /* Twind configuration */ }
          }
        }
        app.use(Zephyr(ZConfig));
        app.mount("#app");
      `,
    };
    return { codes, tw };
  },
});
</script>

<route>
{
  "name": "install",
  "meta": {
    "title": "Installation | Vue Zephyr",
    "metaTags": [
      {
        "property": "og:title",
        "content": "Installation"
      },
      {
        "name": "description",
        "content": "Get started in Vue Zephyr in minutes."
      },
      {
        "property": "og:description",
        "content": "Get started in Vue Zephyr in minutes."
      },
      {
        "property": "og:url",
        "content": "https://usezephyr.com/docs/install"
      },
      {
        "property": "og:url",
        "content": "https://usezephyr.com/test.png"
      }
    ]
  }
}
</route>