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
      @l7LayerAdded="generateL7SceneHeat"
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
const generateL7SceneHeat = ref()

if (!__VUEPRESS_SSR__) {
  import('@antv/l7').then(({ HeatmapLayer }) => {
    generateL7SceneHeat.value = ({ l7layer, done }) => {
      const scene = l7layer.getScene()
      fetch(
        'https://gw.alipayobjects.com/os/basement_prod/7359a5e9-3c5e-453f-b207-bc892fb23b84.csv'
      )
        .then((res) => res.text())
        .then((data) => {
          const layer = new HeatmapLayer({})
            .source(data, {
              parser: {
                type: 'csv',
                x: 'lng',
                y: 'lat',
              },
              transforms: [
                {
                  type: 'grid',
                  size: 20000,
                  field: 'v',
                  method: 'sum',
                },
              ],
            })
            .shape('circle')
            .style({
              coverage: 0.9,
              angle: 0,
            })
            .color(
              'count',
              [
                '#FF3417',
                '#FF7412',
                '#FFB02A',
                '#FFE754',
                '#46F3FF',
                '#02BEFF',
                '#1A7AFF',
                '#0A1FB2',
              ].reverse()
            )

          scene.addLayer(layer)
          done()
        })
    }
  })
}
</script>
