# 快速上手
`Castle CLI-H5`是一个基于`Vite`的定制化`H5`端脚手架，本教程将帮助你快速搭建本地的初始化工程。

::: tip
- 开始之前，请确认本地环境已经配置好 [NPM私服](../dev-env/README.md) 。
- 前端构建工具基于 [Vite](https://cn.vitejs.dev/), 需要 Node.js 版本 16+。
:::

## 安装

#### 步骤1：全局安装 `@castle/cli-h5`

```sh
npm i @castle/cli-h5 -g
```

#### 步骤2：通过脚手架命令，补充提示所需要的信息，创建工程

```sh
castle5 init
```

#### 步骤3：进入对应的`projectName`目录，安装依赖包

```sh
cd projectName
yarn install 
```

#### 步骤4：启动`dev`环境

```sh
yarn run dev
```

## 项目配置

## 环境配置

项目配置文件位于路径`src/config/vite-config.js`，最基础的配置文件：

```js
export default {
  // ...
  // 配置选项 
  // ...
}
```

## 开发服务配置

- **类型：** `({ command: string, mode: string, env: object }) => object`

开发服务配置选项，详情见：[Vite 开发服务器选项](https://cn.vitejs.dev/config/server-options.html)

其中参数`command`和`mode`，请见 [Vite 情景配置](https://cn.vitejs.dev/config/#conditional-config)，env 请见 [Vite 环境变量](https://cn.vitejs.dev/config/#async-config)

## 环境变量

`Vite`在一个特殊的`import.meta.env`对象上暴露环境变量，详见：[Vite 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html#env-variables-and-modes)

`index.html`通过特殊的`%ENV_NAME%`语法在`HTML`文件中使用，见：[HTML 环境变量替换](https://cn.vitejs.dev/guide/env-and-mode.html#html-env-replacement)
