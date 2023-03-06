# Castle Use

## 安装

```bash
yarn add @castle/castle-use
```

## 引入

```js
import { useList, useDetail, useSubmit, useDeleteItem ... } from "@castle/castle-use";
```

## useList

获取列表数据的封装，也可直接使用 [Pro List 组件](/components/business-components/pro-list.html) 

#### 基本使用

```vue
<script setup>
import axios from 'axios'

const {
  query, // 请求参数数据 Ref<Query>
  page, // 列表页数 Ref<number>
  limit, // 列表分页大小 Ref<number>
  total, // 列表数据总条数 Ref<number>
  list, // 列表数据的 Ref<ListItem[]>
  loading, // 是否在请求中的状态 Ref<boolean>
  loadList, // 请求加载列表数据的方法 () => void
  filter, // 请求检索查询列表数据的方法，和loadList不同的是，请求会自动带上分页参数 （page = 1），() => void
  pageChange, // 请求加载列表数据的方法，和loadList不同的是，请求会自动带上分页参数（page, limit）,一般配合分页组件使用，() => void
} = useList(
  /**
   * 分页数据key值映射，必须
   * @param {object} paginationKeys
   * @param {string} paginationKeys.list 返回列表数据的 key 值
   * @param {string} paginationKeys.page 返回列表页数的 key 值
   * @param {string} paginationKeys.limit 返回列表分页大小的 key 值
   * @param {string} paginationKeys.total 返回列表数据总条数的 key 值
   */
  {
    list: 'data'
    page: 'page',
    limit: 'limit',
    total: 'total'
  },
  /**
   * 其他配置参数
   * @param {object} config
   * @param {function} config.getListFn 请求列表的回调函数，return axios 的 Promise 对象，必须
   * @param {function} config.transformQuery 加工转换查询数据，return 为转换后的查询参数，非必须
   * @param {function} config.transformRes 转换请求后返回的数据，return 为转换后的数据，非必须
   * @param {function} config.immediate 是否在初始化时加载，默认: `false`，非必须
   */
  {
    getListFn: () => axios.get('/list'), 
    transformQuery: (query) => { 
      // 在此可以加工 query 数据
      return query 
    },
    transformRes: (res) => { 
      // 在此可以加工 res 数据
      return res 
    },
    immediate: false
  }
)

// 可以设置默认的查询参数，并绑定到对应的查询表单组件
query.value.type = 'xxx'

// 可以设置对应的分页参数
limit.value = 10

// 请求列表数据
loadList()

// 绑定分页组件的查询回调方法
const pageChangFn = (page, pageSize) => pageChange(page, pageSize)

// 绑定查询表单的回调方法
const filterList = () => filter()
</script>
```

#### 进阶使用

在实际使用的时候，可以将第一个参数 paginationKeys 通过偏函数处理，统一处理分页数据的key

如：

```js
import { partial } from 'lodash'
const getList = partial(useList, { page: 'curPage', limit: 'countPerPage', list: 'currentData'})
```

此时，`getList` 函数已经处理好了分页的key，其他所有的列表请求都可以通过 `getList` 去获取就好
 

## useDetail

获取详情数据的封装

#### 基本使用

```vue
<script setup>
import axios from 'axios'

const id = ref(1)

const { 
  detail, // 返回的详情数据 Ref<Detail>
  loading, // 是否在请求中的状态 Ref<boolean>
  loadDetail, // 请求详情数据的方法 () => void
} = useDetail(
  /**
   * 参数配置
   * @param {object} config
   * @param {function} config.getDetailFn 请求详情的回调函数，return axios 的 Promise 对象，必须
   * @param {function} config.transformRes 转换请求后返回的数据，return 为转换后的数据，非必须
   */
  { 
    getDetailFn: () => {
      return axios.get(`/detail?id=${id}`)
    },
    transformRes: (res) => { 
      // 在此可以加工 res 数据
      return res 
    },
  }
)

// 请求详情数据
const getItemDetail = (id) => {
  id.value = id
  loadDetail()
}
</script>
```

## useSubmit

封装表单提交/更新

#### 基本使用

```vue
<script setup>
import axios from 'axios'

const { 
  submit, // 提交表单的方法，当config.submitFn不为空可用 () => void
  modify, // 更新表单的方法，当config.modifyFn不为空可用 () => void
  loading, // 是否在请求中的状态 Ref<boolean>
} = useSubmit(
  /**
   * 提交或修改成功后的回调方法，非必须
   * @param {function} callBackFn 
   */
  () => {
    console.log('操作成功')
  }, 
  /**
   * 参数配置
   * @param {object} config
   * @param {function} config.validateFn 验证表单方法，非必须，默认值为 `() => Promise.resolve()`
   * @param {function} config.submitFn 提交表单方法，非必须
   * @param {function} config.modifyFn 修改表单方法，非必须
   */
  {
    validateFn: () => {
      // 在这里验证表单
      return Promise.resolve()
    },
    submitFn: () => {
      return axios.post('/add', { name: 'xxx' })
    }),
    modifyFn: () => {
      return axios.put('/update', { name: 'xxy' })
    },
  }
)

// 提交表单的方法
const submit = () => submit()

// 修改表单的方法
const modify = () => modify()
</script>
```

#### 进阶使用

如同 `useList` 一样，可以将第一个参数 callBackFn 通过偏函数处理，统一处理请求返回的响应动作

## useDeleteItem

封装删除某项

#### 基本使用

```vue
<script setup>
import axios from 'axios'

const id = ref(1)

const {
  loading, // 是否在请求中的状态 Ref<boolean>
  submitDelete, // 删除项的方法 () => void
} = useDeleteItem(
  /**
   * 删除成功后的回调方法，非必须
   * @param {function} callBackFn 
   */
  () => {
    console.log('操作成功')
  }, 
  /**
   * 参数配置
   * @param {object} config
   * @param {function} config.deleteItemFn 删除项的方法，非必须
   */
  { 
    deleteItemFn: () => {
      return axios.delete(`/delete?id=${id}`)
    }
  }
)

// 请求删除项
const removeItem = (id) => {
  id.value = id
  submitDelete()
}
</script>
```

#### 进阶使用

如同 `useList` 一样，可以将第一个参数 callBackFn 通过偏函数处理，统一处理请求返回的响应动作
