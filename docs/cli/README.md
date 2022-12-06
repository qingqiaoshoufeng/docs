# 快速上手
Castle CLI是一个基于Vite的简洁的定制化脚手架，本教程将帮助你快速搭建本地的初始化工程。

::: tip
- 开始之前，请确认本地环境已经配置好 [NPM私服](../dev-env/README.md) 。
- 前端构建工具基于 [Vite](https://cn.vitejs.dev/), 需要 Node.js 版本 14.18+，16+。
:::


#### 步骤1：全局安装 **@castle/castle-cli**

```sh
npm i @castle/castle-cli -g
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

## 项目配置

项目配置文件位于路径 `src/config/settings.js`，最基础的配置文件：

```js
// settings.mjs
export default {
  // ...
  // 配置选项 
  // ...
}
```

### title

- **类型:** `string`
- **默认值:** `Castle Template`

项目标题，将会在顶部导航栏左侧和登陆界面显示

---

### homePath

- **类型:** `string`
- **默认值:** `/`

登陆之后跳转的默认页面。注：用户默认跳转到此用户拥有权限的第一个页面

---

### watermarkContent

- **类型:** `(userInfo: unknown) => string`
- **默认值:** `(userInfo) => userInfo?.name`

界面水印文字

---

### themeConfigProvider

- **类型:** `object`
- **默认值:** `{}`

组件提供统一的全局化配置，详见：[全局化配置](https://antdv.com/components/config-provider-cn)

---

### copyright

- **类型:** `() => string`
- **默认值:** `() => 'Copyright @2022 Huaxin. All Rights Reserved'`

版权信息

---

### tokenKeyName

- **类型:** `string`
- **默认值:** `'token'`

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

### userApiImplement

用户认证鉴权等一系列实现过程

- **类型:** 
```ts
{ 
  login: (loginForm: { username: string, password: string, encryptPassword: string } ) => Promise<string>, 
  logout: () => Promise<any>, 
  getUserInfo: () => Promise<{ name: string, [key: string]: any}>, 
  getPermissionData: (userInfo: object) => Promise<{ permissionCodes: string[], [key: string]: any }> 
}
```

- **示例:** 
```js
{
  // 用户登录的实现方法
  async login(loginForm) {
    // ... 
    // 登录请求实现过程，例如：const { token } = await login(loginForm)
    // ...
    return Promise.resolve(token); // 返回数据：token<string>
  },

  // 用户登出的实现方法
  async logout() {
    // ... 
    // 登出请求实现过程，例如：await logOut()
    // ...
    return Promise.resolve(); 
  },

  // 获取用户信息的实现方法
  async getUserInfo() {
    // ... 
    // 获取用户信息实现过程，例如：const userInfo = await getUserInfo()
    // ...
    return Promise.resolve(userInfo); // 返回数据：userInfo<object>，请务必保证 userInfo 里面包含 name<string>
  },

  // 获取用户权限数据的实现方法
  async getPermissionData(userInfo) {
    // ... 
    // 获取用户权限数据，例如：const { permissionCodes } = await getPermissionData()
    // 或者可以从用户信息里面（userInfo）获取，根据实际接口情况设计来，例如 const { permissionCodes } = userInfo
    // ...
    return Promise.resolve(permissions); // 返回数据：permissions<object>，请务必保证 permissions 里面包含 permissionCodes: string[]
  },
}
```

### layout

- **类型:** `object`
- **默认值:** `{}`

布局配置，详见：[Ant Design Pro Layout](https://github.com/vueComponent/pro-components/tree/next/packages/pro-layout)


## 环境配置

项目配置文件位于路径 `src/config/project-settings.mjs`，最基础的配置文件：

```js
// project-settings.mjs
export default {
  // ...
  // 配置选项 
  // ...
}
```

### server

- **类型：** `({ command: string, mode: string, env: object }) => object`

开发服务配置选项，详情见：[Vite 开发服务器选项](https://cn.vitejs.dev/config/server-options.html)

其中参数 command 和 mode，请见 [Vite 情景配置](https://cn.vitejs.dev/config/#conditional-config)，env 请见 [Vite 环境变量](https://cn.vitejs.dev/config/#async-config)

## 环境变量

Vite 在一个特殊的 import.meta.env 对象上暴露环境变量，详见：[Vite 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html#env-variables-and-modes)