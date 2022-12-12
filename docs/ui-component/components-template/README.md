# 使用

组件库依赖 [Ant Design Vue](https://antdv.com/components/overview-cn), 请先安装 Ant Design Vue。

## 切换公司镜像源

```
nrm add hx http://10.13.4.128:4873

nrm use hx
```

## 部分安装

```
yarn add components-template

import { HxDemo } from "components-template";
import "components-template/dist/style.css";

app.use(HxDemo)
```

## 或者全量安装

```
yarn add components-template

import ComponentsTemplate from "components-template";
import "components-template/dist/style.css";

app.use(ComponentsTemplate)
```