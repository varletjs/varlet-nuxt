<script setup lang="ts">
import { locale, messages } from './store'

onMounted(() => {
  Locale.add('en-US', Locale.enUS)
})
</script>

<template>
  <nuxt-layout>
    <var-locale-provider :locale="locale" :messages="messages">
      <nuxt-page />
    </var-locale-provider>
  </nuxt-layout>
</template>
