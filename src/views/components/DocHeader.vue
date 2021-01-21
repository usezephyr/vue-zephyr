<template>
  <header>
    <div :class="tw`flex flex-col-reverse md:flex-row`">
      <div :class="tw`flex-auto`">
        <h1 :class="tw`mt-4 font-bold text(gray-900 dark:gray-100 4xl)`">
          <slot name="title"></slot>
        </h1>
        <h2 :class="tw`mt-1 text(gray-500 dark:gray-400 lg)`">
          <slot name="subtitle"></slot>
        </h2>
      </div>
      <div :class="tw`md:justify-end flex items-start space-x-2`">
        <slot name="right-side"></slot>
      </div>
    </div>
    <Blockquote :class="tw`mt-12`" v-if="notice">
      <slot name="notice"></slot>
    </Blockquote>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tw } from "twind";
import Blockquote from "@/views/components/Blockquote.vue";

export default defineComponent({
  components: {
    Blockquote,
  },
  setup(_, { slots }) {
    const { notice } = slots;
    return { tw, notice };
  },
});
</script>