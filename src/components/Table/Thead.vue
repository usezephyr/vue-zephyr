<template>
  <thead :class="classes">
    <slot></slot>
  </thead>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from "vue";
import { classAppend, classRemove, variant } from "@/props";
import { Classy } from "@/utils/helpers";

export default defineComponent({
  name: "Thead",
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
    const variantClasses = theme?.[resolvedVariant].Thead ?? "";

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
