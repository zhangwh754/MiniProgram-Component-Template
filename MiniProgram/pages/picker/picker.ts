Page({
  data: {
    pickerValue: "03",
    pickerOptions: [
      {
        label: "中国",
        value: "01",
      },
      {
        label: "美国",
        value: "02",
      },
      {
        label: "日本",
        value: "03",
      },
    ],
  },
  onLoad() {},

  onUpdateValue(e: TouchEventType) {
    this.setData({
      pickerValue: e.detail,
    });
  },
});
