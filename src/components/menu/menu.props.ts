interface MenuInter {
  classRemove?: {
    type?:
      | StringConstructor
      | ObjectConstructor
      | (StringConstructor | ObjectConstructor)[];
    default?: string;
    required?: boolean;
  };
  as: {
    type?:
      | StringConstructor
      | ObjectConstructor
      | (StringConstructor | ObjectConstructor)[];
    default?: string;
    required: boolean;
  };
}
interface MenuButtonInter {
  classRemove?: {
    type?:
      | StringConstructor
      | ObjectConstructor
      | (StringConstructor | ObjectConstructor)[];
    default?: string;
    required?: boolean;
  };
  as: {
    type?:
      | StringConstructor
      | ObjectConstructor
      | (StringConstructor | ObjectConstructor)[];
    default?: string;
    required: boolean;
  };
}

const themeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Menu: (options?: MenuInter): any => {
    return {
      classRemove: {
        type: options?.classRemove?.type ?? [String, Object],
        default: options?.classRemove?.default ?? "",
        required: options?.classRemove?.required ?? false
      },
      as: {
        type: options?.as?.type ?? [Object, String],
        default: options?.as?.default ?? "div",
        required: options?.as?.required ?? false
      }
    };
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  MenuButton: (options?: MenuButtonInter): any => {
    return {
      classRemove: {
        type: options?.classRemove?.type ?? [String, Object],
        default: options?.classRemove?.default ?? "",
        required: options?.classRemove?.required ?? false
      },
      as: {
        type: options?.as?.type ?? [Object, String],
        default: options?.as?.default ?? "div",
        required: options?.as?.required ?? false
      }
    };
  }
};

export default themeProps;
