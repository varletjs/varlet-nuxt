<script setup>
import { ref } from 'vue'

const list = ref(gen(1, 10))

function gen(current, size) {
  return Array.from({ length: size }).map((_, index) => {
    const id = (current - 1) * size + index + 1

    return {
      name: `Name ${id}`,
      math: id,
      english: id,
    }
  })
}

function get(current, size) {
  list.value = gen(current, size)
}
</script>

<template>
  <var-table>
    <thead>
      <tr>
        <th>姓名</th>
        <th>数学</th>
        <th>英语</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="l in list" :key="l.name">
        <td>{{ l.name }}</td>
        <td>{{ l.math }}</td>
        <td>{{ l.english }}</td>
      </tr>
    </tbody>

    <template #footer>
      <div class="table-example-footer">
        <!-- 手机预览模式下分页使用了simple为true的模式，对小屏设备更友好 -->
        <var-pagination :simple="true" :current="1" :total="100" :size-option="[5, 10]" @change="get" />
      </div>
    </template>
  </var-table>
</template>

<style>
.table-example-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  padding: 0 16px;
}
</style>
