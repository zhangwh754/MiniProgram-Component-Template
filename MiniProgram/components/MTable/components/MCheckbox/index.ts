Component({
  options: {
    addGlobalClass: true, // 启用组件样式共享
  },

  properties: {
    checkStatus: {
      type: String,
      value: undefined,
    },
    checked: {
      type: Boolean,
    },
  },

  data: {},

  methods: {
    onToggleCheckbox() {
      const { checked } = this.data;

      this.triggerEvent("checked", { isChecked: !checked });
    },
  },
});
