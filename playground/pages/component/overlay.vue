<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <var-button type="primary" block @click="show = true">显示遮罩层</var-button>
  <var-overlay v-model:show="show" />
</template>