<template>
  <img v-lazy="'https://varlet.gitee.io/varlet-ui/cat.jpg'" class="lazy-example-cat">
</template>

<style>
.lazy-example-cat {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-size: cover;
  pointer-events: none;
}
</style>
