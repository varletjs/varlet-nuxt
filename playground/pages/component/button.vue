<script setup lang="ts">
function onChange() {
  Locale.use('en-US')
}
</script>
<template>
  <var-space :size="[10, 10]">
    <var-button @click="onChange">默认按钮</var-button>
    <var-button type="primary">
      主要按钮
    </var-button>
    <var-button type="info">
      信息按钮
    </var-button>
    <var-button type="success">
      成功按钮
    </var-button>
    <var-button type="warning">
      警告按钮
    </var-button>
    <var-button type="danger">
      危险按钮
    </var-button>
  </var-space>
</template>
