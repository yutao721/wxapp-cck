Component({
  properties: {
    clockDatas: {
      type: Array
    }
  },
  data: {
    showMore: false,
    weekData: ['一', '二', '三', '四', '五', '六', '日'],
    miniContent: [
      ///monthStatus:0-上月日期，1-本月日期，2-下月日期，isSignIn是否已签到，isToday当前日期是否是今天
      { id: 1, title: '26', monthStatus: 1, isSignIn: false, isToday: false }
    ],
    largeContent: [],
    today: '',
    currentYear: '',
    currentMonth: '',
    currentDate: '',
    lastSwiper: 0,
    autoplay: false
  },
  observers: {
    'clockDatas, currentMonth': function (data) {
      console.log('数据更新');
      let changeDate = this.data.currentYear + '-' + this.data.currentMonth + '-1';
      console.log(changeDate);
      this.getLargeDate(changeDate);
      this.getMiniDate(changeDate);
    }
  },
  ready: function () {
    // this.forToday();
    this.initCalendar();
  },

  methods: {

    contentToggle() {
      this.setData({ showMore: !this.data.showMore })
    },

    //初始化日历
    initCalendar() {
      let dateObject = new Date(),
        year = dateObject.getFullYear(),
        month = dateObject.getMonth() + 1,
        date = dateObject.getDate(),
        today = year + '-' + this.zero(month) + '-' + this.zero(date);
      this.setData({
        today: today,
        currentYear: year,
        currentMonth: month,
        currentDate: date,
        totalDays: this.getMonthDays(year, month)
      });

      this.getMiniDate();
      this.getLargeDate();
    },

    // 获取小日期
    getMiniDate(dates) {
      let dateObject = dates ? new Date(dates) : new Date();
      let toMonth = dateObject.getMonth() + 1;
      let toDay = dateObject.getDate();
      let toWeek = dateObject.getDay();
      dateObject.setDate(dateObject.getDate() - toWeek + 1);
      let miniData = [];
      for (let i = 0; i < 7; i++) {
        let currentDate = this.getFormatDate(dateObject);
        let clockDate = this.data.clockDatas.filter((item) => item.date == currentDate.date);
        let currentObj = {
          title: currentDate.day,
          monthStatus: ( currentDate.month > toMonth ? 2 : ( currentDate.month < toMonth ? 0 : 1 ) ),
          isSignIn: clockDate.length > 0 ? true : false,
          isToday: ( currentDate.day == this.data.toDay ? true : false ),
          // forTodayStatus: this.forTodayStatus(currentDate)
        }
        miniData.push(currentObj);
        dateObject.setDate(dateObject.getDate() + 1);
      }

      console.log('小日期', miniData);
      this.setData({ miniContent: miniData });
    },

    // 获取大的日期
    getLargeDate(dates) {
      let dateObject = dates ? new Date(dates) : new Date();
      let toMonth = dateObject.getMonth() + 1;
      let toDay = dateObject.getDate();
      let toWeek = new Date(dateObject.getFullYear(), toMonth - 1, 1).getDay(); // 获取本月一号的星期
      let toDates = 35;
      // 将本月的某一天设置为上个月的最后一天
      dateObject.setDate(dateObject.getDate() - ( toWeek + toDay - 2 ));

      let largeData = [];
      for (let i = 0; i < toDates; i++) {
        let currentDate = this.getFormatDate(dateObject);
        let clockDate = this.data.clockDatas.filter((item) => item.date == currentDate.date);
        let currentObj = {
          title: currentDate.day,
          monthStatus: ( currentDate.month > toMonth ? 2 : ( currentDate.month < toMonth ? 0 : 1 ) ),
          isSignIn: clockDate.length > 0 ? true : false,
          isToday: ( currentDate.date == this.data.today ? true : false ),
          // forTodayStatus: this.forTodayStatus(currentDate)
        }
        largeData.push(currentObj);
        dateObject.setDate(dateObject.getDate() + 1);
      }
      console.log('大日期', largeData);
      this.setData({
        largeContent: largeData
      });
    },

    forToday() {
      let dateObject = new Date();
      let year = dateObject.getFullYear();
      let month = dateObject.getMonth() + 1;
      let day = dateObject.getDate();
      let currentDate = year + '' + this.zero(month) + '' + this.zero(day);
      this.todayString = currentDate;
    },

    forTodayStatus(dateObject) {
      let todayString = this.todayString;
      let year = dateObject.year;
      let month = dateObject.month;
      let day = dateObject.day;
      let ObjectDate = year + '' + this.zero(month) + '' + this.zero(day);
      if (todayString > ObjectDate) {
        return -1
      } else if (todayString == ObjectDate) {
        return 0
      } else {
        return 1
      }
    },

    getFormatDate(date) {
      let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();
      let currentDate = year + '-' + this.zero(month) + '-' + this.zero(day);
      return {
        year: year,
        month: month,
        day: day,
        date: currentDate
      }
    },

    // 滑块改变事件
    swiperChange(e) {
      let current = e.detail.current;
      let lastSwiper = this.data.lastSwiper;
      let status = current - lastSwiper;
      if (status == -1 || status == 2) {
        //console.log("右滑");
        this.setCurrentDate(0); //月份减一
      } else if (status == 1 || status == -2) {
        //console.log("左滑");
        this.setCurrentDate(1); //月份加一
      } else {
        console.log('其他');
      }

      let changeDate = this.data.currentYear + '-' + this.data.currentMonth + '-1';
      //this.getLargeDate(changeDate);
      this.triggerEvent('changeMonth', { year: this.data.currentYear, month: this.data.currentMonth });


      this.setData({
        lastSwiper: current
      })
    },

    // 加
    handleNext() {
      let { lastSwiper } = this.data;
      lastSwiper = lastSwiper < 2 ? lastSwiper + 1 : 0
      this.setData({ lastSwiper: lastSwiper })
      this.setCurrentDate(1);
    },

    // 减
    handlePrev() {
      let { lastSwiper } = this.data;
      lastSwiper = lastSwiper > 0 ? lastSwiper - 1 : 2
      this.setData({ lastSwiper: lastSwiper })
      this.setCurrentDate(0);
    },

    // 根据传入的参数加减月份
    setCurrentDate(type) {
      let currentYear = Number(this.data.currentYear);
      let currentMonth = Number(this.data.currentMonth);
      if (type) {
        if (currentMonth == 12) {
          currentYear = currentYear + 1;
          currentMonth = 1;
        } else {
          currentMonth = currentMonth + 1;
        }
      } else {
        if (currentMonth == 1) {
          currentYear = currentYear - 1;
          currentMonth = 12;
        } else {
          currentMonth = currentMonth - 1;
        }
      }

      this.setData({
        currentYear: currentYear,
        currentMonth: currentMonth,
        totalDays: this.getMonthDays(currentYear, currentMonth)
      })

    },

    //补全0
    zero: function (i) {
      return i >= 10 ? i : '0' + i;
    },

    // 获取当前月份的总天数
    getMonthDays(year, month) {
      let d = new Date(year, month, 0);
      return d.getDate();
    }

  }
})
