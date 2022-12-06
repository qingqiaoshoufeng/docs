import * as path from 'path'
import { defineUserConfig, defaultTheme } from 'vuepress'
// import { VpNpmBadge } from '@bfehub/vuepress-components'
import { codeBlockPlugin } from '@bfehub/vuepress-plugin-code-block'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '🏰 Castle',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/images/logo.png' }],
  ],
  description: 'Castle 文档中心',
  base: '/',
  // enhance({ app }) {
  //   app.use(VpNpmBadge)
  // },
  plugins: [codeBlockPlugin()],
  theme: defaultTheme({
    navbar: [
      {
        text: 'CLI',
        link: '/cli/',
      },
      {
        text: 'UI组件库',
        link: '/ui-component/',
      },
      {
        text: '开发环境',
        link: '/dev-env/',
      },
      {
        text: '工具集',
        link: '/utils/',
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
            '/cli/global.md',
          ],
        },
      ],
    },
  }),
})
