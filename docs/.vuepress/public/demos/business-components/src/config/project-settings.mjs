const developerUserName = import.meta.env?.VITE_DEVELOPER_USER_NAME
const projectName = import.meta.env?.VITE_PROJECT_NAME
const userNameAndProjectName = (developerUserName && projectName) ? `/${developerUserName}/${projectName}` : ''

export default {
  // 本地测试服务器配置，默认统一通过Castle Platform 代理
  server: () => ({
    host: true,
    proxy: {
      '/api': {
        target: `http://castle-platform.cp.hxdi.cn${userNameAndProjectName}`,
        changeOrigin: true,
        secure: false,
      },
    },
  }),
  vite: () => ({
    base: '/demos/business-components/dist/',
  }),
}
