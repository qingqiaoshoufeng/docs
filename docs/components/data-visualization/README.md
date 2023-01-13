# 地图组件

地图组件以[leaflet](https://leafletjs.cn/)为基础，加载[天地图](https://www.tianditu.gov.cn/)数据，在此基础上，我们拓展了全国、省、市、区（县）四级区域显示，并支持下钻加载。

同时我们支持叠加[AntV L7](https://l7.antv.antgroup.com/)场景，以支持点图、飞线图、热力图等等功能。

### 安装

```bash
yarn add @castle/data-visualization
```


### 基本使用

<demo src="./demos/basic.vue"></demo>

### 自定义区域内容

<demo src="./demos/custom-area-content.vue"></demo>

### 自定义区域背景颜色

<demo src="./demos/custom-area-background-color.vue"></demo>

### 叠加L7飞线图

<demo src="./demos/l7-line-scene.vue"></demo>

### 叠加L7热力图

<demo src="./demos/l7-heat-scene.vue"></demo>