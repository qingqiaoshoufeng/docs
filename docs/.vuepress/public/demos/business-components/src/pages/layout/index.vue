<route lang="json">
  {
    "meta": {
      "title": "默认布局",
      "icon": "HomeOutlined",
      "requiresAuth": false,
      "sort": 1
    }
  }
</route>

<template>
  <div class="content-wrap">
    这里是内容区域
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.content-wrap {
  height: calc(100vh - 150px);
  border: dashed 1px #ccc;
  padding: 20px;
}
</style>
