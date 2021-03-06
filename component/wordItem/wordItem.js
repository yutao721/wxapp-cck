import Tips from '../../utils/tip';

const app = getApp();
Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },
  data: {
    imgPath: app.$imgPath
  },
  methods: {
    handleFollow(e) {
      let { type } = e.currentTarget.dataset;
      let title = `确定${type ? '取消' : '加入'}收藏？`
      Tips.confirm(title, {}, '温馨提示').then(() => {

      })
    }
  }
});
