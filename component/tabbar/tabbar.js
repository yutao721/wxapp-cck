const app = getApp();
Component({
  properties: {
    active: {
      type: String,
      value: '/pages/index/index'
    }
  },
  data: {
    tabbar: {
      color: '#C5C5C5',
      selectedColor: '#FDD040',
      list: [
        {
          pagePath: '/pages/index/index',
          text: '首页',
          normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
          active: 'https://img.yzcdn.cn/vant/user-active.png'
        },
        {
          pagePath: '/pages/question/question',
          text: '题库',
          normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
          active: 'https://img.yzcdn.cn/vant/user-active.png'

        },
        {
          pagePath: '/pages/material/material',
          text: '资料',
          normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
          active: 'https://img.yzcdn.cn/vant/user-active.png'

        },
        {
          pagePath: '/pages/staff/staff',
          text: '员工',
          normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
          active: 'https://img.yzcdn.cn/vant/user-active.png'

        },
        {
          pagePath: '/pages/mine/mine',
          text: '我的',
          normal: 'https://img.yzcdn.cn/vant/user-inactive.png',
          active: 'https://img.yzcdn.cn/vant/user-active.png'
        }
      ]
    }
  },

  attached() {
    console.log(this.data.active);
  },

  methods: {

    // 切换
    onChangeTabbar(e) {
      // app.$IA.userTap();
      wx.switchTab({ url: e.detail });
    }
  }
});
