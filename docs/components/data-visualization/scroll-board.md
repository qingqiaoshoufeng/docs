# ScrollBoard 滚动板

滚动板可以单条轮播也可以整页轮播，基于 antdv 的 [table](https://antdv.com/components/table-cn) 组件封装。


## 使用

### 基本使用


<demo src="./scroll-board-demos/basic.vue"></demo>

## API

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
|  showListNum  | 显示的列表的行数 | Number |  5  |
|  interval  | 滚动间隔时间（ms） | Number |  2000  |
|  scrollStep  | 行滚动还是页滚动 | String |  'item' | 'page'  |
|  ...  | 其他参数和使用方式请参考 [Antdv Table](https://antdv.com/components/table-cn#API)，ScrollBoard 相当于是添加了上述几个属性的 ATable | Boolean |  true  |
