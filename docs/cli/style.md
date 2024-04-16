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
## PostCSS
> 对于 CSS 而言，可以在新项目中尝试放弃使用 Sass、Less 这样的处理器语言，因为：
> 
>* 这些处理器语言是在一定历史条件下的产物，虽然这些产物在一定程度上提高开发者的开发效率，但不同的处理器语言也同时增加了项目的维护成本（特别是多人协作，多团队协作的时候）。
>* 更建议使用 PostCSS 处理器，它类似于 CSS 中的 Babel，不但具备 Sass 和 Less 的功能，而且社区繁荣，同时还可以根据自己的需求扩展相关的插件。
>* 随着 CSS 的一些新特性出现，Sass 和 Less 以往的优势也会慢慢消失。

## tailwindcss

Castle 内置了 [tailwindcss](https://tailwindcss.com/) , 可直接使用，同时推荐安装VSCode插件 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### 概述

> Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的 class，它们能直接在脚本标记语言（例如：HTML、Javascript、React、Vue 等）中被引用。
> 使用 Tailwind，您可以通过直接在 HTML 中应用预先存在的类来设置元素样式。
> 使用实用程序类构建自定义设计，无需编写 CSS

### 示例
```html
<div class="bg-white dark:bg-gray-900">
  <div class="flex items-center justify-center h-screen">
    <div class="bg-gray-200 p-8 rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold mb-4">Hello, World!</h1>
      <p class="text-gray-600">This is a sample page using Tailwind CSS.</p>
    </div>
  </div>
</div>
```
上述示例中，使用了：
* `bg-white` 背景颜色为白色
* `dark:bg-gray-900` 暗黑模式下背景颜色为灰色
* `flex` 弹性布局
* `items-center` 垂直居中
* `justify-center` 水平居中
* `h-screen` 高度为屏幕高度
* `p-8` 内边距为8px
* `rounded-lg` 圆角为4px
* `shadow-lg` 阴影为4px
* `text-3xl` 字体大小为36px
* `font-bold` 字体加粗
* `mb-4` 外边距为4px
* `text-gray-600` 字体颜色为灰色
这种方法使我们能够实现完全自定义的组件设计，而无需编写一行自定义 CSS。

### 优势
当你第一次看到它时，几乎不可能认为这是一个好主意——**你必须实际尝试一下**。

但是，一旦真正以这种方式构建了一些东西，你很快就会注意到一些非常重要的好处：
- **无需浪费精力发明类名**。不再需要添加愚蠢的类名，例如`sidebar-inner-wrapper`仅仅为了能够设计某些东西的样式，也不再为实际上只是一个Flex容器的东西的完美抽象名称而烦恼。
- **CSS文件内容减少**。使用传统方法，每次添加新功能时，您的CSS文件都会变得更大。有了实用程序，一切都可以重用，因此您很少需要编写新的CSS。
- **CSS更改后破坏性小**。 CSS是全局性的，当你做出改变时你永远不知道你会破坏什么。 HTML中的类是本地的，因此您可以更改它们，而不必担心其他内容会被破坏。

当您意识到使用预定义的实用程序类专门使用 HTML 工作可以多么高效时，以任何其他方式工作都会感觉像是折磨。

### 配置
在项目根目录下 `tailwind.config.js` 文件配置

### 参考
* [Tailwind CSS 中文文档](https://www.tailwindcss.cn/)
* [Tailwind CSS 英文文档](https://tailwindcss.com/docs/installation)
* [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
