<template>
  <DocHeader>
    <template #title>Theming</template>
    <template #subtitle>Customize the apperance for your project</template>
    <template #notice>
      Vue Zephyr is in early development. There could be significant changes, so
      please use with caution. Follow us on
      <Link href="https://twitter.com/usezephyr" external>Twitter</Link> for
      updates.
    </template>
  </DocHeader>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DocHeader from "@/views/components/DocHeader.vue";
import Link from "@/views/components/Link.vue";

export default defineComponent({
  layout: "doc",
  components: {
    DocHeader,
    Link,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>