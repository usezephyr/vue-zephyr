import clsx from "clsx";
import { tw } from "twind";

// Remove
export const remove = (list: string, remove: string): string => {
  if (!remove) return list;
  return list
    .split(" ")
    .filter((c) => {
      return !remove.includes(c);
    })
    .join(" ");
};

// Classy
export class Classy {
  value: string | string[];

  constructor(starter?: string | string[]) {
    if (starter) {
      this.value = Array.isArray(starter) ? starter : this.toArray(starter);
    } else {
      this.value = [];
    }
  }

  // Chains
  append(classes: string | string[]): this {
    this.value = clsx(this.value, classes);
    return this;
  }

  remove(classes: string | string[]): this {
    const classArray =
      typeof classes === "string" ? classes.split(" ") : classes;

    this.value = this.toArray(this.value).filter(
      (className) => !classArray.includes(className)
    );
    return this;
  }

  twind(enable = true): this {
    if (enable) {
      this.value = tw`${this.value}`;
    }
    return this;
  }

  val(type?: string): string | string[] {
    if (type === "array") {
      return this.toArray(this.value);
    }
    return clsx(this.value);
  }

  // Helpers
  toArray(classes: string | string[]): string[] {
    return typeof classes === "string" ? classes.split(" ") : classes;
  }

  toString(classes: string | string[]): string {
    return Array.isArray(classes) ? classes.join(" ") : classes;
  }
}

export const magicValues = (value: string): string => {
  if (value.startsWith("$root")) {
    return "";
  }
  return "";
};
