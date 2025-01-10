Page({
  data: {
      // 表头数据
      headers: [
          { text: "Header 1", width: 100 }, // width 单位为 px
          { text: "Header 2", width: 300 },
          { text: "Header 3", width: 200 },
      ],
      // 表格行数据
      rows: [
          ["Cell 1", "Cell 2", "ThisIsAVeryLongTextWithoutSpaces"],
          ["Cell 4", "Cell 5", "Cell 6"],
          ["Cell 7", "Cell 8", "Cell 9"],
      ],
  },
  onLoad() {
      // 将列宽从 px 转换为 rpx
      const headers = this.data.headers.map((header) => {
          return Object.assign(Object.assign({}, header), { width: header.width * 2 });
      });
      this.setData({ headers });
  },
});
