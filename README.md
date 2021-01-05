# Vue Zephyrs

## About

Zephyrs is a UI library build with Tailwind and for Vue 3.

## Getting Started

### Install package

```bash
npm i @zephyrs/vue
```
```bash
yarn add @
```

### Use in Vue

**Option One: Use as Vue plugin**
```js
// main.js
import Zeph from 'vue-zeph';

createApp.use(Zeph).mount('#app)
```

**Option Two: Import components individually**
```js
// App.vue
<template>
  <ZButton>Click Me</ZButton>
</template>

<script>
import { ZButton } from "vue-zeph/dist/esm/ZButton";
export default {
  components: { ZButton }
}
</script>
```

### Using Styles

- Zephyrs includes pre-compiled styles if you would like to make no additional changes to the theme. To include them you maybe import those styles directly: `import 'zeph/dist/z.default.css';`.

## Props
- Components are using @headlessui/vue package
- Every component has at least these props:
  - classRemove
  - classAppend
  - [more here]
- Read documentation for more information on each component

## Themeing

Add `z.theme.js` or `z.theme.ts` to your project root:
```js
const Theme = {
  ZButton: {
    wrapper: '...',
    icon: '...',
    text: '...'
  }
}
```

## Other tips
- Working with Tailwind
- Other built in themes

## Known Issues
- Webpack vX.X.X does not support optional chaining