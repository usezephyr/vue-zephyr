<template>
  <DocHeader>
    <template #title>Theming</template>
    <template #subtitle>Customize the apperance for your project</template>
    <template #notice>
      This project is in early development. There still may be significant
      changes in the future, so please use with caution. Follow us on
      <Anchor
        variant="primary"
        classAppend="space-x-1"
        classRemove="space-x-2"
        href="https://twitter.com/usezephyr"
        newTab
        >Twitter</Anchor
      >
      for updates.
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
  "name": "theming",
  "meta": {
    "title": "Themeing | Vue Zephyr",
    "metaTags": [
      {
        "property": "og:title",
        "content": "Theming"
      },
      {
        "name": "description",
        "content": "Customize the apperance for your project."
      },
      {
        "property": "og:description",
        "content": "Customize the apperance for your project."
      },
      {
        "property": "og:url",
        "content": "https://usezephyr.com/docs/theming"
      },
      {
        "property": "og:url",
        "content": "https://usezephyr.com/test.png"
      }
    ]
  }
}
</route>