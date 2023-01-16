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
        text: '编码规范',
        link: '/front-standard-guide/',
      },
      {
        text: '前端团队文档',
        link: '/docs/',
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
            '/cli/layout.md',
            '/cli/global.md',
          ],
        },
      ],
      '/components/': [
        {
          text: '组件',
          children: [
            '/components/README.md',
            '/components/components-template/README.md',
            '/components/data-visualization/README.md',
            '/components/scale-screen/README.md',
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
      ],
    },
  }),
})
