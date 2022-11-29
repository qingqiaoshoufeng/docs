# 路由

内置vite插件[vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)，读取`src/pages`文件夹下的vue文件，生成vue-router的路由信息，减少代码工作量.

### 基本路由

Pages 会自动将您的 pages 目录中的文件映射到带有
一样的名字：

-  `src/pages/users.vue` -> `/ users`
-  `src/pages/users/profile.vue` -> `/users/profile`
-  `src/pages/settings.vue` -> `/settings`

### 索引路由

名称为`index`的文件被视为路由的索引页面：

-  `src/pages/index.vue` -> `/`
-  `src/pages/users/index.vue` -> `/users`

### 动态路由

动态路由使用方括号表示。目录和页面都可以
动态：

-  `src/pages/users/[id].vue` -> `/users/:id` (`/users/one`)
-  `src/pages/[user]/settings.vue` -> `/:user/settings` (`/one/settings`)

任何动态参数都将作为 props 传递给页面。例如，给定
文件`src/pages/users/[id].vue`，路径`/users/abc`将被传递
以下 props：

```json
{ "id": "abc" }
```

### 嵌套路由

创建内嵌子路由，你需要添加一个 Vue 文件，同时添加一个与该文件同名的目录用来存放子视图组件。

比如这个目录结构：

```
src/pages/
  ├── users/
  │  ├── [id].vue
  │  └── index.vue
  └── users.vue
```

将生成此路由配置：

```json5
[
  {
    "path": "/users",
    "component": "/src/pages/users.vue",
    "children": [
      {
        "path": "",
        "component": "/src/pages/users/index.vue",
        "name": "users"
      },
      {
        "path": ":id",
        "component": "/src/pages/users/[id].vue",
        "name": "users-id"
      }
    ]
  }
]
```

### 通配路由

通配路由用包含省略号的方括号表示：

-  `src/pages/[...all].vue` -> `/*` (`/non-existent-page`)

省略号后面的文本将用于命名路由，并用作传递路由参数的props的名称。

### SFC 自定义语法路由数据

通过 SFC 定义语法添加路由 meta 数据，这些数据将在路由生成之后直接添加或覆盖到对应的路由上面。

- 支持的类型： JSON, JSON5, YAML
- 默认：JSON5

JSON/JSON5:

```json
<route lang="json">
{
  "name": "name-override",
  "meta": {
    "requiresAuth": false
  }
}
</route>
```

### 排除

你可能有一些文件不想被解析成路由的文件，比如说页面级的component，这时你只需要简单的在你想排除的文件的名称前加一个`_`下划线即可。

比如：

```
src/pages/
  ├── users/
  │  ├── components/
  │  |   └── _button.vue
  │  └── index.vue
  └── users.vue
```
