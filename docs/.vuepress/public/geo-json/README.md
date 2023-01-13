# Geo Json

本仓库包含全国所有省、市、县的geo json 数据，索引见 index.json


## 使用方法

建议使用 [git subtree](https://gist.github.com/SKempin/b7857a6ff6bddb05717cc17a44091202)方式，将该仓库添加到 `/public/geo-json` 下使用

示例：

- 添加

`git subtree add --prefix public/geo-json http://10.10.3.188:9090/castle/components/geo-json.git master --squash`

- 更新

`git subtree pull --prefix public/geo-json http://10.10.3.188:9090/castle/components/geo-json.git master --squash`