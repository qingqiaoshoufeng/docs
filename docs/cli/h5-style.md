# 样式

## 全局样式

在生命周期里面`import`样式文件，项目样式写到`global.less`文件中即可，不同环境根据`env`进行区分，导入不同文件即可，如：

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

## 支持`stylelint`，在`stylelint.config.cjs`中可以增加自定义配置

```
stylelint
stylelint-config-recess-order
stylelint-config-recommended-less
stylelint-config-recommended-vue
stylelint-config-standard
stylelint-config-standard-less
stylelint-less
```
