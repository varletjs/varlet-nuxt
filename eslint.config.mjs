// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '**/fixtures',
    '**/node_modules',
    '**/dist',
    '**/.nuxt',
  ],
})
