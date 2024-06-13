<script setup>
import { ref } from 'vue'

const date = ref('11:20')
</script>

<template>
  <var-time-picker v-model="date" />
</template>
