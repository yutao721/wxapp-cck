Page({
  data: {
    tabbarList: [
      {
        text: '全部答题',
        value: ''
      },
      {
        text: '题库答题',
        value: '10'
      },
      {
        text: 'pk记录',
        value: '25'
      },
      {
        text: '闯关记录',
        value: '30'
      },
      {
        text: '考试记录',
        value: '40'
      }

    ],
    activeTab: ''
  },

  // 选择tabbar
  handleChooseTab(e) {
    const { value } = e.currentTarget.dataset;
    let activeTab = this.data.activeTab;
    if (activeTab === value) return;
    this.setData({ activeTab: value });
    this.getOrderList();
  },

  getOrderList(page = 1) {

  },

  onLoad: function (options) {

  }
});
