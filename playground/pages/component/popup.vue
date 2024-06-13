<script setup>
import { ref } from 'vue'

const center = ref(false)
const top = ref(false)
const bottom = ref(false)
const left = ref(false)
const right = ref(false)
</script>

<template>
  <var-space direction="column" :size="[10, 0]">
    <var-button type="primary" block @click="center = true">
      居中弹出
    </var-button>
    <var-button type="primary" block @click="bottom = true">
      下方弹出
    </var-button>
    <var-button type="primary" block @click="top = true">
      上方弹出
    </var-button>
    <var-button type="primary" block @click="left = true">
      左侧弹出
    </var-button>
    <var-button type="primary" block @click="right = true">
      右侧弹出
    </var-button>
  </var-space>

  <var-popup v-model:show="center">
    <div class="popup-example-block">
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    </div>
  </var-popup>

  <var-popup v-model:show="bottom" position="bottom">
    <div class="popup-example-block">
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    </div>
  </var-popup>

  <var-popup v-model:show="top" position="top">
    <div class="popup-example-block">
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    </div>
  </var-popup>

  <var-popup v-model:show="left" position="left">
    <div class="popup-example-block">
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    </div>
  </var-popup>

  <var-popup v-model:show="right" position="right">
    <div class="popup-example-block">
      素胚勾勒出青花笔锋浓转淡,
      瓶身描绘的牡丹一如你初妆,
      冉冉檀香透过窗心事我了然,
      宣纸上走笔至此搁一半。
    </div>
  </var-popup>
</template>

<style>
.popup-example-block {
  padding: 24px;
  width: 280px;
}
</style>
