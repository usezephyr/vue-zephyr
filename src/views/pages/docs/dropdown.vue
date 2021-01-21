<template>
  <DocHeader>
    <template #title>Dropdown</template>
    <template #subtitle>An accessible &amp; flexible dropdown menu</template>
    <template #right-side>
      <div :class="tw`justify-end flex items-start md:mt-2 space-x-2`">
        <Badge classAppend="bg-yellow-500 text-gray-900">In Progress</Badge>
        <Badge classAppend="bg-shamrock-500 text-gray-900">Alpha</Badge>
      </div>
    </template>
    <template #notice>
      Under the hood, this component uses the <code>Menu</code> component from
      <A href="https://headlessui.dev/" newWindow>Headless UI</A>. The intention
      is to use the similar APIs, however please be sure to read this
      documentation to distinguish any differences.
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
      <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div>
      <div :class="tw`space-y-8`">
        <div :class="tw`space-y-4`">
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            Alignment
          </h4>
          <Example lang="vue" :code="codes.align">
            <div :class="tw`flex items-center space-x-4`">
              <ZDropdown align="right">
                <ZDropdownButton>Align Right</ZDropdownButton>
                <ZDropdownItems>
                  <ZDropdownItem>Right Item One</ZDropdownItem>
                  <ZDropdownItem>Right Item Two</ZDropdownItem>
                </ZDropdownItems>
              </ZDropdown>
              <ZDropdown align="left">
                <ZDropdownButton>Align Left</ZDropdownButton>
                <ZDropdownItems>
                  <ZDropdownItem>Left Item One</ZDropdownItem>
                  <ZDropdownItem>Left Item Two</ZDropdownItem>
                </ZDropdownItems>
              </ZDropdown>
            </div>
          </Example>
        </div>
        <div :class="tw`space-y-4`">
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            State via scoped slots
          </h4>
          <Example lang="vue" :code="codes.slots">
            <ZDropdown v-slot="{ open }" align="right">
              <ZDropdownButton>
                open: <code>{{ open ? "true" : "false" }}</code>
              </ZDropdownButton>
              <ZDropdownItems>
                <ZDropdownItem v-slot="{ active }">
                  active: <code>{{ active ? "true" : "false" }}</code>
                </ZDropdownItem>
                <ZDropdownItem v-slot="{ active }">
                  active: <code>{{ active ? "true" : "false" }}</code>
                </ZDropdownItem>
              </ZDropdownItems>
            </ZDropdown>
          </Example>
        </div>
        <div :class="tw`space-y-4`">
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            Variants
          </h4>
          <Example lang="vue" :code="codes.variants">
            <ZDropdown align="right">
              <ZDropdownButton>Click for Options</ZDropdownButton>
              <ZDropdownItems>
                <ZDropdownItem variant="success">Save</ZDropdownItem>
                <ZDropdownItem variant="danger">Delete</ZDropdownItem>
                <ZDropdownItem>Cancel</ZDropdownItem>
              </ZDropdownItems>
            </ZDropdown>
          </Example>
        </div>
      </div>
    </section>
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">
        {{ toTitleCase(t("pages._global.example", 2)) }}
      </h3>
      <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div>
      <!-- Example -->
      <div :class="tw`space-y-8`">
        <div :class="tw`space-y-4`">
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            Using with other components
          </h4>
          <Example lang="vue" :code="codes.withButton">
            <ZDropdown align="right">
              <ZDropdownButton as="div">
                <Button classAppend="space-x-2">
                  <div>Menu Button</div>
                  <svg
                    :class="tw`w-5`"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Button>
              </ZDropdownButton>
              <ZDropdownItems>
                <ZDropdownItem>Item One</ZDropdownItem>
                <ZDropdownItem>Item Two</ZDropdownItem>
              </ZDropdownItems>
            </ZDropdown>
          </Example>
        </div>
      </div>
    </section>
    <section>
      <h3 :class="tw`font-medium text(gray-900 dark:gray-100 3xl)`">
        {{ toTitleCase(t("pages._global.props", 2)) }}
      </h3>
      <div :class="tw`border(t gray-200 dark:gray-800) my-4`"></div>
      <div :class="tw`space-y-6`">
        <div>
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            Dropdown
          </h4>
          <TableWrapper :classAppend="{ outerWrapper: 'mt-4' }">
            <div :class="classes.table">
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
                    <Td>as</Td>
                    <Td>Render as element or component</Td>
                    <Td> String | Object </Td>
                    <Td>
                      <code>"div"</code>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>align</Td>
                    <Td>Set dropdown alignment</Td>
                    <Td> <code>left</code> | <code>right</code> </Td>
                    <Td>
                      <code>"left"</code>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>status</Td>
                    <Td>Set component status</Td>
                    <Td> <code>disabled</code> | <code>default</code> </Td>
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
        </div>
        <!-- DropdownButton -->
        <div>
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            DropdownButton
          </h4>
          <TableWrapper :classAppend="{ outerWrapper: 'mt-4' }">
            <div :class="classes.table">
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
                    <Td>as</Td>
                    <Td>Render as element or component</Td>
                    <Td> String | Object </Td>
                    <Td>
                      <code>"button"</code>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>status</Td>
                    <Td>Set component status</Td>
                    <Td> <code>"disabled"</code> | <code>false</code> </Td>
                    <Td>
                      <code>false</code>
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
        </div>
        <!-- DropdownItems -->
        <div>
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            DropdownItems
          </h4>
          <TableWrapper :classAppend="{ outerWrapper: 'mt-4' }">
            <div :class="classes.table">
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
                    <Td>transition</Td>
                    <Td>Set transition classes from theme</Td>
                    <Td>string</Td>
                    <Td>"DEFAULT"</Td>
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
        </div>
        <!-- DropdownItem -->
        <div>
          <h4 :class="tw`font-medium text(gray-900 dark:gray-100 xl)`">
            DropdownItem
          </h4>
          <TableWrapper :classAppend="{ outerWrapper: 'mt-4' }">
            <div :class="classes.table">
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
                    <Td>Set component variant</Td>
                    <Td>
                      <code>"success"</code> | <code>"danger"</code> |
                      <code>"DEFAULT"</code>
                    </Td>
                    <Td>
                      <code>"DEFAULT"</code>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>status</Td>
                    <Td>Set component status</Td>
                    <Td> <code>"disabled"</code> | <code>false</code> </Td>
                    <Td>
                      <code>false</code>
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
        </div>
      </div>
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
import { useI18n } from "vue-i18n";
import { tw } from "twind";
import { darkMode } from "@/utils/darkMode";
import { locale } from "@/views/utils/locale";
import { toTitleCase } from "@/views/utils/stringMods";
import DocHeader from "@/views/components/DocHeader.vue";
import Badge from "@/views/components/Badge.vue";
import Theme from "@/components/Dropdown/theme.ts";
import A from "@/views/components/A.vue";
import {
  Dropdown,
  DropdownButton,
  DropdownItems,
  DropdownItem,
} from "@/components/Dropdown/Dropdown.vue";

import Example from "@/views/components/Example.vue";
import Code from "@/views/components/Code.vue";

export default defineComponent({
  components: {
    DocHeader,
    Badge,
    ZDropdown: Dropdown,
    ZDropdownButton: DropdownButton,
    ZDropdownItems: DropdownItems,
    ZDropdownItem: DropdownItem,
    Example,
    Code,
    A,
  },
  setup() {
    const { t } = useI18n();
    const { isDark, toggleScheme } = darkMode();

    const codes = {
      install: `
        <template>
          <Dropdown>
            <DropdownButton>Click Me</DropdownButton>
            <DropdownItems>
              <DropdownItem>Item</DropdownItem>
            </DropdownItems>
          </Dropdown>
        </template>

        <script>
          import { Dropdown, DropdownButton, DropdownItems, DropdownItem } from "vue-zephyr/dist/esm/Dropdown";
          export default {
            components: { Dropdown, DropdownButton, DropdownItems, DropdownItem }
          };
        <\/script>
      `,
      basic: `
        <Dropdown align="right">
          <DropdownButton>Click Me</DropdownButton>
          <DropdownItems>
            <DropdownItem>Item One</DropdownItem>
            <DropdownItem>Item Two</DropdownItem>
          </DropdownItems>
        </Dropdown>
      `,
      align: `
        <Dropdown align="right">
          <DropdownButton>Align Right</DropdownButton>
          <DropdownItems>
            <DropdownItem>Right Item One</DropdownItem>
            <DropdownItem>Right Item Two</DropdownItem>
          </DropdownItems>
        </Dropdown>
        <Dropdown align="left">
          <DropdownButton>Align Left</DropdownButton>
          <DropdownItems>
            <DropdownItem>Left Item One</DropdownItem>
            <DropdownItem>Left Item Two</DropdownItem>
          </DropdownItems>
        </Dropdown>
      `,
      slots: `
        <Dropdown v-slot="{ open }" align="right">
          <DropdownButton>
            open: <code>{{ open ? "true" : "false" }}</code>
          </DropdownButton>
          <DropdownItems>
            <DropdownItem v-slot="{ active }">
              active: <code>{{ active ? "true" : "false" }}</code>
            </DropdownItem>
            <DropdownItem v-slot="{ active }">
              active: <code>{{ active ? "true" : "false" }}</code>
            </DropdownItem>
          </DropdownItems>
        </Dropdown>
      `,
      variants: `
        <Dropdown align="right">
          <DropdownButton>Click for Options</DropdownButton>
          <DropdownItems>
            <DropdownItem variant="success">Save</DropdownItem>
            <DropdownItem variant="danger">Delete</DropdownItem>
            <DropdownItem>Cancel</DropdownItem>
          </DropdownItems>
        </Dropdown>
      `,
      withButton: `
        <Dropdown align="right">
          <DropdownButton as="div">
            <Button classAppend="space-x-2">
              <div>Menu Button</div>
              <svg
                :class="tw\`w-5\`"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </Button>
          </DropdownButton>
          <DropdownItems>
            <ZDropdownItem>Item One</ZDropdownItem>
            <ZDropdownItem>Item Two</ZDropdownItem>
          </DropdownItems>
        </Dropdown>
      `,
    };

    const classes = computed(() => {
      return {
        table: tw`overflow-hidden border border-gray-200 dark:border-gray-800 rounded-lg`,
      };
    });

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
      classes,
    };
  },
});
</script>

<route>
{
  "name": "dropdown",
  "meta": {
    "title": "Dropdown",
    "metaTags": [
      {
        "property": "og:title",
        "content": "Dropdown"
      },
      {
        "name": "twitter:title",
        "content": "Dropdown"
      },
      {
        "name": "description",
        "content": "An accessible and flexible dropdown menu"
      },
      {
        "property": "og:description",
        "content": "An accessible and flexible dropdown menu"
      },
      {
        "property": "twitter:description",
        "content": "An accessible and flexible dropdown menu"
      },
      {
        "property": "og:url",
        "content": "https://usezephyr.com/docs/dropdown"
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
