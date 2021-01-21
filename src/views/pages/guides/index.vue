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
    </DocHeader>
    <div>
      <section>
        <h2>Redirecting...</h2>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { tw } from "twind";
import Badge from "@/views/components/Badge.vue";
import DocHeader from "@/views/components/DocHeader.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    Badge,
    DocHeader,
  },
  setup() {
    const router = useRouter();
    onMounted(() => {
      router.push("/docs/guides");
    });
    return { tw };
  },
});
</script>

<route>
{
  "name": "guides-redirect",
  "meta": {
    "title": "Redirect",
    "metaTags": [
      {
        "property": "og:title",
        "content": "Redirect"
      },
      {
        "name": "twitter:title",
        "content": "Redirect"
      },
      {
        "name": "description",
        "content": "Redirect"
      },
      {
        "property": "og:description",
        "content": "Redirect"
      },
      {
        "property": "twitter:description",
        "content": "Redirect"
      },
      {
        "property": "og:url",
        "content": "https://usezephyr.com?redirect=true"
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