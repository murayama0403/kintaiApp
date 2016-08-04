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
    
      if (week.length == 7 ) {
        weeks.push(week);
        week = [];
      }
      if ( i + 1 == daySize) {
	    var monthIndex = now.getMonth() ;
	    var date = new Date(now.getFullYear(), monthIndex, 1);
	    var Lastdate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	    addDummysLast(week, Lastdate);
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
  function addDummysLast(week, LastDate) {
    var LastDay = LastDate.getDate();
    var LastDummys = [];
    var zanDay = 0;
    switch (LastDate.getDay()){
    case 0:
     zanDay = 6;
     break;
    case 1:
     zanDay = 5;
     break;
    case 2:
     zanDay = 4;
     break;
    case 3:
     zanDay = 3;
     break;
    case 4:
     zanDay = 2;
     break;
    case 5:
     zanDay = 1;
     break;
    }

    for (var i = LastDay; i < LastDay + zanDay; i++) {
      week.push(i);
    }

  }

}]);
