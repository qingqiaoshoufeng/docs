# KeepAlive

通过 [SFC 自定义语法路由数据](./router.md#sfc-自定义语法路由数据) 参数 `meta.keepAlive` 来控当前页面是否需要缓存
- keepAlive (string)：当前页面的name（见下面解释）

:::tip
页面的 name 并非路由的 name，必须在页面里设置，比如当前页面需要设置name为 `Home`：

组合式api:
```vue
<script setup name="Home">
// ...
</script>
```

选项式api:
```vue
<script>
export default {
  name: "Home",
  //...
};
</script>
```
:::
