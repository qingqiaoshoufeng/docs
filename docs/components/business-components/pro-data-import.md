# ProDataImport 高级数据导入

上传数据文件，完成数据导入功能。

## 使用

### 基本使用
<demo src="./pro-data-import/basic.vue"></demo>

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
| visible | 绑定上传弹窗的显示 | boolean | false |
| accepts | 接受上传的文件类型 | [ 'excel' &#124; 'csv' ] | - |
| action | 上传的地址 | string &#124; (file) => Promise | - |
| uploadProps | 其他上传组件的参数可以参考[upload 组件](http://10.13.4.128:1111/components/upload-cn)| - | - |
| handleResult | 处理上传后的回调函数，返回的数据将影响到上传结果 | () => { total: number, success: number, error: number, status: boolean, other?: any } | - |
| handleDownloadErrorResult | 当 `handleResult` 返回的 `status` 为 `false` 时，结果页点击下载错误数据的回调函数(`result` 为 `handleResult` 方法返回的数据) | (result) => void | - |