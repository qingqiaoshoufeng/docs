import * as path from 'path'
import { defineUserConfig, defaultTheme } from 'vuepress'
// import { VpNpmBadge } from '@bfehub/vuepress-components'
import { codeBlockPlugin } from '@bfehub/vuepress-plugin-code-block' // https://bfehub.github.io/vmi/zh/
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '🏰 Castle',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/images/castle.png' }],
  ],
  description: '致力于构建和沉淀包括但不限于前端开发的所有技术文档',
  base: '/',
  // enhance({ app }) {
  //   app.use(VpNpmBadge)
  // },
  plugins: [
    codeBlockPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  theme: defaultTheme({
    navbar: [
      {
        text: 'CLI',
        link: '/cli/',
      },
      {
        text: '组件',
        link: '/components/',
      },
      {
        text: '开发环境',
        link: '/dev-env/',
      },
      {
        text: '工具集',
        link: '/utils/',
      },
      {
        text: '前端中台',
        link: 'http://castle-platform.cp.hxdi.cn/project'
      },
      {
        text: '编码规范',
        link: '/front-standard-guide/',
      },
      {
        text: '设计交互规范',
        link: '/ux/',
      },
      {
        text: '前端团队文档',
        link: '/docs/',
      },      
      {
        text: '低代码搭建',
        link: '/lowcode/',
      },
    ],
    sidebar: {
      '/cli/': [
        {
          text: 'CLI',
          children: [
            '/cli/README.md',
            '/cli/router.md',
            '/cli/sidebar-menu.md',
            '/cli/permission.md',
            '/cli/request-data.md',
            '/cli/layout.md',
            '/cli/global.md',
            '/cli/style.md',
            '/cli/keep-alive.md',
            '/cli/microapp.md',
          ],
        },
        {
          text: 'CLI-H5',
          children: [
            '/cli/h5-index.md',
            '/cli/h5-router.md',
            '/cli/h5-permission.md',
            '/cli/h5-request.md',
            '/cli/h5-global.md',
            '/cli/h5-style.md',
            '/cli/h5-version.md',
          ],
        }
      ],
      '/components/': [
        {
          text: '组件库模板',
          children: ['/components/components-template/README.md'],
        },
        {
          text: 'UI组件库',
          children: ['/components/ui-components.md'],
        },
        {
          text: '数据可视化组件',
          children: [
            '/components/data-visualization/README.md',
            '/components/data-visualization/scale-screen.md',
            '/components/data-visualization/header.md',
            '/components/data-visualization/fantasy-map.md',
            '/components/data-visualization/scroll-board.md',
            '/components/data-visualization/virtual-number.md',
            '/components/data-visualization/virtual-date.md',
            '/components/data-visualization/common-modal.md',
            '/components/data-visualization/border-wrapper.md',
            '/components/data-visualization/charts.md',
            '/components/data-visualization/3D.md',
            '/components/data-visualization/border-image-generator.md',
          ],
        },
        {
          text: '业务组件',
          children: [
            '/components/business-components/README.md',
            '/components/business-components/pro-list.md',
            '/components/business-components/pro-card.md',
            '/components/business-components/pro-data-import.md',
            '/components/business-components/pro-modal.md',
            '/components/business-components/form-preview-text.md'
          ],
        },
        {
          text: 'H265 播放器',
          children: [
            '/components/h265-player/README.md',
            '/components/h265-player/h265-player.md',
          ],
        },
      ],
      '/utils/': [
        {
          text: '工具集',
          children: [
            '/utils/castle-cli.md',
            '/utils/castle-use.md',
          ],
        },
      ],
      '/front-standard-guide/': [
        {
          text: '编码规范',
          children: [
            '/front-standard-guide/name-style-guide.md',
            '/front-standard-guide/html-style-guide.md',
            '/front-standard-guide/css-style-guide.md',
            '/front-standard-guide/javascript-style-guide.md',
            '/front-standard-guide/typescript-style-guide.md',
            '/front-standard-guide/git-style-guide.md',
          ],
        },
        {
          text: '最佳实践',
          children: [
            '/front-standard-guide/clean-code-javascript.md',
            '/front-standard-guide/fire-alarm-statistics-questions.md',
            '/front-standard-guide/fire-alarm-excel-report.md',
          ],
        },
      ],
      '/ux/': [
        {
          text: '设计交互规范',
          children: [
            '/ux/layout.md',
            '/ux/login.md',
            '/ux/basic-list.md',
            '/ux/404.md',
            '/ux/403.md',
          ],
        },
      ],
      '/lowcode/': [
        {
          text: '低代码搭建',
          children: [],
        },
      ],
    },
  }),
})
