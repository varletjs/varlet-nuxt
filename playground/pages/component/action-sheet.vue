<script setup>
async function createBasic() {
  const action = await ActionSheet({
    actions: [
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
      },
    ],
  })

  action !== 'close' && Snackbar(`您选择的是:${action.name}`)
}
</script>

<template>
  <var-button type="primary" block @click="createBasic">
    基本使用
  </var-button>
</template>
