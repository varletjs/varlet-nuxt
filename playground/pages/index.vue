<script setup lang="ts">
definePageMeta({
  layout: false,
})

onMounted(() => {
  Locale.add('en-US', Locale.enUS)
})

const id = useId()
const router = useRouter()

const components = [
  'style-provider',
  'button',
  'fab',
  'breadcrumbs',
  'link',
  'cell',
  'icon',
  'image',
  'avatar',
  'loading',
  'chip',
  'badge',
  'ellipsis',
  'paper',
  'elevation',
  'skeleton',
  'collapse',
  'collapse-transition',
  'space',
  'layout',
  'sticky',
  'progress',
  'list',
  'swipe',
  'steps',
  'image-preview',
  'card',
  'result',
  'divider',
  'table',
  'watermark',
  'tabs',
  'index-bar',
  'app-bar',
  'bottom-navigation',
  'ripple',
  'lazy',
  'hover',
  'drag',
  'snackbar',
  'action-sheet',
  'floating-panel',
  'dialog',
  'pull-refresh',
  'overlay',
  'popup',
  'pagination',
  'menu',
  'menu-select',
  'tooltip',
  'back-top',
  'loading-bar',
  'countdown',
  'picker',
  'date-picker',
  'time-picker',
  'form',
  'input',
  'select',
  'radio',
  'checkbox',
  'counter',
  'switch',
  'slider',
  'rate',
  'uploader',
]

function onNavigationTo(routeName: string) {
  router.push({ path: `/component/${routeName}` })
}
</script>

<template>
  <div>
    <myinput />
    <div :id="id">
      test
    </div>

    <var-icon namespace="i" name="account-circle" />
    <i class="i i-account-circle" />
    <var-icon namespace="i" name="account-circle" />

    <var-input />
    <var-app-bar title="首页" />
    <var-cell v-for="item in components" :key="item" ripple icon="fire" @click="onNavigationTo(item)">
      {{ item }}
      <template #extra>
        <var-icon name="information" />
      </template>
    </var-cell>
  </div>
</template>

<style>
  @import '../assets/virtual.icons.css';
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
