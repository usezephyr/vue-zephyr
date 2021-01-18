<template>
  <DocHeader>
    <template #title>Table</template>
    <template #subtitle> Display data in table format </template>
    <template #notice> This page is coming soon. </template>
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