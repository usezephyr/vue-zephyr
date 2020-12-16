interface Element {
  [propertyName: string]: {
    menu: string;
    menuButton: string;
    menuItems: string;
    menuItem: string;
  };
}

const Theme: Element = {
  primary: {
    menu: "",
    menuButton: "",
    menuItems: "",
    menuItem: ""
  },
  secondary: {
    menu: "",
    menuButton: "",
    menuItems: "",
    menuItem: ""
  },
  disabled: {
    menu: "",
    menuButton: "",
    menuItems: "",
    menuItem: ""
  }
};

export default Theme;
