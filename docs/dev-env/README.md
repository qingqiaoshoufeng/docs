# 开发环境

## NPM 私服

私服搭建基于 [Verdaccio](https://verdaccio.org/)，除私有包之外其他包源代理自[淘宝镜像](https://npmmirror.com/)

镜像地址：

```
http://castle-npm.cp.hxdi.cn 
```
:::tip
- 为了杜绝因包管理不同而造成的问题，我们通过[only-allow](https://www.npmjs.com/package/only-allow)强制在项目中使用[Yarn](https://yarnpkg.com/)包管理器
- 且推荐使用 [nrm](https://github.com/Pana/nrm)来管理镜像源地址。

```
$ nrm ls
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
* hx ----------- http://10.13.4.128:4873/
```
:::


