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
      @l7LayerAdded="generateL7SceneLine"
    />
  </div>
</template>

<script setup>
import { FantasyMap } from '@castle/data-visualization'
import { LineLayer } from '@antv/l7'
import { L7Layer } from '@antv/l7-leaflet'

const generateL7SceneLine = ({ l7layer, done }) => {
  const scene = l7layer.getScene()
  fetch('https://gw.alipayobjects.com/os/rmsportal/UEXQMifxtkQlYfChpPwT.txt')
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
</script>
