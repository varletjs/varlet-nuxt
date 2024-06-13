<script setup>
import { ref } from 'vue'

const files = ref([
  {
    url: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
    cover: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
  },
  {
    url: 'https://www.runoob.com/try/demo_source/mov_bbb.mp4',
    cover: 'https://varlet.gitee.io/varlet-ui/cover.jpg',
  },
])
</script>

<template>
  <var-uploader v-model="files" />
</template>
