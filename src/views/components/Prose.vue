<template>
  <div :class="tw`prose prose-lg prose-white`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tw } from "twind";

export default defineComponent({
  setup() {
    return { tw };
  }
});
</script>

<style scoped></style>
