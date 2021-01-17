<template>
  <DocHeader>
    <template #title>Prose</template>
    <template #subtitle
      >Use Tailwind's typography plugin in component form</template
    >
    <template #notice> This page is coming soon. </template>
  </DocHeader>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DocHeader from "@/views/components/DocHeader.vue";

export default defineComponent({
  layout: "doc",
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