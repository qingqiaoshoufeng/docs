import Antd from 'ant-design-vue'
import ComponentsTemplate from '@castle/components-template'
// import DataVisualization from '@castle/data-visualization'
import 'ant-design-vue/dist/antd.css'
import '@castle/components-template/dist/style.css'
import '@castle/data-visualization/dist/style.css'

import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(Antd)
    app.use(ComponentsTemplate)
    // app.use(DataVisualization)

    if (!__VUEPRESS_SSR__) {
      import('@castle/data-visualization').then((DataVisualization) => {
        app.use(DataVisualization)
      })
    }
  },
  setup() {},
  rootComponents: [],
})
