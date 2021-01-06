<template>
  <ul :class="tw`text-green-100 flex`">
    <li>One</li>
    <li>Two</li>
  </ul>
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
