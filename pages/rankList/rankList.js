Page({
  data: {
    activeTab: 1,
    show: false
  },

  onClose() {
    this.setData({ show: false });
  },

  handleOpen() {
    this.setData({ show: true });
  },

  onLoad: function (options) {

  }
});
