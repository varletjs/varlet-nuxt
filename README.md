# Varlet Nuxt

🌟 Inspired by [vant-nuxt](https://github.com/vant-ui/vant-nuxt) and [element-plus-nuxt](https://github.com/element-plus/element-plus-nuxt)

Welcome to contribute this repo

Varlet Module for Nuxt3

## Feature

- Auto import Varlet component in you Nuxt Project
- Auto import Varlet the directive
- Lazy load component
- Material Design Nuxt Component with Material 3 Version

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
    modulePath: '...',
    exclude: ['...']
  },
})
```

That's it! You can now use Varlet Module in your Nuxt app ✨

tips: If you running `varlet` on the PC. Please install [`@varlet/touch-emulator`](https://varlet.gitee.io/varlet-ui/#/zh-CN/browserAdaptation)

### Options

|fieldName|require|default|effect|
|--|--|--|--|
|modulePath|false|undefind|customer you workspace path if you want|
|exclude|false|'.nuxt', 'node_modules'|exclude some path that you won't transform|

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
