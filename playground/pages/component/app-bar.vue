<script setup>
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <var-app-bar
    round image="https://varlet.gitee.io/varlet-ui/tree.jpeg"
    image-linear-gradient="to right top, rgba(29, 68, 147, 0.5) 0%, rgba(74, 198, 170, 0.9) 100%"
  >
    标题
    <template #left>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="menu" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="map-marker-radius" :size="24" />
      </var-button>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="star" :size="24" />
      </var-button>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="heart" :size="24" />
      </var-button>
    </template>

    <template #content>
      <var-tabs
        v-model:active="active" style="margin-top: 100px" color="transparent" active-color="#fff"
        inactive-color="#ddd"
      >
        <var-tab>选项卡</var-tab>
        <var-tab>选项卡</var-tab>
        <var-tab>选项卡</var-tab>
      </var-tabs>
    </template>
  </var-app-bar>
</template>
