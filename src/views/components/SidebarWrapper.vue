<template>
  <div :class="tw`relative block lg:hidden`">
    <transition
      :enter-active-class="tw`duration-150 ease-out`"
      :enter-from-class="tw`scale-95 opacity-0`"
      :enter-to-class="tw`scale-100 opacity-100`"
      :leave-active-class="tw`duration-150 ease-in`"
      :leave-from-class="tw`scale-100 opacity-100`"
      :leave-to-class="tw`scale-95 opacity-0`"
    >
      <div
        v-if="menuIsOpen === true"
        :class="
          tw`z-30 absolute top-4 inset-x-0 mx-auto w-full transition transform origin-top`
        "
      >
        <div
          :class="
            tw`rounded-lg shadow-lg ring-1 p-6 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y divide-gray-200`
          "
        >
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
  <div :class="tw`min-h-full hidden lg:block`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tw } from "twind";

export default defineComponent({
  props: {
    menuIsOpen: {
      type: Boolean,
      required: true,
    },
    toggleMenu: {
      type: Function,
      required: false,
    },
  },
  setup() {
    return { tw };
  },
});
</script>