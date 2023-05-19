<script setup>
import { DownloadOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons-vue'

const handleClick = (t) => {
  console.log(t)
}
</script>

<template>
  <ProCard
    :tab-list="[
      { key: 'tab1', tab: '标签一' },
      { key: 'tab2', tab: '标签二' },
    ]"
    :actions="[
      { key: 'tab1', label: '新增', type: 'primary', icon: PlusOutlined, clickCallback: () => handleClick('新增1') },
      { key: 'tab1', label: '导出', type: 'default', icon: DownloadOutlined, clickCallback: () => handleClick('导出1') },
      { key: 'tab1', label: '帮助', type: 'default', icon: QuestionOutlined, clickCallback: () => handleClick('帮助1'), inMoreActions: true },
      { key: 'tab2', label: '新增2', type: 'primary', icon: PlusOutlined, clickCallback: () => handleClick('新增2') },
      { key: 'tab2', label: '导出2', type: 'default', icon: DownloadOutlined, clickCallback: () => handleClick('导出2') },
    ]"
  >
    <template #tab1>
      <strong>content1</strong>
    </template>
    <template #tab2>
      <strong>content2</strong>
    </template>
  </ProCard>
</template>
