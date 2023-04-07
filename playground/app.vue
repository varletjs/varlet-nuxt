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
  <var-button type="primary" block @click="show = !show">基本使用</var-button>
  <var-snackbar v-model:show="show">
  这是一个消息条！！
</var-snackbar>
  <!-- <div v-ripple class="ripple-example-block">点击</div> -->
<var-skeleton :loading="show">
  加载的数据
  </var-skeleton>

  <!-- <var-button @click="showSnackBar">
                  Button2
                </var-button> -->
  <!-- <var-space>
                <var-button>Button3</var-button>
              </var-space> -->
  <!-- <var-progress :value="20" :track="false" />
              <var-card title="本草纲目"
                description="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~" /> -->
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