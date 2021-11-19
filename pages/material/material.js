import { Material } from '../../models/material'

const M = new Material();
const app = getApp();
Page({
  data: {
    tabs: [
      {
        label: '文档',
        value: 'doc'
      },
      {
        label: '视频',
        value: 'video'
      }
    ],
    activeTab: 'doc',
    list: [],
    docName: ''
  },

  handleSwitchTab(e) {
    let { value } = e.currentTarget.dataset;
    this.setData({ activeTab: value, list: [] }, () => {
      this.getList()
    })
  },

  handleInput({ detail }) {
    let { value } = detail;
    this.setData({ docName: value })
  },

  handleSearch() {
    this.getList()
  },

  getList() {
    let { activeTab, docName } = this.data
    let params = {
      docType: activeTab,
      docName
    }
    M.getList(params).then(res => {
      console.log(res);
      let { rows: data, total } = res;
      let { list } = this.data;
      this.setData({ list: [...list, ...data] });
    })
  },

  onLoad() {
    app.changeTabbar();
    this.getList()
  }
});
