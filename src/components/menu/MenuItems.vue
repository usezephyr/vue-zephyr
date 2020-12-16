<template>
  <transition
    enter-active-class="transition duration-100 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-75 ease-out"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <HMenuItems
      class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none overflow-hidden"
    >
      <slot></slot>
    </HMenuItems>
  </transition>
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
