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
          this.instance.updateData(val);
        } else {
          this.initChart();
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
      // this.initChart()
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

      if (!params.series.length) return;

      const query = this.createSelectorQuery();
      query
        .select(params.canvasId)
        .fields({ node: true, size: true })
        .exec((res) => {
          const canvas = res[0] && res[0].node;
          console.log(canvas);
          if (canvas) {
            const ctx = canvas.getContext("2d");

            const dpr = wx.getSystemInfoSync().pixelRatio;
            canvas.width = res[0].width * dpr;
            canvas.height = res[0].height * dpr;
            ctx.scale(dpr, dpr);
            params.ctx = ctx;

            this.instance = new wxCharts(params);
          }
        });
    },
  },
});
