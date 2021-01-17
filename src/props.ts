interface Prop {
  type?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  default?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  required?: boolean;
  validator?: (v: any) => boolean; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const variant = (
  args?: Prop
): {
  variant: Prop;
} => {
  return {
    variant: {
      type: args && args.type ? args.type : [String],
      default: args && args.default ? args.default : "",
      required: args && args.required ? args.required : false
    }
  };
};

export const classAppend = (
  args?: Prop
): {
  classAppend: Prop;
} => {
  return {
    classAppend: {
      type: args && args.type ? args.type : [String, Array as () => string[]],
      default: args && args.default ? args.default : "",
      required: args && args.required ? args.required : false
    }
  };
};

export const classRemove = (
  args?: Prop
): {
  classRemove: Prop;
} => {
  return {
    classRemove: {
      type: args && args.type ? args.type : [String, Array as () => string[]],
      default: args && args.default ? args.default : "",
      required: args && args.required ? args.required : false
    }
  };
};

export const as = (
  args?: Prop
): {
  as: Prop;
} => {
  return {
    as: {
      type: args && args.type ? args.type : [String, Object],
      default: args && args.default ? args.default : "div",
      required: args && args.required ? args.required : false
    }
  };
};

export const status = (
  args?: Prop
): {
  status: Prop;
} => {
  return {
    status: {
      type: args && args.type ? args.type : [String, Boolean],
      default: args && args.default ? args.default : false,
      required: args && args.required ? args.required : false,
      validator: args && args.validator ? args.validator : () => true
    }
  };
};

export const size = (
  args?: Prop
): {
  size: Prop;
} => {
  return {
    size: {
      type: args && args.type ? args.type : [String],
      default: args && args.default ? args.default : "",
      required: args && args.required ? args.required : false,
      validator: args && args.validator ? args.validator : () => true
    }
  };
};
