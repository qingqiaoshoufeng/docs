<script setup>
</script>

<template>
  <div class="demo3">
    <ScaleScreen :fit="true" :fullscreen="false">
      <VirtualNumber class="demo-number" :value="12345" prefix="￥" suffix="元" trend="up" />
      <VirtualNumber class="demo-number" :value="12345" prefix="$" suffix="USD" trend="down" />
      <VirtualNumber class="demo-number" :value="12345" prefix="存量" suffix="吨" trend="-" />
    </ScaleScreen>
  </div>
</template>

<style lang="less" scoped>
.demo3 {
  width: 100%;
  height: 60px;
  .demo-number {
    font-size: 36px;
    color: white;
    margin-right: 40px;
  }
}
</style>
