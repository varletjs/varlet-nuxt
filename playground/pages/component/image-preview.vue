<script setup>
function preview() {
  ImagePreview('https://varlet.gitee.io/varlet-ui/cat.jpg')
}
</script>

<template>
  <var-button type="primary" block @click="preview">
    基本使用
  </var-button>
</template>
