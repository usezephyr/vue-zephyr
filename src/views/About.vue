<template>
  <Main>
    <Prose>
      <h1>About</h1>
    </Prose>
  </Main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Main from "./layouts/Main.vue";
import Prose from "./components/Prose.vue";

export default defineComponent({
  components: {
    Main,
    Prose
  },
  setup() {
    return {};
  }
});
</script>
