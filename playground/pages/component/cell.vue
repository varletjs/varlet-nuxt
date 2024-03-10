<script setup>
import { ref } from 'vue'

const items = ref([
  {
    name: 'Vue2',
    icon: 'star',
    enabled: false,
  },
  {
    name: 'Vue3',
    icon: 'heart',
    enabled: false,
  },
  {
    name: 'React',
    icon: 'close-circle',
    enabled: false,
  },
])

function handleClick(item) {
  item.enabled = !item.enabled
}
</script>

<template>
  <var-paper :elevation="2">
    <var-cell
      v-for="(item, index) in items" :key="item.name" ripple :icon="item.icon"
      :border="index !== items.length - 1" :border-offset="0" @click="handleClick(item)"
    >
      {{ item.name }}

      <template #extra>
        <var-switch v-model="item.enabled" @click.stop />
      </template>
    </var-cell>
  </var-paper>
</template>
