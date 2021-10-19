const app = getApp();
Page({
  data: {
    tabs: [
      {
        label: '文档',
        value: 'word'
      },
      {
        label: '视频',
        value: 'video'
      }
    ],
    activeTab: 'word'
  },
  handleSwitchTab(e) {
    let { value } = e.currentTarget.dataset;
    this.setData({ activeTab: value })
  },

  onLoad() {

  }
});
