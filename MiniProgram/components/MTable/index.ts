Component({
  options: {
    addGlobalClass: true, // 启用组件样式共享
    multipleSlots: true, // 启用多slot支持
  },

  properties: {
    columns: {
      type: Array,
      value: [],
    },
    dataSource: {
      type: Array,
      value: [],
    },
    scroll: {
      type: Boolean,
      value: false,
    },
    scrollY: {
      type: Boolean,
      value: false,
    },
    height: {
      type: Number,
    },
  },

  methods: {
    handleAction(e: TouchEventType) {
      this.triggerEvent("action", e.detail);
    },

    onHeaderClick(e: TouchEventType) {
      const { index, key } = e.target.dataset;

      this.triggerEvent("headerClick", {
        index,
        key,
      });
    },

    onHeaderClick(e: TouchEventType) {
      const { index, key } = e.target.dataset;

      this.triggerEvent("headerClick", {
        index,
        key,
      });
    },
  },
});
