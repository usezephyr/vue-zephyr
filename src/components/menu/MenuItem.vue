<template>
  <HMenuItem v-slot="{ active }">
    <a
      href="/account-settings"
      :class="active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'"
      class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
    >
      <slot :active="active" />
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
