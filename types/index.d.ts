import { DefineComponent, Plugin } from "vue";

declare const vue3ComponentLibrary: Exclude<Plugin["install"], undefined>;

export default vue3ComponentLibrary;

export const Button: Exclude<Plugin["install"], undefined> | DefineComponent;
export const Anchor: Exclude<Plugin["install"], undefined> | DefineComponent;
export const Dropdown: Exclude<Plugin["install"], undefined> | DefineComponent;
export const DropdownButton: Exclude<Plugin["install"], undefined> | DefineComponent;
export const DropdownItems: Exclude<Plugin["install"], undefined> | DefineComponent;
export const DropdownItem: Exclude<Plugin["install"], undefined> | DefineComponent;