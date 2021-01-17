<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { classAppend, classRemove } from "@/props";
import { Classy } from "@/utils/helpers";
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    ...classAppend(),
    ...classRemove(),
  },
  setup(props) {
    const classes = computed(() =>
      new Classy()
        .append(`py-1 px-2.5 rounded-full text-sm`)
        .append(props.classAppend)
        .remove(props.classRemove)
        .twind()
        .val()
    );
    return { classes };
  },
});
</script>

<style scoped>
</style>