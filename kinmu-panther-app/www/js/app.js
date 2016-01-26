(function(){
  'use strict';
  
  var module = ons.bootstrap('app', ['onsen']);
  module.service('kinmuService', [function(){
    var SUNDAY = 0;
    var SATURDAY = 6;
    // 就業規則で12/30-1/3は休み(1/1は元日なので設定不要)
    var COMPANY_HOLIDAYS = ['12/30', '12/31', '1/2', '1/3'];
    
    function calcDayType(date) {
      var holiday = calcHoliday(date);
      if (holiday != '') {
        return 'hol';
      }
      
      // Dateのmonthは0始まりなので1を足して人間にわかりやすい文字列で判定
      var md = (date.getMonth() + 1) + '/' + date.getDate();
      if (COMPANY_HOLIDAYS.indexOf(md) != -1) {
        return 'hol';
      }
      
      if (date.getDay() == SUNDAY) {
        return 'sun';
      }
      if (date.getDay() == SATURDAY) {
        return 'sat';
      }
      return '';
    }
    
    this.getMonthData = function(year, month) {
      var days = [];
      var month0Origin = month - 1;
      var date = new Date(year, month0Origin, 1);
      while (date.getMonth() == month0Origin) {
        var currentDate = new Date(date.getTime());
        var dayData = {
          date: currentDate,
          dayType: calcDayType(currentDate)
        };
        days.push(dayData);
        date.setDate(date.getDate() + 1);
      }
      
      return {
        year: year,
        month: month,
        days: days
      };
    };
  }]);
  
  module.controller('AppController', ['kinmuService', function(kinmuService){
    var now = new Date();
    this.data = kinmuService.getMonthData(now.getFullYear(), now.getMonth() + 1);
  }]);
  
  ons.ready(function() {
    // Init code here
  });
})();
