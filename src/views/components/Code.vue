<template>
  <div
    class="line-numbers"
    :class="tw`px-1 py-2 bg-gray-100 dark:bg-gray-800 overflow-auto`"
  >
    <Prism :language="lang === 'vue' ? 'html' : lang" :inline="inline">{{
      prettyCode
    }}</Prism>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { tw } from "twind";
import Strip from "strip-indent";
import PrismJs from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import Prism from "vue-prism-component";
import { format } from "prettier/standalone";
import parserHTML from "prettier/parser-html";
import parserBabel from "prettier/parser-babel";
import prettierPluginPackage from "prettier-plugin-package";

export default defineComponent({
  components: {
    Prism,
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
    inline: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const prettierConfigs: any = {
      html: {
        parser: "html",
        plugins: [parserHTML],
      },
      js: {
        parser: "babel",
        plugins: [parserBabel],
      },
      vue: {
        parser: "vue",
        plugins: [parserHTML],
      },
      json: {
        parser: "json-stringify",
        plugins: [prettierPluginPackage],
      },
    };
    const prettierConfig = prettierConfigs?.[props?.lang];
    const prettyCode = computed(() =>
      format(Strip(props.code), prettierConfig)
    );
    onMounted(() => {
      PrismJs.highlightAll();
    });
    return { prettyCode, tw };
  },
});
</script>
