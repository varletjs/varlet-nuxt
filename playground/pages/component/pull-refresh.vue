<script setup>
import { ref } from 'vue'

const data1 = Array(30).fill('List Item')
const data2 = Array(30).fill('This is new List Item')
const isRefresh = ref(false)
const data = ref(data1)

function refresh() {
  setTimeout(() => {
    data.value = data.value[0] === 'List Item' ? data2 : data1
    isRefresh.value = false
  }, 2000)
}
</script>

<template>
  <var-pull-refresh v-model="isRefresh" @refresh="refresh">
    <var-cell v-for="(item, index) in data" :key="index" border>
      {{ `${item} ${index + 1}` }}
    </var-cell>
  </var-pull-refresh>
</template>
