# 侧边栏目录

项目会读取`src/pages`文件夹下的vue文件，自动生成目录，当然实际上的我们需要的目录会和自动生成的有出入，我们可以根据以下方式来调整。

### 隐藏目录

1. 所有在根目录`/`下面的路由，都会生成目录，如果不需要生成目录，则可以通过[排除](./router.md#排除)路由生成来处理

2. 如果需要生成路由数据，但是不希望在目录里面，可以通过 [SFC 自定义语法路由数据](./router.md#sfc-自定义语法路由数据) 里面 `meta` 里面的配置来隐藏目录
    - hideInMenu (boolean)：隐藏当前目录
    - hideChildrenInMenu (boolean)：隐藏所有子目录

    ```json
    <route>
      {
        meta: {
          hideChildrenInMenu: true,
          hideInMenu: true,
        }
      }
    </route>
    ```

### 层级目录

要生成层级目录，我们需要调整`src/pages`里面对应的文件结构，参考 [嵌套路由](./router.md#嵌套路由)。

### 目录排序

- 可以通过 [SFC 自定义语法路由数据](./router.md#sfc-自定义语法路由数据) 里面 `meta` 里面的配置来隐藏目录
    - sort (number)：排序的权重，越大越靠后

### 外部链接   

通过 [SFC 自定义语法路由数据](./router.md#sfc-自定义语法路由数据)对应的参数处理。

参考：

```json
<route>
  {
    path: "https://next.antdv.com/",
    meta: {
      title: "外部链接",
      icon: "DashboardOutlined",
      target: "_blank",
      sort: 3
    }
  }
</route>
```
