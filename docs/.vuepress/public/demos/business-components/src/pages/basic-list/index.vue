<route lang="json">
{
  "meta": {
    "title": "列表页",
    "icon": "FileDoneOutlined",
    "requiresAuth": false,
    "sort": 2
  }
}
</route>

<script setup>
import { computed, ref } from 'vue'
import { DownloadOutlined, FilterOutlined, MoreOutlined, PlusOutlined, QuestionOutlined, CloudUploadOutlined } from '@ant-design/icons-vue'
import FormDemo from './_form.vue'
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    align: 'left',
    customRender: (column) => {
      return column.index + 1
    },
    width: 100,
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
    sorter: true,
  },
  {
    title: '行政区域',
    key: 'area',
    dataIndex: 'area',
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
    width: 200,
  },
]

const getList = (query) => {
  // eslint-disable-next-line no-console
  console.log(query)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        page: 1,
        limit: 10,
        total: 40,
        list: [...Array(10)].map(i => ({
          num: '20221027074621094029',
          type: '火灾扑救',
          time: '2022-12-06 23:01',
          state: '待处理',
          area: '浙江省杭州市余杭区仁和街道',
          address: '云会村东山后33号',
          dept: '仙塘西街6号',
        })),
      })
    }, 1000)
  })
}

const filter = () => {
  // eslint-disable-next-line no-console
  console.log('filter')
}

const reset = () => {
  // eslint-disable-next-line no-console
  console.log('reset')
}

const pageChang = () => {
  // eslint-disable-next-line no-console
  console.log('pageChang')
}

const change = (...e) => {
  // eslint-disable-next-line no-console
  console.log(e)
}

const proList = ref()

const expand = ref(false)

const handleClick = (e) => {
  // eslint-disable-next-line no-console
  console.log(e)
}

const modalVisible = ref(false)

const modalType = ref('a-modal')

const handleOK = (t) => {
  return new Promise((resolve) => {
    if (t === 'cancel') {
      resolve('')
    }
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log(t)
      resolve('')
    }, 2000)
  })
}

const inCard = ref(false)
const cardWrapId = computed(() => {
  return inCard.value ? 'card-wrap' : undefined
})

const importVisible = ref(false)
const status = ref(false)
const handleResult = (info) => {
  // eslint-disable-next-line no-console
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
      }
}

const handleDownloadErrorResult = (info) => {
  // eslint-disable-next-line no-console
  console.log(info)
}

const isAdd = ref(false)

const handleModal = (modalTypeVal, inCardVal, modalVisibleVal, isAddVal) => {
  modalType.value = modalTypeVal
  inCard.value = inCardVal
  modalVisible.value = modalVisibleVal
  isAdd.value = isAddVal
}
</script>

<template>
  <ProCard
    id="card-wrap"
    :tab-list="[
      { key: 'tab1', tab: '标签一' },
      { key: 'tab2', tab: '标签二' },
    ]"
    :actions="[
      { key: 'tab1', label: '新增(弹窗)', type: 'primary', icon: PlusOutlined, clickCallback: () => { handleModal('a-modal', false, true, true) } },
      { key: 'tab1', label: '新增(抽屉)', type: 'primary', icon: PlusOutlined, clickCallback: () => { handleModal('a-drawer', false, true, true) } },
      { key: 'tab1', label: '新增(卡片覆盖)', type: 'primary', icon: PlusOutlined, clickCallback: () => { handleModal('a-modal', true, true, true) } },
      { key: 'tab1', label: '数据导入(成功)', type: 'default', icon: CloudUploadOutlined, clickCallback: () => { status = true, importVisible = true } },
      { key: 'tab1', label: '数据导入(失败)', type: 'default', icon: CloudUploadOutlined, clickCallback: () => { status = false, importVisible = true } },
      { key: 'tab1', label: '帮助', type: 'default', icon: QuestionOutlined, clickCallback: () => handleClick('帮助1'), inMoreActions: true },
      { key: 'tab2', label: '新增2', type: 'primary', icon: PlusOutlined, clickCallback: () => handleClick('新增2') },
      { key: 'tab2', label: '导出2', type: 'default', icon: DownloadOutlined, clickCallback: () => handleClick('导出2') },
    ]"
  >
    <template #tab1>
      <ProList
        ref="proList"
        :get-list-fn="getList"
        :columns="columns"
        layout="vertical"
        :default-filter-value="{ zone: 'zhejiang' }"
        @filter="filter"
        @reset="reset"
        @page-chang="pageChang"
        @change="change"
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
              <a v-if="index === 0" type="link" @click="() => { handleModal('a-modal', false, true, false) }"> 查看(弹窗) </a>
              <a v-if="index === 1" type="link" @click="() => { handleModal('a-drawer', false, true, false) }"> 查看(抽屉) </a>
              <a v-if="index === 2" type="link" @click="() => { handleModal('a-modal', true, true, false) }"> 查看(卡片覆盖) </a>
            </a-space>
          </template>
        </template>
      </ProList>
    </template>
    <template #tab2>
      tab2 content
    </template>
  </ProCard>

  <ProModal
    v-model:visible="modalVisible"
    :modal-type="modalType"
    width="30vw"
    title="储备计划"
    :action-text="isAdd ? '新增' : '查看'"
    :handle-ok-fn="() => handleOK('ok')"
    :handle-cancel-fn="() => handleOK('cancel')"
    :cancel-btn="{ label: 'Cancel' }"
    :pro-card-id="cardWrapId"
  >
    <template #default>
      <FormDemo :toggle-preview-status="isAdd" />
    </template>
  </ProModal>

  <ProDataImport
    v-model:visible="importVisible"
    title="导入"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :handle-result="handleResult"
    :handle-download-error-result="handleDownloadErrorResult"
    :accepts="['excel']"
  />
</template>

