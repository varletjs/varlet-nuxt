<script setup lang="ts">
import { Themes } from '@varlet/ui'
</script>

<template>
  <lazy-var-button @click="() => StyleProvider(Themes.dark)">
    ceshi
  </lazy-var-button>
  <lazy-var-paper
    v-hover="{ color: 'var(--color-on-primary)', background: 'var(--color-primary)' }"
    ripple
    class="paper"
    :elevation="2"
    :width="100"
    :height="100"
  >
    HOVER ME
  </lazy-var-paper>
  <nuxt-link to="/">
    back
  </nuxt-link>
</template>
