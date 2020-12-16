interface ButtonOptionsInterface {
  classRemove?: {
    type?:
      | StringConstructor
      | ObjectConstructor
      | (StringConstructor | ObjectConstructor)[];
    default?: string;
    required?: boolean;
  };
  variant?: {
    type?: StringConstructor;
    default?: string;
    required?: boolean;
  };
  status?: {
    type?: StringConstructor | null | false;
    default: null;
    required: false;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const themeProps = (options?: ButtonOptionsInterface): any => {
  return {
    classRemove: {
      type: options?.classRemove?.type ?? [String, Object],
      default: options?.classRemove?.default ?? "",
      required: options?.classRemove?.required ?? false
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
};

export default themeProps;
