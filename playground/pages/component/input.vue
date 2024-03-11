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
    <var-input placeholder="请输入文本" v-model="value" />
    <var-input placeholder="只读" readonly v-model="value2" />
    <var-input placeholder="禁用" disabled v-model="value3" />
    <var-input placeholder="可清除" clearable v-model="value4" />
    <var-input clearable placeholder="使用插槽自定义清除图标" v-model="value5">
      <template #clear-icon="{ clear }">
        <var-icon name="error" @click="clear" />
      </template>
    </var-input>
    <var-input placeholder="字段校验" :rules="[(v) => v.length > 6 || '文本长度必须大于6']" v-model="value6" />
    <var-input placeholder="显示图标" v-model="value7">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
    </var-input>
    <var-input placeholder="自定义图标尺寸" v-model="value8">
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
    </var-input>
    <var-input placeholder="最大长度" :maxlength="10" v-model="value9" />
    <var-input placeholder="文本域" textarea v-model="value10" />
    <var-input placeholder="小尺寸" size="small" v-model="value11" />
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