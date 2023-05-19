<script setup>
import { ref } from 'vue'

const visible = ref(false)
const status = ref(false)

const handleResult = (info) => {
  console.log(info)
  return status.value
    ? {
        total: 10,
        success: 10,
        error: 0,
        status: true,
      }
    : {
        total: 10,
        success: 5,
        error: 5,
        status: false,
        errorData: info.errorData, // 返回接口返回的错误数据
      }
}

const handleDownloadErrorResult = (info) => {
  console.log(info)
  // 通过info.errorData为参数调用下载错误数据的接口，得到对应的错误数据文件
}
</script>

<template>
  <a-button type="" @click="visible = true, status = true">
    导入（成功）
  </a-button>
  
  <a-button style="margin-left: 16px" type="" @click="visible = true, status = false">
    导入（失败）
  </a-button>
  <ProDataImport
    v-model:visible="visible"
    title="导入"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :handle-result="handleResult"
    :handle-download-error-result="handleDownloadErrorResult"
    :accepts="['excel']"
  />
</template>
