import wxCharts from "./index";

export default Behavior({
  properties: {
    // canvas宽度，单位为px
    width: {
      type: String,
      value: 300,
    },
    // canvas高度，单位为px
    height: {
      type: String,
      value: 200,
    },

    // 图表配置
    config: {
      type: Object,
      value: {},
      observer(val) {
        if (this.instance) {
          if (
            this.currConfig &&
            this.currConfig.series &&
            this.currConfig.series.length === val.series.length
          )
            return;

          setTimeout(() => {
            this.instance.updateData(val);
          }, 500);
        }
      },
    },
  },

  data: {
    initConfig: {
      // 是否动画展示
      animation: true,
      // 是否显示图表下方各类别的标识
      legend: true,
      // 不绘制饼图（圆环图）各区块的白色分割线
      disablePieStroke: true,
      // 是否在图表中显示数据内容值
      dataLabel: true,
      // 是否在图表中显示数据点图形标识
      dataPointShape: true,
      // 数据列表
      series: [],
      //  数据类别分类 (饼图、圆环图不需要)
      categories: [],
    },
  },

  lifetimes: {
    attached() {
      this.initChart();
    },
  },

  methods: {
    initChart() {
      const { initConfig, config, width, height } = this.data;
      const params = {
        width,
        height,
        ...initConfig,
        ...config,
      };
      this.currConfig = config;
      this.instance = new wxCharts(params, this);
    },
  },
});
