<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const value = ref(0)
let timer

onMounted(() => {
  timer = window.setInterval(() => {
    if (value.value >= 100) {
      value.value = 0
      return
    }

    value.value += 20
  }, 1000)
})

onUnmounted(() => {
  window.clearInterval(timer)
})  
</script>

<template>
  <var-space direction="column" :size="[12, 12]">
    <var-progress :value="20" />
    <var-progress :value="value" :track="false" label />
    <var-progress :value="100" label>success</var-progress>
  </var-space>
</template>