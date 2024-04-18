<script setup>
import { ref } from 'vue'

const value = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const value9 = ref('')
const value10 = ref('')
const value11 = ref('')
</script>

<template>
  <var-space direction="column" size="large">
    <var-input v-model="value" placeholder="请输入文本" />
    <var-input v-model="value2" placeholder="只读" readonly />
    <var-input v-model="value3" placeholder="禁用" disabled />
    <var-input v-model="value4" placeholder="可清除" clearable />
    <var-input v-model="value5" clearable placeholder="使用插槽自定义清除图标">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input v-model="value6" placeholder="字段校验" :rules="[(v) => v.length > 6 || '文本长度必须大于6']" />
    <var-input v-model="value7" placeholder="显示图标">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input v-model="value8" placeholder="自定义图标尺寸">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
    </var-input>
    <var-input v-model="value9" placeholder="最大长度" :maxlength="10" />
    <var-input v-model="value10" placeholder="文本域" textarea />
    <var-input v-model="value11" placeholder="小尺寸" size="small" />
  </var-space>
</template>

<style>
.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}
</style>
