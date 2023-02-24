<script setup>
import { ref } from 'vue'

const showWidthHeight = ref(false)
</script>

<template>
  <div class="modal-demo0">
    <ScaleScreen :width="1366" :height="768" :fit="false" :lock="true">
      <div class="content">
        <h3>自定义 width、height</h3>
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
    h3 {
      color: white !important;
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
