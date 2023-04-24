# Varlet Nuxt(Under rectification and reform 🚧)

Welcome to contribute this repo

Varlet Module for Nuxt3

## Future

- Make up the Lazy Option
- Component Demo for Playground
- Template for Nuxt3
- Migrate to [knitwork](https://github.com/unjs/knitwork)

## Quick Setup

1. Add `@varlet/nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D @varlet/ui
pnpm add -D @varlet/nuxt

# Using yarn
yarn add --dev @varlet/ui
yarn add --dev @varlet/nuxt

# Using npm
npm install --save-dev @varlet/ui
npm install --save-dev @varlet/nuxt
```

2. Add `@varlet/nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@varlet/nuxt'
  ],
  varlet: {
    ...
  }
})
```

That's it! You can now use Varlet Module in your Nuxt app ✨

## Contribution

We recommend using pnpm

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run ESLint
pnpm run lint

# Release new version
pnpm run release
```
