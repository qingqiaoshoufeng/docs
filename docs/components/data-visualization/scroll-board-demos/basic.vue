<script setup>
import { ref } from 'vue'
const dataSource = [...Array(10)].map((i, index) => ({
  index: index + 1,
  num: '20221027074621094029',
  type: '火灾扑救',
  time: '2022-12-06 23:01',
  state: '待处理',
  area: '浙江省杭州市余杭区仁和街道',
  address: '云会村东山后33号',
  dept: '仙塘西街6号',
}))

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    align: 'center',
    width: 80
  },
  {
    title: '119案件编号',
    dataIndex: 'num',
    key: 'num',
  },
  {
    title: '警情类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '接警时间',
    key: 'time',
    dataIndex: 'time',
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
  },
  {
    title: '行政区域',
    key: 'area',
    dataIndex: 'area',
  },
  {
    title: '警情地址',
    key: 'address',
    dataIndex: 'address',
  },
  {
    title: '单位/户主信息',
    key: 'dept',
    dataIndex: 'dept',
  },
]

const checked = ref('item')
</script>

<template>
  <div>
    <a-radio-group v-model:value="checked">
        <a-radio-button value="item">行滚动</a-radio-button>
        <a-radio-button value="page">页滚动</a-radio-button>
      </a-radio-group>

    <a-divider></a-divider>

    <ScrollBoard
      class="ant-table-striped"
      :columns="columns"
      :data-source="dataSource"
      :show-list-num="5"
      :scrollStep="checked"
      :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped-even' : 'table-striped-odd')"
    >
    </ScrollBoard>
  </div>
</template>

<style lang="less" scoped>
.ant-table-striped {
  :deep(.ant-table) {
    background-color: #003185;;
  }
  :deep(.ant-table-thead) th {
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    border-color: rgba(0, 0, 0, 0);
  }
  :deep(.table-striped-even) td {
    background-color: rgba(0, 0, 0, .4);
    color: #fff;
    border-color: rgba(0, 0, 0, 0);
  }
  :deep(.table-striped-odd) td {
    background-color: rgba(0, 0, 0, .2);
    color: #fff;
    border-color: rgba(0, 0, 0, 0);
  }
  :deep(tr:hover) td {
    background-color: rgba(0, 0, 0, 0);
  }
}

:deep(table) {
  margin: 0;
  display: table;
}
:deep(tr:nth-child(2n)) {
  background: none;
}
</style>
