interface Element {
  [propertyName: string]: {
    wrapper: string;
    icon: string;
    text: string;
  };
}

const buttonDefault =
  "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white leading-6 focus:ring-opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2";

const Theme: Element = {
  primary: {
    wrapper: `${buttonDefault} dark:ring-offset-green-900 ring-offset-white bg-green-600 hover:bg-green-700 focus:ring-green-500`,
    icon: "inline-block mr-3",
    text: "text"
  },
  secondary: {
    wrapper: `${buttonDefault} bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`,
    icon: "inline-block mr-3",
    text: "text"
  },
  disabled: {
    wrapper:
      "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 focus:outline-none cursor-not-allowed",
    icon: "inline-block mr-3",
    text: "text"
  }
};

export default Theme;
