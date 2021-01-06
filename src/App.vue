<template>
  <main class="space-y-8">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";
import { tw } from "twind";
export default defineComponent({
  name: "App",
  setup() {
    const twindEnable = inject("twindEnable", true);
    onMounted(() => {
      twindEnable
        ? document.body.classList.add(
            tw`dark:bg-gray-900`,
            tw`bg-gray-100`,
            tw`dark:text-white`,
            tw`text-gray-900`
          )
        : null;
    });
    return {};
  }
});
</script>

<style lang="postcss">
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
