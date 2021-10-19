Page({
  data: {
    tabs: [
      {
        label: '答题数',
        value: 1
      },
      {
        label: '闯关数',
        value: 2
      },
      {
        label: '考试概况',
        value: 3
      },
      {
        label: '积分',
        value: 4
      },
    ],
    activeTab:1
  },

  handleSwitchTab(e) {
    let { value } = e.currentTarget.dataset;
    this.setData({ activeTab: value })
  },

  onLoad: function (options) {

  }
});
