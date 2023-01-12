# 全局

### 全局状态
可通过 `inject` 拿到 `castleStores`

引用方式：
```js
<script setup>
  import { inject } from 'vue'
  const { useUserStore, useAppStore, usePermissionStore, useTabBarStore } = inject('castleStores')
</script>
```

### 全局loading

通过 [eventBus](../utils//README.md#eventbus) 事件 `castle-global-loading` 触发和关闭。

```ts
bus.emit(eventName: string = "castle-global-loading", true)
```



