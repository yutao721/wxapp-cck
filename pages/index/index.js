import { Index } from '../../models/index'

const INDEX = new Index();
const app = getApp();
Page({
  data: {
    list: [],
    banner: [],
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
    this.setData({ activeTab: value, list: [] }, () => {
      this.getList()
    })
  },

  async getInfoTypeList() {
    let { data: tabs } = await INDEX.getInfoTypeList();
    if (tabs && tabs.length) {
      tabs = tabs.map(item => {
        return {
          label: item.typeName,
          value: item.id
        }
      })
      this.setData({ tabs, activeTab: tabs[0].value })
    }
  },

  async getBannerList() {
    let { data } = await INDEX.getBannerList();
    this.setData({ banner: data })
  },


  getList(page = 1) {
    let { activeTab } = this.data
    INDEX.getList(activeTab).then(res => {
      console.log(res);
      let { rows: data, total } = res;
      let { list } = this.data;
      if (page == 1) list = [];
      data.length && data.forEach(item => {
        item.time = app.$util.serDate2Time(item.addtime).date
      })
      this.setData({ list: [...list, ...data] });
    })
  },


  async onLoad(options) {
    app.changeTabbar();

  },

  async onShow() {
    await this.getInfoTypeList()
    await this.getBannerList()
    this.getList()
  },

  onReachBottom() {
    app.$util.onPageReachBottom((page) => {
      this.getList(page);
    })
  }
});
