# CommonModal 组件

CommonModal 组件主要用于弹框展示。

## 使用

### 基本使用

<demo src="./common-modal-demos/demo0.vue"></demo>

### 自定义 width、height

<demo src="./common-modal-demos/demo1.vue"></demo>

### 自定义样式

<demo src="./common-modal-demos/demo2.vue"></demo>

## API

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
|  visible  | 对话框是否可见 | Boolean | false |
|  title  | 标题 | String | '' |
|  width  | 宽度 | [String, Number] | '52vw' |
|  height  | 高度  | [String, Number] | '30vw' |
|  bodyStyle  | 弹窗 content 区域样式  | Object | {} |
|  modalStyle | 弹窗 modal 区域样式 | Object | {} |
|  maskStyle | 蒙层样式 | Object | {} |
|  closeStyle | 右上角 close 按钮区域样式 | Object | {} |
|  maskClosable | 蒙层是否可点击关闭弹窗 | Boolean | false |
|  showFullScreen | 是否显示全屏按钮 | Boolean | true |

### 插槽
| 插槽名 | 说明 |
| :----: | :--: |
| default | 默认插槽，定义显示内容 |
| header | header 内容插槽 |
| close | close 内容插槽 |
| footer | footer 内容插槽 |