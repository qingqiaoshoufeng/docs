<script setup lang="ts">
</script>

<template>
  <h2>类型2用法</h2>
  <div class="border-demo0">
    <ScaleScreen :width="1366" :height="768" :fit="true" :lock="true">
      <div class="content">
        <div class="left-box">
          <div class="box-wrap">
            <BorderWrapper :type="2" />
          </div>
          <div class="box-wrap">
            <BorderWrapper :type="2" :border-position="['left-top', 'right-bottom']" />
          </div>
          <div class="box-wrap">
            <BorderWrapper :type="2" :border-position="['right-top', 'left-bottom']" />
          </div>
        </div>
        <div class="right-box">
          <div class="box-wrap">
            <BorderWrapper :type="2" :border-position="[]" :background-style="{ border: 'rgba(29, 226, 0, 0.3) 1px solid' }" />
          </div>
          <div class="box-wrap">
            <BorderWrapper :type="2" :background-style="{ border: 'rgba(29, 226, 0, 0.3) 1px solid' }" />
          </div>
          <div class="box-wrap">
            <BorderWrapper :type="2" border-color="rgba(29, 226, 0, 0.6)" :background-style="{ border: 'rgba(29, 226, 0, 0.3) 1px solid' }" />
          </div>
        </div>
      </div>
    </ScaleScreen>
  </div>
</template>

<style lang="less" scoped>
.border-demo0 {
  width: 100%;
  height: calc(100vh - 100px);
  .content {
    height: calc(100% - 130px);
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    margin-bottom: 50px;
    .left-box, .right-box {
      width: 500px;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
      pointer-events: painted;
      .box-wrap {
        flex: 1;
        height: calc(33.33% - 20px);
      }
    }
  }
}
</style>
