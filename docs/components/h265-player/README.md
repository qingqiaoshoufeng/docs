# @castle/hx-h265-player

<package-version name="@castle/hx-h265-player" />


支持H265的播放器组件。

## 安装

```bash
yarn add @castle/hx-h265-player
```

## 1. 引入

### 全局引入
```js
import ComponentsTemplate from "@castle/hx-h265-player";
import "@castle/hx-h265-player/dist/style.css";

app.use(ComponentsTemplate);
```
### 局部引入
```js
import { HxH265Player } from "@castle/hx-h265-player";
```

## 2. 导入依赖资源

由于此方案使用了 Web Work 和 WebAssembly 相关技术软解视频，需要将 [相应的依赖文件(点击下载)](/h265Player.zip) 放置到 `public` 文件夹下

```
root                                 
├─ public                         
│  └─ h265Player                  
│     ├─ common.js                
│     ├─ decoder.js               
│     ├─ downloader.js            
│     ├─ libdecode.js             
│     └─ libdecode.wasm                         
```