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

  // 下一题
  handleNextQuestion() {
    this.setData({ isLast: true })
  },

  // 提交
  handleSubmit() {

    // todo
    let { type } = this.data;
    wx.navigateTo({ url: `/pages/pkResult/pkResult?type=${type}` })
  },

  setTitleByType(type) {
    let title = ''
    switch (type) {
      case 1:
        title = '答题PK';
        break;
      case 2:
        title = '试卷考试';
        break;
      case 3:
        title = '题库答题';
        break;
      default:
        title = '答题PK';
    }
    wx.setNavigationBarTitle({ title })
  },

  onLoad: function (options) {
    let type = options.type
    this.setData({ type: options.type });
    this.setTitleByType(type * 1)
  }
});
