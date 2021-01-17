<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";
import { darkMode } from "@/utils/darkMode";
import { tw } from "twind";

export default defineComponent({
  setup() {
    const twindEnable = inject("twindEnable", true);
    const { isDark } = darkMode();
    onMounted(() => {
      // Full height
      const hFullClass = tw`h-full`;
      document.documentElement.classList.add(hFullClass);
      document.body.classList.add(hFullClass);
      document.querySelector("#app")?.classList.add(hFullClass);
      // Dark mode classes
      twindEnable
        ? document.body.classList.add(
            tw`dark:bg-gray-900`,
            tw`bg-white`,
            tw`dark:text-white`,
            tw`text-gray-900`
          )
        : null;
    });

    return { isDark, tw };
  },
});
</script>

<style>
::selection {
  background-color: #1752901a;
}
::-moz-selection {
  background-color: #1752901a;
}
html.dark ::selection {
  background-color: #ffffff26;
}
html.dark ::-moz-selection {
  background-color: #ffffff26;
}
</style>
