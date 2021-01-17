<template>
  <a
    :class="classes"
    :href="href"
    :rel="newWindow ? 'noopener noreferrer' : null"
    :target="newWindow ? '_blank' : null"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { Classy } from "@/utils/helpers";
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    href: {
      type: String,
      required: true,
    },
    newWindow: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const classes = computed(() =>
      new Classy()
        .append(
          "text(shamrock-500 hover:(shamrock-700 dark:shamrock-300)) focus:ring-1 ring-shamrock ring-opacity-50 outline-none"
        )
        .twind()
        .val()
    );
    return { classes };
  },
});
</script>

<style scoped>
</style>