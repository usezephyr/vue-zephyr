<template>
  <div>
    <DocHeader>
      <template #title> Guides </template>
      <template #subtitle>
        Learn how to get the most out of Vue Zephyr.
      </template>
      <template #right-side>
        <div :class="tw`justify-end flex items-start md:mt-2 space-x-2`">
          <Badge classAppend="bg-yellow-500 text-gray-900">In Progress</Badge>
        </div>
      </template>
      <template #notice>
        Guides are coming soon. Please keep an eye on our
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tw } from "twind";
import Badge from "@/views/components/Badge.vue";
import DocHeader from "@/views/components/DocHeader.vue";

export default defineComponent({
  components: {
    Badge,
    DocHeader,
  },
  setup() {
    return { tw };
  },
});
</script>

<route>
{
  "name": "guides",
  "meta": {
    "title": "Guides (coming soon)",
    "metaTags": [
      {
        "property": "og:title",
        "content": "Guides (coming soon)"
      },
      {
        "name": "twitter:title",
        "content": "Guides (coming soon)"
      },
      {
        "name": "description",
        "content": "Coming soon"
      },
      {
        "property": "og:description",
        "content": "Coming soon"
      },
      {
        "property": "twitter:description",
        "content": "Coming soon"
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

