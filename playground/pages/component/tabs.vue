<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-tabs v-model:active="active">
    <var-tab>选项1</var-tab>
    <var-tab>选项2</var-tab>
    <var-tab>选项3</var-tab>
  </var-tabs>
</template>