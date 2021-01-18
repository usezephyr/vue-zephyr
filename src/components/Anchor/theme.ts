import merge from "lodash.merge";

const anchorBase = 'inline-flex space-x-2 focus:ring-2 rounded-sm ring-opacity-50 outline-none';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const Theme = (userTheme?: any): any => {
  return merge(
    {
      BASE: anchorBase,
      primary: `${anchorBase} text-green-500 hover:text-green-800 focus:text-green-800 dark:hover:text-green-300 dark:focus:text-green-300 ring-green-500`,
      secondary: `${anchorBase} text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 focus:text-blue-800 dark:focus:text-blue-300 ring-blue-500`,
    },
    userTheme ? userTheme.Anchor : null
  );
};

export default Theme;
