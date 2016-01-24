(function(){
  'use strict';
  
  var module = ons.bootstrap('app', ['onsen']);
  module.controller('AppController', function($scope){
    $scope.currentMonth = new Date();
    $scope.dateList = {
      configureItemScope: function(index, itemScope) {
        var indexYear = $scope.currentMonth.getFullYear();
        var indexMonth = $scope.currentMonth.getMonth();
        var indexDate = new Date( indexYear, indexMonth, index );
        var weekTbl = new Array('日','月','火','水','木','金','土');
        var indexDay = indexDate.getDay();
        var indexDayKanji = weekTbl[indexDay];
        var color = 'weekDay';
        if (indexDay == 1) {
          color = 'sunday';
        } else if (indexDay == 7) {
          color = 'saturday';
        }
        itemScope.item = {
          name: index,
          day: indexDayKanji,
          color: color
        };
      },
      calculateItemHeight: function(index) {
        return 45;
      },
      countItems: function() {
        var year = $scope.currentMonth.getFullYear();
        var month = $scope.currentMonth.getMonth() + 1;
        var leapYearFlag = new Boolean();
        if (!(year % 4) && (year % 100) || !(year % 400) ) {
          leapYearFlag = true;
        }
        if (month == 2 && leapYearFlag) {
          return 29;
        }
        else if (month == 2 && !leapYearFlag) {
          return 30;
        }
        else if (month == 4 || month == 6 || month == 9 || month == 11) {
          return 31;
        }
        else {
          return 32;
        }
      },
      destroyItemScope: function(index, scope) {
        console.log("Destroyed item #" + index);
      }
    };
  });
  ons.ready(function() {
    // Init code here
  });
})();