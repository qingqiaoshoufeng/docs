# 命名规范

## 文件夹及文件命名规则

所有文件和文件夹应该遵循 KEBAB_CASE 命名规则，即：名称中间的标点被替换成连字符（-），所有单词都小写，例如"get-user-name"
在components文件夹下面的vue文件，遵循 PASCAL_CASE 命名规则，即：将描述变量作用所有单词的首字母大写，然后直接连接起来，单词之间没有连接符，例如"MyComponentName"

## 使用英语

命名变量和函数时使用英语。

```js
/* Bad */
const xingming = 'Gustavo'
const pengyou = ['Kate', 'John']

/* Good */
const firstName = 'Gustavo'
const friends = ['Kate', 'John']
```

## 命名约定

- **变量**

小驼峰式命名法

```js
/* Bad */
const setConut = 10;
const getTitle = '啦啦啦';

/* Good */
const maxCount = 10;
const tableTitle = '啦啦啦';
```

- **常量**

使用大写字母和下划线来组合命名，下划线用来分割单词

```js
const MAX_COUNT = 10;
const URL = '//www.huifenqi.com';
```

- **函数**

小驼峰式命名法。

```js
/* Bad */
function Read(): boolean {
  return true;
}

/* Good */
function getName(): string {
  return this.name;
}
```

- **类 & 构造函数**

大驼峰式命名法，首字母大写

```js
class Person {
  public name: string;
  constructor(name) {
    this.name = name;
  }
}

const person = new Person('mevyn');
```

- **类的成员**

1. 公共属性和方法：跟变量和函数的命名一样。
2. 私有属性和方法：前缀为_(下划线)，后面跟公共属性和方法一样的命名方式。

```js
class Person {
  private _name: string;
  constructor() { }
  // 公共方法
  getName() {
    return this._name;
  }
  // 公共方法
  setName(name) {
    this._name = name;
  }
}
const person = new Person();
person.setName('mervyn');
person.getName();
```


## S-I-D

名称必须简短、直观且具有描述性：

- **Short**. 一个名字不能花很长时间输入，因此要记住;
- **Intuitive**. 名字必须读起来自然，尽可能接近普通话;
- **Descriptive**. 名称必须以最有效的方式反映它的作用/拥有的东西.

```js
/* Bad */
const a = 5 // "a" could mean anything
const isPaginatable = a > 10 // "Paginatable" sounds extremely unnatural
const shouldPaginatize = a > 10 // Made up verbs are so much fun!
/* Good */
const postCount = 5
const hasPagination = postCount > 10
const shouldPaginate = postCount > 10 // alternatively
```

## 避免缩写

不要使用缩写。它们只会降低代码的可读性。找到一个简短的描述性名称可能很难，但使用缩写并不是不这样做的借口。

```js
/* Bad */
const onItmClk = () => {}
/* Good */
const onItemClick = () => {}
```

## 避免上下文重复

名称不应与定义它的上下文重复。如果不降低名称的可读性，请始终从名称中删除上下文。

```js
class MenuItem {
  /* Method name duplicates the context (which is "MenuItem") */
  handleMenuItemClick = (event) => { ... }
  /* Reads nicely as `MenuItem.handleClick()` */
  handleClick = (event) => { ... }
}
```

## 反映预期结果

名称应该反映预期的结果。

```jsx
/* Bad */
const isEnabled = itemCount > 3
return <Button disabled={!isEnabled} />
/* Good */
const isDisabled = itemCount <= 3
return <Button disabled={isDisabled} />
```

---

# 命名函数

## A/HC/LC 模式

命名函数时有一个万能的模式可以遵循:

```
prefix? + action (A) + high context (HC) + low context? (LC)
```

在下表中查看如何应用此模式。

| Name (命名)    | Prefix (前缀)   | Action (A 动作) | High context (HC 高语境) | Low context (LC 低语境) |
| ---------------------- | -------- | ---------- | ----------------- | ---------------- |
| `getUser`              |          | `get`      | `User`            |                  |
| `getUserMessages`      |          | `get`      | `User`            | `Messages`       |
| `handleClickOutside`   |          | `handle`   | `Click`           | `Outside`        |
| `shouldDisplayMessage` | `should` | `Display`  | `Message`         |                  |

> **Note:** 上下文的顺序会影响变量的含义。例如, `shouldUpdateComponent` 表示您即将更新一个组件，而 `shouldComponentUpdate` 告诉您该组件将自行更新，而您只是控制何时应该更新。
> 换句话说, **高语境强调变量的意义**.
---

## Actions 动作

函数名称的动词部分。最重要的部分负责描述函数的作用.

### `get`

立即访问数据（即内部数据的速记获取器）。

```js
function getFruitCount() {
  return this.fruits.length
}
```

> 另见 [compose](#compose).
您也可以在执行异步操作时使用 `get`：

```js
async function getUser(id) {
  const user = await fetch(`/api/user/${id}`)
  return user
}
```

### `set`

以声明方式设置变量，把值`A`设置为值`B`.

```js
let fruits = 0
function setFruits(nextFruits) {
  fruits = nextFruits
}
setFruits(5)
console.log(fruits) // 5
```

### `reset`

将变量设置回其初始值或状态。

```js
const initialFruits = 5
let fruits = initialFruits
setFruits(10)
console.log(fruits) // 10
function resetFruits() {
  fruits = initialFruits
}
resetFruits()
console.log(fruits) // 5
```

### `remove`

从某处移除某物。

例如，如果您在搜索页面上有一组选定的过滤器，从集合中删除其中一个是 `removeFilter`, 而不是 `deleteFilter` （这也是您自然会用英语表达的方式）：

```js
function removeFilter(filterName, filters) {
  return filters.filter((name) => name !== filterName)
}
const selectedFilters = ['price', 'availability', 'size']
removeFilter('price', selectedFilters)
```

> 另见 [delete](#delete).
### `delete`

从存在领域彻底抹去某些东西。

假设您是一名内容编辑，您希望删除臭名昭著的帖子。一旦你点击了一个闪亮的“删除帖子”按钮，CMS 就会执行一个 `deletePost` 动作, 而不是 `removePost`.

```js
function deletePost(id) {
  return database.find({ id }).delete()
}
```

> 另见 [remove](#remove).

### `compose`

从现有数据创建新数据。主要适用于字符串、对象或函数。

```js
function composePageUrl(pageName, pageId) {
  return pageName.toLowerCase() + '-' + pageId
}
```

> 另见 [get](#get).
### `handle`

处理一个动作。通常在命名回调方法时使用。

```js
function handleLinkClick() {
  console.log('Clicked a link!')
}
link.addEventListener('click', handleLinkClick)
```

---

## Context

函数运行的域。

函数通常是对某事的操作。重要的是要说明它的可操作域是什么，或者至少是预期的数据类型。

```js
/* A pure function operating with primitives */
function filter(list, predicate) {
  return list.filter(predicate)
}
/* Function operating exactly on posts */
function getRecentPosts(posts) {
  return filter(posts, (post) => post.date === Date.now())
}
```


## Prefixes

前缀增强了变量的含义。它很少用在函数名中。

### `is`

描述当前上下文的特征或状态（通常为`boolean`）。

```js
const color = 'blue'
const isBlue = color === 'blue' // characteristic
const isPresent = true // state
if (isBlue && isPresent) {
  console.log('Blue is present!')
}
```

### `has`

描述当前上下文是否拥有某个值或状态（通常为`boolean`）。

```js
/* Bad */
const isProductsExist = productsCount > 0
const areProductsPresent = productsCount > 0
/* Good */
const hasProducts = productsCount > 0
```

### `should`

反映了一个肯定的条件语句（通常是`boolean`）加上一个特定的动作。

```js
function shouldUpdateUrl(url, expectedUrl) {
  return url !== expectedUrl
}
```

### `min`/`max`

表示最小值或最大值。在描述边界或限制时使用。

```js
/**
 * Renders a random amount of posts within
 * the given min/max boundaries.
 */
function renderPosts(posts, minPosts, maxPosts) {
  return posts.slice(0, randomBetween(minPosts, maxPosts))
}
```

### `prev`/`next`

指示当前上下文中变量的前一个或下一个状态。在描述状态转换时使用。

```jsx
async function getPosts() {
  const prevPosts = this.state.posts
  const latestPosts = await fetch('...')
  const nextPosts = concat(prevPosts, latestPosts)
  this.setState({ posts: nextPosts })
}
```

## Singular and Plurals（单数和复数）

像前缀一样，变量名可以是单数或复数，这取决于它们是单个值还是多个值。

```js
/* Bad */
const friends = 'Bob'
const friend = ['Bob', 'Tony', 'Tanya']
/* Good */
const friend = 'Bob'
const friends = ['Bob', 'Tony', 'Tanya']
```
