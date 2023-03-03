# VirtualNumber 大屏数字组件

大屏数字组件主要用于数字展示。


## 使用

### 基本使用

<demo src="./virtual-number-demos/demo0.vue"></demo>

### 精度和百分比

<demo src="./virtual-number-demos/demo1.vue"></demo>

### 颜色类型

<demo src="./virtual-number-demos/demo2.vue"></demo>

### 前缀后缀和趋势

<demo src="./virtual-number-demos/demo3.vue"></demo>

### 是否使用分割符号和7-Segment字体

<demo src="./virtual-number-demos/demo4.vue"></demo>

### 计数器

<demo src="./virtual-number-demos/demo5.vue"></demo>

### 插槽(ps：数字插槽不能和计数器同时使用，前缀后缀趋势插槽可以)

<demo src="./virtual-number-demos/demo6.vue"></demo>

## API

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
|  value  | 原始值 | Number/String |  |
|  defaultValue  | 默认值，即value无效时取defaultValue, 如果 defaultValue为null，显示空白 | Number | 0 |
|  countUp  | CountUp配置参数对象,详情请看[CountUp](https://github.com/inorganik/CountUp.js) | Object | 看下方countUp属性 |
|  trend  | 趋势, 可选值：'up', 'down', '-'  | String |  |
|  precision  | 精度，保留几位小数 | Number | 0 |
|  separator | 分隔值的符号，默认值为‘,’（英文逗号） | String | , |
|  prefix | 前缀内容，也可以用插槽定义 | String |  |
|  suffix | 后缀内容，也可以用插槽定义 | String |  |
|  percentage | 按百分比计算显示, 如value=0.2, 显示为 20% | Boolean | false |
|  type | 颜色类型, 可选值： 'primary', 'success', 'warning', 'danger', 'info' | String |  |
|  digitalNumber | 是否使用7-Segment字体 | Boolean | true |

#### countUp

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
|  auto  | 是否自动开始计数 | Boolean | true |
|  startVal  | 计数初始值，不限正负数 | Number | 0 |
|  decimalPlaces  | 计数器数值精度 | Number | 0 |
|  duration  | 计数器动画持续时间，即计数器从开始到结束的时间，单位为秒 | Number | 2 |
|  useEasing  | 是否显示渐入渐出效果 | Boolean | true |
|  useGrouping  | 计数器是否采用带格式的值，如10,000和10000两种格式（分隔符用separator来定义 | Boolean | true |
|  separator  | 分隔值的符号，默认值为‘,’（英文逗号） | String | , |

### 插槽
| 插槽名 | 说明 |
| :----: | :--: |
| default | 默认插槽，定义显示内容，参数：value 原始值值，displayValue 显示值, 若配置countUp，则该插槽无效 |
| prefix | 前缀内容插槽 |
| suffix | 后缀内容插槽 |
| trend | 个性化趋势显示，参数：trend 趋势方向 |

### 方法
| 方法名 | 说明 | 入参 |
| :----: | :--: | :----: |
| start | 启动计数器 |  |
| reset | 重置计数器 |  |
| pauseResume | 切换暂停/恢复计数器 |  |
| restart | 重新启动计数器 |  |
