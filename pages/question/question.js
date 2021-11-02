const app = getApp();
Page({
  data: {
    option1: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 }
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' }
    ],
    value1: 0,
    value2: 'a',
    show: false,
    imgPath: app.$imgPath,
    clockData: [
      { date: '2021-10-21' },
      { date: '2021-10-22' },
      { date: '2021-10-23' },
      { date: '2021-10-24' }
    ]
  },

  onClose() {
    this.setData({ show: false });
  },

  handleOpenPk() {
    this.setData({ show: true });
  },

  handleToPkDetail() {
    this.setData({ show: false }, () => {
      wx.navigateTo({ url: `/pages/pkDetail/pkDetail` })
    });
  },

  // 日历组件月更改事件
  changeMonth(e) {
    console.log('日历组件月改变事件', e);
    this.setData({
      clockData: [
        { date: '2020-05-11' },
        { date: '2020-05-12' },
        { date: '2020-05-23' },
        { date: '2020-05-24' }
      ]
    })
  },

  onLoad() {
    app.changeTabbar();
  }
});



