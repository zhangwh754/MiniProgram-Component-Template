Page({
  data: {
    columns: [
      {
        title: "姓名",
        key: "name",
        width: 300,
      },
      {
        title: "年龄",
        key: "age",
        width: 200,
      },
      {
        title: "性别",
        key: "sex",
        width: 200,
      },
      {
        title: "自定义渲染",
        width: 500,
        slot: "button-slot",
      },
    ],

    data: [
      {
        name: "张三",
        age: 18,
        sex: "男",
      },
      {
        name: "李四",
        age: 20,
        sex: "女",
      },
      {
        name: "王五",
        age: 25,
        sex: "男",
      },
    ],
  },
  onLoad() {},

  onSlotButtonClick(e: TouchEventType) {
    const { index } = e.currentTarget.dataset;

    wx.showModal({
      title: "提示",
      showCancel: false,
      content: `点击了第${index + 1}行的自定义按钮`,
    });
  },
});
