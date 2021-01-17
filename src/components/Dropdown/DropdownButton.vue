<template>
  <HMenuButton
    :as="status === 'disabled' ? 'button' : as"
    :class="classes"
    v-slot="{ open }"
    :disabled="status === 'disabled'"
  >
    <slot :open="open"></slot>
  </HMenuButton>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import { MenuButton as HMenuButton } from "@headlessui/vue";
import { as, classAppend, classRemove, variant, status } from "@/props";
import { Classy } from "@/utils/helpers";

export default defineComponent({
  name: "DropdownButton",
  components: {
    HMenuButton,
  },
  props: {
    ...classAppend(),
    ...classRemove(),
    ...variant({
      default: "DEFAULT",
    }),
    ...status(),
    ...as({
      default: "button",
    }),
  },
  setup(props) {
    const twindEnable = inject("twindEnable", true);
    const status =
      props.status && props.status !== false
        ? props.status
        : inject("status", false);
    const theme: any = inject("theme"); // eslint-disable-line @typescript-eslint/no-explicit-any
    const resolvedVariant = props.variant ?? inject("variant", "DEFAULT");
    const variantClasses = theme?.[resolvedVariant].DropdownButton ?? "";
    const statusClasses =
      status && theme[status] ? theme[status].DropdownButton : false;

    const classes = computed(() =>
      new Classy()
        .append(statusClasses ?? theme[variantClasses])
        .append(props.classAppend)
        .remove(props.classRemove)
        .twind(twindEnable)
        .val()
    );

    return { classes, status };
  },
});
</script>
