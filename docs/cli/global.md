# 全局功能

### 全局loading

通过 [eventBus](../utils//README.md#eventbus) 事件 `castle-global-loading` 触发和关闭。

```ts
bus.emit(eventName: string = "castle-global-loading", true)
```

