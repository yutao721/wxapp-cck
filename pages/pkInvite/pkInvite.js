const app = getApp();
Page({
  data: {
    imgPath: app.$imgPath,
    hasScore: true
  },

  // 分享给好友
  onShareAppMessage() {
    return {
      title: '邀请你PK答题',
      path: '/pages/pkInvite/pkInvite'
    }
  },

  onLoad: function (options) {

  }
});
