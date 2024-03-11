<script setup>
import { onMounted, ref } from 'vue'

const list = ref([])

onMounted(() => {
  for (let i = 0; i < 26; i++)
    list.value.push(String.fromCharCode(65 + i))
})
</script>

<template>
  <var-index-bar duration="300">
    <div v-for="item in list" :key="item">
      <var-index-anchor :index="item" class="anchor">
        标题 {{ item }}
      </var-index-anchor>

      <var-cell>{{ item }} 文本</var-cell>
      <var-cell>{{ item }} 文本</var-cell>
    </div>
  </var-index-bar>
</template>

<style>
.anchor {
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  transition: all 0.25s;
  background: var(--color-primary);
  color: #fff;
}
</style>
