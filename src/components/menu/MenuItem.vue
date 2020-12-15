<template>
  <HMenuItem v-slot="{ active }">
    <a :class="{ 'bg-blue-500': active }" href="/account-settings">
      <slot></slot>
    </a>
  </HMenuItem>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { MenuItem as HMenuItem } from "@headlessui/vue";
export default defineComponent({
  name: "MenuItem",
  setup() {
    return {};
  },
  components: {
    HMenuItem
  }
});
</script>
