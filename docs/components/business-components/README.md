# @castle/business-components

<package-version name="@castle/business-components" />


封装各种业务开发中的各种搞频率场景，统一开发标准，提高开发效率。

## 安装

```bash
yarn add @castle/business-components
```

## 引入

### 全局引入
```js
import ComponentsTemplate from "@castle/business-components";
import "@castle/business-components/dist/style.css";

app.use(ComponentsTemplate);
```
### 局部引入
```js
import { ProList, FormPreviewText, ... } from "@castle/business-components";
```