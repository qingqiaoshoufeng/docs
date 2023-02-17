<script setup>
</script>

<template>
  <div class="demo0">
    <ScaleScreen :fit="true" :fullscreen="false">
      <VirtualNumber class="demo-number" :value="12345" />
    </ScaleScreen>
  </div>
</template>

<style lang="less" scoped>
.demo0 {
  width: 100%;
  height: 60px;
  .demo-number {
    font-size: 36px;
    color: white;
    margin-right: 40px;
  }
}
</style>
