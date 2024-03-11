<template>
  <div class="ripple-example-block var-elevation--2" v-ripple>点击</div>
</template>

<style>
.ripple-example-block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background-color 0.25s;
  background-color: var(--color-surface-container-highest);
}
</style>