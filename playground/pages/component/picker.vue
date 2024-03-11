<script setup>
import { Picker, Snackbar } from '@varlet/ui'

async function picker () {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { state, values, indexes, options } = await Picker({
    columns: [
      [
        { text: 'A' },
        { text: 'B' },
        { text: 'C' },
        { text: 'D' },
        { text: 'E' }
      ]
    ],
    onChange (values, indexes) {
      Snackbar(`values: ${values.toString()}, indexes: ${indexes.toString()}`)
    },
  })
}
</script>

<template>
  <var-button type="primary" block @click="picker">单列选择</var-button>
</template>