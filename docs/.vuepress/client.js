import Antd from 'ant-design-vue'
import ComponentsTemplate from 'components-template'
import 'ant-design-vue/dist/antd.css'
// import "components-template/dist/style.css";

import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(Antd)
    app.use(ComponentsTemplate)
  },
  setup() {},
  rootComponents: [],
})
