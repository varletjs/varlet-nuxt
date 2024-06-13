<script setup>
import { ref } from 'vue'

const value = ref([])
</script>

<template>
  <var-checkbox-group ref="group" v-model="value">
    <var-checkbox :checked-value="0">
      吃饭
    </var-checkbox>
    <var-checkbox :checked-value="1">
      睡觉
    </var-checkbox>
  </var-checkbox-group>
  <var-space :size="[0, 10]">
    <var-button type="primary" @click="$refs.group.checkAll()">
      全选
    </var-button>
    <var-button type="primary" @click="$refs.group.inverseAll()">
      反选
    </var-button>
  </var-space>
  <div>当前的值: {{ value }}</div>
</template>
