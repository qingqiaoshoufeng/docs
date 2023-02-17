<script setup>
</script>

<template>
  <div class="demo1">
    <ScaleScreen :fit="true" :fullscreen="false">
      <VirtualNumber class="demo-number" :value="0.9527" :precision="2" />
      <VirtualNumber class="demo-number" :value="0.9527" :precision="2" :percentage="true" />
    </ScaleScreen>
  </div>
</template>

<style lang="less" scoped>
.demo1 {
  width: 100%;
  height: 60px;
  .demo-number {
    font-size: 36px;
    color: white;
    margin-right: 40px;
  }
}
</style>
