<script setup>
</script>

<template>
  <div class="demo1">
    <ScaleScreen :fit="true" :fullscreen="false">
      <VirtualDate
        class="demo-date"
        :value="new Date()"
        format="YYYY-MM-DD"
      />
      <VirtualDate
        class="demo-date"
        :value="new Date()"
        format="YYYY年MM月DD日 HH时mm分ss秒"
      />
    </ScaleScreen>
  </div>
</template>

<style lang="less" scoped>
.demo1 {
  width: 100%;
  height: 60px;
  .demo-date {
    font-size: 36px;
    color: white;
    margin-right: 40px;
  }
}
</style>
