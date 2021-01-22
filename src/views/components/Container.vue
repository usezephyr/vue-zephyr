<template>
  <div :class="tw`max-w-7xl mx-auto px-4 sm:px-8`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tw } from "twind";

export default defineComponent({
  setup() {
    return { tw };
  },
});
</script>

<style scoped></style>
