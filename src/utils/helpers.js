import Theme from "../theme";

export const remove = (list, remove) => {
  if (!remove) return list;
  return list
    .split(" ")
    .filter(c => {
      return !remove.includes(c);
    })
    .join(" ");
};

export const filter = (classList = "", propData = {}) => {
  const removedClassList = propData?.classRemove
    ? remove(classList, propData.classRemove)
    : classList;
  const classes = [removedClassList, propData?.classAppend ?? null].join(" ");
  return classes;
};

// More intensive, complex function to fetch theme classes
export const themer = () => {
  return null;
};

export const globalProps = defaults => {
  return {
    classRemove: {
      type: [String, Object],
      default: defaults?.classRemove ?? ""
    }
  };
};

export const props = {
  global: globalProps(),
  button: options => {
    return {
      ...globalProps(),
      classAppend: {
        type: options?.classAppend?.default ?? [String, Object, String],
        default: options?.classAppend?.default ?? "",
        required: options?.classAppend?.required ?? false
      },
      variant: {
        type: options?.variant?.default ?? String,
        default: options?.variant?.default ?? "primary",
        required: options?.variant?.required ?? false
      },
      status: {
        type: options?.status?.default ?? [String, Boolean],
        default: options?.status?.default ?? null,
        required: options?.status?.required ?? false
      }
    };
  }
};

export const theme = Theme;
