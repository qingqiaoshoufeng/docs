# 微前端

::: tip
微前端需要 `@castle/castle-template` 的版本 `>= 2.0.0`，如果是从低版本升级上来，请确保在 `package.json` > `scripts` 包含微前端的调试和打包命令（没有需要手动添加）：

```
...
"dev:microapp": "castle dev:microapp",
"build:microapp": "castle build:microapp",
...
```
:::

### 子应用配置

1. 在 `src/configs/project-setting.mjs` 添加子应用的配置，如：
```js
{
  ...
  microapp: {
    apps: [
      {
        name: 'demo1', // 子应用唯一标识符，所用该子应用的url将带上此前缀，如：/demo1/you-page-path
        displayName: '子应用1', // 用于显示在应用切换菜单的名称
        version: '1.0.0', // 应用版本控制
        homePath: '/demo1/home', // 默认该子应用的默认页面
        enabled: true, // 是否启用此子应用
      },
    ],
  },
  ...
}
``` 
2. 要在 `src/pages` 文件夹下面，添加以 `microapp-` 开头的文件夹，如：`microapp-demo1` （注意：`microapp-` 后面的名称一定要和上一步配置的子应用的 `name` 一致），接下来直接在此文件夹下面正常的按照 [路由](/cli/router.html) 的方式开发。
3. 通过 `yarn dev:microapp` 启动服务，通过上下键选择你要启动的子应用，回车启动本地服务。
4. 开发完成后，通过 `yarn build:microapp` 开始构建生产产物，通过上下键选择你要构建的应用，回车启动构建服务。

### 部署

和正常的vue单页应用一致，区别在于需要多次分别打包不同的应用。未来将结合中台的前端构建工具一起使用。