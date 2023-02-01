<template>
  <div style="height: 700px">
    <ScaleScreen :width="1366" :height="768" :fit="false" :lock="true">
      <div class="content">
        <Header :type="2">
          <template #title>
            购销监管数据平台
          </template>
        </Header>
      </div>
    </ScaleScreen>
  </div>
</template>

<script setup>
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
