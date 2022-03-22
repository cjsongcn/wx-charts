# wx-charts

微信小程序图表工具，charts for WeChat small app

基于 canvas 2d 绘制，支持同层渲染，体积小巧，压缩后仅为 33kb

# 支持图表类型

- 饼图 `pie`
- 圆环图 `ring`
- 线图 `line`
- 柱状图 `column`
- 区域图 `area`
- 雷达图 `radar`

代码分析 [Here](https://segmentfault.com/a/1190000007649376)

# 更新记录

- [ ] canvas 2d 支持 2022-03-19
- [ ] 动画性能优化
- [x] 图表滚动的支持，
- [x] [优化曲线绘制]
- [x] 新增雷达图 2017-03-17
- [x] 新增 tooltip 2017-03-07
- [x] 新增曲线的绘制 2017-03-06
- [x] 新增更新数据、终止进行中的动画方法，渲染完成事件回调 2017-02-17
- [x] 新增圆环图 title, subtitle 2017-01-10
- [x] x 轴文案碰撞避让 2016-12-30
- [x] add pie chart dataLabel 2016-12-19
- [x] add animation 2016-12-05
- [x] build with `rollup` 2016-12-02
- [x] add legend 2016-11-29

# 如何使用

1、npm 包安装

```
npm install @ygp/wx-charts -S

```

开发者工具：工具 -> 构建 npm

```
import wxCharts from '@ygp/wx-charts'
```

2、直接引用编译好的文件 `dist/wxcharts.js` 或者 `dist/wxcharts-min.js`

3、自行编译

```
git clone https://github.com/cjsongcn/wx-charts
npm install rollup -g
npm install
rollup -c 或者 rollup --config rollup.config.prod.js
```

[实际项目中如何具体使用 wx-charts](https://github.com/xiaolin3303/wx-charts/issues/28) 或者 访问[wx-charts-demo](https://github.com/xiaolin3303/wx-charts-demo)查看在微信开发工具中直接运行的例子

# 参数说明

[参数说明 - wxCharts 使用文档](https://github.com/xiaolin3303/wx-charts/issues/56)

# 方法 & 事件

[方法 & 事件 - wxCharts 使用说明](https://github.com/xiaolin3303/wx-charts/issues/57)

# Example

![pieChart](https://raw.githubusercontent.com/xiaolin3303/wx-charts/master/example/pie.png)
![ringChart](https://raw.githubusercontent.com/xiaolin3303/wx-charts/master/example/ring.png)
![lineChart](https://raw.githubusercontent.com/xiaolin3303/wx-charts/master/example/line.png)
![curveLineChart](https://raw.githubusercontent.com/xiaolin3303/wx-charts/4636c9d2fbbaaa7944ee48e02b3a595e77c099e5/example/curve-line.png)
![columnChart](https://raw.githubusercontent.com/xiaolin3303/wx-charts/master/example/column.png)
![areaChart](https://raw.githubusercontent.com/xiaolin3303/wx-charts/master/example/area.png)
![areaChart](https://raw.githubusercontent.com/xiaolin3303/wx-charts/master/example/radar.png)

![pieChart](https://raw.githubusercontent.com/xiaolin3303/wx-charts/master/example/pie.gif)
![ringChart](https://raw.githubusercontent.com/xiaolin3303/wx-charts/master/example/ring.gif)
![lineChart](https://raw.githubusercontent.com/xiaolin3303/wx-charts/master/example/line.gif)
![columnChart](https://raw.githubusercontent.com/xiaolin3303/wx-charts/master/example/column.gif)
![areaChart](https://raw.githubusercontent.com/xiaolin3303/wx-charts/master/example/area.gif)
![tooltip](https://raw.githubusercontent.com/xiaolin3303/wx-charts/master/example/tooltip.gif)
![scrollLineChart](https://raw.githubusercontent.com/xiaolin3303/wx-charts/master/example/scrollLine.gif)

更多内容请查看[Example - wxCharts 使用说明](https://github.com/xiaolin3303/wx-charts/issues/58)

# 测试

1. iPhone 6s, IOS 9.3.5
2. 小米 4, ANDORID 6.0.1

兼容性问题请在[Issue](https://github.com/xiaolin3303/wx-charts/issues)中提出

# 一些问题的说明汇总

- [wx-charts 自适应屏幕宽度的问题](https://github.com/xiaolin3303/wx-charts/issues/4)
- [项目中如何具体使用 wxCharts](https://github.com/xiaolin3303/wx-charts/issues/28)
