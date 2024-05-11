# 全局相关

### 全局状态
可通过 [inject](https://cn.vuejs.org/guide/components/provide-inject.html) 拿到 `castleStores`

引用方式：
```js
<script setup>
  import { inject } from 'vue'
  const { useUserStore, useAppStore, usePermissionStore, useTabBarStore } = inject('castleStores')
</script>
```
### 全局loading

::: tip
在 `@castle/castle-template` 的版本 `<= 2.0.1`时，事件名为：`castle-global-loading`
:::

通过 [eventBus](../utils//README.md#eventbus) 事件 `CASTLE__globalLoading` 触发和关闭。

```js
bus.emit("CASTLE__globalLoading", true)
```

### 全局定时器 <sup class="vt-badge" data-text="2.1.27+" />

通过 [eventBus](../utils//README.md#eventbus) 事件 `CASTLE__globalTimer` 订阅，时间周期为 1 秒。

```js
bus.on("CASTLE__globalTimer", async (t) => {
  if (!(t % 3)) {
    // 每3秒需要执行的内容
  }

  if (!(t % 10)) {
    // 每10秒需要执行的内容
  }
})
```

### 全局 ant-design-vue 日期组件汉化

比如：`DatePicker`组件默认为英文文案，需要汉化为中文文案。

在`settings.js`中初始化

```
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
```

### 自定义登录页

对于交互特别复杂，需要支持扫码登录、单点登录等场景，需要自定义登录页的，可以参考以下方式：

在`seetings.js`中初始化登录页路由

```
import Login from '@/components/login/index.vue'

mounted: (app) => {
  app.config.globalProperties.$router.addRoute({
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: false,
      permissions: [],
    },
  })
}
```
