import merge from "lodash.merge";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export default (userTheme?: any): any => {
  return merge(
    {
      primary: {
        Table: "min-w-full",
        Thead: "border-b border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800",
        Tbody: "",
        Tr: "border-b border-gray-200 dark:border-gray-700 last:border-0",
        Th:
          "px-6 pt-4 pb-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
        Td: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100",
      },
    },
    userTheme ? userTheme.Table : null
  );
};
