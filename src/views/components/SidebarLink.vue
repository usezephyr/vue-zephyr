<template>
  <li>
    <Link
      :classAppend="[
        classes.BASE,
        currentRoute.fullPath === to ? classes.active : classes.inactive
      ]"
      :to="to"
    >
      <slot></slot>
    </Link>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { tw } from "twind";
import Link from "@/views/components/Link.vue";
import router from "@/router/index.ts";

export default defineComponent({
  components: {
    Link,
  },
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { currentRoute } = router;
    const classes = computed(() => {
      return {
        BASE: `inline-block w-full px-3 py-1.5`,
        active: `bg-green-500 dark:bg-green-700 text-white rounded pointer-events-none`,
        inactive: `text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100`,
      };
    });
    return { tw, currentRoute, classes };
  },
});
</script>

<style scoped>
</style>