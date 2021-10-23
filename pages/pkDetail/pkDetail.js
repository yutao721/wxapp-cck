Page({
  data: {
    show: false,
    isAnswer: false,
    isLast: false
  },


  handleConfirm() {
    // todo
    this.setData({ isAnswer: true })

  },

  handleOpenCard() {
    this.setData({ show: true })
  },

  onClose() {
    this.setData({ show: false });
  },

  // 提交
  handleSubmit() {

    // todo
    wx.navigateTo({ url: `/pages/pkResult/pkResult` })
  },

  onLoad: function (options) {

  }
});
