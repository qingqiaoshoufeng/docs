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
      :l7-layer="new L7Layer()"
      @l7LayerAdded="generateL7SceneHeat"
    />
  </div>
</template>

<script setup>
import { FantasyMap } from '@castle/data-visualization'
import { HeatmapLayer } from '@antv/l7'
import { L7Layer } from '@antv/l7-leaflet'

const generateL7SceneHeat = ({ l7layer, done }) => {
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
</script>
