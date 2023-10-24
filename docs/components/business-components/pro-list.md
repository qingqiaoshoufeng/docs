# ProList 高级列表

业务中最常见的列表业务，主要包含高级筛选，表格列表和分页。

ProList 的诞生是为了解决项目中需要写很多 table 的样板代码的问题，所以在其中做了封装了很多常用的逻辑。这些封装可以简单的分类为预设行为与预设逻辑。

## 使用

### 基本使用
<demo src="./pro-list-demos/basic.vue"></demo>

## API

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
| getListFn | 获取列表数据的接口方法 | `(query: any) => Promise<array>` | - |
| columns | 表格列的配置描述，具体项见[这里](http://10.13.4.128:1111/components/table-cn#Column) | array | - |
| layout | 表单布局 | 'horizontal' &#124; 'vertical' &#124; 'inline' | 'horizontal' |
| paginationConfig | 分页配置 | object | { alias: { page: 'page', limit: 'limit', list: 'list', total: 'total' }, limit: 10 } |
| defaultFilterValue | 顶部筛选默认值 | object | - |
| showFilterActions | 是否显示筛选操作按钮 | boolean | false |
| resetFields | 是否显示筛选操作的重置按钮（当showFilterActions为true时）| boolean | false |
| ... | 其他参数可以参考[table 组件](http://10.13.4.128:1111/components/table-cn) | - | - |

### 插槽
| 插槽名 | 说明 | 类型 |
| :----: | :--: | :--: |
| filters | 顶部筛选区域插槽 | v-slot:filters="{ filterFormState, handleFilter  }" |
| bodyCell | 个性化单元格 | v-slot:bodyCell="{text, record, index, column}" |
| subTitle | 表格左上角的次要标题区域 | - |

### 事件
| 事件名 | 说明 |
| :----: | :--: |
| filter | 点击筛选时触发（当showFilterActions为true时），或者在filters插槽里面绑定的 handleFilter 方法触发时 |
| reset | 重置筛选的时触发（当showFilterActions为true时） |
| pageChang | 分页改变时触发 |

### defineExpose
| 名称 | 说明 | 类型 | 默认值 |
| :----: | :--: | :----: | :----: |
| loadList | 触发请求列表数据 | function | - |
| filter | 触发请求筛选列表数据 | function | - |
| resetForm | 重置筛选项表单 | function | - |
| loading | 请求的状态 | Ref<boolean> | false |
| list | 列表数据 | Ref<object> | - |
| query | 筛选项参数 | Ref<object> | - |
| tableRef | 表格组件的引用 | object | - |


