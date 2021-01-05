<template>
  <HMenuItem v-slot="{ active }">
    <a
      href="#"
      :class="[active ? classes.active : classes.inactive, classes.normal]"
    >
      <slot :active="active" />
    </a>
  </HMenuItem>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from "vue";
import { MenuItem as HMenuItem } from "@headlessui/vue";
import { Classy } from "@/utils/helpers.ts";
export default defineComponent({
  name: "ZDropdownItem",
  components: {
    HMenuItem
  },
  setup() {
    const twindEnable = inject("twindEnable", true);
    const classes = computed(() => {
      return {
        active: new Classy()
          .append("bg-gray-100 text-gray-900")
          .twind(twindEnable)
          .val(),
        inactive: new Classy()
          .append("text-gray-700")
          .twind(twindEnable)
          .val(),
        normal: new Classy()
          .append(
            "flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
          )
          .twind(twindEnable)
          .val()
      };
    });
    return { classes };
  }
});
</script>
