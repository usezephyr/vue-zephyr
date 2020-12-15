<template>
  <main>
    <Button>This is working</Button>
    <Menu>
      <MenuButton>Here we go</MenuButton>
      <MenuItems>
        <MenuItem>Testing</MenuItem>
        <MenuItem>Another One</MenuItem>
      </MenuItems>
    </Menu>
  </main>
</template>

<script lang="ts">
import Button from "@/components/button/Button.vue";
import Menu from "@/components/menu/Menu.vue";
import MenuButton from "@/components/menu/MenuButton.vue";
import MenuItems from "@/components/menu/MenuItems.vue";
import MenuItem from "@/components/menu/MenuItem.vue";
export default {
  name: "App",
  components: { Button, Menu, MenuItems, MenuItem, MenuButton }
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
