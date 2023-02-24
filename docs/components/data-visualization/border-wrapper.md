# BorderWrapper 组件

## 使用

### 基本使用

<demo src="./border-wrapper-demos/demo0.vue"></demo>

### 类型2用法

<demo src="./border-wrapper-demos/demo1.vue"></demo>

### 类型3用法

<demo src="./border-wrapper-demos/demo2.vue"></demo>

## API

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
|  type  | 边框类型，可选值 1，2 和 3 | Number |  1  |
|  borderPosition  | 四角边框，默认全部显示 | Array |  ['left-top', 'right-top', 'left-bottom', 'right-bottom']  |
|  borderColor  | 边框颜色 | String |  'rgba(29, 226, 255, 0.6)'  |
|  backgroundStyle  | 容器背景样式 | Object |  { 'box-shadow': 'rgba(29, 226, 255, 0.3) 0px 0px 30px 3px inset' }  |
|  contentStyle  | 内容插槽样式 | Object |  '{ padding: '16px' }'  |
|  content | 内容插槽 | slot |  |