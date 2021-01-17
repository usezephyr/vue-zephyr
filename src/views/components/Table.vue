<template>
  <div :class="tw`flex flex-col mt-4`">
    <div :class="tw`-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8`">
      <div
        :class="tw`inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8`"
      >
        <div :class="tw`overflow-hidden border-b border-t border-gray-200`">
          <table :class="tw`min-w-full divide-y divide-gray-200`">
            <thead :class="tw`bg-gray-50`">
              <tr>
                <th
                  scope="col"
                  :class="
                    tw`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-100 uppercase tracking-wider`
                  "
                >
                  Name
                </th>
                <th
                  scope="col"
                  :class="
                    tw`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-100 uppercase tracking-wider`
                  "
                >
                  Type
                </th>
                <th
                  scope="col"
                  :class="
                    tw`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-100 uppercase tracking-wider`
                  "
                >
                  Description
                </th>
                <th
                  scope="col"
                  :class="
                    tw`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-100 uppercase tracking-wider`
                  "
                >
                  Default
                </th>
              </tr>
            </thead>
            <tbody>
              <tr :class="tw`bg-whit`">
                <td
                  :class="
                    tw`px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 dark:text-gray-100`
                  "
                >
                  variant
                </td>
                <td
                  :class="
                    tw`px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100`
                  "
                >
                  String
                </td>
                <td
                  :class="
                    tw`px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100`
                  "
                >
                  Choose variant from theme
                </td>
                <td
                  :class="
                    tw`px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100`
                  "
                >
                  <code>"primary"</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { tw } from "twind";

export default defineComponent({
  setup() {
    return { tw };
  },
});
</script>

<style scoped></style>
