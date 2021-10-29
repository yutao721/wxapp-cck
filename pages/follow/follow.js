const app = getApp();
Page({
  data: {
    tabs: [
      {
        label: '题目',
        value: 'question'
      },
      {
        label: '资料',
        value: 'word'
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
