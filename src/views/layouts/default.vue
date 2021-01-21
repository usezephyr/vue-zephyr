<template>
  <main :class="tw`h-full flex(& col) relative`">
    <div :class="tw`mt-6`">
      <Container>
        <MainNav />
      </Container>
    </div>
    <div :class="tw`lg:mt-8 layout`">
      <Container>
        <div :class="tw`lg:grid grid-cols-4 gap-12 mt-12`">
          <div :class="tw`col-span-1 lg:mt-1.5`">
            <Sidebar />
          </div>
          <div :class="tw`col-span-3 mt-8 lg:mt-0`">
            <BaseLayout />
          </div>
        </div>
      </Container>
    </div>
    <Footer :class="tw`mt-auto`" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tw } from "twind";
import { isDark } from "@/utils/darkMode";
import BaseLayout from "@/views/layouts/_base.vue";
import MainNav from "@/views/components/MainNav.vue";
import Footer from "@/views/components/Footer.vue";
import Container from "@/views/components/Container.vue";
import Sidebar from "@/views/components/Sidebar.vue";

export default defineComponent({
  components: {
    BaseLayout,
    MainNav,
    Footer,
    Container,
    Sidebar,
  },
  setup() {
    return { tw, isDark };
  },
});
</script>

<style scoped>
</style>