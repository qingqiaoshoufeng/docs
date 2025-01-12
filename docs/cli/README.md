# 快速上手
Castle CLI是一个基于Vite的简洁的定制化脚手架，本教程将帮助你快速搭建本地的初始化工程。

::: tip
- 开始之前，请确认本地环境已经配置好 [NPM私服](../dev-env/README.md) 。
- 前端构建工具基于 [Vite](https://cn.vitejs.dev/), 需要 Node.js 版本 14.18+，16+。
:::

## 安装

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
    "dev:microapp": "castle dev:microapp", // 启动微前端的子应用服务
    "build:microapp": "castle build:microapp", // 为生产环境构建微前端产物
    "optimize": "castle optimize", // 预构建依赖
    "preview": "castle preview --port 4173", // 快速本地预览构建产物
  },
}
```

其他详细[使用说明](https://cn.vitejs.dev/guide/cli.html#vite-optimize)

## 项目结构

Castle CLI 生成的的整个项目的目录结构，您需要关注的如下：
```
.                        
├─ src                          
│  ├─ assets                          # 资源层                 
│  │  └─ images                 
│  │     ├─ favicon.png         
│  │     ├─ login-bg-white.png  
│  │     └─ logo.png            
│  ├─ config                          # 配置层             
│  │  ├─ project-settings.mjs   
│  │  └─ settings.js            
│  └─ pages                           # 页面层              
│     ├─ blank-page             
│     │  └─ index.vue           
│     ├─ home                   
│     │  └─ index.vue           
│     ├─ link-putlined          
│     │  └─ index.vue           
│     └─ test                   
│        ├─ index               
│        │  ├─ components       
│        │  │  └─ _button.vue   
│        │  ├─ page1.vue        
│        │  └─ _page2.vue       
│        └─ index.vue           
├─ index.html                   
├─ jsconfig.json                
├─ package.json                 
├─ postcss.config.js            
├─ README.md
├─ .env                               # 生产环境变量
├─ .env.development                   # 开发环境变量                   
├─ tailwind.config.js           
└─ yarn.lock   
```                 

## 内置基础依赖
```
"vue": "^3.2.47",
"vue-router": "^4.1.3"
"axios": "^1.1.2",
"lodash": "^4.17.21",
"pinia": "2.0.17",
"tailwindcss": "^3.1.8",
"dayjs": "^1.10.5",
"@castle/ant-design-vue": "latest",
"@castle/castle-template": "latest",
"@castle/pro-layout": "latest"
```
## 核心依赖
<package-version name="@castle/components-template" />

正如您所看到的，当您通过 Castle CLI 生成整个项目并且安装完依赖包之后，整个项目已经可以通过 `yarn dev` 运行本地开发，其中我们需要注意的是，在所有的依赖包中，最核心的依赖包为 [@Castle/Castle-template](http://10.13.4.153:4873/-/web/detail/@castle/components-template) ，它包含了我们几乎所有的内置模块和功能，所以，通过Castle CLI创建的工程，后期可以直接通过升级 [@Castle/Castle-template](http://10.13.4.153:4873/-/web/detail/@castle/components-template) 的版本进行更新。

## 浏览器兼容性

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /><br /> IE / Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /><br />Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /><br />Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /><br />Safari |
| --- | --- | --- | --- |
| Edge >=91 | Firefox >=83 | Chrome >=91 | Safari >=14.1 |

:::tip
有些项目可能需要支持国产操作系统自带的浏览器，而国产浏览器有些是基于低版本的 Chromium，你可以考虑如下方案：

- 安装最新 Linux 版本的 [Firefox](https://www.mozilla.org/zh-CN/firefox/linux/) 浏览器或者[360浏览器](https://browser.360.net/gc/index.html?src=se)
- 通过 [@vitejs/plugin-legacy](https://www.npmjs.com/package/@vitejs/plugin-legacy) 转译成兼容性更好的ES5
:::


## 项目配置

项目配置文件位于路径 `src/config/settings.js`，最基础的配置文件：

```js
// settings.js
export default {
  // ...
  // 配置选项 
  // ...
}

// settings.js v2.1.17+ 新增函数式配置，默认参数对象里面包括 env 环境变量
export default ({ env }) => {
  // ...
  // 配置选项 
  // ...
}
```

### title 应用标题

- **类型:** `string | () => string` <Badge text="2.1.29+"/>
- **默认值:** `Castle Template`

项目标题，将会在顶部导航栏左侧和登陆界面显示

---

### homePath 主页面

- **类型:** `string | () => string`
- **默认值:** `/`

登陆之后跳转的默认页面。注：用户默认跳转到此用户拥有权限的第一个页面

---

### watermarkContent 水印内容

- **类型:** `(userInfo: unknown) => string`
- **默认值:** `(userInfo) => userInfo?.name`

界面水印文字，返回为空字符串则不显示

---

### multiTab 多标签

- **类型:** `boolean`
- **默认值:** `false`

开启多标签模式

---

### themeConfigProvider 主题配置

- **类型:** `object`
- **默认值:** `{}`

组件提供统一的全局化配置，详见：[全局化配置](https://antdv.com/components/config-provider-cn)

---

### copyright 版权信息 

- **类型:** `() => string`
- **默认值:** `() => 'Copyright @2022 Huaxin. All Rights Reserved'`

版权信息

---

### serverStatus 服务器检查 <Badge text="2.1.27+"/>

- **类型:** `() => Promise<boolean>`

该配置的函数每 30 秒将调用一次，根据返回的布尔值来判断是否重定向到服务器维护页面。（注意：请在设计此函数的时候，千万注意其它因素的干扰，如网络问题等，从而错误的返回为false，导致用户看到服务器维护页面）

---

### globalTip 全局提醒 <Badge text="2.1.27+"/>

- **类型:** `() => Promise<{ text: string, type: 'success' | 'info' | 'warning' | 'error'}>`

全局通知提示信息，该配置的函数每 30 秒将调用一次

---

### tokenKeyName Token名称

- **类型:** `string`
- **默认值:** `'token'`

Token 在 localStorage 存放的名称

---

### lifecycle 生命周期

#### beforeMount

- **类型:** `(app) => void`

创建一个vue应用实例之后，在将应用实例挂载之前

你可以通过默认的app参数，在这个时候进行任何全局性的 `app.xxx()` 的[操作](https://cn.vuejs.org/api/application.html#app-directive)，比如 app.use()、app.component()、app.provide() 等等

示例：
```js
// settings.mjs
export default{
  lifecycle: {
    beforeMount: (app) => {
      app.provide('message', 'hello')

      // 注册一个选项对象
      app.component('my-component', {
        /* ... */
      })
    }
  },
}
```

#### mounted

- **类型:** `(app) => void`

在将应用实例挂载之后

示例：
```js
// settings.mjs
export default{
  lifecycle: {
    mounted: (app) => {
      /* ... */
    }
  },
}
```

---

### httpInterceptors 请求拦截

#### request

- **类型:** `function`

http 全局请求拦截器，配置详情参考[axios 拦截器](https://axios-http.com/zh/docs/interceptors)。

示例：
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
此参数若设置，将覆盖[内置默认配置](http://10.10.3.188:9090/castle/template/blob/master/src/utils/request-interceptor.js#L18-36)

---

#### response

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
此参数若设置，将覆盖[内置默认配置](http://10.10.3.188:9090/castle/template/blob/master/src/utils/request-interceptor.js#L45-105)

### userApiImplement 认证处理

用户认证鉴权等一系列实现过程

- **类型:** 
```ts
{ 
  login: (loginForm: { username: string, password: string, encryptPassword: string } ) => Promise<string>, 
  logout: () => Promise<any>, 
  getUserInfo: () => Promise<{ name: string, [key: string]: any}>, 
  getPermissionData: (userInfo: object) => Promise<{ permissionCodes: string[], [key: string]: any }>,
  getVerificationCode: () => Promise<verificationCodeSrc: string>,
  rsaPublicKey: () => Promise<publicKey: string>
}
```

- **示例:** 
```js
{
  /**
   * 用户登录的实现方法
   * loginForm包含：
   * @username (用户名)
   * @password (密码)
   * @verificationCode (验证码)
   * @encryptUserName (MD5加密后的用户名)
   * @encryptPassword (RSA加密后的密码)
   * @encryptVerificationCodeAndPassWord (RSA加密后的验证码+密码)
   */
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

  // 获取图形验证码数据的实现方法（当此方法没有配置是，默认不显示验证码输入框）
  async getVerificationCode() {
    // ...
    // 获取图形验证码，示例：
    // const { img } = await fetch('http://10.13.4.66:8081/reserver/auth/code').then(r => r.json())
    // return img
    // ...
    return Promise.resolve(verificationCodeSrc); // 返回 verificationCodeSrc 为 Base64 图片数据
  },

  // 设置 RSA 加密的公钥，将作用于 login 方法，返回 encryptPassword 和 encryptVerificationCodeAndPassWord
  async rsaPublicKey() {
    // 可以直接前端设置，或者在这里通过后端接口获取公钥。
    return Promise.resolve(publicKey); // 返回 publicKey<string>
  },

  // 自定义其他组件（在登陆按钮下面显示）
  // 注意：Components1 组件内如果使用 position: fixed，请自行修改 login-form-wrap: { backdrop-filter: unset; }
  customComponents: [h(Components1)], // 使用方法参考 userNavigationComponents
}
```

### userNavigation 用户下拉菜单

- **类型:** `navigationItem[]`
- **默认值:** `undefined`

用户下拉菜单配置

- `label` 列表的文字
- `handleFn` 点击触发的函数，默认参数为 router
- `displayFn` 控制显示与否的函数，return 布尔值

示例：
```js
// settings.mjs
export default {
  userNavigation: [
    {
    label: '设置',
    handleFn: router => router.push('/setting'),
    },
    {
      label: '登录',
      handleFn: router => router.push('/login'),
      displayFn: () => !localStorage.getItem('token'),
    }
  ],
}
```

### userNavigationComponents 顶部导航栏自定义组件

- **类型:** `componentsVNode[]`
- **默认值:** `undefined`

示例：
```js
// settings.mjs
import { h } from 'vue';
import Components1 from 'path/to/component'
export default {
  userNavigationComponents: [h(Components1)],
}
```

### userNavigationAvatar 顶部导航栏自定义头像 <Badge text="2.1.31+"/>

- **类型:** `componentsVNode[]`
- **默认值:** `undefined`

示例：
```js
// settings.mjs
import { h } from 'vue';
import Components2 from 'path/to/component'
export default {
  userNavigationAvatar: h(Components2),
}
```


### darkness 暗黑模式

基于 [darkreader](https://github.com/darkreader/darkreader) 来实现的暗黑模式

- **类型:** 
```ts
{ 
  showSwitch: boolean, // 是否显示切换开关
  defaultMode: 'light' | 'dark', // 默认为 light
  theme: Partial<DarkReader.Theme>, // 详见：https://github.com/darkreader/darkreader/blob/9654563378d07cc342ecb9ce25d5c5c5e18bfa81/src/definitions.d.ts#L51
  fixes: DarkReader.DynamicThemeFix, // 详见：https://github.com/darkreader/darkreader/blob/9654563378d07cc342ecb9ce25d5c5c5e18bfa81/src/definitions.d.ts#L145
}
```



### layout 布局

- **类型:** `object`
- **默认值:** `{}`

布局配置，详见：[Ant Design Pro Layout](https://github.com/vueComponent/pro-components/tree/next/packages/pro-layout)


### handleMenuItem 目录项处理

- **类型:** `function`
- **默认值:** `undefined`

对目录项定制化处理，可结合环境变量，对不同的环境修改目录项的任意 meta 字段

- **示例:** 
```js
handleMenuItem(menuItem) {
  // ... 
  // 处理目录项数据 menuItem
  // ...
  return menuItem
}

```


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

### 开发服务配置 

- **类型：** `({ command: string, mode: string, env: object }) => object`

开发服务配置选项，详情见：[Vite 开发服务器选项](https://cn.vitejs.dev/config/server-options.html)

其中参数 command 和 mode，请见 [Vite 情景配置](https://cn.vitejs.dev/config/#conditional-config)，env 请见 [Vite 环境变量](https://cn.vitejs.dev/config/#async-config)

## 环境变量

Vite 在一个特殊的 import.meta.env 对象上暴露环境变量，详见：[Vite 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html#env-variables-and-modes)

index.html 通过特殊的 %ENV_NAME% 语法在 HTML 文件中使用，见：[HTML 环境变量替换](https://cn.vitejs.dev/guide/env-and-mode.html#html-env-replacement)

