<script setup>
import { ref } from 'vue'

const loading = ref(true)
</script>

<template>
  <var-skeleton title avatar :rows="3" :loading="loading">
    加载的数据
  </var-skeleton>
</template>
