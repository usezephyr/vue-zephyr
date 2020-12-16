<template>
  <button :class="classes.button">
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import themeProps from "./props";
import { remove } from "@/utils/helpers.ts";
import Theme from "./theme";
export default defineComponent({
  name: "Button",
  props: {
    ...themeProps()
  },
  setup(props) {
    const classes = reactive({
      button: computed(() =>
        remove(
          `button ${Theme[props.variant].wrapper}`,
          props.classRemove?.wrapper
        )
      ),
      icon: computed(() =>
        remove(`button ${Theme[props.variant].icon}`, props.classRemove.icon)
      )
    });
    return { classes };
  }
});
</script>
