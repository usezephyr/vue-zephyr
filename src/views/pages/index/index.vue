<template>
  <div :class="tw`pb-32`">
    <header :class="tw`pb-24 relative`">
      <div :class="[tw`-mt-24`, 'header-logo']">
        <img
          v-if="isDark"
          :class="tw`mx-auto select-none pointer-events-none `"
          src="@/assets/images/header-logo-dark.png"
        />
        <img
          v-else
          :class="tw`mx-auto select-none pointer-events-none`"
          src="@/assets/images/header-logo-light.png"
        />
      </div>
      <h1
        :class="
          tw`text-6xl md:text-7xl text-gray-700 dark:text-gray-200 font-bold tracking-wider text-center -mt-24`
        "
      >
        Vue Zephyr
      </h1>
      <h2
        :class="
          tw`text-xl text-gray-600 dark:text-gray-200 font-medium tracking-wide md:text-2xl text-center mt-8`
        "
      >
        The themeable component library built for Tailwind developers.
      </h2>
      <div :class="tw`text-center mt-12`">
        <div
          :class="
            tw`rounded-xl px-2 bg-gray-100 dark:bg-gray-800 inline-flex items-center text-xl`
          "
        >
          <Link
            variant="primary"
            :class="tw`space-x-2 py-4 px-4`"
            to="/docs/install"
            styled
          >
            <div>Get Started</div>
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
                stroke-width="3"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
          <Anchor
            variant="primary"
            :classAppend="{
              anchor: 'space-x-2 py-4 px-4',
              icon: 'w-5'
            }"
            href="https://github.com/usezephyr/vue-zephyr"
            newTab
          >
            Github
          </Anchor>
        </div>
      </div>
    </header>
    <div :class="tw`space-y-20`">
      <section>
        <h3
          :class="
            tw`text-center tracking-wide font-medium text(gray-900 dark:gray-100 4xl)`
          "
          id="features"
        >
          Features
        </h3>
        <div :class="tw`grid md:grid-cols-3 gap-4 md:gap-8 mt-8`">
          <div :class="classes.featuresBlock">
            <div :class="tw`h-8 flex items-center`">
              <svg
                :class="tw`w-8 flex items-bottom`"
                viewBox="0 0 51 31"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                />
              </svg>
            </div>
            <span :class="tw`inline-block mt-4 text-xl font-medium`"
              >Built for Tailwind</span
            >
            <p>Every part of Zephyr has been built for Tailwind developers.</p>
          </div>
          <div :class="classes.featuresBlock">
            <svg
              :class="tw`h-8`"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                clip-rule="evenodd"
              />
            </svg>
            <span :class="tw`inline-block mt-4 text-xl font-medium`"
              >Themeable</span
            >
            <p>
              Want to make some changes? Easily extend or replace the default
              Zephyr theme.
            </p>
          </div>
          <div :class="classes.featuresBlock">
            <svg
              :class="tw`h-8`"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span :class="tw`inline-block mt-4 text-xl font-medium`"
              >No CSS Build Step</span
            >
            <p>
              Using
              <Anchor href="https://github.com/tw-in-js/twind" newTab>
                Twind
              </Anchor>
              under the hood, Zephyr requires no build step to generate Tailwind
              styles.
            </p>
          </div>
          <div :class="classes.featuresBlock">
            <svg
              :class="tw`h-8`"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
            <span :class="tw`inline-block mt-4 text-xl font-medium`"
              >Dark Mode Utilities</span
            >
            <p>Use Zephyr's built-in utilities to bring dark mode to your project.</p>
            <div>
              <div :class="classes.soonBadge">
                Coming Soon
              </div>
            </div>
          </div>
          <div :class="classes.featuresBlock">
            <svg
              :class="tw`h-8`"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span :class="tw`inline-block mt-4 text-xl font-medium`"
              >Localized Documentation</span
            >
            <p>
              Read documenation in either English, Simplified Chinese, or
              Spanish.
            </p>
            <div :class="classes.soonBadge">
              In Progress
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3
          :class="
            tw`text-center tracking-wide font-medium text(gray-900 dark:gray-100 4xl)`
          "
          id="components"
        >
          Components
        </h3>
        <ul :class="tw`grid md:grid-cols-3 gap-6 md:gap-8 mt-8`">
          <li v-for="(link, index) in componentLinks" :key="`${index}-${link.text}`">
            <router-link
              :class="
                tw`h-32 md:h-48 w-full text-3xl tracking-wider flex items-center justify-center bg-gradient-to-tr from-shamrock-600 to-blue-600 transition-all ease-in-out duration-200 transform hover:scale-105 text-white rounded`
              "
              :to="link.to"
            >
              {{ link.text }}
            </router-link>
          </li>
        </ul>
      </section>
      <section>
        <h3
          :class="
            tw`text-center tracking-wide font-medium text(gray-900 dark:gray-100 4xl)`
          "
          id="Guides"
        >
          Guides
        </h3>
        <div :class="tw`grid md:grid-cols-3 gap-4 md:gap-8 mt-8`">
          <div :class="classes.featuresBlock">
            <span :class="tw`text-2xl font-medium`">Vue Zephyr 101</span>
            <div :class="tw`space-y-4`">
              <p>A full guide on how to get started. Includes useful tips and things to know.</p>
              <p>
                <div :class="classes.soonBadge">
                  Coming Soon
                </div>
              </p>
            </div>
          </div>
          <div :class="classes.featuresBlock">
            <span :class="tw`text-2xl font-medium`">Custom Themeing</span>
            <div :class="tw`space-y-4`">
              <p>
                Learn how easy it is to extend or replace the default theme.
              </p>
              <p>
                <div :class="classes.soonBadge">
                  Coming Soon
                </div>
              </p>
            </div>
          </div>
          <div :class="classes.featuresBlock">
            <span :class="tw`text-2xl font-medium`">
              Use Dark Mode Utilities
            </span>
            <div :class="tw`space-y-4`">
              <p>Use Zephyr's built-in utilities to bring dark mode to your project.</p>
              <p>
                <div :class="classes.soonBadge">
                  Coming Soon
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tw } from "twind";
import Link from "@/views/components/Link.vue";
import { Classy } from "@/utils/helpers";
import { isDark } from "@/utils/darkMode";

export default defineComponent({
  components: {
    Link,
  },
  setup() {
    const componentLinks = [
      {
        to: "/docs/anchor",
        text: "Anchor Link",
      },
      {
        to: "/docs/button",
        text: "Button",
      },
      {
        to: "/docs/dropdown",
        text: "Dropdown",
      },
      {
        to: "/docs/prose",
        text: "Prose",
      },
      {
        to: "/docs/table",
        text: "Table",
      },
    ];
    const classes = {
      featuresBlock: new Classy()
        .append(
          "border-2 border-gray-200 dark:border-gray-700 py-6 px-8 rounded-lg space-y-3"
        )
        .twind()
        .val(),
      soonBadge: new Classy(
        "inline-block bg-shamrock-100 dark:bg-shamrock-500 py-1 px-2.5 rounded-full text-gray-900 text-xs"
      )
        .twind()
        .val(),
    };
    return { tw, componentLinks, classes, isDark };
  },
});
</script>

<style scoped>
.header-logo {
  height: 504px;
}
</style>
