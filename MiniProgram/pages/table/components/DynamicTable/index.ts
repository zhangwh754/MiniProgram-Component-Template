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
      // {
      //   title: "地址",
      //   key: "address",
      //   width: 300,
      // },
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
        address: "北京市",
      },
      {
        name: "李四",
        age: 20,
        sex: "女",
        address: "上海市",
      },
      {
        name: "王五",
        age: 25,
        sex: "男",
        address: "广州市",
      },
    ],

    eventInfo: "", // 触发自定义事件的信息
  },
  onLoad() {},

  onHandleAdd(e) {
    this.setData({
      data: this.data.data.concat({
        name: Math.random().toString(32).slice(-3),
        age: Math.floor(Math.random() * 100),
        sex: Math.random() > 0.5 ? "男" : "女",
        address: ["北京", "上海", "广州", "深圳"][Math.floor(Math.random() * 4)] + "市",
      }),
    });
  },

  onColumnChange() {
    const hasActionColumn = this.data.columns.some(col => col.key === 'action');
    const hasAddressColumn = this.data.columns.some(col => col.key === 'address');
    let newColumns;

    // 首先移除 action 和 address 列
    const baseColumns = this.data.columns.filter(col =>
      col.key !== 'action' && col.key !== 'address'
    );

    if (hasActionColumn) {
      // 如果当前有 action 列，切换到 address 列
      newColumns = [...baseColumns, {
        title: "地址",
        key: "address",
        width: 300,
      }];
    } else if (hasAddressColumn) {
      // 如果当前有 address 列，切换到 action 列
      newColumns = [...baseColumns, {
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
      }];
    } else {
      // 如果都没有，默认显示 address 列
      newColumns = [...baseColumns, {
        title: "地址",
        key: "address",
        width: 300,
      }];
    }

    this.setData({
      columns: newColumns,
      eventInfo: hasActionColumn ? "切换到地址列" : (hasAddressColumn ? "切换到操作列" : "显示地址列")
    });
  },
});
