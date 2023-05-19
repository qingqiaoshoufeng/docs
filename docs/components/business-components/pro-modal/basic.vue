<script setup>
import { computed, ref } from 'vue'

const visible = ref(false)
const type = ref('a-modal')

const handleOK = (t) => {
  return new Promise((resolve) => {
    if (t === 'cancel') {
      resolve()
    }
    setTimeout(() => {
      console.log(t)
      resolve()
    }, 2000)
  })
}
const inCard = ref(false)
const cardWrapId = computed(() => {
  return inCard.value ? 'card-wrap' : undefined
})
</script>

<template>
  <a-space>
    <a-radio-group v-model:value="type">
      <a-radio-button value="a-modal">
        Modal
      </a-radio-button>
      <a-radio-button value="a-drawer">
        Drawer
      </a-radio-button>
    </a-radio-group>

    <a-radio-group v-model:value="inCard" v-if="type === 'a-modal'">
      <a-radio-button :value="false">
        正常打开
      </a-radio-button>
      <a-radio-button :value="true">
        在Pro-Card里面打开
      </a-radio-button>
    </a-radio-group>
  </a-space>
  <br><br>
  <a-button type="primary" @click="visible = true">
    点击打开弹窗
  </a-button>
  <br><br>
  <ProModal
    v-model:visible="visible"
    :modal-type="type"
    width="30vw"
    title="储备计划"
    action-text="新增"
    :handle-ok-fn="() => handleOK('ok')"
    :handle-cancel-fn="() => handleOK('cancel')"
    :cancel-btn="{ label: 'Cancel' }"
    :pro-card-id="cardWrapId"
  >
    <template #default>
      <div>
        content
      </div>
    </template>
  </ProModal>

  <ProCard v-if="inCard" id="card-wrap" title="储备计划" style="height: 70vh">
    弹窗将覆盖这里
  </ProCard>
</template>
