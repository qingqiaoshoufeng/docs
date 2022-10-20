# Utils工具集

脚手架会在应用内通过`provide`注入一些常用工具函数，此外，推荐 [vueuse](https://vueuse.org/)和[Lodash](https://www.lodashjs.com/)作为补充使用。


引用方式：
```js
// 组合式api
<script setup>
  import { inject } from 'vue'
  const downloadFile = inject('downloadFile')
</script>

// 选项式api
export default {
  inject: ['downloadFile']
}
```


### downloadFile

```js
downloadFile(path, fileName, [config = {}], [method = 'get'])
```

**参数**：
1. `path` (string): 下载链接
2. `fileName` (string): 下载文件名
3. `[config = {}]` (object): 其他请求参数，见 [axios-config](http://axios-js.com/zh-cn/docs/index.html#axios-config)
4. `[method = 'get']` (string): 请求方式，默认为 get

**返回：**

(promise): promise 对象

---