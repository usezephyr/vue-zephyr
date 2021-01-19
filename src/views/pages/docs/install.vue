<template>
  <DocHeader>
    <template #title> Installation </template>
    <template #subtitle> Get started in seconds </template>
    <template #notice>
      This project is in early development. There still may be significant
      changes in the future, so please use with caution. Follow us on
      <Anchor
        variant="primary"
        classAppend="space-x-1"
        classRemove="space-x-2"
        href="https://twitter.com/usezephyr"
        newTab
        >Twitter</Anchor
      >
      for updates.
    </template>
  </DocHeader>
  <div :class="tw`my-12 space-y-12`">
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">Install</h3>
      <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div>
      <div :class="tw`space-y-6`">
        <p>
          Inside your project directory root install Vue Zephyr via NPM or Yarn:
        </p>
        <div :class="tw`rounded-lg overflow-hidden`">
          <Code lang="bash" :code="codes.npmInstall" />
          <Code lang="bash" :code="codes.yarnInstall" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DocHeader from "@/views/components/DocHeader.vue";
import Code from "@/views/components/Code.vue";
import { tw } from "twind";

export default defineComponent({
  components: {
    DocHeader,
    Code,
  },
  setup() {
    const codes = {
      npmInstall: `npm i @usezephyr/vue-zephyr`,
      yarnInstall: `yarn add @usezephyr/vue-zephyr`,
    };
    return { codes, tw };
  },
});
</script>

<style scoped>
</style>