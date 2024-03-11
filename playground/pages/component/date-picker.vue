<script setup>
import { ref } from 'vue'

const date = ref('2021-04-08')
</script>

<template>
  <var-date-picker v-model="date" />
</template>