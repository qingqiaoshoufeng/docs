# 大屏时间组件

大屏时间组件主要用于时间展示。

## 安装
```bash
yarn add @castle/data-visualization
```

## 引入

### 全局引入
main.js
```js
import ComponentsTemplate from '@castle/data-visualization'
import '@castle/data-visualization/dist/style.css'

app.use(ComponentsTemplate)
```
### 局部引入
```js
import { VirtualDate } from '@castle/data-visualization'
```

## 使用

### 基本使用

<demo src="./virtual-date-demos/demo0.vue"></demo>

### 日期时间显示格式

<demo src="./virtual-date-demos/demo1.vue"></demo>

### 相对时间显示

<demo src="./virtual-date-demos/demo2.vue"></demo>

### 文本颜色, 是否使用7-Segment字体

<demo src="./virtual-date-demos/demo3.vue"></demo>

### 时间按秒心跳，保持实时更新, 对相对时间无效

<demo src="./virtual-date-demos/demo4.vue"></demo>

## API

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
|  value  | 原始值 | Number/String/Date |  |
|  defaultValue  | 默认值，即value无效时取defaultValue, 如果 defaultValue为null，显示空白 | Number/String/Date | null |
|  format  | 日期时间显示格式 对相对时间无效，支持：年Y 月M 日D 时H 分m 秒s 时区Z 上下午A  | String | YYYY-MM-DD HH:mm:ss |
|  relative  | 启用相对时间显示 | Boolean | false |
|  type | 颜色类型, 可选值： 'primary', 'success', 'warning', 'danger', 'info' | String |  |
|  tick  | 时间按秒心跳，保持实时更新, 对相对时间无效 | Boolean | false |
|  digitalNumber | 是否使用7-Segment字体 | Boolean | true |

### 插槽
| 插槽名 | 说明 |
| :----: | :--: |
| default | 默认插槽，自定义显示内容，参数：value 原始值，displayValue 显示值， dayjs 日期时间实例 |
| prefix | 前缀内容插槽 |
| suffix | 后缀内容插槽 |