<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <var-counter v-model="value" />
</template>