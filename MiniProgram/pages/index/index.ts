Page({
    data: {
        tableColumns: [{
            title: "姓名",
            key: "name",
            width: 200,
        }, {
            title: "年龄",
            key: "age",
            width: 100,
        }, {
            title: "性别",
            key: "sex",
            width: 100,
        }],
        data: [{
            name: '张三',
            age: 18,
            sex: '男'
        }, {
            name: '李四',
            age: 20,
            sex: '女'
        }, {
            name: '【腾讯CoDesign】邀请你加入文件“上电微信2024”，点击链接立即加入',
            age: 25,
            sex: '男'
        }],
    },
    onLoad() {
    },
});
