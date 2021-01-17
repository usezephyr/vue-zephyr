<template>
  <div :class="classes">
    <HMenu :as="as" v-slot="{ open }">
      <slot :open="open" :variant="variant" />
    </HMenu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, provide } from "vue";
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
    HMenu,
  },
  props: {
    ...classAppend(),
    ...classRemove(),
    ...variant({
      default: "DEFAULT",
    }),
    ...status(),
    ...as({
      default: "template",
    }),
    align: {
      type: String,
      default: "left",
      validator: (v: string) => ["right", "left"].includes(v),
    },
  },
  setup(props) {
    const { value: theme } = computed(() => Theme(inject("userTheme", {})));
    const classes = computed(() =>
      new Classy()
        .append(theme[props.variant].Dropdown)
        .append(props.classAppend)
        .remove(props.classRemove)
        .twind(inject("twindEnable", true))
        .val()
    );
    provide("theme", theme);
    provide("variant", props.variant);
    provide("align", props.align);
    provide("status", props.status);
    return { classes };
  },
});

export { Dropdown, DropdownButton, DropdownItems, DropdownItem };
export default Dropdown;
</script>
