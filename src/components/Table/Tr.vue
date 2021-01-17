<template>
  <tr :class="classes">
    <slot></slot>
  </tr>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from "vue";
import { classAppend, classRemove, variant } from "@/props";
import { Classy } from "@/utils/helpers";

export default defineComponent({
  props: {
    ...classAppend(),
    ...classRemove(),
    ...variant({
      default: "primary",
    }),
  },
  setup(props) {
    const theme: any = inject("theme"); // eslint-disable-line @typescript-eslint/no-explicit-any
    const resolvedVariant = props.variant ?? inject("variant", "primary");
    const variantClasses = theme?.[resolvedVariant].tr ?? "";

    const classes = computed(() =>
      new Classy()
        .append(variantClasses)
        .append(props.classAppend)
        .remove(props.classRemove)
        .twind(inject("twindEnable", true))
        .val()
    );
    return { classes };
  },
});
</script>
