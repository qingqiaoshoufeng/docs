# Pro List 列表

业务中最常见的列表业务，主要包含高级筛选，表格列表和分页。


## 使用

### 基本使用
<demo src="./pro-list-demos/basic.vue"></demo>

## API

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
| getListFn | 获取列表数据的接口方法，return `Promise<array>` | function | - |
| columns | 表格列的配置描述，具体项见[这里](https://antdv.com/components/table-cn#Column) | array | - |
| layout | 表单布局 | 'horizontal'|'vertical'|'inline' | 'horizontal' |
| paginationConfig | 分页配置 | object | { alias: { page: 'page', limit: 'limit', list: 'list', total: 'total' }, limit: 10 } |
| defaultFilterValue | 顶部筛选默认值 | object | - |

### 插槽
| 插槽名 | 说明 | 类型 |
| :----: | :--: | :--: |
| filters | 顶部筛选区域插槽 | v-slot:filters="{ filterFormState }" |
| bodyCell | 个性化单元格 | v-slot:bodyCell="{text, record, index, column}" |
| right-actions | 右上角的操作插槽 | - |