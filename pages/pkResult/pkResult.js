const app = getApp()
Page({
  data: {
    imgPath: app.$imgPath,
    isWinner: true
  },

  // 返回题库
  handleToQues() {
    wx.switchTab({
      url: `/pages/question/question`
    })
  },

  // 回顾解析
  handleToErrDetail() {
    wx.redirectTo({
      url: `/pages/errorDetail/errorDetail`
    })
  },

  // 分享给好友
  onShareAppMessage() {
    return {
      title: '邀请你PK答题',
      path: '/pages/pkInvite/pkInvite'
    }
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
