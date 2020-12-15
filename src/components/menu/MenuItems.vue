<template>
  <HMenuItems>
    <slot></slot>
  </HMenuItems>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { MenuItems as HMenuItems } from "@headlessui/vue";
export default defineComponent({
  name: "MenuItems",
  setup() {
    return {};
  },
  components: {
    HMenuItems
  }
});
</script>
