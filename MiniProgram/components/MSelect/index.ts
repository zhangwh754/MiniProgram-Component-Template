Component({
  options: {
    addGlobalClass: true, // 启用组件样式共享
  },

  properties: {
    value: {
      type: String,
      optionalTypes: [Number],
    },
    options: {
      type: Array,
    },
    labelKey: {
      type: String,
      value: "label",
    },
    valueKey: {
      type: String,
      value: "value",
    },

    desc: {
      type: String,
    },
    placeholder: String,
  },

  data: {
    pickerIndex: -1,
    showValue: "",
  },

  observers: {
    value: function (newVal) {
      const { labelKey, valueKey, options } = this.data;

      const newPickerIndex = options.findIndex(
        (item) => item[valueKey] === newVal
      );

      if (newPickerIndex === -1) {
        this.setData({
          pickerIndex: 0,
          showValue: "",
        });

        return;
      }

      const newLabel = options[newPickerIndex][labelKey];

      this.setData({
        pickerIndex: newPickerIndex,
        showValue: newLabel,
      });
    },
  },

  methods: {
    onPickerChange(e: TouchEventType) {
      const currentIndex = Number(e.detail.value);

      this.echo(currentIndex);
    },

    echo(index: number) {
      const { labelKey, valueKey, options } = this.data;

      const newLabel = options[index][labelKey];
      const newValue = options[index][valueKey];

      this.setData({
        showValue: newLabel,
      });

      this.triggerEvent("update:value", newValue);
    },
  },
});
