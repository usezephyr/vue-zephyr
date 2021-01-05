<template>
  <button :class="classes">
    <slot name="default"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from "vue";
import { variant, classRemove, classAppend, status, size } from "@/props";
import { Classy } from "@/utils/helpers.ts";
import Theme from "./theme";

export default defineComponent({
  name: "ZButton",
  props: {
    ...classAppend(),
    ...classRemove(),
    ...variant({
      default: "secondary"
    }),
    ...status({
      default: "default",
      validator: v => ["loading", "default"].includes(v)
    }),
    ...size({
      default: "md",
      validator: v => ["sm", "md", "lg"].includes(v)
    })
  },
  setup(props) {
    const { value: theme } = computed(() => Theme(inject("userTheme", {})));
    const classes = computed(() =>
      new Classy()
        .append(theme[props.variant])
        .append(theme.size[props.size])
        .append(props.classAppend)
        .remove(props.classRemove)
        .twind(inject("twindEnable", true))
        .val()
    );
    return { classes };
  }
});
</script>
