<template>
  <div style="height: 700px">
    <ScaleScreen
      :fit="fit"
      :lock="lock"
      :width="1366"
      :height="768"
      :fullscreen="true"
    >
      <div class="text">这是大屏容器</div>
    </ScaleScreen>
  </div>
</template>

<script setup>
// import { ScaleScreen } from '@castle/data-visualization'

const fit = false
const lock = true
</script>

<style scoped>
.text {
  position: relative;
  color: white;
  font-size: 48px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
