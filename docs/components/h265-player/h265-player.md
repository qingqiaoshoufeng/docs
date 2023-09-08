# H265播放器

支持H265的播放器组件。


## 使用

### 播放文件
<demo src="./h265-player/basic.vue"></demo>

### 播放视频流
<demo src="./h265-player/stream.vue"></demo>

## API

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
| url | 视频资源地址 | string | - |
| isStream | 是否为视频流(默认为文件) | boolean | false |
| autoplay | 是否自动播放视频 | boolean | false |
| useHxH265Play | 强制使用软解（默认为自动根据客户浏览器是否支持硬解而自动调用） | boolean | false |

### 插槽
| 插槽名 | 说明 | 类型 |
| :----: | :--: | :--: |
| sideBar | 状态栏插槽 | - |
