<script setup>
import { ref } from 'vue'

const value = ref()
</script>

<template>
  <var-menu-select v-model="value">
    <var-button type="primary">
      {{ value ? value : '请选择' }}
    </var-button>

    <template #options>
      <var-menu-option label="吃饭" />
      <var-menu-option label="睡觉" />
      <var-menu-option label="打游戏" />
    </template>
  </var-menu-select>
</template>
