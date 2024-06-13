<script setup lang="ts">
import '@varlet/ui/es/styles/elevation.css'
</script>

<template>
  <var-space class="elevation-example-list" :size="[40, 0]" justify="space-between">
    <div v-for="e in 25" :key="e" class="elevation-example-item" :class="`var-elevation--${e - 1}`">
      {{ e - 1 }}
    </div>
  </var-space>
</template>

<style>
.elevation-example-list {
  margin-top: 8px !important;
}

.elevation-example-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 4px;
}
</style>
