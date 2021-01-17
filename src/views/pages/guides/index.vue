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
        <h2>Here We are</h2>
      </section>
    </div>
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

<style scoped>
</style>