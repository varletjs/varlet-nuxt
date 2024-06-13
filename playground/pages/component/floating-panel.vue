<template>
  <var-floating-panel>
    <var-cell v-for="i in 26" :key="i" :title="String.fromCharCode(i + 64)" border />
  </var-floating-panel>
</template>
