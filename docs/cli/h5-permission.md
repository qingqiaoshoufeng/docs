# 权限

### 页面权限   

- **类型:** `{ requiresAuth: boolean, permissions: string[] }`
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

### 业务权限数据获取并配置

```javascript
// project-config.mjs 文件中
userApiImplement: {
    getPermissionData: async () => {
        return {
            permissionCodes: ['admin'],  
        }
    },
}
```

