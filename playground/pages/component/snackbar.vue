<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <var-button type="primary" block @click="show = !show">
    基本使用
  </var-button>
  <var-snackbar v-model:show="show">
    这是一个消息条！！
  </var-snackbar>
</template>
