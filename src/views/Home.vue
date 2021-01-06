<template>
  <Main>
    <Prose>
      <h1>Home</h1>
    </Prose>
    <div>
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
    </div>
  </Main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { darkMode } from "../utils/darkMode";
import Main from "./layouts/Main.vue";
import Prose from "./components/Prose.vue";

export default defineComponent({
  components: {
    Main,
    Prose
  },
  setup() {
    const { isDark, toggleScheme } = darkMode();
    return { isDark, toggleScheme };
  }
});
</script>
