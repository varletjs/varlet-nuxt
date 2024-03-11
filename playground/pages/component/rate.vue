<script setup>
import { ref } from 'vue'

const score = ref(3)
</script>

<template>
  <var-rate v-model="score" />
  <var-rate v-model="score" icon="thumb-up" empty-icon="thumb-up-outline" />
</template>