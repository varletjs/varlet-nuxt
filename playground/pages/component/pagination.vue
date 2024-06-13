<script setup lang="ts">
const count = ref(1)
function handleCellClick() {
  Locale.use(count.value % 2 === 0 ? 'zh-CN' : 'en-US')
  count.value++
}
</script>

<template>
  <var-pagination :current="count" :total="120" />

  <var-button size="small" text @click="handleCellClick">
    <var-icon text-6 name="translate" />
    <var-icon text-6 name="chevron-down" />
  </var-button>
</template>
