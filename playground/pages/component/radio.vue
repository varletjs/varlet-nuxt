<script setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <var-radio v-model="value" unchecked-color="var(--color-warning)" checked-color="var(--color-danger)">
    <template #unchecked-icon>
      <var-icon name="heart-half-full" size="24px" />
    </template>
    <template #checked-icon>
      <var-icon name="heart" size="24px" />
    </template>
    <template #default>
      当前的值: {{ value }}
    </template>
  </var-radio>
</template>
