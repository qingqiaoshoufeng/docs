<script setup>
</script>

<template>
  <div class="demo3">
    <ScaleScreen :fit="true" :fullscreen="false">
      <VirtualDate
        class="demo-date"
        :value="new Date()"
        type="primary"
      />
      <VirtualDate
        class="demo-date"
        :value="new Date()"
        type="success"
      />
      <VirtualDate
        class="demo-date"
        :value="new Date()"
        type="warning"
      />
      <VirtualDate
        class="demo-date"
        :value="new Date()"
        type="danger"
      />
      <VirtualDate
        class="demo-date"
        :value="new Date()"
        type="info"
      />
      <VirtualDate
        class="demo-date"
        :value="new Date()"
        type="info"
        :digital-number="false"
      />
    </ScaleScreen>
  </div>
</template>

<style lang="less" scoped>
.demo3 {
  width: 100%;
  height: 120px;
  .demo-date {
    font-size: 36px;
    margin-right: 40px;
  }
}
</style>
