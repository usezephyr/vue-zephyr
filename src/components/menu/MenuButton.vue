<template>
  <HMenuButton :as="as" v-slot="{ open }">
    <slot :open="open"></slot>
  </HMenuButton>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { MenuButton as HMenuButton } from "@headlessui/vue";
import themeProps from "./menu.props";

export default defineComponent({
  name: "MenuButton",
  components: {
    HMenuButton
  },
  props: {
    ...themeProps.MenuButton()
  }
});
</script>
