<script setup>
import { ref } from 'vue'
import CommonModal from '../index'
import ScaleScreen from '@/lib/ScaleScreen/index'

const showWidthHeight = ref(false)
</script>

<template>
  <div class="modal-demo0">
    <ScaleScreen :width="1366" :height="768" :fit="false" :lock="true">
      <div class="content">
        <h2>自定义 width、height</h2>
        <a-button @click="() => showWidthHeight = true">
          显示弹窗
        </a-button>
        <CommonModal v-model:visible="showWidthHeight" width="52%" height="58%">
          <template #default>
            这是一个弹窗
          </template>
          <template #header>
            <div class="header">
              这是 header slot
            </div>
          </template>
        </CommonModal>
      </div>
    </ScaleScreen>
  </div>
</template>

<style lang="less" scoped>
.modal-demo0 {
  width: 100%;
  height: calc(100vh - 100px);
  .content {
    width: 100%;
    position: relative;
    h2 {
      color: white;
    }
    .header {
      width: 100%;
      height: 36px;
      line-height: 36px;
      color: white;
      text-align: center;
    }
  }
}
</style>
