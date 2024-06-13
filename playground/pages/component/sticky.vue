/*
*此组件需要客户端渲染
*使用时需使用client-only包裹
**/

<template>
  <div class="sticky-example">
    <client-only>
      <var-sticky :offset-top="54">
        <var-button type="primary">
          基本使用
        </var-button>
      </var-sticky>
    </client-only>
  </div>
</template>

<style>
.sticky-example {
  min-height: 200vh;
}
</style>
