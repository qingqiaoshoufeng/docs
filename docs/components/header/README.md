# 大屏 Header 组件

大屏 Header 组件主要用于标题及头部内容展示。

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
import { Header } from '@castle/data-visualization'
```

## 使用

### 基本使用

<demo src="./demos/BasicHeader.vue"></demo>

## API

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
|  height  | 头部高度 | Number |  90  |
|  type  | 头部背景 svg 类型，可选值 1 和 2 | Number |  1  |
|  color  | 头部背景 svg 颜色 | String |  '#1de2ff'  |
|  animation  | 头部背景 svg 动画 | Boolean |  true  |
|  title  | 头部标题插槽 | slot |   |