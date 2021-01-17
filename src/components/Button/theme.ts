import merge from "lodash.merge";

const buttonDefault =
  "inline-flex items-center border-2 font-medium rounded-md leading-6 focus:relative focus:z-20 focus:ring-opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const Theme = (userTheme?: any): any => {
  return merge(
    {
      primary: `${buttonDefault} border-transparent shadow-sm text-white dark:ring-offset-blue-900 ring-offset-blue-50 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500`,
      secondary: `${buttonDefault} border-transparent shadow-sm text-white dark:ring-offset-gray-900 ring-offset-gray-50 bg-gray-600 hover:bg-gray-700 focus:ring-gray-500`,
      outline: `${buttonDefault} text-gray-700 dark:text-gray-100 border-gray-400 dark:border-gray-600 focus:border-gray-500 ring-offset-gray-50 dark:ring-offset-gray-800 hover:bg-gray-500 hover:bg-opacity-10 hover:dark:bg-gray-200 hover:dark:bg-opacity-10 focus:bg-gray-900 focus:dark:bg-gray-100 focus:bg-opacity-10 focus:dark:bg-opacity-20 focus:ring-gray-400 px-3.5 py-1.5`,
      success: `${buttonDefault} border-transparent shadow-sm text-white dark:ring-offset-green-900 ring-offset-green-50 bg-green-600 hover:bg-green-700 focus:ring-green-500`,
      danger: `${buttonDefault} border-transparent shadow-sm text-white dark:ring-offset-red-900 ring-offset-red-50 bg-red-600 hover:bg-red-700 focus:ring-red-500`,
      warn: `${buttonDefault} border-transparent shadow-sm text-white dark:ring-offset-yellow-900 ring-offset-yellow-50 bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500`,
      disabled: `${buttonDefault} bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`,
      size: {
        xs: "px-1 leading-5 text-xs",
        sm: "px-2.5 py-0.5 py text-sm",
        md: "px-3.5 py-1.5",
        lg: "px-5 py-2.5 text-lg",
        xl: "px-6 py-4 text-xl",
      },
    },
    userTheme ? userTheme.ZButton : null
  );
};

export default Theme;
