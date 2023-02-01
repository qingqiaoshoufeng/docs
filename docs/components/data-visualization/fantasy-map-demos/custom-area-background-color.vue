<template>
  <div style="height: 700px">
    <FantasyMap
      geoJsonPath="/geo-json/"
      :custom-area-maker-content-fn="customAreaMakerContentFn"
      :custom-area-maker-fill-color-fn="customAreaMakerFillColorFn"
    />
  </div>
</template>

<script setup>
// import { FantasyMap } from '@castle/data-visualization'

const unitData = {
  330200: 34543,
  330500: 54344,
}

const customAreaMakerContentFn = (featureProperties) => {
  return {
    className: 'my-div-icon',
    html: `<span>${featureProperties.name}</span> ${
      unitData[featureProperties.adcode]
        ? `<br /><span class="data">${
            unitData[featureProperties.adcode]
          }</span>`
        : ''
    }`,
    iconSize: [160, null],
    popupHtml: unitData[featureProperties.adcode]
      ? `<p>当前数据：<span style="color: greenyellow">${
          unitData[featureProperties.adcode]
        }</span></p>`
      : '',
  }
}

const customAreaMakerFillColorFn = (featureProperties) => {
  return {
    fillColor: unitData[featureProperties.adcode] ? '#6211C3' : '#0151C395',
  }
}
</script>

<style lang="less" scoped>
:deep(.my-div-icon) {
  font-size: 16px;
  color: #ffffff;
  line-height: 1.3em;
  text-shadow: 0 0 6px #000000;
  text-align: center;
  .data {
    color: greenyellow;
    font-weight: bold;
  }
}
</style>
