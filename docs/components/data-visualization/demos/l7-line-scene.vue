<template>
  <div style="height: 700px">
    <FantasyMap
      geoJsonPath="/geo-json/"
      geo-id="china"
      area-enabled-color="#0151C320"
      area-border-color="#00ffff40"
      :custom-area-maker-content-fn="
        () => ({ className: 'my-div-icon', html: '' })
      "
      :add-l7-layer="true"
      @l7LayerAdded="generateL7SceneLine"
    />
  </div>
</template>

<script setup>
// 由于VuePress的限制，实际使用时候，不需要异步加载，例如：
// import { FantasyMap } from '@castle/data-visualization'
// import { HeatmapLayer } from '@antv/l7'

// const generateL7SceneHeat = ({ l7layer, done }) => {
//   const scene = l7layer.getScene()
//   fetch(
//     'https://gw.alipayobjects.com/os/basement_prod/7359a5e9-3c5e-453f-b207-bc892fb23b84.csv'
//   )
//     .then((res) => res.text())
//     .then((data) => {
//       const layer = new HeatmapLayer({})

//         ...

//       scene.addLayer(layer)
//       done()
//     })
// }
import { ref } from 'vue'
const generateL7SceneLine = ref()

if (!__VUEPRESS_SSR__) {
  import('@antv/l7').then(({ LineLayer }) => {
    generateL7SceneLine.value = ({ l7layer, done }) => {
      const scene = l7layer.getScene()
      fetch(
        'https://gw.alipayobjects.com/os/rmsportal/UEXQMifxtkQlYfChpPwT.txt'
      )
        .then((res) => res.text())
        .then((data) => {
          const layer = new LineLayer({
            // blend: 'normal',
          })
            .source(data, {
              parser: {
                type: 'csv',
                x: 'lng1',
                y: 'lat1',
                x1: 'lng2',
                y1: 'lat2',
              },
            })
            .size(1)
            .shape('greatcircle')
            .animate({
              enable: true,
              interval: 0.4,
              trailLength: 1,
              duration: 3,
            })
            .color('#6211C3')
            .style({
              opacity: 0.8,
            })
          scene.addLayer(layer)
          done()
        })
    }
  })
}
</script>
