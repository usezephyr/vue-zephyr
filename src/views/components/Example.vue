<template>
  <div>
    <div :class="classes.slot">
      <slot></slot>
    </div>
    <div :class="classes.code">
      <Code :lang="lang" :code="code" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { tw } from "twind";
import Code from "@/views/components/Code.vue";

export default defineComponent({
  components: {
    Code,
  },
  props: {
    code: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      default: "html",
      validator: (v: string) => ["js", "vue", "json", "html"].includes(v),
    },
  },
  setup() {
    const classes = computed(() => {
      return {
        slot: tw`p-8 border(t-2 r-2 l-2 gray-100 dark:gray-800) bg-white dark:bg-gray-700 dark:bg-opacity-60 rounded-t-lg`,
        code: tw`rounded-b-lg overflow-hidden`,
      };
    });
    return { tw, classes };
  },
});
</script>
