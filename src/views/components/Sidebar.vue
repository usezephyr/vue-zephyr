<template>
  <transition
    :enter-active-class="tw`duration-150 ease-out`"
    :enter-from-class="tw`opacity-0`"
    :enter-to-class="tw`opacity-100`"
    :leave-active-class="tw`duration-150 ease-in`"
    :leave-from-class="tw`opacity-100`"
    :leave-to-class="tw`opacity-0`"
  >
    <div
      v-if="menuIsOpen"
      @click="toggleMenu"
      :class="tw`fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden`"
      aria-hidden="true"
    ></div>
  </transition>

  <button
    @click="toggleMenu"
    :class="[
      tw`flex lg:hidden w-full items-center space-x-2 cursor-pointer select-none text(gray-500 dark:gray-300 hover:dark:white hover:green-700) p-4 rounded bg-gray-100 dark:bg-gray-700 hover:(bg(green-100 dark:gray-600 opacity-50 dark:opacity-50))`,
      menuIsOpen ? tw`relative z-30` : ''
    ]"
  >
    <svg
      v-if="menuIsOpen"
      :class="tw`w-5`"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
    <svg
      v-else
      :class="tw`w-5`"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
    <div>{{ menuIsOpen ? "Choose a page" : currentRoute.meta.title }}</div>
  </button>

  <SidebarWrapper :menuIsOpen="menuIsOpen">
    <ul :class="tw`sticky top-10`">
      <li :class="classes.heading">Getting Started</li>
      <SidebarLink @click="closeMenu" to="/docs/install">
        Installation
      </SidebarLink>
      <SidebarLink @click="closeMenu" to="/docs/theming">Theming</SidebarLink>
      <SidebarLink @click="closeMenu" to="/docs/guides">Guides</SidebarLink>
      <li :class="classes.heading">
        <div :class="tw`mt-8`">Components</div>
      </li>
      <SidebarLink @click="closeMenu" to="/docs/anchor">
        Anchor Link
      </SidebarLink>
      <SidebarLink @click="closeMenu" to="/docs/button">Button</SidebarLink>
      <SidebarLink @click="closeMenu" to="/docs/dropdown">
        Dropdown
      </SidebarLink>
      <SidebarLink @click="closeMenu" to="/docs/prose">Prose</SidebarLink>
      <SidebarLink @click="closeMenu" to="/docs/table">Table</SidebarLink>
    </ul>
  </SidebarWrapper>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { tw } from "twind";
import router from "@/router/index.ts";
import SidebarWrapper from "@/views/components/SidebarWrapper.vue";
import SidebarLink from "@/views/components/SidebarLink.vue";

export default defineComponent({
  components: {
    SidebarLink,
    SidebarWrapper,
  },
  setup() {
    const { currentRoute } = router;
    const menuIsOpen = ref(false);
    const classes = computed(() => {
      return {
        heading: tw`uppercase text-sm font-bold tracking-widest mb-3`,
      };
    });

    const toggleMenu = (): void => {
      menuIsOpen.value = !menuIsOpen.value;
    };

    const closeMenu = (): void => {
      menuIsOpen.value = false;
    };

    watch(menuIsOpen, (menuIsOpen) => {
      menuIsOpen
        ? document.body.classList.add(tw`overflow-hidden`)
        : document.body.classList.remove(tw`overflow-hidden`);
    });

    return { tw, currentRoute, classes, menuIsOpen, toggleMenu, closeMenu };
  },
});
</script>