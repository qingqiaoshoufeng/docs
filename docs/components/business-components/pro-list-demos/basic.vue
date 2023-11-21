<script setup>
import { ref } from 'vue';
import { FilterOutlined } from '@ant-design/icons-vue'

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

const getList = (querys) => {
  // 在请求之前，你可以在这里灵活的处理请求参数 querys
  // ...

  // 模拟接口请求
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        page: 1,
        limit: 10,
        total: 40,
        list: Array.from(Array(10).keys()).map(i => ({
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

const filter = () => {
  console.log('filter')
}

const reset = () => {
  console.log('reset')
}

const pageChange = () => {
  console.log('pageChange')
}

const expand = ref(false)
</script>

<template>
  <ProList
    ref="proList"
    :get-list-fn="getList"
    :columns="columns"
    layout="vertical"
    :default-filter-value="{ zone: 'zhejiang' }"
    @filter="filter"
    @reset="reset"
    @page-change="pageChange"
  >
    <template #subTitle>
      <strong>总计： 1200</strong>
    </template>
    <template #filters="{ filterFormState, handleFilter }">
      <a-row :gutter="16">
        <a-col :span="4">
          <a-form-item label="时间" name="time">
            <a-range-picker
              v-model:value="filterFormState.time"
              :show-time="{ format: 'HH:mm' }"
              format="YYYY-MM-DD HH:mm"
              style="width: 100%"
              @change="handleFilter()"
            />
          </a-form-item>
        </a-col>

        <a-col :span="4">
          <a-form-item label="省份" name="zone">
            <a-cascader
              v-model:value="filterFormState.zone"
              :options="[
                {
                  value: 'zhejiang',
                  label: '浙江',
                },
              ]"
              expand-trigger="hover"
              placeholder="选择行政区域"
              @change="handleFilter()"
            />
          </a-form-item>
        </a-col>

        <a-col :span="4">
          <a-form-item label="119编号" name="code">
            <a-input v-model:value="filterFormState.code" placeholder="请输入" @blur="handleFilter()" />
          </a-form-item>
        </a-col>

        <a-col v-if="expand" :span="4">
          <a-form-item label="户主信息" name="user">
            <a-input v-model:value="filterFormState.user" placeholder="请输入" @blur="handleFilter()" />
          </a-form-item>
        </a-col>

        <a-col :span="2">
          <a-form-item label=" ">
            <a-button type="link" @click="expand = !expand">
              <FilterOutlined v-if="!expand" />{{ expand ? '收起' : '更多筛选' }}
            </a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </template>

    <template #bodyCell="{ column, index }">
      <template v-if="column.dataIndex === 'state'">
        <span class="alarm-state-wait">状态</span>
      </template>
      <template v-if="column.dataIndex === 'action'">
        <a-space>
          <a type="link"> 填报 </a>
          <a type="link"> 挂起 </a>
          <a type="link"> 查看 </a>
        </a-space>
      </template>
    </template>
  </ProList>
</template>
