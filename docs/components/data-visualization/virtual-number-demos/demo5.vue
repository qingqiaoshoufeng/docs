<script setup>
import { ref } from 'vue'

const num = ref(12345)
const onClick = () => {
  num.value = Math.random() * 10000
}
</script>

<template>
  <div class="demo5">
    <ScaleScreen :fit="true" :fullscreen="false">
      <VirtualNumber class="demo-number" :value="num" count-up />
      <a-button type="primary" @click="onClick">
        计数
      </a-button>
    </ScaleScreen>
  </div>
</template>

<style lang="less" scoped>
.demo5 {
  width: 100%;
  height: 60px;
  .demo-number {
    font-size: 36px;
    color: white;
    margin-right: 40px;
  }
}
</style>
