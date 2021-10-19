const app = getApp();
Page({
  data: {
    tabs: [
      {
        label: '企业动态',
        value: 1
      },
      {
        label: '法律法规',
        value: 2
      },
      {
        label: '安全手册',
        value: 3
      },
      {
        label: '行业新闻',
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
