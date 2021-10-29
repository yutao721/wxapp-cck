const app = getApp();
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({
  data: {},

  handleSign() {
    Toast({
      message: '签到成功',
      forbidClick: true,
      selector: '#van-toast'
    });
  },

  onLoad() {

  }
});
