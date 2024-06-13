<template>
  <var-row :gutter="[10, 10]">
    <var-col :span="8">
      <div class="item">
        span: 8
      </div>
    </var-col>
    <var-col :span="8">
      <div class="item">
        span: 8
      </div>
    </var-col>
    <var-col :span="8">
      <div class="item">
        span: 8
      </div>
    </var-col>
    <var-col :span="8">
      <div class="item">
        span: 8
      </div>
    </var-col>
    <var-col :span="8">
      <div class="item">
        span: 8
      </div>
    </var-col>
    <var-col :span="8">
      <div class="item">
        span: 8
      </div>
    </var-col>
  </var-row>
</template>

<style>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  background: #3a7afe;
  color: #fff;
}
</style>
