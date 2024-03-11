<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <var-app-bar class="bar" :title="String(route.name) || ''">
    <template #left>
      <var-button @click="$router.back()" color="transparent" text-color="#fff" round text>
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
  <slot />
</template>

<style>
.bar {
  margin-bottom: 18px;
}
</style>