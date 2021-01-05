import merge from "lodash.merge";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const Theme = (userTheme?: any): any => {
  return merge(
    {
      primary: {
        wrapper: "...",
        button: "...",
        items: "...",
        item: "..."
      }
    },
    userTheme ? userTheme.ZDropdown : null
  );
};

export default Theme;
