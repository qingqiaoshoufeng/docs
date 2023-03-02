<script setup>
import { ref } from 'vue'

const num = ref(12345)
const counter = ref(null)
const start = () => {
  counter.value.start()
}
const reset = () => {
  counter.value.reset()
}
const pause = () => {
  counter.value.pauseResume()
}
const restart = () => {
  counter.value.restart()
}
</script>

<template>
  <div class="demo5">
    <ScaleScreen :fit="true" :fullscreen="false">
      <VirtualNumber ref="counter" class="demo-number" :value="num" count-up />
      <a-button type="primary" style="margin-right: 10px" @click="reset">
        重置
      </a-button>
      <a-button type="primary" style="margin-right: 10px" @click="pause">
        暂停
      </a-button>
      <a-button type="primary" style="margin-right: 10px" @click="start">
        开始
      </a-button>
      <a-button type="primary" @click="restart">
        重启
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
