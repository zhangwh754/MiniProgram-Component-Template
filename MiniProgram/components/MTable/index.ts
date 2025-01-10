Component({
  properties: {
    columns: {
      type: Array,
      value: [],
    },
    dataSource: {
      type: Array,
      value: [],
    },
  },

  methods: {
    handleAction(e: TouchEventType) {
      const { action, index } = e.currentTarget.dataset;
      // 触发自定义事件，将操作类型和行数据传递给父组件
      this.triggerEvent("action", {
        action,
        index,
        record: this.data.dataSource[index],
      });
    },
  },
});
