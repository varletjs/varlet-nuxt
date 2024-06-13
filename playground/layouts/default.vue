<script lang="ts" setup>
import { switchLocale } from '../store'

const route = useRoute()
</script>

<template>
  <var-app-bar class="bar" :title="String(route.name) || ''">
    <template #left>
      <var-button color="transparent" text-color="#fff" round text @click="$router.back()">
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button size="small" text @click="switchLocale">
        <var-icon text-6 name="translate" />
        <var-icon text-6 name="chevron-down" />
      </var-button>
    </template>
  </var-app-bar>
  <slot />
</template>

<style>
.bar {
  margin-bottom: 18px;
}
</style>
