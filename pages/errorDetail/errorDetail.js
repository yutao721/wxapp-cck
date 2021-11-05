import Tips from '../../utils/tip';

Page({
  data: {
    show: false,
    isFollow: false
  },

  handleFollow() {
    let isFollow = this.data.isFollow;
    let title = `确定${isFollow ? '取消' : '加入'}收藏？`
    Tips.confirm(title, {}, '温馨提示').then(() => {
      this.setData({ isFollow: !isFollow }, () => {
        Tips.success(`${isFollow ? '取消' : '收藏'}成功！`)
      })
    })
  },

  handleOpenCard() {
    this.setData({ show: true })
  },

  onClose() {
    this.setData({ show: false });
  },


  onLoad: function (options) {

  }
});
