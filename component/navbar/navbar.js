/**
 * 一般不建议使用，建议使用小程序自带的导航
 */
let app = getApp();
Component({
  properties: {
    title: {
      type: String,
      value: '自定义标题'
    },
    fixed: {
      type: Boolean,
      value: true
    },
    placeholder: {
      type: Boolean,
      value: true
    },
    border: {
      type: Boolean,
      value: true
    }
  },
  data: {
    leftArrow: true,
    statusBarH: app.$system.statusBarHeight
  },

  attached() {
    let currentPages = getCurrentPages();
    this.setData({
      leftArrow: currentPages.length > 1
    })
    app.$util.getCurrentPage().setData({
      navbarH: this.data.statusBarH + 46
    });
  },

  methods: {
    onClickLeft() {
      wx.showToast({ title: '点击返回', icon: 'none' });
      wx.navigateBack({
        delta: 1,
        fail: () => {
          wx.switchTab({
            url: '/pages/index/index'
          });
        }
      });
    },
    onClickRight() {
      wx.showToast({ title: '点击按钮', icon: 'none' });
    }
  }
});
