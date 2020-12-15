<template>
  <HMenuButton>
    <slot></slot>
  </HMenuButton>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { MenuButton as HMenuButton } from "@headlessui/vue";
export default defineComponent({
  name: "MenuButton",
  setup() {
    return {};
  },
  components: {
    HMenuButton
  }
});
</script>
