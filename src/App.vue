<template>
  <main class="space-y-8">
    <div class="space-y-4">
      <div>Toggle</div>
    </div>
    <div class="space-y-4">
      <ZButton
        @click="toggleScheme"
        classRemove="rounded-md"
        classAppend="rounded-l-md"
      >
        Turn: {{ isDark ? "☀️" : "🌙" }}
      </ZButton>
      <ZDropdown v-slot="{ open }">
        <ZDropdownButton>
          <ZButton
            variant="danger"
            classRemove="rounded-md"
            :classAppend="`rounded-r-md`"
          >
            {{ open ? "Close" : "Open" }}
          </ZButton>
        </ZDropdownButton>
        <ZDropdownItems>
          <ZDropdownItem v-slot="{ active }">
            Testing{{ active ? ": Active" : "" }}
          </ZDropdownItem>
          <ZDropdownItem>Another One</ZDropdownItem>
        </ZDropdownItems>
      </ZDropdown>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";
import { tw } from "twind";
import ZButton from "@/components/ZButton/ZButton.vue";
import ZDropdown, {
  ZDropdownButton,
  ZDropdownItems,
  ZDropdownItem
} from "@/components/ZDropdown/ZDropdown.vue";
import { darkMode } from "./utils/darkMode";
export default defineComponent({
  name: "App",
  components: {
    ZButton,
    ZDropdown,
    ZDropdownButton,
    ZDropdownItems,
    ZDropdownItem
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
