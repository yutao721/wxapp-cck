import { Staff } from '../../models/staff'

const S = new Staff();
const app = getApp();
Page({
  data: {
    tabs: [
      {
        label: '活动风采',
        value: 1
      },
      {
        label: '工作分享',
        value: 2
      },
      {
        label: '生活分享',
        value: 3
      },
      {
        label: '知识分享',
        value: 4
      }
    ],
    list: [],
    activeTab: 1
  },

  handleSwitchTab(e) {
    let { value } = e.currentTarget.dataset;
    this.setData({ activeTab: value, list: [] }, () => {
      this.getList()
    })
  },

  async getInfoTypeList() {
    let { data: tabs } = await S.getEmpTypeList();
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

  getList(page = 1) {
    let { activeTab } = this.data
    S.getList(activeTab).then(res => {
      console.log(res);
      let { rows: data, total } = res;
      let { list } = this.data;
      if (page == 1) list = [];
      this.setData({ list: [...list, ...data] });
    })
  },

  async onLoad() {
    app.changeTabbar();
  },

  async onShow() {
    await this.getInfoTypeList();
    this.getList()
  }

});
