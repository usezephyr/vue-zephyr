<template>
  <main>
    <Button classRemove="">This is working</Button>
  </main>
</template>

<script lang="ts">
import Button from "@/components/button/Button.vue";
export default {
  name: "App",
  components: { Button }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
