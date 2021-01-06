<template>
  <div :class="tw`bg-gray-300 dark:bg-gray-800`">
    <MainNav />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tw } from "twind";
import MainNav from "../components/MainNav.vue";

export default defineComponent({
  name: "Main",
  components: {
    MainNav
  },
  setup() {
    return { tw };
  }
});
</script>
