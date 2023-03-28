<script setup lang="ts">
</script>

<template>
  <div>
    <var-button>qfqw</var-button>
    <var-skeleton :loading="true">
      加载的数据
    </var-skeleton>
    <var-space>
      <var-button>Button1</var-button>
      <var-button>Button2</var-button>
      <var-button>Button3</var-button>
    </var-space>
    <var-progress :value="20" :track="false" />
    <var-card
      title="本草纲目"
      description="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
    />
    <var-result type="success" title="Success" description="Hi, I'm a result description.">
      <template #footer>
        <var-button type="success">
          OK
        </var-button>
      </template>
    </var-result>
  </div>
</template>

<style>
</style>
