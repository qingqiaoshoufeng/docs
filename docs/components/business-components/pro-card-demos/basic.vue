<script setup>
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons-vue'

const handleClick = (t) => {
  console.log(t)
}
</script>

<template>
  <ProCard
    title="基本用法"
    :actions="[
      {
        label: '新增',
        type: 'primary',
        icon: PlusOutlined,
        clickCallback: () => handleClick('新增1'),
      },
      {
        label: '导出',
        type: 'default',
        icon: DownloadOutlined,
        clickCallback: () => handleClick('导出1'),
      },
    ]"
  >
    <strong>content</strong>
  </ProCard>
</template>
