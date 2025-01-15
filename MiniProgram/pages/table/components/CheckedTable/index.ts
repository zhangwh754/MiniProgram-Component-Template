Component({
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
    ],

    data: [
      {
        id: "1",
        name: "张三",
        age: 18,
        sex: "男",
      },
      {
        id: "2",
        name: "李四",
        age: 20,
        sex: "女",
      },
      {
        id: "3",
        name: "王五",
        age: 25,
        sex: "男",
      },
    ],

    checkedIds: [],

    checkedAll: true,
  },
  lifetimes: {
    created() {
      // setTimeout(() => {
      //   this.setData({
      //     checkedIds: ["1", "3"],
      //   });
      // }, 5000);
    },
  },

  methods: {
    onChecked(e: TouchEventType) {
      const res = e.detail;

      this.setData({
        checkedIds: res.checkedIds,
      });
    },

    switchChange(e: TouchEventType) {
      const { checked } = e.currentTarget.dataset;

      this.setData({
        [checked]: e.detail.value,
      });
    },
  },
});
