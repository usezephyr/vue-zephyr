<template>
  <div :class="classes">
    <HMenu v-slot="{ open }">
      <slot :open="open" />
    </HMenu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Menu as HMenu } from "@headlessui/vue";
import { remove } from "@/utils/helpers.ts";
import themeProps from "./menu.props";
// import Theme from "./menu.theme";

export default defineComponent({
  name: "Menu",
  props: {
    ...themeProps.Menu()
  },
  setup(props) {
    const classes = computed(() =>
      remove(`relative inline-block text-left `, props.classRemove)
    );
    return { classes };
  },
  components: {
    HMenu
  }
});
</script>
