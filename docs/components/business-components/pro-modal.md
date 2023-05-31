# ProModal 高级弹窗

同一个弹窗组件，内置三种弹窗样式。

## 使用

### 基本使用
<demo src="./pro-modal/basic.vue"></demo>

### 属性

| 属性名 | 说明 |  类型  | 默认值 |
| :----: | :--: | :----: | :----: |
| title | 弹窗标题 | string | '' |
| actionText | 操作类型显示的文案，显示在标题后面 | string | '' |
| width | 弹窗宽度 | string|number | '30vw' |
| visible | 弹窗的可见性 | boolean | false |
| showFullscreen | 是否显示全屏按钮 | boolean | true |
| fullscreen | 是否默认全屏显示 | boolean | false |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | boolean | true |
| modalType | 显示的弹窗的样式 | 'a-modal' &#124; 'a-drawer' | 'a-modal' |
| handleOkFn | 点击确认按钮之后的回调函数 | () => Promise<void> | - |
| handleCancelFn | 点击取消按钮之后的回调函数 | () => Promise<void> | - |
| okBtn | 确认按钮的控制 | { label: string, display: boolean } | - |
| cancelBtn | 确认按钮的控制 | { label: string, display: boolean } | - |
| proCardId | 当选择为覆盖 pro-card 的弹窗样式时，绑定的id （pro-card 需要设置同样的 id）| string | - |
| ... | 其他参数可以参考[modal 组件](http://10.13.4.128:1111/components/modal-cn) | - | - |

### 插槽

| 插槽名称 | 说明 |  参数  |
| :----: | :--: | :----: |
| default | 默认中间内容插槽 | - |
| title | 标题插槽，将覆盖默认的标题 | - |
| footer | 底部插槽，将覆盖默认的按钮 | - |