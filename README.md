# NPM README.md参考

<!-- 标签 START -->

[![build status](http://git.husor.com/fe-tool/lib3/badges/master/build.svg)](http://git.husor.com/fe-tool/lib3/commits/master)
[![coverage report](http://git.husor.com/fe-tool/lib3/badges/master/coverage.svg)](http://git.husor.com/fe-tool/lib3/commits/master)
[![version](http://npm.husor.com/badge/v/@fe-tool/lib3.svg)](http://npm.beibei.com/package/@fe-tool/lib3)
<!-- 标签 END -->

<!-- 描述 START -->

这是README.md参考，常用的README说明文档应当包含但不仅限于以下属性
- 标签(包含当前项目的构建状态、单元测试覆盖率、当前版本号)
- 描述(描述一下当前包的作用)
- 目录
- 安装
- 用法
- 文档
- 联系方式

<!-- 描述 END -->
_ _ _

<!-- 目录 START -->

+ [安装](#安装)
+ [用法](#用法)
+ [文档](#文档)
    + [compare](#comparev1v2)
+ [联系我们](#联系我们)

<!-- 目录 END -->

_ _ _

<!-- 安装 START -->

## 安装
```bash
$ npm install @fe-base/env --registry="http://npm.repos.husor.com/" --save
```
<!-- 安装 END -->

<!-- 用法 START -->

## 用法

```javascript
// 引用具体使用的方法（推荐）
import {isBeibei, version} from '@fe-base/env';

const IS_BEIBEI = isBeibei();
version('5.0.0').gt('4.0.0');

// 引用部分方法集合（不建议）
import {app} from '@fe-base/env';

const IS_BEIBEI = app.isBeibei();

// 引用整个方法集合（非常不建议）
import env from '@fe-base/env';

const IS_BEIBEI = env.isBeibei();
env.version('5.0.0').gt('4.0.0');

```
<!-- 用法 END -->

_ _ _

<!-- 文档START -->
## 文档

### compare(v1,v2)

传递两个参数进行版本比较

参数：
- v1：`String` 比较的第一个版本，必需
- v2：`String` 比较的第二个版本，必需

返回值：`Number`

``` javascript
import {compare} from '@fe-base/env';

compare('7.0.1', '6.9.0'); // 1
compare('6.8.0', '6.9.0'); // -1
compare('6.8.0', '6.8.0'); // 0
```
<!-- 文档END -->
_ _ _

<!-- 联系我们 START -->

## 联系我们

|作者|Email|QQ|
|---|---|---|
|贺晨超|chenchao.he@husor.com|273178698|
|潘万强|wanqiang.pan@husor.com|506863754|
|应杲臻|gaozhen.ying@husor.com|359658678|

Issue反馈：[http://git.husor.com/fe-tool/lib3/issues](http://git.husor.com/fe-tool/lib3/issues)

<!-- 联系我们 END -->
