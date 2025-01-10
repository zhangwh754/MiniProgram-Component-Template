Page({
  data: {
    columns: [
      {
        title: "姓名",
        key: "name",
        width: 200,
      },
      {
        title: "年龄",
        key: "age",
        width: 100,
      },
      {
        title: "性别",
        key: "sex",
        width: 100,
      },
      {
        title: "自定义渲染",
        width: 200,
        slot: 'button-slot'
      },
      // {
      //   title: "操作",
      //   key: "action",
      //   width: 160,
      //   type: "action",
      //   actions: [
      //     {
      //       name: "edit",
      //       text: "编辑",
      //       className: "edit-btn",
      //     },
      //     {
      //       name: "delete",
      //       text: "删除",
      //       className: "delete-btn",
      //     },
      //   ],
      // },
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

  bindAction(e: TouchEventType) {
    const { action, index, record } = e.detail;

    this.setData({
      eventInfo: JSON.stringify(e.detail),
    });
  },
});
