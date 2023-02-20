<script setup>
</script>

<template>
  <div class="demo2">
    <ScaleScreen :fit="true" :fullscreen="false">
      <VirtualDate
        class="demo-date"
        :value="new Date()"
        relative
      />
      <VirtualDate
        class="demo-date"
        :value="new Date('2022-01-03')"
        relative
      />
    </ScaleScreen>
  </div>
</template>

<style lang="less" scoped>
.demo2 {
  width: 100%;
  height: 60px;
  .demo-date {
    font-size: 36px;
    color: white;
    margin-right: 40px;
  }
}
</style>
