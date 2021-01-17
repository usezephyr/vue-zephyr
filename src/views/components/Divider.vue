<template>
  <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div>
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