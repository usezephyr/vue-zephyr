<template>
  <transition
    v-if="status !== 'disabled'"
    :enter-active-class="classes.transition.enterActiveClass"
    :enter-from-class="classes.transition.enterFromClass"
    :enter-to-class="classes.transition.enterToClass"
    :leave-active-class="classes.transition.leaveActiveClass"
    :leave-from-class="classes.transition.leaveFromClass"
    :leave-to-class="classes.transition.leaveToClass"
  >
    <HMenuItems :class="classes.items">
      <slot></slot>
    </HMenuItems>
  </transition>
</template>
<script lang="ts">
import { defineComponent, inject, computed } from "vue";
import { tw } from "twind";
import { MenuItems as HMenuItems } from "@headlessui/vue";
import { classAppend, classRemove, variant, status } from "@/props";
import { Classy } from "@/utils/helpers";

export default defineComponent({
  name: "DropdownItems",
  props: {
    ...classAppend(),
    ...classRemove(),
    ...variant({
      default: "DEFAULT",
    }),
    ...status(),
  },
  setup(props) {
    const theme: any = inject("theme"); // eslint-disable-line @typescript-eslint/no-explicit-any
    const status = inject("status");
    const align = inject("align", "left");
    const resolvedVariant = props.variant ?? inject("variant", "DEFAULT");
    const variantClasses = theme?.[resolvedVariant].DropdownItems ?? "";

    const classes = computed(() => {
      return {
        items: new Classy()
          .append(variantClasses)
          .append(theme.align[align])
          .append(props.classAppend)
          .remove(props.classRemove)
          .twind(inject("twindEnable", true))
          .val(),
        transition: {
          enterActiveClass: new Classy(
            theme.transition.DEFAULT.enterActiveClass
          )
            .twind()
            .val(),
          enterFromClass: new Classy(theme.transition.DEFAULT.enterFromClass)
            .twind()
            .val(),
          enterToClass: new Classy(theme.transition.DEFAULT.enterToClass)
            .twind()
            .val(),
          leaveActiveClass: new Classy(
            theme.transition.DEFAULT.leaveActiveClass
          )
            .twind()
            .val(),
          leaveFromClass: new Classy(theme.transition.DEFAULT.leaveFromClass)
            .twind()
            .val(),
          leaveToClass: new Classy(theme.transition.DEFAULT.leaveToClass)
            .twind()
            .val(),
        },
      };
    });
    return { classes, tw, status };
  },
  components: {
    HMenuItems,
  },
});
</script>
