# Castle CLI
基于Vite的超简洁的脚手架

## 快速上手
本教程将帮助你快速搭建本地的初始化工程。

::: tip
- 开始之前，请确认本地环境已经配置好 [NPM私服](../dev-env/README.md) 。
- 前端构建工具基于 [Vite](https://cn.vitejs.dev/), 需要 Node.js 版本 14.18+，16+。
:::


#### 步骤1：全局安装 **@castle/castle-cli**

```sh
yarn add @castle/castle-cli -g
```

#### 步骤2：通过脚手架命令，补充提示所需要的信息，创建工程

```sh
castle-cli init
```

#### 步骤3：进入对应的projectName目录，安装依赖包

```sh
cd projectName
yarn install 
```

#### 步骤4：启动dev环境

```sh
yarn run dev
```

## 命令行界面

在项目中，可以在 npm scripts 中使用 castle 可执行文件，或者直接使用 npx castle 运行它。下面是通过脚手架创建的 castle 项目中默认的 npm scripts：

```json
{
  "scripts": {
    "dev": "castle dev", // 启动开发服务器
    "build": "castle build", // 为生产环境构建产物
  },
}
```

## 配置

项目配置文件路径 `src/config/settings.mjs`，最基础的配置文件：

```js
// settings.mjs
export default {
  // 配置选项 
}
```

### title

- **类型:** `string`
- **默认值:** `Castle Template`

项目标题，将会在顶部导航栏左侧和登陆界面显示

---

### homePath

- **类型:** `string`
- **默认值:** `/home`

登陆之后跳转的默认页面

---

### watermarkContent

- **类型:** `string`
- **默认值:** `''`

界面水印文字

---

### copyright

- **类型:** `string`
- **默认值:** `'Copyright @2022 Huaxin. All Rights Reserved'`

版权信息

---

### tokenKeyName

- **类型:** `string`
- **默认值:** `''`

Token 在 localStorage 存放的名称

---

### httpInterceptors.request

- **类型:** `function`

http 全局请求拦截器，配置详情参考[axios 拦截器](https://axios-http.com/zh/docs/interceptors)。示例：
```js
// settings.mjs
export default{
  httpInterceptors: {
    request: (config) => {
      config.headers.Authorization = `Bearer xxx`
      return config
    }
  },
}
```

---

### httpInterceptors.response

- **类型:** `function`

http 全局响应拦截器，配置详情参考[axios 拦截器](https://axios-http.com/zh/docs/interceptors)。示例：
```js
// settings.mjs
export default{
  httpInterceptors: {
    response: [
      (response) => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
      }, 
      (error) => {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    ]
  },
}
```