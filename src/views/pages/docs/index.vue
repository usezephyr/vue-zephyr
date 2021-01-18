<template>
  <main>
    <h1>Hello World!</h1>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { tw } from "twind";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {},
  setup() {
    const router = useRouter();
    onMounted(() => {
      router.push("/docs/install");
    });
    return { tw };
  },
});
</script>

<style scoped>
</style>