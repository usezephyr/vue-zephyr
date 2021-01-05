<template>
  <div :class="classes">
    <HMenu :as="as" v-slot="{ open }">
      <slot :open="open" />
    </HMenu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import { Menu as HMenu } from "@headlessui/vue";
import ZDropdownButton from "./ZDropdownButton.vue";
import ZDropdownItem from "./ZDropdownItem.vue";
import ZDropdownItems from "./ZDropdownItems.vue";
import { Classy } from "@/utils/helpers.ts";
import { variant, classRemove, classAppend, status, as } from "@/props";
import Theme from "./theme";

export default defineComponent({
  name: "ZDropdown",
  components: {
    HMenu
  },
  props: {
    ...classAppend(),
    ...classRemove(),
    ...variant({
      default: "primary"
    }),
    ...status(),
    ...as()
  },
  setup(props) {
    const { value: theme } = computed(() => Theme(inject("userTheme", {})));
    const classes = computed(() =>
      new Classy()
        .append("relative inline-block text-left")
        .append(theme[props.variant].wrapper)
        .append(props.classAppend)
        .remove(props.classRemove)
        .twind(inject("twindEnable", true))
        .val()
    );
    return { classes };
  }
});

export { ZDropdownButton, ZDropdownItems, ZDropdownItem };
</script>
