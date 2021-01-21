<template>
  <ul :class="classes.wrapper">
    <div :class="tw`flex items-stretch justify-between`">
      <router-link :class="tw`mr-2 flex items-center`" to="/">
        <img
          :class="[tw`w-9 p-2.5`, classes.options.item]"
          src="@/views/assets/images/logo-detailed.svg"
          alt="Vue Zephyrs"
        />
        <span :class="tw`inline-block md:hidden mt-0.5 ml-3 font-bold text-lg`"
          >Vue Zephyrs</span
        >
      </router-link>
      <button
        @click="navIsOpen = !navIsOpen"
        :class="[classes.options.item, tw`md:hidden`]"
      >
        <svg
          :class="tw`w-4`"
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
      </button>
    </div>
    <ul :class="classes.nav.wrapper">
      <li :class="classes.nav.item">
        <div :class="tw`inline-block`" @click="navIsOpen = false">
          <Link to="/docs/install" variant="button">Documentation</Link>
        </div>
      </li>
      <li :class="classes.nav.item">
        <div :class="tw`inline-block`" @click="navIsOpen = false">
          <Link to="/guides" variant="button">Guides</Link>
        </div>
      </li>
      <li :class="classes.nav.item">
        <div :class="tw`inline-block`" @click="navIsOpen = false">
          <Anchor href="https://twitter.com/usezephyr" variant="button" newTab>
            Updates
          </Anchor>
        </div>
      </li>
    </ul>
    <div :class="classes.options.wrapper">
      <LightSwitch :class="[classes.options.item, tw`px-3`]" />
      <Dropdown>
        <DropdownButton as="button" :class="classes.options.item">
          <div>{{ locale === "zh-CN" ? "中文" : locale }}</div>
          <svg
            :class="tw`w-4 md:w-5`"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </DropdownButton>
        <DropdownItems>
          <DropdownItem @click="updateLocale('en')">EN</DropdownItem>
          <DropdownItem @click="updateLocale('es')"
            >ES (In Progress)</DropdownItem
          >
          <DropdownItem @click="updateLocale('zh-CN')"
            >中文 (In Progress)</DropdownItem
          >
        </DropdownItems>
      </Dropdown>
    </div>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { tw } from "twind";
import { toTitleCase } from "@/views/utils/stringMods";
import { locale, updateLocale } from "@/views/utils/locale";
import LightSwitch from "@/views/components/LightSwitch.vue";
import Link from "@/views/components/Link.vue";

export default defineComponent({
  components: {
    LightSwitch,
    Link,
  },
  setup() {
    const navIsOpen = ref(false);
    const links = [
      {
        href: null,
        to: "/guides",
        text: "Guides",
      },
      {
        href: null,
        to: "/docs",
        text: "Documentation",
      },
      {
        href: "https://twitter.com/usezephyr",
        to: null,
        text: "Updates",
        external: true,
        newWindow: true,
      },
    ];
    const classes = computed(() => {
      return {
        wrapper: tw`relative z-10 flex flex-col md:flex-row items-stretch rounded p-5 md:(px-8 px-6) bg-gray-50 dark:bg-gray-800`,
        nav: {
          wrapper: [
            !navIsOpen.value ? tw`hidden md:flex` : tw`flex`,
            tw`flex-col md:flex-row md:items-center md:space-x-2 border-y border-gray-200 dark:border-gray-700 my-4 py-4 md:(border-0 py-0 my-0)`,
          ],
          item: "",
        },
        options: {
          wrapper: [
            !navIsOpen.value ? tw`hidden md:flex` : tw`flex`,
            tw`items-stretch justify-between md:justify-start md:ml-auto space-x-2`,
          ],
          item: tw`text-sm md:text-base items-center flex space-x-2 uppercase cursor-pointer select-none text(gray-500 dark:gray-300 hover:dark:white hover:green-700) px-2 py-1.5 md:px-2.5 md:py-2 rounded bg-gray-100 dark:bg-gray-700 hover:(bg(green-100 dark:gray-600 opacity-50 dark:opacity-50))`,
        },
      };
    });
    return {
      tw,
      links,
      updateLocale,
      locale,
      classes,
      toTitleCase,
      navIsOpen,
    };
  },
});
</script>

<style scoped></style>
