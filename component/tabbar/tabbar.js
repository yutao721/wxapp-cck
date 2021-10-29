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
          normal: '../../images/tab/index_default.png',
          active: '../../images/tab/index_active.png'
        },
        {
          pagePath: '/pages/question/question',
          text: '题库',
          normal: '../../images/tab/question_default.png',
          active: '../../images/tab/question_active.png'

        },
        {
          pagePath: '/pages/material/material',
          text: '资料',
          normal: '../../images/tab/material_default.png',
          active: '../../images/tab/material_active.png'

        },
        {
          pagePath: '/pages/staff/staff',
          text: '员工',
          normal: '../../images/tab/staff_default.png',
          active: '../../images/tab/staff_active.png'

        },
        {
          pagePath: '/pages/mine/mine',
          text: '我的',
          normal: '../../images/tab/mine_default.png',
          active: '../../images/tab/mine_active.png'
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
