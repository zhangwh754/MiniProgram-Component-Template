Component({
  properties: {
    maskClosable: {
      type: Boolean,
      value: true,
    },
    mask: {
      // 是否需要 遮罩层
      type: Boolean,
      value: true,
    },
    maskStyle: {
      // 遮罩层的样式
      type: String,
      value: "",
    },
    show: {
      // 是否开启弹窗
      type: Boolean,
      value: false,
    },
  },
  data: {
    enable: true,
  },

  methods: {
    close() {
      const { maskClosable, enable } = this.data;

      if (!maskClosable) return;

      this.setData({
        enable: !enable,
      });

      this.triggerEvent("update:show", false);
    },
  },
});
