<script setup>

const getArray = (value) => {
  const array = String(value).split('')
  return array.map((n) => {
    return {
      value: n,
      number: !Number.isNaN(Number.parseInt(n)),
    }
  })
}
</script>

<template>
  <div class="demo6">
    <ScaleScreen :fit="true" :fullscreen="false">
      <VirtualNumber class="demo-number" :value="12345">
        <template #default="{ displayValue }">
          <span
            v-for="(item, index) in getArray(displayValue)"
            :key="index"
            :class="{ 'is-number': item.number }"
          >
            {{ item.value }}
          </span>
        </template>
        <template #prefix>
          ￥
        </template>
        <template #suffix>
          元
        </template>
        <template #trend>
          -
        </template>
      </VirtualNumber>
    </ScaleScreen>
  </div>
</template>

<style lang="less" scoped>
.demo6 {
  width: 100%;
  height: 60px;
  .demo-number {
    font-size: 36px;
    color: white;
    margin-right: 40px;
  }
}
.is-number {
  background: #1890ff;
  padding: 0 5px;
  margin: 0 2px;
  border-radius: 2px;
}
</style>
