<template>
  <ul :class="classes.wrapper">
    <router-link :class="tw`mr-6`" to="/">
      <img
        :class="
          tw`w-6 transition ease-in-out duration-200 transform scale-100 hover:scale-110`
        "
        src="@/views/assets/images/logo-detailed.svg"
        alt="Vue Zephyrs"
      />
    </router-link>
    <ul :class="tw`flex items-center space-x-4`">
      <li>
        <Link to="/docs/install" variant="button">Documentation</Link>
      </li>
      <li>
        <Link to="/guides" variant="button">Guides</Link>
      </li>
      <li>
        <Anchor href="https://twitter.com/usezephyr" variant="button" newTab>
          Updates
        </Anchor>
      </li>
    </ul>
    <div :class="tw`flex items-center ml-auto space-x-2`">
      <LightSwitch
        :class="
          tw`flex items-center text(shamrock-700 dark:shamrock-50 hover:shamrock-900) px-2 py-2 rounded hover:(bg(shamrock-50 dark:gray-700)) uppercase cursor-pointer select-none`
        "
      />
      <Dropdown>
        <DropdownButton
          as="button"
          classAppend="flex items-center text(shamrock-700 dark:shamrock-50 hover:shamrock-900) px-2 py-2 rounded hover:(bg(shamrock-50 dark:gray-700)) uppercase cursor-pointer"
        >
          <div>{{ locale === "zh-CN" ? "中文" : locale }}</div>
          <svg
            :class="tw`w-5`"
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
import { defineComponent, computed } from "vue";
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
        wrapper: tw(
          "relative z-10 flex items-center rounded py-4 px-8 bg-gray-50 dark:bg-gray-800"
        ),
      };
    });
    return { tw, links, updateLocale, locale, classes, toTitleCase };
  },
});
</script>

<style scoped></style>
