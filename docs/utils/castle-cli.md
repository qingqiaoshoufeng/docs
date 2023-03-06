# Castle 脚手架内置

脚手架会在应用内通过[provide](https://cn.vuejs.org/guide/components/provide-inject.html) 注入一些常用工具函数。


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

## downloadFile

```js
// const downloadFile = inject('downloadFile')
downloadFile(path, fileName, config: object = {}, method: string = 'get')
```

**参数：**：
1. `path` (string): 下载链接
2. `fileName` (string): 下载文件名
3. `config = {}` (object): 其他请求参数，见 [axios-config](http://axios-js.com/zh-cn/docs/index.html#axios-config)
4. `method = 'get'` (string): 请求方式，默认为 get

**返回：**

(promise): promise 对象

---

## eventBus

事件总线，封装好的 [mitt](https://www.npmjs.com/package/mitt)。

**使用：**

```js
// const bus = inject('bus')

// listen to an event
bus.on('foo', e => console.log('foo', e) )

// listen to all events
bus.on('*', (type, e) => console.log(type, e) )

// fire an event
bus.emit('foo', { a: 'b' })

// clearing all events
bus.clear()

// working with handler references:
function onFoo() {}
bus.on('foo', onFoo)   // listen
bus.off('foo', onFoo)  // unlisten
```