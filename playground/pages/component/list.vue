<script setup>
import { ref } from 'vue'

const loading = ref(false)
const finished = ref(false)
const list = ref([])

function load () {
  setTimeout(() => {
    for (let i = 0; i < 20; i++) 
      list.value.push(list.value.length + 1)
    

    loading.value = false

    if (list.value.length >= 60) 
      finished.value = true
    
  }, 1000)
}
</script>

<template>
  <var-list :finished="finished" v-model:loading="loading" @load="load">
    <var-cell :key="item" v-for="item in list">
      列表项: {{ item }}
    </var-cell>
  </var-list>
</template>
