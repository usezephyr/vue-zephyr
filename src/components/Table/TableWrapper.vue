<template>
  <div :class="classes.outerWrapper">
    <div :class="classes.innerWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import { classRemove, classAppend } from "@/props";
import { Classy } from "@/utils/helpers.ts";

export default defineComponent({
  props: {
    ...classAppend({
      type: Object,
      default: {},
    }),
    ...classRemove({
      type: Object,
      default: {},
    }),
  },
  setup(props) {
    const classes = computed(() => {
      return {
        outerWrapper: new Classy("-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8")
          .append(props.classAppend?.outerWrapper ?? "")
          .remove(props.classRemove?.outerWrapper ?? "")
          .twind(inject("twindEnable", true))
          .val(),
        innerWrapper: new Classy(
          "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
        )
          .append(props.classAppend?.innerWrapper ?? "")
          .remove(props.classRemove?.innerWrapper ?? "")
          .twind(inject("twindEnable", true))
          .val(),
      };
    });
    return { classes };
  },
});
</script>

<style scoped></style>
