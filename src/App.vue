<template>
  <main class="space-y-8">
    <div class="space-y-4">
      <div>Toggle</div>
    </div>
    <div class="space-y-4">
      <Button
        @click="toggleScheme"
        classRemove="rounded-md"
        classAppend="rounded-l-md"
      >
        Turn: {{ isDark ? "☀️" : "🌙" }}
      </Button>
      <Dropdown v-slot="{ open }">
        <DropdownButton>
          <Button
            variant="danger"
            classRemove="rounded-md"
            :classAppend="`rounded-r-md`"
          >
            {{ open ? "Close" : "Open" }}
          </Button>
        </DropdownButton>
        <DropdownItems>
          <DropdownItem v-slot="{ active }">
            Testing{{ active ? ": Active" : "" }}
          </DropdownItem>
          <DropdownItem>Another One</DropdownItem>
        </DropdownItems>
      </Dropdown>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";
import { tw } from "twind";
import Button from "@/components/Button/Button.vue";
import {
  Dropdown,
  DropdownButton,
  DropdownItems,
  DropdownItem
} from "@/components/Dropdown/Dropdown.vue";
import { darkMode } from "./utils/darkMode";
export default defineComponent({
  name: "App",
  components: {
    Button,
    Dropdown,
    DropdownButton,
    DropdownItems,
    DropdownItem
  },
  setup() {
    const { isDark, toggleScheme } = darkMode();
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
    return { isDark, toggleScheme, twindEnable };
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
