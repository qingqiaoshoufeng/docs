# 前端规范

本规范是一套前端编码和工程规范，致力于通过统一编码风格、普及最佳实践和代码缺陷检查帮助团队降低协作成本、提升前端项目的可维护性和稳定性。

### 规范能力

 // todo

 
| lint工具 | 校验主体 | 描述 |
| --- | --- | --- |
| eslint | ECMAScript code | 校验javascript、typescript、vue代码 |
| stylelint | css-like-languages | 校验css、scss、less样式代码 |
| filepath-lint | 文件名 | 检验文件命名 |
| lint-staged | 代码规范检查增加 | git hooks pre-commit对暂存区内容校验，若校验失败，git commit提交失败 |
| commit-message-lint | git commit message | git hooks commit-msg校验提交信息 |
| branch-lint | git push branch/tag | git hooks pre-push校验branch/tag |