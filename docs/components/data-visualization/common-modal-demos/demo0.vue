<script setup>
import { ref } from 'vue'
import CommonModal from '../index'

const showModal = ref(false)
</script>

<template>
  <div class="modal-demo0">
    <ScaleScreen :width="1366" :height="768" :fit="false" :lock="true">
      <div class="content">
        <h2>基本用法</h2>
        <a-button @click="() => showModal = true">
          显示弹窗
        </a-button>
        <CommonModal v-model:visible="showModal" title="这是弹窗标题" :mask-closable="true">
          <template #default>
            这是一个弹窗
          </template>
          <template #footer>
            <a-button>取消</a-button>
            <a-button>确定</a-button>
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
  }
}
</style>
