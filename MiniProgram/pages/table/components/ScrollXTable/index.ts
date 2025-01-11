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
        width: 200,
      },
      {
        title: "性别",
        key: "sex",
        width: 200,
      },
      {
        title: "地址",
        key: "address",
        width: 400,
      },
      {
        title: "公司",
        key: "company",
        width: 200,
      },
    ],

    data: [
      {
        name: "张三",
        age: 18,
        sex: "男",
        address: "上海市市辖区浦东新区东海农场",
        company: "东海农场",
      },
      {
        name: "李四",
        age: 20,
        sex: "女",
        address: "上海市市辖区浦东新区外高桥保税区005号606室",
        company: "沪西老弄堂📍地址",
      },
      {
        name: "王五",
        age: 25,
        sex: "男",
        address: "申长路888弄虹桥天地2号楼B栋1-2层",
        company: "上海滩餐厅(虹桥店)",
      },
    ],
  },
  onLoad() {},
});
