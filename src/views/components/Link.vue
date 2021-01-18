<template>
  <router-link :to="to" :class="classes">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import { tw } from "twind";
import { Classy } from "@/utils/helpers";
import { classAppend, classRemove, variant } from "@/props";
import Theme from "@/components/Anchor/theme.ts";

export default defineComponent({
  components: {},
  props: {
    to: {
      type: String,
      default: null,
    },
    ...classAppend(),
    ...classRemove(),
    ...variant(),
  },
  setup(props) {
    const { value: theme } = computed(() => Theme(inject("userTheme", {})));
    const classes = computed(() =>
      new Classy()
        .append(theme[props.variant])
        .append(props.classAppend)
        .remove(props.classRemove)
        .twind()
        .val()
    );
    return { tw, classes };
  },
});
</script>

<style scoped>
</style>