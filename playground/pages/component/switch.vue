<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <var-switch v-model="value" />
</template>