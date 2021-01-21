<template>
  <DocHeader>
    <template #title>Table</template>
    <template #subtitle>Easily display data in table format</template>
    <template #notice>
      This component is coming soon. Please keep an eye on our
      <Anchor
        href="https://github.com/usezephyr/vue-zephyr"
        variant="primary"
        classAppend="space-x-1"
        classRemove="space-x-2"
        newTab
      >
        Github
      </Anchor>
      or follow us on
      <Anchor
        href="https://twitter.com/usezephyr"
        variant="primary"
        classAppend="space-x-1"
        classRemove="space-x-2"
        newTab
      >
        Twitter </Anchor
      >.
    </template>
  </DocHeader>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DocHeader from "@/views/components/DocHeader.vue";

export default defineComponent({
  components: {
    DocHeader,
  },
  setup() {
    return {};
  },
});
</script>

<route>
{
  "name": "table",
  "meta": {
    "title": "Table",
    "metaTags": [
      {
        "property": "og:title",
        "content": "Table"
      },
      {
        "name": "twitter:title",
        "content": "Table"
      },
      {
        "name": "description",
        "content": "Easily display data in table format"
      },
      {
        "property": "og:description",
        "content": "Easily display data in table format"
      },
      {
        "property": "twitter:description",
        "content": "Easily display data in table format"
      },
      {
        "property": "og:url",
        "content": "https://usezephyr.com/docs/table"
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
