<template>
  <DocHeader>
    <template #title>Prose</template>
    <template #subtitle
      >Use Tailwind's typography plugin in component form</template
    >
    <template #notice>
      This component is coming soon. Please keep an eye on our
      <Anchor
        href="https://github.com/usezephyr/vue-zephyr"
        variant="primary"
        classAppend="space-x-1"
        classRemove="space-x-2"
        newTab
      >
        Github
      </Anchor>
      or follow us on
      <Anchor
        href="https://twitter.com/usezephyr"
        variant="primary"
        classAppend="space-x-1"
        classRemove="space-x-2"
        newTab
      >
        Twitter </Anchor
      >.
    </template>
  </DocHeader>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DocHeader from "@/views/components/DocHeader.vue";

export default defineComponent({
  components: {
    DocHeader,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>