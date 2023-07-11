# KeepAlive

通过 [SFC 自定义语法路由数据](./router.md#sfc-自定义语法路由数据) 参数 `meta.keepAlive` 来控当前页面是否需要缓存
- keepAlive (string)：当前页面的name（见下面解释）

:::tip
页面的 name 并非路由的 name，必须在页面里设置，比如当前页面需要设置name为 `Home`：

组合式api:
```vue
<route lang="json">
{
  "meta": {
    "keepAlive": "Foo"
  }
}
</route>

<script setup name="Foo">
// ...
</script>

<template>
  <!-- ... -->
</template>
```

选项式api:
```vue
<route lang="json">
{
  "meta": {
    "keepAlive": "Foo"
  }
}
</route>

<script>
export default {
  name: "Foo",
  //...
};
</script>

<template>
  <!-- ... -->
</template>
```

如果遇到多层路由嵌套使用，请务必保证父级 router 也要添加 `meta.keepAlive` 参数，并且使用全局 `<PageLayout />` 组件代替 `<router-view />` 组件即可

```vue
<route lang="json">
{
  "meta": {
    "keepAlive": "Foo"
  }
}
</route>

<script steup name="Foo">
// ...
</script>

<template>
  <div class="page-wrap">
    <PageLayout />
  </div>
</template>
```
:::

