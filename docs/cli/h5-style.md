# 样式

## 全局样式

在生命周期里面`import`样式文件，项目样式写到`global.less`文件中即可，如：

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
