# ScaleScreen 容器

大屏容器组件主要使用tansfrom的scale属性进行缩放，实现对大屏的适配，并通过props传入的fit和lock属性控制组件对父容器大小的适应和对长宽比是否进行缩放锁定。同时我们添加了可控制显隐的缩放按钮，方便全屏化展示。


## 使用

### 基本使用

<demo src="./scale-screen-demos/BasicScreen.vue"></demo>

## API

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
|  width  | 元素宽度 | Number |  1920  |
|  height  | 元素高度 | Number |  1080  |
|  target  | 页面的参照目标元素,默认取组件的父节点，支持css选择器 | String/Function |  'parent'  |
|  lock  | 缩放锁定比例 | Boolean |  true  |
|  fit  | 自动适应父容器尺寸，设置后 width height 的参数失效 | Boolean |  false  |
|  fullscreen  | 显示全屏切换按钮 | Boolean |  true  |
