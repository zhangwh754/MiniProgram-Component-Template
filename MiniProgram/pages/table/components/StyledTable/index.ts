Component({
  options: {
    styleIsolation: 'shared',
  },
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

    tipShow: false
  },

  methods: {
    toggleTipsShow() {
      this.setData({
        tipShow: !this.data.tipShow
      })
    }
  }
});
