import Tips from '../../utils/tip';

const app = getApp();
Page({
  data: {
    show: false,
    isAnswer: false,
    isLast: false,
    resultDialog: false,
    isThrough: false,
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

  handleConfirm() {
    // todo
    this.setData({ isAnswer: true })

  },

  handleOpenCard() {
    this.setData({ show: true })
  },

  onClose() {
    this.setData({ show: false });
  },

  // 下一题
  handleNextQuestion() {
    this.setData({ isLast: true })
  },

  // 提交
  handleSubmit() {

    // todo
    let { type } = this.data;
    wx.navigateTo({ url: `/pages/pkResult/pkResult?type=${type}` })
  },

  // 题目闯关
  handleThrough() {
    let isThrough = app.$util.randomBoolean();
    console.log(isThrough);
    this.setData({ isThrough }, () => {
      this.setData({ resultDialog: true })
    })
  },

  // 回顾解析
  handleToErrDetail() {
    wx.redirectTo({
      url: `/pages/errorDetail/errorDetail`
    })
  },

  handleToCommonList() {
    wx.redirectTo({
      url: `/pages/commonList/commonList`
    })
  },

  setTitleByType(type) {
    let title = ''
    switch (type) {
      case -1:
        title = '题目闯关';
        break;
      case 1:
        title = '答题PK';
        break;
      case 2:
        title = '试卷考试';
        break;
      case 3:
        title = '题库答题';
        break;
      default:
        title = '答题PK';
    }
    wx.setNavigationBarTitle({ title })
  },

  onLoad: function (options) {
    let type = options.type
    this.setData({ type: options.type });
    this.setTitleByType(type * 1)
  }
});
