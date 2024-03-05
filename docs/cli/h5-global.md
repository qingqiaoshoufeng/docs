# 全局相关

### 全局状态
可通过 [inject](https://cn.vuejs.org/guide/components/provide-inject.html) 拿到 `castleStores`

引用方式：
```js
<script setup>
  import { inject } from 'vue'
  const { useUserStore } = inject('castleStores')
</script>
```

### 支持`JSX`写法

已内置[@vitejs/plugin-vue-jsx](https://www.npmjs.com/package/@vitejs/plugin-vue-jsx)插件，支持`JSX`语法

### 组件`name`属性

对于自定义组件，需要指定`name`属性。下面是默认书写方式：

```
<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'firstPage'
})
</script>

<script>
onMounted(() => {
  console.log('mounted')
})
</script>
```

已内置[vite-plugin-vue-setup-extend](https://www.npmjs.com/package/vite-plugin-vue-setup-extend)插件，可以按下面方式书写，更方便。

```
<script setup name="firstPage">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('mounted')
})
</script>
```

### 图片懒加载 [vue-lazyload](https://blog.csdn.net/muzidigbig/article/details/115376889)

```
npm i vue-lazyload --save
```

```
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载的宽高比
  loading: loadimage, // 图片加载状态下显示的图片
  error: errorimage, // 图片加载失败时显示的图片
  attempt: 1, // 加载错误后最大尝试次数
})
```

### 其他优化

1. 在项目中使用`lodash-es`，`lodash` 没法 `treeshaking`，构建会包含全部方法。其他类似包有同样`es`版本的，优先使用`es`版本。

2. `lodash-es`已经包含了节流防抖，不需要单独引入`throttle-debounce`

3. `vue-use`已包含多种`resize`事件，不需要单独引入`element-resize-event`
