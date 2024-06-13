<script setup>
import { ref } from 'vue'

const value = ref(['1'])
</script>

<template>
  <var-collapse v-model="value">
    <var-collapse-item title="标题" name="1">
      文本
    </var-collapse-item>
    <var-collapse-item title="标题" name="2">
      文本
    </var-collapse-item>
  </var-collapse>
</template>
