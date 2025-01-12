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
        title: "操作",
        key: "action",
        width: 300,
        type: "action",
        actions: [
          {
            name: "edit",
            text: "编辑",
            className: "edit-btn",
          },
          {
            name: "delete",
            text: "删除",
            className: "delete-btn",
          },
        ],
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

    eventInfo: "", // 触发自定义事件的信息
  },
  onLoad() {},

  bindHeaderClick(e) {
    const { index, key } = e.detail;

    wx.showModal({
      title: "提示",
      showCancel: false,
      content: `点击了第${index + 1}列的标题，key为${key}`,
    });
  },

  bindAction(e) {
    const { action, index, record } = e.detail;

    this.setData({
      eventInfo: JSON.stringify(e.detail),
    });
  },
});
