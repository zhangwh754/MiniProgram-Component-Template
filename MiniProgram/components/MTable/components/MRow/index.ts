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
    checked: {
      type: Boolean,
      value: false,
    },
    columnKey: {
      type: String,
    },
    rowIndex: {
      type: Number,
    },
    rowData: {
      type: Object,
    },
    checkedIds: {
      type: Array,
    },
    rowClassName: {
      type: String,
    },
    border: {
      type: Boolean,
      value: true,
    },
  },

  data: {
    isChecked: false,
  },

  observers: {
    checkedIds: function (checkedIds) {
      this.setData({
        isChecked: checkedIds.includes(this.data.rowData.id),
      });
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

    toggleChecked(e) {
      const { isChecked } = e.detail;
      const { rowData } = this.data;

      if (!isChecked) {
        this.setData({
          checkedIds: this.data.checkedIds.filter(
            (item) => item !== rowData.id
          ),
        });
      } else {
        this.setData({
          checkedIds: [...this.data.checkedIds, rowData.id],
        });
      }

      this.triggerEvent("onChecked", {
        checkedIds: this.data.checkedIds,
      });
    },
  },
});
