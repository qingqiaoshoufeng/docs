# 样式

## 全局样式

在生命周期里面import样式文件，如：

```js
// settings.mjs
export default{
  lifecycle: {
    beforeMount: () => {
      // 引入全局样式文件
      import('@/assets/global.less')
    }
  },
}
```

## tailwindcss

Castle 内置了 [tailwindcss](https://tailwindcss.com/) , 可直接使用，同时推荐安装VSCode插件 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)