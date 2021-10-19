import { Index } from '../../models/index'
import WxParse from '../../wxParse/wxParse.js';

const INDEX = new Index();
const app = getApp();
Component({
  data: {},

  methods: {
    getDetail(id) {
      let _this = this;
      INDEX.getDetail({ id }).then(res => {
        // 富文本解析
        let article = res.data.content;
        article && WxParse.wxParse('article', 'html', article, _this, 15);
        res.data.time = app.$util.serDate2Time(res.data.addtime).date;
        this.setData({ detail: res.data })
      })
    },

    onLoad(options) {
      console.log(options);
      this.getDetail(options.id);
      wx.enableAlertBeforeUnload({
        message: '推出后将立即失效，您的答题记录也不会保存',
        success: () => {
          console.log(1);
        }
      })
    }
  }
});
