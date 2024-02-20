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
