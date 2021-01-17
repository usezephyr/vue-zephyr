<template>
  <table :class="classes">
    <slot></slot>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, inject, provide } from "vue";
import { classAppend, classRemove, variant } from "@/props";
import { tw } from "twind";
import TableWrapper from "./TableWrapper.vue";
import Thead from "./Thead.vue";
import Tbody from "./Tbody.vue";
import Tr from "./Tr.vue";
import Th from "./Th.vue";
import Td from "./Td.vue";
import { Classy } from "@/utils/helpers";
import Theme from "./theme";

const Table = defineComponent({
  props: {
    ...classAppend(),
    ...classRemove(),
    ...variant({
      default: "primary",
    }),
  },
  setup(props) {
    const { value: theme } = computed(() => Theme(inject("userTheme", {})));
    const classes = computed(() =>
      new Classy(theme[props.variant].Table)
        .append(props.classAppend)
        .remove(props.classRemove)
        .twind(inject("twindEnable", true))
        .val()
    );
    provide("theme", theme);
    provide("variant", props.variant);
    return { tw, classes };
  },
});

export default Table;
export { TableWrapper, Table, Thead, Tbody, Tr, Th, Td };
</script>
