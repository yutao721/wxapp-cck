import { Index } from '../../models/index'
import { Staff } from '../../models/staff'
import WxParse from '../../wxParse/wxParse.js';

const INDEX = new Index();
const S = new Staff();
const app = getApp();
Component({
  data: {},

  methods: {
    getDetail(id, type) {
      let _this = this;
      let API = type != 'staff' ? INDEX : S;
      API.getDetail(id).then(res => {
        // 富文本解析
        let article = res.data.infoContent;
        article && WxParse.wxParse('article', 'html', article, _this, 15);
        this.setData({ detail: res.data })
      })
    },

    onLoad(options) {
      console.log(options);
      this.getDetail(options.id, options.type);
      wx.enableAlertBeforeUnload({
        message: '推出后将立即失效，您的答题记录也不会保存',
        success: () => {
          console.log(1);
        }
      })
    }
  }
});
