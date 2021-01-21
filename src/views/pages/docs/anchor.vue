<template>
  <DocHeader>
    <template #title>Anchor Link</template>
    <template #subtitle
      >Standard &lt;a&gt; element with accesibility baked in.</template
    >
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
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">Usage</h3>
      <Divider />
      <div :class="tw`space-y-8`">
        <div :class="tw`space-y-4`">
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            Basic
          </h4>
          <Example lang="vue" :code="codes.basic">
            <ZAnchor href="https://github.com/usezephyr/vue-zephyr">
              Github
            </ZAnchor>
          </Example>
        </div>
        <div :class="tw`space-y-4`">
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            Open in new tab
          </h4>
          <Example lang="vue" :code="codes.newTab">
            <ZAnchor href="https://github.com/usezephyr/vue-zephyr" newTab>
              Github
            </ZAnchor>
          </Example>
        </div>
        <div :class="tw`space-y-4`">
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            Variants
          </h4>
          <Example lang="vue" :code="codes.variants">
            <div :class="tw`flex items-center space-x-4`">
              <ZAnchor href="#base"> BASE/Unstyled </ZAnchor>
              <ZAnchor variant="primary" href="#primary"> Primary </ZAnchor>
              <ZAnchor variant="secondary" href="#secondary">
                Secondary
              </ZAnchor>
            </div>
          </Example>
        </div>
        <div :class="tw`space-y-4`">
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            classAppend
          </h4>
          <Example lang="vue" :code="codes.classAppend">
            <ZAnchor
              :classAppend="{
                anchor: 'text-3xl text-pink-500 hover:text-pink-700 font-bold',
                icon: 'w-7'
              }"
              href="https://twitter.com/usezephyr"
              newTab
            >
              @usezephyr
            </ZAnchor>
          </Example>
        </div>
      </div>
    </section>
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">
        {{ toTitleCase(t("pages._global.props", 2)) }}
      </h3>
      <TableWrapper :classAppend="{ outerWrapper: 'mt-4' }">
        <div :class="classes.tableFormat">
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
                <Td>href</Td>
                <Td>Set link href</Td>
                <Td>String</Td>
                <Td>
                  <code>—</code>
                </Td>
              </Tr>
              <Tr>
                <Td>newTab</Td>
                <Td>Set link to open in new tab</Td>
                <Td>Boolean</Td>
                <Td>
                  <code>false</code>
                </Td>
              </Tr>
              <Tr>
                <Td>variant</Td>
                <Td>Set button variant style</Td>
                <Td>
                  <code>"BASE"</code> | <code>"primary"</code> |
                  <code>"secondary"</code>
                </Td>
                <Td>
                  <code>"BASE"</code>
                </Td>
              </Tr>
              <Tr>
                <Td>classAppend</Td>
                <Td>Append class to existing class list</Td>
                <Td>String | Object</Td>
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
import { computed, defineComponent } from "vue";
import { tw } from "twind";
import { useI18n } from "vue-i18n";
import { toTitleCase } from "@/views/utils/stringMods";
import DocHeader from "@/views/components/DocHeader.vue";
import Badge from "@/views/components/Badge.vue";
import Divider from "@/views/components/Divider.vue";
import Example from "@/views/components/Example.vue";
import Code from "@/views/components/Code.vue";
import Anchor from "@/components/Anchor/Anchor.vue";
import Theme from "@/components/Anchor/theme.ts";

export default defineComponent({
  components: {
    DocHeader,
    Badge,
    Divider,
    ZAnchor: Anchor,
    Example,
    Code,
  },
  setup() {
    const codes = {
      install: `
        // example.vue
        <template>
          <Anchor href="https://usezephyr.com">Read Docs</Anchor>
        </template>

        <script>
          import { Anchor } from "vue-zephyr/dist/esm/Anchor";
          export default {
            components: { Anchor }
          };
        <\/script>
      `,
      basic: `
        <Anchor href="https://github.com/usezephyr/vue-zephyr">
          Vue Zephyr Github
        </Anchor>`,
      newTab: `
        <Anchor href="https://github.com/usezephyr/vue-zephyr" newTab>
          Github
        </Anchor>
      `,
      variants: `
        <Anchor href="https://github.com/usezephyr/vue-zephyr">
          Base variant
        </Anchor>
        <Anchor variant="primary" href="https://github.com/usezephyr/vue-zephyr">
          Primary variant
        </Anchor>
        <Anchor variant="secondary" href="https://github.com/usezephyr/vue-zephyr">
          Secondary variant
        </Anchor>
      `,
      classAppend: `
        <Anchor
          :classAppend="{
            anchor: 'text-3xl text-pink-500 hover:text-pink-700 font-bold',
            icon: 'w-7'
          }"
          href="https://twitter.com/usezephyr"
          newTab
        >
          @usezephyr
        </Anchor>
      `,
    };
    const defaultTheme = JSON.stringify(Theme(), null, 1);
    const classes = computed(() => {
      return {
        tableFormat: tw`overflow-hidden border border-gray-200 dark:border-gray-800 rounded-lg`,
      };
    });
    const { t } = useI18n();
    return { tw, codes, defaultTheme, classes, t, toTitleCase };
  },
});
</script>

<route>
{
  "name": "anchor",
  "meta": {
    "title": "Anchor",
    "metaTags": [
      {
        "property": "og:title",
        "content": "Anchor"
      },
      {
        "name": "twitter:title",
        "content": "Anchor"
      },
      {
        "name": "description",
        "content": "Standard <a> element with accesibility baked in"
      },
      {
        "property": "og:description",
        "content": "Standard <a> element with accesibility baked in"
      },
      {
        "property": "twitter:description",
        "content": "Standard <a> element with accesibility baked in"
      },
      {
        "property": "og:url",
        "content": "https://usezephyr.com/docs/anchor"
      },
      {
        "property": "og:image",
        "content": "https://usezephyr.com/cover.png"
      },
      {
        "property": "twitter:image",
        "content": "https://usezephyr.com/cover.png"
      },
      {
        "name": "twitter:site",
        "content": "@usezephyr"
      },
      {
        "name": "twitter:creator",
        "content": "@usezephyr"
      },
      {
        "name": "twitter:card",
        "content": "summary_large_image"
      }
    ]
  }
}
</route>