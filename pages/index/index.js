import { Index } from '../../models/index'

const INDEX = new Index();
const app = getApp();
Page({
  data: {
    items: [
      {
        label: '全新',
        value: ''
      },
      {
        label: '最新',
        value: 'id'
      },
      {
        label: '热帖',
        value: 'count'
      }
    ],
    status: '',
    keyword: '',
    list: [],
    banner: [
      {
        url: 'https://sgs-test.oss-cn-hangzhou.aliyuncs.com/uploads/banner/202008/5f334e64c5f98.png'
      },
      {
        url: 'https://sgs-test.oss-cn-hangzhou.aliyuncs.com/uploads/banner/202101/6000f944d56ac.jpg'
      },

      {
        url: 'https://sgs-test.oss-cn-hangzhou.aliyuncs.com/uploads/banner/202008/5f334e64c5f98.png'
      }
    ],
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

  handleInput(v) {
    this.setData({ keyword: v.detail.value })
  },

  handleStatus(e) {
    let { value } = e.currentTarget.dataset;
    this.setData({ status: value, list: [] }, () => {
      this.getList(1)
    })
  },

  submit() {
    this.getList(1)
  },

  getList(page = 1) {
    let { keyword, status } = this.data
    let params = { page, keyword, status }
    INDEX.getList(params).then(res => {
      let { data, total, per_page } = res.data;
      let { list } = this.data;
      data.length && data.forEach(item => {
        item.time = app.$util.serDate2Time(item.addtime).date
      })
      if (page == 1) list = [];
      this.setData({
        list: [...list, ...data],
        page,
        isMore: total > page * per_page
      });
    })
  },
  onLoad(options) {
    app.changeTabbar();
    this.getList()
  },

  onShow() {

  },

  onReachBottom() {
    app.$util.onPageReachBottom((page) => {
      this.getList(page);
    })
  }
});
