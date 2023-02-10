<script setup>
import { nextTick, reactive, ref, toRaw, watch } from 'vue'
import dayjs from 'dayjs'

const formState = ref({
  value1: 'Input text content',
  value2: 'Beijing',
  value3: ['a1', 'b2', 'c3'],
  value4: ['1', '2'],
  value5: '2',
  value6: ['zhejiang', 'hangzhou'],
  value7: dayjs(),
  value8: [dayjs(), dayjs()],
})

const onSubmit = () => {}

const labelCol = {
  style: {
    width: '150px',
  },
}
const wrapperCol = {
  span: 12,
}

const togglePreviewStatus = ref(false)

const updateKey = ref(1)

watch(togglePreviewStatus, () => {
  updateKey.value++
})
</script>

<template>
  <a-switch v-model:checked="togglePreviewStatus" checked-children="开启阅读态" un-checked-children="关闭阅读态" />

  <a-divider />

  <a-form :key="updateKey" :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol" label-align="left">
    <a-form-item label="Input">
      <a-input v-model:value="formState.value1" v-preview-text="togglePreviewStatus" />
    </a-form-item>
    <a-form-item label="Textarea">
      <a-textarea v-model:value="formState.value1" v-preview-text="togglePreviewStatus" />
    </a-form-item>
    <a-form-item label="Input Number">
      <a-input-number v-model:value="formState.value1" v-preview-text="togglePreviewStatus" style="width: 100%" :min="1" :max="10" />
    </a-form-item>
    <a-form-item label="Select: default">
      <a-select
        v-model:value="formState.value2" v-preview-text="togglePreviewStatus" :options="[
          { label: 'Beijing', value: 'Beijing' },
          { label: 'Shanghai', value: 'Shanghai' },
        ]"
      />
    </a-form-item>
    <a-form-item label="Select: multiple">
      <a-select
        v-model:value="formState.value3"
        v-preview-text="togglePreviewStatus"
        mode="multiple"
        style="width: 100%"
        placeholder="Please select"
        :options="[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"
      />
    </a-form-item>
    <a-form-item label="Select: tag">
      <a-select
        v-model:value="formState.value3"
        v-preview-text="togglePreviewStatus"
        mode="tags"
        style="width: 100%"
        placeholder="Please select"
        :options="[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"
      />
    </a-form-item>
    <a-form-item label="Activity type">
      <a-checkbox-group
        v-model:value="formState.value4" v-preview-text="togglePreviewStatus"
      >
        <a-checkbox value="1" name="type">
          Apple
        </a-checkbox>
        <a-checkbox value="2" name="type">
          Pear
        </a-checkbox>
        <a-checkbox value="3" name="type">
          Orange
        </a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="Resources">
      <a-radio-group v-model:value="formState.value5" v-preview-text="togglePreviewStatus">
        <a-radio value="1">
          Sponsor
        </a-radio>
        <a-radio value="2">
          Venue
        </a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Activity form">
      <a-cascader
        v-model:value="formState.value6"
        v-preview-text="togglePreviewStatus"
        :options="[{
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
              value: 'xihu',
              label: 'West Lake',
            }],
          }],
        }, {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            }],
          }],
        }]" placeholder="Please select"
      />
    </a-form-item>
    <a-form-item label="Activity form">
      <a-date-picker v-model:value="formState.value7" v-preview-text="togglePreviewStatus" format="DD/MM/YYYY" />
    </a-form-item>
    <a-form-item label="Activity form">
      <a-range-picker
        v-model:value="formState.value8"
        v-preview-text="togglePreviewStatus"
        :show-time="{ format: 'HH:mm' }"
        format="YYYY-MM-DD HH:mm"
        :placeholder="['Start Time', 'End Time']"
      />
    </a-form-item>
  </a-form>
</template>
