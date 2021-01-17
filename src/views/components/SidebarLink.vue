<template>
  <li>
    <Link
      :class="{
        [tw`bg-green-100 dark:bg-green-700 text-shamrock-900! dark:text-shamrock-100! rounded pointer-events-none `]:
          currentRoute.fullPath === to
      }"
      classAppend="inline-block w-full px-3 py-1.5"
      :to="to"
      styled
    >
      <slot></slot>
    </Link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
    return { tw, currentRoute };
  },
});
</script>

<style scoped>
</style>