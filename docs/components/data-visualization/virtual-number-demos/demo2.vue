<script setup>
</script>

<template>
  <div class="demo2">
    <ScaleScreen :fit="true" :fullscreen="false">
      <VirtualNumber class="demo-number" :value="12345" type="primary" />
      <VirtualNumber class="demo-number" :value="12345" type="success" />
      <VirtualNumber class="demo-number" :value="12345" type="warning" />
      <VirtualNumber class="demo-number" :value="12345" type="danger" />
      <VirtualNumber class="demo-number" :value="12345" type="info" />
    </ScaleScreen>
  </div>
</template>

<style lang="less" scoped>
.demo2 {
  width: 100%;
  height: 60px;
  .demo-number {
    font-size: 36px;
    margin-right: 40px;
  }
}
</style>
