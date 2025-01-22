// pages/dialog/dialog.js
Page({
  data: {
    show: false,
  },

  onLoad(options) {},

  onUpdateShow(e) {
    const { show } = e.currentTarget.dataset;

    this.setData({
      show: show ?? e.detail,
    });
  },
});
