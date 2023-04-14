# Varlet Nuxt

Welcome to contribute this repo

Varlet Module for Nuxt3

## Features

- Make up the Lazy Option
- Component Demo for Playground
- Template for Nuxt3


## Quick Setup

1. Add `@varlet/nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D @varlet/nuxt

# Using yarn
yarn add --dev @varlet/nuxt

# Using npm
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

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```
