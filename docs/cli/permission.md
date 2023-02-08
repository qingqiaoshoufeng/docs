# 权限

### 页面权限   

- **类型:** `{ requiresAuth: boolean, permissions: string[]}`
#### requiresAuth
页面是否需要进行权限验证，默认值为 true。在页面里面，通过 [SFC 自定义语法路由数据](./router.md#sfc-自定义语法路由数据)参数 `meta.requiresAuth` 处理。

#### permissions
权限码配置。在页面里面，通过 [SFC 自定义语法路由数据](./router.md#sfc-自定义语法路由数据)参数 `meta.permissions` 处理，即用户拥有数组里面任意一个权限码，则可访问此页面，否则重定向到 403 页面。

::: tip
当 `requiresAuth` 不为 `false` (默认值为 `true`) 并且正确的处理好了[用户权限的数据（getPermissionData）](./README.md#userapiimplement)，此参数才会生效，
:::

参考：

```json
<route lang="json">
  {
    "meta": {
      "permissions": ["user:list"]
    }
  }
</route>
```

### 权限指令

全局权限指令，能简单快速的实现按钮级别的权限判断。

参考：

```html
<template>
  <!-- Admin can see this -->
  <el-tag v-p="['admin']">admin</el-tag>

  <!-- Editor can see this -->
  <el-tag v-p="['editor']">editor</el-tag>

  <!-- Editor can see this -->
  <el-tag v-p="['admin','editor']">Both admin or editor can see this</el-tag>
</template>
```



### 权限方法
在某些情况下,它是不适合使用 `v-p`，如元素标签组件，只能通过手动设置 `v-if`，可以使用全局权限判断函数，用法和指令 `v-p` 类似。

```vue
<template>
  <el-tab-pane v-if="checkPermission(['admin'])" label="Admin">Admin can see this</el-tab-pane>
  <el-tab-pane v-if="checkPermission(['editor'])" label="Editor">Editor can see this</el-tab-pane>
  <el-tab-pane v-if="checkPermission(['admin','editor'])" label="Admin-OR-Editor">Both admin or editor can see this</el-tab-pane>
</template>

<script setup>
import { inject } from 'vue'
const checkPermission = inject('checkPermission')
</script>
```