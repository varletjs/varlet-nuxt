<script setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  username: '',
  password: '',
  department: '',
  gender: undefined,
  license: false,
  range: 10,
  count: 0,
  group: [],
  score: 0,
  like: [],
  files: []
})
const form = ref(null)
const disabled = ref(false)
const readonly = ref(false)
</script>

<template>
  <var-form ref="form" :disabled="disabled" :readonly="readonly" scroll-to-error="start">
    <var-space direction="column" :size="[14, 0]">
      <var-input placeholder="请输入用户名" :rules="[v => !!v || '用户名不能为空']" v-model="formData.username" />
      <var-input type="password" placeholder="请输入密码" :rules="[v => !!v || '密码不能为空']" v-model="formData.password" />
      <var-select placeholder="请选择部门" :rules="[v => !!v || '必须选一个部门']" v-model="formData.department">
        <var-option label="吃饭部" />
        <var-option label="睡觉部" />
        <var-option label="打游戏部" />
      </var-select>
      <var-select multiple placeholder="请选择组织" :rules="[v => v.length >= 1 || '至少选择一个组织']" v-model="formData.group">
        <var-option label="吃饭组" />
        <var-option label="睡觉组" />
        <var-option label="打游戏组" />
      </var-select>
      <var-radio-group :rules="[v => !!v || '必须选择一个性别']" v-model="formData.gender">
        <var-radio :checked-value="1">男</var-radio>
        <var-radio :checked-value="2">女</var-radio>
      </var-radio-group>
      <var-checkbox-group :rules="[v => v.length > 0 || '至少选择一个爱好']" v-model="formData.like">
        <var-checkbox :checked-value="1">吃饭</var-checkbox>
        <var-checkbox :checked-value="2">睡觉</var-checkbox>
        <var-checkbox :checked-value="3">打游戏</var-checkbox>
      </var-checkbox-group>
      <var-rate :rules="[v => v >= 3 || '必须大于2']" v-model="formData.score" />
      <var-switch :rules="[v => !!v || '您必须开启']" v-model="formData.license" />
      <var-counter :rules="[v => v > 10 || '必须大于10']" v-model="formData.count" />
      <var-slider :rules="[v => v > 10 || '必须大于10']" v-model="formData.range" />
      <var-uploader :rules="[v => v.length >= 1 || '至少上传一张图片']" v-model="formData.files" />

      <var-space direction="column" :size="[14, 0]">
        <var-button block type="danger" @click="form.reset()">
          清空表单
        </var-button>
        <var-button block type="warning" @click="form.resetValidation()">
          清空验证
        </var-button>
        <var-button block type="success" @click="form.validate()">
          触发验证
        </var-button>
        <var-button block type="info" @click="disabled = !disabled">
          表单禁用
        </var-button>
        <var-button block type="primary" @click="readonly = !readonly">
          表单只读
        </var-button>
      </var-space>
    </var-space>
  </var-form>
</template>