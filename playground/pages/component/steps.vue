<script setup>
import { ref } from 'vue'

const active = ref(0)

function next() {
  active.value = (active.value + 1) % 4
}
</script>

<template>
  <var-steps :active="active">
    <var-step>步骤1</var-step>
    <var-step>步骤2</var-step>
    <var-step>步骤3</var-step>
    <var-step>步骤4</var-step>
  </var-steps>
  <var-button type="primary" block @click="next">
    下一步
  </var-button>
</template>
