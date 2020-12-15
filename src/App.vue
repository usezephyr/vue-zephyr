<template>
  <main>
    <Button>This is working</Button>
    <Menu />
  </main>
</template>

<script lang="ts">
import Button from "@/components/button/Button.vue";
import Menu from "@/components/menu/Menu.vue";
export default {
  name: "App",
  components: { Button, Menu }
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
