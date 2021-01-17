<template>
  <A v-if="external" :href="href" :newWindow="newWindow">
    <slot></slot>
  </A>
  <router-link v-else :to="to" :class="classes.routerLink">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import A from "@/views/components/A.vue";
import { tw } from "twind";
import { Classy } from "@/utils/helpers";
import { classAppend, classRemove } from "@/props";

export default defineComponent({
  components: {
    A,
  },
  props: {
    to: {
      type: String,
      default: null,
    },
    styled: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: null,
    },
    external: {
      type: Boolean,
      default: false,
    },
    newWindow: {
      type: Boolean,
      default: false,
    },
    ...classAppend(),
    ...classRemove(),
  },
  setup(props) {
    const classes = computed(() => {
      return {
        routerLink: new Classy()
          .append(props.classAppend)
          .append(
            props.styled
              ? "text(shamrock-500 hover:(shamrock-700 dark:shamrock-300)) focus:ring-1 ring-shamrock ring-opacity-50 outline-none"
              : ""
          )
          .remove(props.classRemove)
          .twind()
          .val(),
      };
    });
    return { tw, classes };
  },
});
</script>

<style scoped>
</style>