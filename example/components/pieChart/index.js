import baseConfig from "../base";

Component({
  behaviors: [baseConfig],
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    initConfig: {
      canvasId: "#pieCanvas",
      type: "pie",
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
