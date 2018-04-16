[![Build Status](https://www.travis-ci.org/plasusu/countdown.svg?branch=master)](https://www.travis-ci.org/plasusu/countdown)
[![Coverage Status](https://coveralls.io/repos/github/plasusu/countdown/badge.svg?branch=master)](https://coveralls.io/github/plasusu/countdown?branch=master)
[![Github Releases](https://img.shields.io/npm/v/light-countdown.svg)](https://github.com/plasusu/countdown)
[![Github License](https://img.shields.io/npm/l/light-countdown.svg)](https://github.com/plasusu/countdown)

倒计时组件

_ _ _


+ [安装](#安装)
+ [用法](#用法)
+ [文档](#文档)
    + [countdown](###countdown)
+ [LICENSE](#LICENSE)

_ _ _

## 安装
```bash
$ npm install light-countdown --save
```

## 用法

```javascript

import countdown from 'light-countdown';

// 简单用法
countdown({
    timeEnd: (new Date().getTime() + 100000),
    selector: '#example'
});

// 所有参数
countdown({
    currentTime: new Date('2018-4-15 20:00:00').getTime(),
    timeEnd: new Date('2018-4-15 20:00:05').getTime(),
    selector: '#example2',
    msgPattern: '{years}年{months}月{weeks}周{days}天{hours}时{minutes}分{seconds}秒{decimal}',
    showZero: false, // 小于10补0,默认为true
    afterCount() {
        alert('done')
    }
});

```

_ _ _

## 文档

### countdown

参数：
- **currentTime**: 当前时间，默认值`new Date().getTime()`，为了防止客户端时间不一致，建议传入服务器时间
- **timeEnd**: 倒计时结束时间，默认值`new Date().getTime()`
- **selector**: 包含倒计时文案的标签，默认值`.J_countdown`
- **mspPattern**: 倒计时的展示格式，默认值`{days}天{hours}时{minutes}分{seconds}秒{decimal}`
- **showZero**: 小于10的数字是否补0，默认值`true`
- **afterCount**: 倒计时结束回调函数，默认为空函数

返回值：undefined

_ _ _

## LICENSE

**MIT**
