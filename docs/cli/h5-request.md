# 请求与数据

### 发起请求

采用 [axios](https://github.com/axios/axios) 做为请求的资源库。

```js
import axios from 'axios'

axios
  .get("/api/get-list")
  .then((res) => {
    // 处理返回数据
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {});
```

### Base Url

BaseUrl 通过 [环境变量](./#环境变量) 来配置，通过添加 `VITE_API_BASE_URL` 来添加对应的请求前缀

### 请求代理

脚手架使用 `Vite` 的 `http-proxy` 进行代理，配置见[开发服务配置](./#开发服务配置)
