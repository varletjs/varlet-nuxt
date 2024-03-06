<script setup lang="ts">
import { Themes } from '@varlet/ui'

const show = ref(false)
const active = ref(0)

function showSnackBar() {
  Snackbar({
    content: '这是一个消息条!!',
    duration: 1000,
  })
}
</script>

<template>
  <div>
    <var-app-bar title="标题" />
    <VarButton>wefwef</VarButton>
    <nuxt-link to="/demo">
      link to demo qwef
    </nuxt-link>

    <var-button text round>
      <var-icon text-6 name="palette" />
    </var-button>

    <var-button block @click="() => StyleProvider(Themes.md3Light)">
      Material Design 3 暗色
    </var-button>
    <var-button type="primary" block @click="show = !show">
      66666666
    </var-button>
    <var-button @click="showSnackBar">
      wudi
    </var-button>
    <client-only>
      <var-snackbar v-model:show="show">
        这是一个消息条！！
      </var-snackbar>
    </client-only>
    <div v-ripple class="ripple-example-block">
      点击
    </div>
    <var-skeleton :loading="show">
      加载的数据
    </var-skeleton>
    <var-bottom-navigation v-model:active="active">
      <var-bottom-navigation-item label="标签" icon="home" />
      <var-bottom-navigation-item label="标签" icon="magnify" />
      <var-bottom-navigation-item label="标签" icon="heart" />
      <var-bottom-navigation-item label="标签" icon="account-circle" />
    </var-bottom-navigation>
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
