import merge from "lodash.merge";

const buttonDefault =
  "inline-flex items-center border border-transparent text-sm font-medium rounded-md shadow-sm text-white leading-6 focus:relative focus:z-20 focus:ring-opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const Theme = (userTheme?: any): any => {
  return merge(
    {
      primary: `${buttonDefault} dark:ring-offset-green-900 ring-offset-green-700 bg-green-600 hover:bg-green-700 focus:ring-green-500`,
      secondary: `${buttonDefault} dark:ring-offset-indigo-900 ring-offset-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`,
      disabled: `${buttonDefault} bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`,
      size: {
        sm: "px-2.5 py-1.5",
        md: "px-4 py-2",
        lg: "px-6 py-3 "
      }
    },
    userTheme ? userTheme.ZButton : null
  );
};

export default Theme;
