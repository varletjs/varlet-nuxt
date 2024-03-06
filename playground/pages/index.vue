<script setup lang="ts">
definePageMeta({
  layout: false
})

const router = useRouter()

const components = [
  "style-provider",
  "button",
  "fab",
  "breadcrumbs",
  "link",
  "cell",
  "icon",
  "image",
  "avatar",
  "loading",
  "chip",
  "badge",
  "ellipsis",
  "paper",
  "styles",
  "skeleton",
  "collapse",
  "collapse-transition",
  "space",
  "row",
  "sticky",
  "progress",
  "list",
  "swipe",
  "steps",
  "image-preview",
  "card",
  "result",
  "divider",
  "table",
  "watermark",
  "tabs",
  "index-bar",
  "app-bar",
  "bottom-navigation",
  "ripple",
  "lazy",
  "hover",
  "drag",
  "snackbar",
  "action-sheet",
  "floating-panel",
  "dialog",
  "pull-refresh",
  "overlay",
  "popup",
  "pagination",
  "menu",
  "menu-select",
  "tooltip",
  "back-top",
  "loading-bar",
  "countdown",
  "picker",
  "date-picker",
  "time-picker",
  "form",
  "input",
  "select",
  "radio-group",
  "checkbox-group",
  "counter",
  "switch",
  "slider",
  "rate",
  "uploader"
]

function onNavigationTo(routeName: string) {
  router.push({ path: `/component/${routeName}` })
}
</script>

<template>
  <var-app-bar title="首页" />
  <var-cell v-for="item in components" :key="item" ripple icon="fire" @click="onNavigationTo(item)">
    {{ item }}
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>
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
