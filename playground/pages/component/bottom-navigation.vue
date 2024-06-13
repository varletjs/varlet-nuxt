<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-bottom-navigation v-model:active="active">
    <var-bottom-navigation-item label="标签" icon="home" />
    <var-bottom-navigation-item label="标签" icon="magnify" />
    <var-bottom-navigation-item label="标签" icon="heart" />
    <var-bottom-navigation-item label="标签" icon="account-circle" />
  </var-bottom-navigation>
</template>
