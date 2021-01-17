import merge from "lodash.merge";

const dropDownBase = {
  Dropdown: "relative inline-block text-left",
  DropdownButton: "",
  DropdownItems: "absolute z-10 w-56 mt-2 overflow-hidden bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none",
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const Theme = (userTheme?: any): any => {
  return merge(
    {
      DEFAULT: {
        ...dropDownBase,
        DropdownItem: {
          BASE: "flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",
          active: "bg-gray-100 text-gray-900",
          inactive: "text-gray-700",
        },
      },
      danger: {
        DropdownItem: {
          BASE: "flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",
          active: "bg-red-100 text-red-900",
          inactive: "text-gray-700",
        }
      },
      success: {
        DropdownItem: {
          BASE: "flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",
          active: "bg-green-100 text-green-900",
          inactive: "text-gray-700",
        }
      },
      disabled: {
        DropdownButton: "cursor-not-allowed",
        DropdownItem: {
          BASE: "text-gray-300 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-not-allowed",
          active: "",
          inactive: "",
        }
      },
      align: {
        left: "right-0 origin-top-right",
        right: "left-0 origin-top-left"
      },
      transition: {
        DEFAULT: {
          enterActiveClass: "transition duration-100 ease-out",
          enterFromClass: "transform scale-95 opacity-0",
          enterToClass: "transform scale-100 opacity-100",
          leaveActiveClass: "transition duration-75 ease-out",
          leaveFromClass: "transform scale-100 opacity-100",
          leaveToClass: "transform scale-95 opacity-0",
        }
      }
    },
    userTheme ? userTheme.ZDropdown : null
  );
};

export default Theme;
