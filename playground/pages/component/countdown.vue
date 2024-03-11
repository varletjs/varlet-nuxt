<script setup>
import { ref } from 'vue'

const time = ref(30 * 60 * 60 * 1000)
</script>

<template>
  <var-countdown :time="time" format="HH:mm:ss:SS" />
</template>