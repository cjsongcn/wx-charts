# wx-charts

微信小程序图表工具

基于 canvas 2d 绘制，支持同层渲染，体积小巧，压缩后仅为 33kb

# 支持图表类型

- 饼图 `pie`
- 圆环图 `ring`
- 折线图 `line`
- 柱状图 `column`
- 区域图 `area`
- 雷达图 `radar`

# 更新记录

- [x] 修复折线图、区域图初始渲染 Y 轴刻度数据为空引起的卡死状态 2022-03-22
- [x] 修复图表动画引起画布重复渲染问题 2022-03-22
- [ ] 小程序图表组件化 2022-03-21
- [ ] canvas 2d 支持 2022-03-19

# 如何使用

1、npm 包安装

```js
npm install @ygp/wx-charts -S

```

开发者工具：工具 -> 构建 npm

```js
import wxCharts from "@ygp/wx-charts";
```

json 配置引入

```json
{
  "usingComponents": {
    "area-chart": "@ygp/wx-charts/areaChart",
    "line-chart": "@ygp/wx-charts/lineChart",
    "pie-chart": "@ygp/wx-charts/pieChart",
    "radar-chart": "@ygp/wx-charts/radarChart",
    "ring-chart": "@ygp/wx-charts/ringChart",
    "column-chart": "@ygp/wx-charts/columnChart"
  }
}
```

wxml 页面引入

```html
<area-chart config="{{areaConfig}}" width="320" height="280"></area-chart>
<line-chart config="{{lineConfig}}" width="320" height="280"></line-chart>
<pie-chart config="{{pieConfig}}" width="320" height="280"></pie-chart>
<radar-chart config="{{radarConfig}}" width="320" height="280"></radar-chart>
<ring-chart config="{{ringConfig}}" width="320" height="280"></ring-chart>
<column-chart config="{{columnConfig}}" width="320" height="280"></column-chart>
```

js

```js
Component({
  areaConfig: {
    extra: {
      lineStyle: "curve",
    },
    categories: ["2016-08", "2016-09", "2016-10", "2016-11", "2016-12", "2017"],
    series: [
      {
        name: "成交量1",
        data: [70, 40, 65, 100, 34, 18],
        format: function (val) {
          return val.toFixed(2) + "万";
        },
      },
      {
        name: "成交量2",
        data: [15, 20, 45, 37, 4, 80],
        format: function (val) {
          return val.toFixed(2) + "万";
        },
      },
    ],
    yAxis: {
      format: function (val) {
        return val + "万";
      },
    },
  },

  ringConfig: {
    dataLabel: false,
    disablePieStroke: true,
    extra: {
      ringWidth: 16,
    },
    subtitle: {
      name: "订单总数",
      fontSize: 13,
      color: "#6B6B6B",
    },
    title: {
      name: total,
      fontSize: 32,
      color: "#262626",
    },

    series: [
      {
        name: `待付款订单`,
        data: 100,
        color: "#1450ff",
      },
      {
        name: `待收货订单`,
        data: 200,
        color: "#FFBA12",
      },
      {
        name: `已完成订单`,
        data: 300,
        color: "#2DA641",
      },
      {
        name: `已取消订单`,
        data: 400,
        color: "#FF991E",
      },
    ],
  },

  // ......
});
```

# config 参数说明

```js
opts Object

opts.canvasId String required 微信小程序canvas-id

opts.width Number required canvas宽度，单位为px

opts.height Number required canvas高度，单位为px

opts.background String canvas背景颜色（如果页面背景颜色不是白色请设置为页面的背景颜色，默认#ffffff）

opts.enableScroll Boolean 是否开启图表可拖拽滚动 默认false 支持line, area图表类型(需配合绑定scrollStart, scroll, scrollEnd方法)

opts.title Object (only for ring chart)

opts.title.name String 标题内容

opts.title.fontSize Number 标题字体大小（可选，单位为px）

opts.title.color String 标题颜色（可选）

opts.title.offsetX Number 标题横向位置偏移量，单位px，默认0

opts.subtitle Object (only for ring chart)

opts.subtitle.name String 副标题内容

opts.subtitle.offsetX Number 副标题横向位置偏移量，单位px，默认0

opts.subtitle.fontSize Number 副标题字体大小（可选，单位为px）

opts.subtitle.color String 副标题颜色（可选）

opts.animation Boolean default true 是否动画展示

opts.legend Boolen default true 是否显示图表下方各类别的标识

opts.type String required 图表类型，可选值为pie, line, column, area, ring, radar

opts.categories Array required (饼图、圆环图不需要) 数据类别分类

opts.dataLabel Boolean default true 是否在图表中显示数据内容值

opts.dataPointShape Boolean default true 是否在图表中显示数据点图形标识

opts.disablePieStroke Boolean default false 不绘制饼图（圆环图）各区块的白色分割线

opts.xAxis Object X轴配置

opts.xAxis.gridColor String 例如#7cb5ec default #cccccc X轴网格颜色

opts.xAxis.fontColor String 例如#7cb5ec default #666666 X轴数据点颜色

opts.xAxis.disableGrid Boolean default false 不绘制X轴网格

opts.xAxis.type String 可选值calibration(刻度) 默认为包含样式

opts.yAxis Object Y轴配置

opts.yAxis.format Function 自定义Y轴文案显示

opts.yAxis.min Number Y轴起始值

opts.yAxis.max Number Y轴终止值

opts.yAxis.title String Y轴title

opts.yAxis.gridColor String 例如#7cb5ec default #cccccc Y轴网格颜色

opts.yAxis.fontColor String 例如#7cb5ec default #666666 Y轴数据点颜色

opts.yAxis.titleFontColor String 例如#7cb5ec default #333333 Y轴title颜色

opts.yAxis.disabled Boolean default false 不绘制Y轴

opts.extra Object 其他非通用配置项

opts.extra.ringWidth Number ringChart圆环宽度，单位为px

opts.extra.lineStyle String (仅对line, area图表有效) 可选值：curve曲线，straight直线 (default)

opts.extra.column Object 柱状图相关配置

opts.extra.column.width Number 柱状图每项的图形宽度，单位为px

opts.extra.legendTextColor String 例如#7cb5ec default #cccccc legend文案颜色

opts.extra.radar Object 雷达图相关配置

opts.extra.radar.max Number, 默认为series data的最大值，数据区间最大值，用于调整数据显示的比例

opts.extra.radar.labelColor String, 默认为#666666, 各项标识文案的颜色

opts.extra.radar.gridColor String, 默认为#cccccc, 雷达图网格颜色

opts.extra.pie Object 饼图、圆环图相关配置

opts.extra.pie.offsetAngle Number, 默认为0, 起始角度偏移度数，顺时针方向，起点为3点钟位置（比如要设置起点为12点钟位置，即逆时针偏移90度，传入-90即可）

opts.series Array required 数据列表

数据列表每项结构定义

dataItem Object

dataItem.data Array required (饼图、圆环图为Number) 数据，如果传入null图表该处出现断点

dataItem.color String 例如#7cb5ec 不传入则使用系统默认配色方案

dataItem.name String 数据名称

dateItem.format Function 自定义显示数据内容
```

# 示例

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

# 维护者

蔡景松
邮箱：caijingsong@gongpin.com
