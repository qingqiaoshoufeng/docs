<script setup>
import { ref } from 'vue'

const showMaskStyle = ref(false)

const showModalStyle = ref(false)

const showBodyStyle = ref(false)

const showCloseStyle = ref(false)
</script>

<template>
  <div class="modal-demo0">
    <ScaleScreen :width="1366" :height="768" :fit="false" :lock="true">
      <div class="content">
        <h3>自定义 maskStyle</h3>
        <a-button @click="() => showMaskStyle = true">
          显示弹窗
        </a-button>
        <CommonModal v-model:visible="showMaskStyle" title="这是弹窗标题" :mask-style="{ 'background-color': '#000000a0' }">
          <template #default>
            这是一个弹窗
          </template>
        </CommonModal>
        <h3>自定义 modalStyle</h3>
        <a-button @click="() => showModalStyle = true">
          显示弹窗
        </a-button>
        <CommonModal v-model:visible="showModalStyle" title="这是弹窗标题" :modal-style="{ 'background-color': 'gray' }">
          <template #default>
            这是一个弹窗
          </template>
        </CommonModal>
        <h3>自定义 bodyStyle</h3>
        <a-button @click="() => showBodyStyle = true">
          显示弹窗
        </a-button>
        <CommonModal v-model:visible="showBodyStyle" title="这是弹窗标题" :body-style="{ 'padding-top': '50px' }">
          <template #default>
            这是一个弹窗
          </template>
        </CommonModal>
        <h3>自定义 closeStyle</h3>
        <a-button @click="() => showCloseStyle = true">
          显示弹窗
        </a-button>
        <CommonModal v-model:visible="showCloseStyle" title="这是弹窗标题" :close-style="{ 'padding-top': '50px' }">
          <template #default>
            这是一个弹窗
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
      margin-top: 10px;
    }
  }
}
</style>
