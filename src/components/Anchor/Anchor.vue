<template>
  <a
    :class="classes.anchor"
    :href="href"
    :rel="newTab ? 'noopener noreferrer' : null"
    :target="newTab ? '_blank' : null"
  >
    <div><slot></slot></div>
    <svg
      v-if="newTab"
      :class="classes.icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
      />
      <path
        d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
      />
    </svg>
  </a>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import { classAppend, classRemove, variant } from "@/props";
import { Classy } from "@/utils/helpers";
import Theme from "./theme";

export default defineComponent({
  name: "Anchor",
  props: {
    ...classAppend({
      type: [String, Object],
    }),
    ...classRemove({
      type: [String, Object],
    }),
    ...variant({
      default: "BASE",
    }),
    href: {
      type: String,
      required: true,
    },
    newTab: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { value: theme } = computed(() => Theme(inject("userTheme", {})));

    const variantIsStr = typeof props.variant === "string";
    const classAppendIsStr = typeof props.classAppend === "string";
    const classRemoveIsStr = typeof props.classRemove === "string";

    const classes = computed(() => {
      return {
        anchor: new Classy()
          .append(theme[variantIsStr ? props.variant : props.variant.anchor])
          .append(
            classAppendIsStr ? props.classAppend : props.classAppend.anchor
          )
          .remove(
            classRemoveIsStr ? props.classRemove : props.classRemove.anchor
          )
          .twind()
          .val(),
        icon: new Classy()
          // .append(props.variant.icon ? theme[props.variant.icon] : "")
          .append(props.classAppend.icon ?? "w-4")
          .remove(props.classRemove.icon ?? "")
          .twind()
          .val(),
      };
    });
    return { classes };
  },
});
</script>