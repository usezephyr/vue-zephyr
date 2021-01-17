<template>
  <div :class="tw`min-h-full`">
    <ul :class="tw`sticky top-10`">
      <li :class="classes.heading">Getting Started</li>
      <SidebarLink to="/docs/install">Installation</SidebarLink>
      <SidebarLink to="/docs/theming">Themeing</SidebarLink>
      <li :class="classes.heading">
        <div :class="tw`mt-8`">Components</div>
      </li>
      <SidebarLink to="/docs/anchor">Anchor Link</SidebarLink>
      <SidebarLink to="/docs/button">Button</SidebarLink>
      <SidebarLink to="/docs/dropdown">Dropdown</SidebarLink>
      <SidebarLink to="/docs/prose">Prose</SidebarLink>
      <SidebarLink to="/docs/table">Table</SidebarLink>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { tw } from "twind";
import SidebarLink from "@/views/components/SidebarLink.vue";

export default defineComponent({
  components: {
    SidebarLink,
  },
  setup() {
    const classes = computed(() => {
      return {
        heading: tw`uppercase text-sm font-bold tracking-widest mb-3`,
      };
    });
    return { tw, classes };
  },
});
</script>