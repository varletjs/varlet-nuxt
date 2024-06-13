<script setup>
import { ref } from 'vue'

const value = ref(3)
</script>

<template>
  <var-slider v-model="value" />
</template>
