<template>
  <DocHeader>
    <template #title>Prose</template>
    <template #subtitle>
      Access Tailwind's typography plugin as a component
    </template>
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
  "name": "prose",
  "meta": {
    "title": "Prose | Vue Zephyr",
    "metaTags": [
      {
        "property": "og:title",
        "content": "Prose | Vue Zephyr"
      },
      {
        "name": "twitter:title",
        "content": "Prose | Vue Zephyr"
      },
      {
        "name": "description",
        "content": "Access Tailwind's typography plugin as a component"
      },
      {
        "property": "og:description",
        "content": "Access Tailwind's typography plugin as a component"
      },
      {
        "property": "twitter:description",
        "content": "Access Tailwind's typography plugin as a component"
      },
      {
        "property": "og:url",
        "content": "https://usezephyr.com/docs/prose"
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
