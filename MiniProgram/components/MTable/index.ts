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
    rowId: {
      type: String,
      value: "id",
    },
    columnKey: {
      type: String,
      value: "value",
    },
    columnLabel: {
      type: String,
      value: "label",
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
    checked: {
      type: Boolean,
      value: false,
    },
    checkedAll: {
      type: Boolean,
      value: false,
    },
    checkedIds: {
      type: Array,
      value: [],
    },

    headerClassName: {
      type: String,
      value: "",
    },
    rowClassName: {
      type: String,
      value: "",
    },
    border: {
      type: Boolean,
      value: true,
    },
  },

  data: {
    _columns: [],

    _checkedIds: [],
    _checkedAllStatus: "none", // all | part | none

    isAllChecked: false,
  },

  lifetimes: {},

  observers: {
    columns: function (columns) {
      this.setData({
        _columns: columns.map(
          (item: { [key: string]: any }, index: number) => ({
            ...item,
            __rowId: item[this.data.rowId] || index,
          })
        ),
      });
    },

    checkedIds: function (checkedIds) {
      this.setData({
        _checkedIds: checkedIds,
      });
    },

    _checkedIds: function (checkedIds) {
      let status = "";

      if (checkedIds.length == 0) status = "none";
      else if (checkedIds.length == this.data.dataSource.length) status = "all";
      else status = "part";

      this.setData({
        _checkedAllStatus: status,
      });
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

    // 手动切换全选按钮
    toggleAllChecked() {
      const { _checkedAllStatus } = this.data;

      if (_checkedAllStatus === "all") {
        this.setData({
          checkedIds: [],
          _checkedAllStatus: "none",
        });
      } else {
        this.setData({
          checkedIds: this.data.dataSource.map((item) => item[this.data.rowId]),
          _checkedAllStatus: "all",
        });
      }

      this.triggerEvent("onChecked", { checkedIds: this.data.checkedIds });
    },

    onChecked(e: TouchEventType) {
      this.triggerEvent("onChecked", e.detail);
    },
  },
});
