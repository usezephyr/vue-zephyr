<template>
  <main class="space-y-8">
    <div class="space-y-4">
      <div>Toggle</div>
      <Button @click="toggleScheme">
        {{ isDark ? "☀️" : "🌙" }}
      </Button>
    </div>
    <div class="space-y-4">
      <div>Menu</div>
      <Menu v-slot="{ open }">
        <MenuButton>
          <Button :class="{ italic: open }">
            {{ open ? "Close" : "Open" }}
          </Button>
        </MenuButton>
        <MenuItems>
          <MenuItem v-slot="{ active }">
            Testing{{ active ? ": Active" : "" }}
          </MenuItem>
          <MenuItem>Another One</MenuItem>
        </MenuItems>
      </Menu>
    </div>
  </main>
</template>

<script lang="ts">
import Button from "@/components/button/Button.vue";
import Menu from "@/components/menu/Menu.vue";
import MenuButton from "@/components/menu/MenuButton.vue";
import MenuItems from "@/components/menu/MenuItems.vue";
import MenuItem from "@/components/menu/MenuItem.vue";
import { defineComponent } from "vue";
import { darkMode } from "./utils/darkMode";
export default defineComponent({
  name: "App",
  components: { Button, Menu, MenuItems, MenuItem, MenuButton },
  setup() {
    const { isDark, toggleScheme } = darkMode();
    return { isDark, toggleScheme };
  }
});
</script>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
body {
  @apply dark:bg-gray-900 bg-gray-100 dark:text-white text-gray-900;
}
</style>
