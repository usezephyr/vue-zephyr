<template>
  <DocHeader>
    <template #title> Installation </template>
    <template #subtitle> Get started in seconds </template>
    <template #notice>
      Vue Zephyr is actively being developed, however it is still very early. It
      is not recommended to use this in production. Please follow our Twitter
      account for updates.
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