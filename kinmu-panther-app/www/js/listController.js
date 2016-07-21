angular.module('app')
.controller('ListController', ['kinmuService', function(kinmuService){

  var now = new Date();
  var monthData = kinmuService.getMonthData(now.getFullYear(), now.getMonth() + 1);
  
  this.calendarData = createCalendarData(monthData);
  
  function createCalendarData(data) {
    var weeks = [];
  
    var week = [];
    addDummys(week, data.days[0].date);
  
    var daySize = data.days.length;
    for (var i = 0; i < daySize; i++) {
      week.push(data.days[i]);
    
      if (week.length == 7 || i + 1 == daySize) {
        weeks.push(week);
        week = [];
      }
    }
    
    return {
      year: data.year,
      month: data.month,
      weeks: weeks
    };
  }
  
  function addDummys(week, firstDate) {
    var firstDay = firstDate.getDay();
    var startDummys = [];
    for (var i = 0; i < firstDay; i++) {
      week.push(i);
    }
  }
}]);
