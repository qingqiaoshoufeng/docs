<template>
  <div style="height: 700px">
    <ScaleScreen :width="1366" :height="768" :fit="true" :lock="true">
      <div class="content">
        <div class="left-box">
          <div class="box-wrap">
            <BorderWrapper />
          </div>
          <div class="box-wrap">
            <BorderWrapper :border-position="['left-top', 'right-bottom']" />
          </div>
          <div class="box-wrap">
            <BorderWrapper :border-position="['right-top', 'left-bottom']" />
          </div>
        </div>
        <div class="right-box">
          <div class="box-wrap">
            <BorderWrapper :border-position="[]" :background-style="{ border: 'rgba(29, 226, 0, 0.3) 1px solid' }" />
          </div>
          <div class="box-wrap">
            <BorderWrapper :background-style="{ border: 'rgba(29, 226, 0, 0.3) 1px solid' }" />
          </div>
          <div class="box-wrap">
            <BorderWrapper border-color="rgba(29, 226, 0, 0.6)" :background-style="{ border: 'rgba(29, 226, 0, 0.3) 1px solid' }" />
          </div>
        </div>
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
.content {
  height: calc(100% - 130px);
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 50px;
}
.content .left-box, .right-box {
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  pointer-events: painted;
}
.content .box-wrap {
  flex: 1;
  height: calc(33.33% - 20px);
}
</style>
