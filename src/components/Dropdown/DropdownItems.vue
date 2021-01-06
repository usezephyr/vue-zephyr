<template>
  <transition
    :enter-active-class="tw`transition duration-100 ease-out`"
    :enter-from-class="tw`transform scale-95 opacity-0`"
    :enter-to-class="tw`transform scale-100 opacity-100`"
    :leave-active-class="tw`transition duration-75 ease-out`"
    :leave-from-class="tw`transform scale-100 opacity-100`"
    :leave-to-class="tw`transform scale-95 opacity-0`"
  >
    <HMenuItems :class="classes">
      <slot></slot>
    </HMenuItems>
  </transition>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
import { tw } from "twind";
import { Classy } from "@/utils/helpers";
import { MenuItems as HMenuItems } from "@headlessui/vue";
export default defineComponent({
  name: "DropdownItems",
  setup() {
    const classes = new Classy()
      .append(
        "absolute right-0 w-56 mt-2 overflow-hidden origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
      )
      .twind(inject("twindEnable", true))
      .val();
    return { classes, tw };
  },
  components: {
    HMenuItems
  }
});
</script>
