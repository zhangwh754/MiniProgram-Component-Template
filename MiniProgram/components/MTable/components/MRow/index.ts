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
    scroll: {
      type: Boolean,
      value: false,
    },
    rowIndex: {
      type: Number,
    },
    rowData: {
      type: Object,
    },
  },

  methods: {
    handleAction(e: TouchEventType) {
      const { action, index } = e.currentTarget.dataset;
      // 触发自定义事件，将操作类型和行数据传递给父组件
      this.triggerEvent("action", {
        action,
        index,
        record: this.data.rowData,
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
