const app = getApp();
Page({
  data: {
    isShowAuthen: false
  },

  async authentication() {
    // 请求接口
    console.log('授权回调');
    let userInfo = await app.$util.getCache('USERINFO');
    this.setData({ userInfo: userInfo })
  },

  async getLogin() {
    let userInfo = await app.$util.getCache('USERINFO');
    if (!userInfo || ( userInfo && !userInfo.avatar_url )) {
      this.setData({ isShowAuthen: true })
    }
  },

  onLoad() {
    app.changeTabbar();
  }
});
