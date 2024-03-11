<template>
  <var-space>
    <var-badge />
    <var-badge type="primary" />
    <var-badge type="info" />
    <var-badge type="success" />
    <var-badge type="warning" />
    <var-badge type="danger" />
  </var-space>
  <h2>不同定位徽标</h2>
  <var-space :size="[8, 20]">
    <var-badge type="danger">
      <var-chip>右上</var-chip>
    </var-badge>
    <var-badge type="danger" position="right-bottom">
      <var-chip>右下</var-chip>
    </var-badge>
    <var-badge type="danger" position="left-top">
      <var-chip>左上</var-chip>
    </var-badge>
    <var-badge type="danger" position="left-bottom">
      <var-chip>左下</var-chip>
    </var-badge>
  </var-space>
</template>