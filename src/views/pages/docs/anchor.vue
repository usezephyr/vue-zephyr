<template>
  <DocHeader>
    <template #title>Anchor Link</template>
    <template #subtitle>Standard &lt;a&gt; element</template>
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