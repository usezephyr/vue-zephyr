<template>
  <HMenuItem
    v-slot="{ active }"
    as="template"
    :disabled="status === 'disabled'"
  >
    <HtmlElement
      v-if="typeof as === 'string'"
      :el="as"
      :class="[active ? classes.active : classes.inactive, classes.BASE]"
    >
      <slot :active="active" />
    </HtmlElement>
    <component v-else :is="as">
      <slot :active="active" />
    </component>
  </HMenuItem>
</template>

<script lang="ts">
import { defineComponent, computed, inject, h } from "vue";
import { MenuItem as HMenuItem } from "@headlessui/vue";
import { classAppend, classRemove, as, variant, status } from "@/props";
import { Classy } from "@/utils/helpers.ts";

const HtmlElement = defineComponent({
  name: "HtmlElement",
  props: {
    el: {
      type: [Object, String],
      default: "div",
    },
  },
  setup(props, { slots }) {
    return () => h(props.el, {}, slots?.default?.());
  },
});

export default defineComponent({
  name: "DropdownItem",
  components: {
    HMenuItem,
    HtmlElement,
  },
  props: {
    ...classAppend({
      type: Object,
      default: {
        BASE: "",
        active: "",
        inactive: "",
      },
    }),
    ...classRemove({
      type: Object,
      default: {
        BASE: "",
        active: "",
        inactive: "",
      },
    }),
    ...variant({
      default: "DEFAULT",
    }),
    ...as({
      default: "button",
    }),
    ...status({
      default: false,
      validator: (v) => !v || ["disabled"].includes(v),
    }),
  },
  setup(props) {
    const twindEnable = inject("twindEnable", true);
    const theme: any = inject("theme"); // eslint-disable-line @typescript-eslint/no-explicit-any
    const resolvedVariant = props.variant ?? inject("variant", "DEFAULT");
    const variantClasses =
      theme?.[resolvedVariant].DropdownItem ??
      console.error("Could not find variant classes.");
    const statusClasses =
      props.status && theme[props.status]
        ? theme[props.status].DropdownItem
        : false;

    const classes = computed(() => {
      return {
        BASE: new Classy()
          .append(statusClasses.BASE ?? variantClasses?.BASE)
          .append(props.classAppend?.BASE)
          .remove(props.classRemove?.BASE)
          .twind(twindEnable)
          .val(),
        active: new Classy()
          .append(variantClasses?.active)
          .append(props.classAppend?.active)
          .remove(props.classRemove?.active)
          .twind(twindEnable)
          .val(),
        inactive: new Classy()
          .append(variantClasses?.inactive)
          .append(props.classAppend?.inactive)
          .remove(props.classRemove?.inactive)
          .twind(twindEnable)
          .val(),
      };
    });
    return { classes };
  },
});
</script>
