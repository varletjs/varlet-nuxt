<script setup>
import { ref } from 'vue'

const translateY = ref('100%')

function handleHover (hovering) {
  translateY.value = hovering ? '0' : '100%'
}
</script>

<template>
  <div class="image-container" v-hover="handleHover">
    <var-image src="https://varlet.gitee.io/varlet-ui/tree.jpeg" />
    <div class="image-mask" :style="{ transform: `translateY(${translateY})` }">HOVER</div>
  </div>
</template>

<style>
.image-container {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 6px;
}

.image-mask {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  color: var(--color-on-primary);
  background-color: var(--color-primary);
  font-size: 50px;
}
</style>