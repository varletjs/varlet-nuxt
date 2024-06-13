<script setup>
import { ref } from 'vue'

const value = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()
const value5 = ref()
const value6 = ref()
const value7 = ref()
const value8 = ref()
const value9 = ref([])
const value10 = ref([])
const value11 = ref()
const value12 = ref([])
const value13 = ref()
</script>

<template>
  <var-space direction="column" size="large">
    <var-select v-model="value" placeholder="请选择一个选项">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="value2" placeholder="文本关联值">
      <var-option label="吃饭" :value="1" />
      <var-option label="睡觉" :value="2" />
    </var-select>
    <div class="relation">
      当前选择的是: {{ value2 }}
    </div>
    <var-select v-model="value3" placeholder="只读" readonly>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="value4" placeholder="禁用" disabled>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="value5" placeholder="可清除" clearable>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
    <var-select v-model="value6" placeholder="使用插槽自定义清除图标" clearable>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <template #clear-icon="{ clear }">
        <var-icon class="clear-icon" name="github" @click="clear" />
      </template>
    </var-select>

    <var-select v-model="value7" placeholder="自定义图标">
      <template #default>
        <var-option label="吃饭">
          <var-icon class="selected-icon" name="cake-variant" />
          <span>吃饭</span>
        </var-option>
        <var-option label="睡觉">
          <var-icon class="selected-icon" name="weather-night" />
          <span>睡觉</span>
        </var-option>
      </template>
      <template #selected>
        <var-icon class="selected-icon" :name="value7 === '吃饭' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value7 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>

    <var-select v-model="value8" placeholder="自定义图标尺寸">
      <template #default>
        <var-option label="吃饭">
          <var-icon class="selected-icon" name="cake-variant" />
          <span>吃饭</span>
        </var-option>
        <var-option label="睡觉">
          <var-icon class="selected-icon" name="weather-night" />
          <span>睡觉</span>
        </var-option>
      </template>
      <template #selected>
        <var-icon class="selected-icon" :size="28" :name="value8 === '吃饭' ? 'cake-variant' : 'weather-night'" />
        <span>{{ value8 }}</span>
      </template>
      <template #prepend-icon>
        <var-icon class="prepend-icon" name="github" :size="28" />
      </template>
      <template #append-icon>
        <var-icon class="append-icon" name="github" :size="42" />
      </template>
      <template #arrow-icon="{ focus }">
        <var-icon name="chevron-down" :transition="300" :class="{ 'arrow-icon-rotate': focus }" />
      </template>
    </var-select>

    <var-select v-model="value9" placeholder="多选" multiple>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select v-model="value10" placeholder="纸片风格的多选" chip multiple>
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select v-model="value11" placeholder="单选值校验" :rules="[(v) => v === '摸鱼' || '您一定得选择摸鱼']">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="摸鱼" />
    </var-select>
    <var-select v-model="value12" multiple placeholder="多选值校验" :rules="[(v) => v.length >= 2 || '您至少选择两个选项']">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
      <var-option label="打游戏" />
      <var-option label="写代码" />
    </var-select>
    <var-select v-model="value13" placeholder="小尺寸">
      <var-option label="吃饭" />
      <var-option label="睡觉" />
    </var-select>
  </var-space>
</template>

<style>
.selected-icon {
  margin-right: 6px;
}

.prepend-icon {
  margin-right: 6px;
}

.append-icon {
  margin-left: 6px;
}

.arrow-icon-rotate {
  transform: rotate(180deg);
}
</style>
