const app = getApp()
Component({
  externalClasses: ['wr-class'],
  properties: {
    src: {
      type: String,
      value: `${app.$imgPath}empty.png`
    },
    size: {
      type: String,
      value: '100rpx'
    },
    textSize: {
      type: String,
      value: '24rpx'
    },
    textColor: {
      type: String,
      value: '#999999'
    },
    backColor: {
      type: String,
      value: ''
    }
  }
})


