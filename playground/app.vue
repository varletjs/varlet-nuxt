<script setup lang="ts">
const show = ref(false)

// const showSnackBar = () => {
//   Snackbar({
//     content: '这是一个消息条!!',
//     duration: 1000
//   })
// }
</script>

<template>
  <div>
    <var-button type="primary" block @click="show = !show">
      66666666
    </var-button>
    <varButton type="primary" block @click="show = !show">
      基本使用22
    </varButton>
    <!-- <var-snackbar v-model:show="show">
      这是一个消息条！！
    </var-snackbar> -->
    <!-- <div v-ripple class="ripple-example-block">
      点击
    </div> -->
    <!-- <var-skeleton :loading="show">
      加载的数据
    </var-skeleton> -->
  </div>
</template>

<style>
.ripple-example-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  user-select: none;
  cursor: pointer;
  color: #888;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background-color 0.25s;
}
</style>
