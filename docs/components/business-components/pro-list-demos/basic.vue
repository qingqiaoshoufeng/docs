<script setup>
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons-vue'

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    align: 'left',
    customRender: (column) => {
      return (
        column.index + 1
      )
    },
  },
  {
    title: '119案件编号',
    dataIndex: 'num',
    key: 'num',
    align: 'left',
  },
  {
    title: '警情类型',
    dataIndex: 'type',
    key: 'type',
    align: 'left',
  },
  {
    title: '接警时间',
    key: 'time',
    dataIndex: 'time',
    align: 'left',
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
    align: 'left',
  },
  {
    title: '警情地址',
    key: 'address',
    dataIndex: 'address',
    align: 'left',
  },
  {
    title: '单位/户主信息',
    key: 'dept',
    dataIndex: 'dept',
    align: 'left',
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    align: 'left',
  },
]

const getList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        page: 1,
        limit: 10,
        total: 40,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({
          num: '20221027074621094029',
          type: '火灾扑救',
          time: '2022-12-06 23:01',
          state: '待处理',
          area: '浙江省杭州市余杭区仁和街道',
          address: '云会村东山后33号',
          dept: '仙塘西街6号',
        })),
      })
    }, 1500)
  })
}
</script>

<template>
  <ProList :get-list-fn="getList" :columns="columns" layout="inline">
    <template #filters="{ filterFormState }">
      <a-form-item>
        <a-range-picker
          v-model:value="filterFormState.time"
          :show-time="{ format: 'HH:mm' }"
          format="YYYY-MM-DD HH:mm"
        />
      </a-form-item>

      <a-form-item>
        <a-cascader
          v-model:value="filterFormState.zone"
          :options="[{
            value: 'zhejiang',
            label: '浙江',
          }]"
          expand-trigger="hover"
          placeholder="选择行政区域"
        />
      </a-form-item>

      <a-form-item>
        <a-input
          v-model:value="filterFormState.code"
          placeholder="119编号"
        />
      </a-form-item>
    </template>

    <template #bodyCell="{ column }">
      <template v-if="column.dataIndex === 'state'">
        <span class="alarm-state-wait">状态</span>
      </template>
      <template v-if="column.dataIndex === 'action'">
        <a-space>
          <a type="link">
            查看
          </a>
        </a-space>
      </template>
    </template>

    <template #right-actions>
      <a-button
        type="primary"
      >
        <PlusOutlined />
        新增
      </a-button>
      <a-button>
        <DownloadOutlined />
        导出
      </a-button>
    </template>
  </ProList>
</template>
