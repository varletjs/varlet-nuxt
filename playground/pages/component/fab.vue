<script setup lang="ts">
import type { FabPosition } from '@varlet/ui';
import { ref } from 'vue'

const position = ref<FabPosition>('left-top')
</script>

<template>
  <var-radio-group v-model="position" style="margin-top: 80px;">
    <var-radio checked-value="left-top">left-top</var-radio>
    <var-radio checked-value="right-top">right-top</var-radio>
    <var-radio checked-value="left-bottom">left-bottom</var-radio>
    <var-radio checked-value="right-bottom">right-bottom</var-radio>
  </var-radio-group>
  <var-fab :position="position" />
</template>