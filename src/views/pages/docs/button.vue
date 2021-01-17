<template>
  <DocHeader>
    <template #title> Button </template>
    <template #subtitle> A basic, all purpose button </template>
    <template #right-side>
      <div :class="tw`justify-end flex items-start md:mt-2 space-x-2`">
        <Badge classAppend="bg-yellow-500 text-gray-900">In Progress</Badge>
        <Badge classAppend="bg-shamrock-500 text-gray-900">Alpha</Badge>
      </div>
    </template>
  </DocHeader>
  <div :class="tw`my-12 space-y-12`">
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">Install</h3>
      <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div>
      <div :class="tw`space-y-6`">
        <p>
          If you have installed Zephyr as a Vue plugin, you are good to go! You
          can use the plugin without importing anything since it is available
          globaly.
        </p>
        <p>
          However you do not wish to use the plugin method, components are
          available to import directly:
        </p>
        <div :class="tw`rounded-lg overflow-hidden`">
          <Code lang="vue" :code="codes.install" />
        </div>
      </div>
    </section>
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">
        {{ toTitleCase(t("pages._global.usage", 2)) }}
      </h3>
      <Divider />
      <div :class="tw`space-y-8`">
        <div class="space-y-4">
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            Variants
            <span v-if="locale !== 'en'"
              >({{ toTitleCase(t("pages._global.variant", 2)) }})</span
            >
          </h4>
          <Example lang="vue" :code="codes.variant">
            <div :class="tw`flex items-center space-x-4`">
              <ZButton>Primary</ZButton>
              <ZButton variant="secondary">Secondary</ZButton>
              <ZButton variant="outline">Outline</ZButton>
              <ZButton variant="success">Success</ZButton>
              <ZButton variant="danger">Danger</ZButton>
              <ZButton variant="warn">Warn</ZButton>
            </div>
          </Example>
        </div>
        <div class="space-y-4">
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl) mt-6`">
            Sizes
            <span v-if="locale !== 'en'"
              >({{ toTitleCase(t("pages._global.size", 2)) }})</span
            >
          </h4>
          <Example lang="vue" :code="codes.size">
            <div :class="tw`flex items-center space-x-4`">
              <ZButton size="xs">Extra Small</ZButton>
              <ZButton size="sm">Small</ZButton>
              <ZButton>Medium</ZButton>
              <ZButton size="lg">Large</ZButton>
              <ZButton size="xl">Extra Large</ZButton>
            </div>
          </Example>
        </div>
      </div>
    </section>
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">
        {{ toTitleCase(t("pages._global.example", 2)) }}
      </h3>
      <Divider />
      <div :class="tw`space-y-8`">
        <div :class="tw`space-y-4`">
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            Light Switch
          </h4>
          <Example lang="vue" :code="codes.lightSwitch">
            <ZButton @click="toggleScheme">
              Turn {{ isDark ? "ON" : "OFF" }} the lights
            </ZButton>
          </Example>
        </div>
        <div :class="tw`space-y-4`">
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            Button Group
          </h4>
          <Example lang="vue" :code="codes.buttonGroup">
            <ZButton
              variant="success"
              classRemove="rounded-md"
              classAppend="rounded-l-md"
            >
              Left Side
            </ZButton>
            <ZButton variant="warn" classRemove="rounded-md"> Center </ZButton>
            <ZButton
              variant="danger"
              classRemove="rounded-md"
              classAppend="rounded-r-md"
            >
              Right
            </ZButton>
          </Example>
        </div>
      </div>
    </section>
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">
        {{ toTitleCase(t("pages._global.props", 2)) }}
      </h3>
      <!-- <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div> -->
      <TableWrapper :classAppend="{ outerWrapper: 'mt-4' }">
        <div
          :class="
            tw`overflow-hidden border border-gray-200 dark:border-gray-800 rounded-lg`
          "
        >
          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Type</Th>
                <Th>Default</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>variant</Td>
                <Td>Set button variant</Td>
                <Td>String</Td>
                <Td>
                  <code>"primary"</code>
                </Td>
              </Tr>
              <Tr>
                <Td>size</Td>
                <Td>Set button size</Td>
                <Td>String</Td>
                <Td>
                  <code>"md"</code>
                </Td>
              </Tr>
              <Tr>
                <Td>status</Td>
                <Td>Set button status</Td>
                <Td
                  ><code>disabled</code> | <code>loading</code> |
                  <code>default</code></Td
                >
                <Td>
                  <code>"default"</code>
                </Td>
              </Tr>
              <Tr>
                <Td>classAppend</Td>
                <Td>Append class to existing class list</Td>
                <Td>String</Td>
                <Td>—</Td>
              </Tr>
              <Tr>
                <Td>classRemove</Td>
                <Td>Remove class from existing class list</Td>
                <Td>String</Td>
                <Td>—</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </TableWrapper>
    </section>
    <section>
      <h3
        :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`"
        id="default"
      >
        Default Theme
      </h3>
      <p :class="tw`mt-4`">
        As always, the default theme can be
        <a :class="tw`text-shamrock hover:text-shamrock-700`" href="#"
          >extended or modified</a
        >. In any case, here is the default theme for this component:
      </p>
      <!-- <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div> -->
      <div :class="tw`mt-4`">
        <Code :class="tw`rounded-lg`" :code="defaultTheme" lang="json" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-useless-escape */
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { tw } from "twind";
import { darkMode } from "@/utils/darkMode";
import { locale } from "@/views/utils/locale";
import { toTitleCase } from "@/views/utils/stringMods";
import DocHeader from "@/views/components/DocHeader.vue";
import Badge from "@/views/components/Badge.vue";
import Divider from "@/views/components/Divider.vue";
import Theme from "@/components/Button/theme.ts";
import Button from "@/components/Button/Button.vue";
import Example from "@/views/components/Example.vue";
import Code from "@/views/components/Code.vue";

export default defineComponent({
  layout: "doc",
  components: {
    DocHeader,
    Divider,
    Badge,
    ZButton: Button,
    Example,
    Code,
  },
  setup() {
    const { t } = useI18n();
    const { isDark, toggleScheme } = darkMode();

    const codes = {
      install: `
        <template>
          <Button>Button Text</Button>
        </template>

        <script>
          import { Button } from "vue-zephyr/dist/esm/Button";
          export default {
            components: { Button }
          };
        <\/script>
      `,
      variant: `
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warn">Warn</Button>
      `,
      size: `
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      `,
      lightSwitch: `
        <Button @click="toggleScheme">
          Turn {{ isDark ? "ON" : "OFF" }} the lights
        </Button>
      `,
      buttonGroup: `
        <Button variant="success" classRemove="rounded-md" classAppend="rounded-l-md">
          Left Side
        </Button>
        <Button variant="warn" classRemove="rounded-md">
          Center
        </Button>
        <Button variant="danger" classRemove="rounded-md" classAppend="rounded-r-md">
          Right
        </Button>
      `,
    };

    const defaultTheme = JSON.stringify(Theme(), null, 1);

    return {
      tw,
      isDark,
      toggleScheme,
      codes,
      toTitleCase,
      t,
      locale,
      defaultTheme,
    };
  },
});
</script>
