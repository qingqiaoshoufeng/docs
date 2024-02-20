# 样式

## 全局样式

在生命周期里面`import`样式文件，如：

```js
// project-config.js
export default ({ env }) => ({
  lifecycle: {
    beforeMount: (app) => {
      // 引入全局样式文件
      import('@/assets/styles/global.less')
    }
  },
})
```
