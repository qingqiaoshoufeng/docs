# ProCard 高级卡片

承载内容的容器，提供标准卡片样式。

## 使用

### 简单卡片
<demo src="./pro-card-demos/basic.vue"></demo>


### 多标签卡片
<demo src="./pro-card-demos/multi-tab.vue"></demo>

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
| actions | 定义右上角操作按钮的数据 | `{ key?: string, label: string, type: string, icon: VueComponent, clickCallback: () => void }[]` | - |

### 插槽

| 插槽名称 | 说明 |  参数  |
| :----: | :--: | :----: |
| default | 默认中间内容插槽 | - |
| [name] | 多标签卡片时，以每个标签的key值绑定对应的内容的插槽 | - |
| ... | 其他插槽可以参考[card 组件](http://10.13.4.128:1111/components/card-cn) | - |