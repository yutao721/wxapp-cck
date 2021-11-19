import { Detail } from '../../models/detail';
import { Global } from '../../models/global';

const G = new Global();
const D = new Detail();

const app = getApp();
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    authenticationType: {
      type: String,
      value: 'phone' //wechat 用户信息 phone 手机号
    },
    isShow: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgPath: app.$imgPath
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * @description 获取用户信息
     * @author YoKa_zhangxm
     * @date 2021-03-16
     */
    toAuthentication() {
      const that = this;
      if (this.data.authenticationType == 'wechat') {
        wx.getUserProfile({
          desc: '用于展示用户信息',
          lang: 'zh_CN',
          success: (req) => {
            console.log('用户授权', req);
            // 授权成功
            that.setData({ isShow: false });
            G.authen(req).then((res) => {
              console.log('授权成功回调', res);
              // 通知当前页面回调
              that.triggerEvent('authen');
            });
          }
        });
      }

      if (this.data.authenticationType == 'phone') {
      }
    },
    /**
     * @description 授权手机号
     * @author YoKa_zhangxm
     * @date 2021-03-16
     * @param {*} e
     */
    handleGetphonenumber(e) {
      console.log('授权手机号');
      if (e.detail.errMsg == 'getPhoneNumber:ok') {
        // 授权成功
        let { encryptedData, iv } = e.detail;
        D.mobileAuth({ encryptedData, iv }).then((res) => {
          console.log('手机号', res);
          if (!res.resCode) {
            app.$util.showToast('授权成功!');
            this.setData({
              isShow: false
            });
            app.$util.getCurrentPage().setData({
              isMobile: true
            });
            this.triggerEvent('handleGetphonenumber', {
              phone: res.data.mobile
            });
          }
        });
      }
    },

    cancel() {
      this.setData({ isShow: false });
    }
  }
});
