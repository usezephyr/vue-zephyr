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
import DropdownButton from "./DropdownButton.vue";
import DropdownItem from "./DropdownItem.vue";
import DropdownItems from "./DropdownItems.vue";
import { Classy } from "@/utils/helpers.ts";
import { variant, classRemove, classAppend, status, as } from "@/props";
import Theme from "./theme";

const Dropdown = defineComponent({
  name: "Dropdown",
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

export { Dropdown, DropdownButton, DropdownItems, DropdownItem };
export default Dropdown;
</script>
