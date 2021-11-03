const app = getApp();
Page({
  data: {
    imgPath: app.$imgPath
  },
  handleStart() {
    wx.navigateTo({ url: `/pages/pkDetail/pkDetail?type=-1` })
  },
  onLoad: function (options) {

  }
});
