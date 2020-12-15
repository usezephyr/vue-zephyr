<template>
  <HMenu as="div">
    <HMenuButton> More </HMenuButton>
    <HMenuItems>
      <HMenuItem v-slot="{ active }">
        <a :class="{ 'bg-blue-500': active }" href="/account-settings">
          Account settings
        </a>
      </HMenuItem>
      <HMenuItem v-slot="{ active }">
        <a :class="{ 'bg-blue-500': active }" href="/account-settings">
          Documentation
        </a>
      </HMenuItem>
      <HMenuItem v-slot="{ active }" disabled>
        <span :class="{ 'bg-blue-500': active }">
          Invite a friend (coming soon!)
        </span>
      </HMenuItem>
    </HMenuItems>
  </HMenu>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import {
  Menu as HMenu,
  MenuButton as HMenuButton,
  MenuItems as HMenuItems,
  MenuItem as HMenuItem
} from "@headlessui/vue";
export default defineComponent({
  name: "Menu",
  setup() {
    const count = ref(0);
    return { count };
  },
  components: {
    HMenu,
    HMenuButton,
    HMenuItems,
    HMenuItem
  }
});
</script>
