<template>
  <HMenuButton as="div" v-slot="{ open }">
    <slot :open="open"></slot>
  </HMenuButton>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MenuButton as HMenuButton } from "@headlessui/vue";
import { variant } from "@/props";

export default defineComponent({
  name: "ZDropdownButton",
  components: {
    HMenuButton
  },
  props: {
    ...variant()
  }
});
</script>
