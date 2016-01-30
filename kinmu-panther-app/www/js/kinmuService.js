angular.module('app')
.service('kinmuService', [function(){
  var SUNDAY = 0;
  var SATURDAY = 6;
  // 就業規則で12/30-1/3は休み(1/1は元日なので設定不要)
  var COMPANY_HOLIDAYS = ['12/30', '12/31', '1/2', '1/3'];
  
  this.getMonthData = function(year, month) {
    var days = [];
    var monthIndex = month - 1;
    var date = new Date(year, monthIndex, 1);
    while (date.getMonth() == monthIndex) {
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
  
  function calcDayType(date) {
    var holiday = calcHoliday(date);
    if (holiday != '') {
      return 'holiday';
    }
    
    // Dateのmonthは0始まりなので1を足して人間にわかりやすい文字列で判定
    var monthDay = (date.getMonth() + 1) + '/' + date.getDate();
    if (COMPANY_HOLIDAYS.indexOf(monthDay) != -1) {
      return 'holiday';
    }
    
    if (date.getDay() == SUNDAY) {
      return 'sunday';
    }
    if (date.getDay() == SATURDAY) {
      return 'saturday';
    }
    return 'weekday';
  }
  
}]);
