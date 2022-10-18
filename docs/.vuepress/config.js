import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '🏰 Castle',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/images/logo.png' }],
  ],
  description: 'Castle 文档中心',
  base: '/docs/latest/',
  theme: defaultTheme({
    navbar: [
      {
        text: 'CLI',
        link: '/cli/',
      },
      {
        text: '开发环境',
        link: '/dev-env/',
      },
    ],
  }),
})
