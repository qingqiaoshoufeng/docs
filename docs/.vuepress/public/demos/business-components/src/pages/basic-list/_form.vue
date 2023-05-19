<script setup>
import { nextTick, reactive, ref, toRaw, watch } from 'vue'
import dayjs from 'dayjs'

const props = defineProps({
  togglePreviewStatus: {
    type: Boolean,
    default: false,
  },
})

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

const updateKey = ref(1)

watch(() => props.togglePreviewStatus, () => {
  updateKey.value++
})
</script>

<template>
  <a-form :key="updateKey" :model="formState" layout="vertical">
    <a-row :gutter="24">
      <a-col :span="12">
        <a-form-item label="输入框">
          <a-input v-model:value="formState.value1" v-preview-text="!togglePreviewStatus" />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="数字输入框">
          <a-input-number v-model:value="formState.value1" v-preview-text="!togglePreviewStatus" style="width: 100%" :min="1" :max="10" />
        </a-form-item>
      </a-col>
      <!-- <a-form-item label="Auto Complete">
        <a-auto-complete
          v-model:value="formState.name"
          v-preview-text="!togglePreviewStatus"
          :options="[
            { label: 'Beijing', value: 'Beijing' },
            { label: 'Shanghai', value: 'Shanghai' },
          ]"
          placeholder="input here"
        />
      </a-form-item> -->

      <a-col :span="12">
        <a-form-item label="下拉选择">
          <a-select
            v-model:value="formState.value2" v-preview-text="!togglePreviewStatus" :options="[
              { label: 'Beijing', value: 'Beijing' },
              { label: 'Shanghai', value: 'Shanghai' },
            ]"
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="下拉多选">
          <a-select
            v-model:value="formState.value3"
            v-preview-text="!togglePreviewStatus"
            mode="multiple"
            style="width: 100%"
            placeholder="Please select"
            :options="[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="下拉多选tag">
          <a-select
            v-model:value="formState.value3"
            v-preview-text="!togglePreviewStatus"
            mode="tags"
            style="width: 100%"
            placeholder="Please select"
            :options="[...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) }))"
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="多选框">
          <a-checkbox-group
            v-model:value="formState.value4" v-preview-text="!togglePreviewStatus"
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
      </a-col>
      <a-col :span="12">
        <a-form-item label="单选框">
          <a-radio-group v-model:value="formState.value5" v-preview-text="!togglePreviewStatus">
            <a-radio value="1">
              Sponsor
            </a-radio>
            <a-radio value="2">
              Venue
            </a-radio>
          </a-radio-group>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="连级选择器">
          <a-cascader
            v-model:value="formState.value6"
            v-preview-text="!togglePreviewStatus"
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
      </a-col>
      <a-col :span="12">
        <a-form-item label="日期选择器">
          <a-date-picker v-model:value="formState.value7" v-preview-text="!togglePreviewStatus" format="DD/MM/YYYY" />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="时间段选择器">
          <a-range-picker
            v-model:value="formState.value8"
            v-preview-text="!togglePreviewStatus"
            :show-time="{ format: 'HH:mm' }"
            format="YYYY-MM-DD HH:mm"
            :placeholder="['Start Time', 'End Time']"
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="文本域">
          <a-textarea v-model:value="formState.value1" v-preview-text="!togglePreviewStatus" />
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>
