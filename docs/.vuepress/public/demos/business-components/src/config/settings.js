import { h } from 'vue'
import ComponentsTemplate from '@castle/business-components'
import Help from './components/help.vue'

export default {
  // APP 名称
  title: 'Castle Template',

  // 登陆之后跳转的默认页面。注：用户默认跳转到此用户拥有权限的第一个页面
  homePath: '/basic-list',

  // 水印文字
  watermarkContent: userInfo => userInfo?.name,

  // 多标签
  multiTab: true,

  // ConfigProvider 全局化配置 https://antdv.com/components/config-provider-cn
  themeConfigProvider: {},

  // 版权信息
  copyright: () => 'Copyright @2022 Huaxin. All Rights Reserved',

  // token 在 localStorage 存放的名称
  tokenKeyName: '',

  // http 通用拦截
  httpInterceptors: {
    request: (config) => {
      config.headers.Authorization = 'Bearer xxx'
      return config
    },
    response: null,
  },

  // 用户相关的处理实现
  userApiImplement: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    login(loginForm) {
      return Promise.resolve('xxxxx')
    },
    logout() {
      return Promise.resolve()
    },
    getUserInfo() {
      return Promise.resolve({
        name: '张三',
        role: 'client',
        roleName: '客户',
      })
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getPermissionData(userInfo) {
      return Promise.resolve({ permissionCodes: ['code1', 'code2'] })
    },
  },

  lifecycle: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    beforeMount: (app) => {
      app.use(ComponentsTemplate)
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mounted: async (app) => {
      import('@/assets/styles/global-style.less')
      import('@castle/business-components/dist/style.css')

      const { $router } = app.config.globalProperties
      $router.push(`/${new URLSearchParams(window.location.search).get('url')}`)
    },
  },

  // 顶部导航栏右侧用户菜单配置
  userNavigation: [{
    label: '登录',
    handleFn: router => router.push('/login'),
    displayFn: () => !localStorage.getItem('token'),
  }],

  // 顶部导航栏右侧自定义组件
  userNavigationComponents: [h(Help)],

  // 暗黑模式配置
  darkness: {
    showSwitch: true,
    defaultMode: 'light',
  },
}
