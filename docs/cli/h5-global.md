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

已内置`@vitejs/plugin-vue-jsx`插件，支持`JSX`语法

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

已内置`vite-plugin-vue-setup-extend`插件，可以按下面方式书写，更方便。

```
<script setup name="firstPage">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('mounted')
})
</script>
```
