<script setup>
const hasCustomStyle = ref(false)

function setStyle() {
  if (hasCustomStyle.value) {
    LoadingBar.resetDefaultOptions()
  }
  else {
    LoadingBar.setDefaultOptions({
      errorColor: '#ff8800',
      color: '#10afef',
      height: '5px',
    })
  }

  hasCustomStyle.value = !hasCustomStyle.value
}

// 移动端案例设置了偏移
// LoadingBar.setDefaultOptions({
//   top: '54px'
// })
</script>

<template>
  <var-space direction="column" size="large">
    <var-button type="primary" block @click="LoadingBar.start()">
      开始
    </var-button>
    <var-button type="primary" block @click="LoadingBar.finish()">
      结束
    </var-button>
    <var-button type="primary" block @click="LoadingBar.error()">
      错误
    </var-button>
    <var-button type="primary" block @click="setStyle">
      {{ hasCustomStyle ? '清除样式' : '设置样式' }}
    </var-button>
  </var-space>
</template>
