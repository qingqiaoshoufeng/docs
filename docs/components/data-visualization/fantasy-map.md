# FantasyMap 地图

地图组件以[leaflet](https://leafletjs.cn/)为基础，加载[天地图](https://www.tianditu.gov.cn/)数据，在此基础上，我们拓展了全国、省、市、区（县）四级区域显示，并支持下钻加载。

同时我们支持叠加[AntV L7](https://l7.antv.antgroup.com/)场景，以支持点图、飞线图、热力图等等功能。



## 使用

此组件依赖了 geoJson 的数据，请将 [geoJson 数据](http://10.10.3.188:9090/castle/components/geo-json) 拷贝到 `/public/geo-json/` 下，也可以通过 `geoJsonPath` 修改对应的文件夹地址。

### 基本使用

<demo src="./fantasy-map-demos/basic.vue"></demo>

### 自定义区域内容

<demo src="./fantasy-map-demos/custom-area-content.vue"></demo>

### 自定义区域背景颜色

<demo src="./fantasy-map-demos/custom-area-background-color.vue"></demo>

### 叠加L7飞线图

<demo src="./fantasy-map-demos/l7-line-scene.vue"></demo>

### 叠加L7热力图

<demo src="./fantasy-map-demos/l7-heat-scene.vue"></demo>

更多叠加的L7类型，请参考[L7官方示例](https://l7.antv.antgroup.com/examples)

## API

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
|  tiandituToken  | 天地图鉴权key | String |  'cf8b627df2989291ecfc67605220bf98'  |
|  mapConfig  | leaflet的map类的config参数,详情请看[leaflet](https://leafletjs.com/reference.html#map-example) | Object |  无  |
|  mapTileType  | 天地图底图类型 | String |  'vec_w'  |
|  textTileType  | 天地图注记类型 | String |  'cva_w'  |
|  zoom  | 地图缩放大小 | Number |  8  |
|  center  | 地图默认定位中心(无geo层时使用) | Array |  [29.284433, 120.3]  |
|  geoEnable  | 是否展示geo图层 | Boolean |  true  |
|  geoId  | geo图层展示地区编号, 如world, china, 330000 | String |  '330000'  |
|  geoJsonPath  | geoJson文件相对存放路径 | String |  './geo-json/'  |
|  areaDisabledColor  | geo地区块禁用颜色 | String |  '#092867'  |
|  areaEnabledColor  | geo地区块可用颜色 | String |  '#0151C390'  |
|  areaHighlightColor  | geo地区块高亮颜色 | String |  '#049EFF'  |
|  areaBorderColor  | geo地区块边框颜色 | String |  '#00ffff'  |
|  geoStyle  | leaflet的geoJSON类的style参数,详情请看[leaflet](https://leafletjs.com/reference.html#geojson) | Object |  无  |
|  customAreaMakerContentFn  | 自定义区域块标注内容 | Function |  无  |
|  customAreaMakerFillColorFn  | 自定义区域块可用状态填充颜色 | Function |  无  |
|  l7Layer  | L7图层,具体使用方法请看[AntV L7](https://l7.antv.antgroup.com/tutorial/map/leaflet) | Object |  无  |
|  tileLayerEnable | 关闭瓦片图层 | Boolean | true |
