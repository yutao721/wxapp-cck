const app = getApp();
Page({
  data: {
    tabs: [
      {
        label: '活动风采',
        value: 1
      },
      {
        label: '工作分享',
        value: 2
      },
      {
        label: '生活分享',
        value: 3
      },
      {
        label: '知识分享',
        value: 4
      }
    ],
    activeTab: 1
  },

  handleSwitchTab(e) {
    let { value } = e.currentTarget.dataset;
    this.setData({ activeTab: value })
  },

  onLoad() {
    app.changeTabbar();
  }
});
