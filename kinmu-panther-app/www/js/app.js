(function(){
  'use strict';
  
  var module = ons.bootstrap('app', ['onsen']);
  module.controller('AppController', function($scope){
    $scope.currentMonth = new Date();
    
    // 日付のリスト
    $scope.dateList = {
    
      // itemScopeの設定
      configureItemScope: function(index, itemScope) {
        var indexDay = index; // 本来は+1 TODO:なおす
        var indexYear = $scope.currentMonth.getFullYear();
        var indexMonth = $scope.currentMonth.getMonth();
        var indexDate = new Date( indexYear, indexMonth, indexDay );
        var weekTbl = new Array('日','月','火','水','木','金','土');
        var indexDayOfWeek = indexDate.getDay();
        var indexDayKanji = weekTbl[indexDayOfWeek];
        var color = 'weekDay';
        if (indexDayOfWeek == 0) {
          color = 'sunday';
        } else if (indexDayOfWeek == 6) {
          color = 'saturday';
        }
        // アイテムを入れる
        itemScope.item = {
          name: indexDay,
          day: indexDayKanji,
          color: color
        };
      },
      
      // アイテムの高さ
      calculateItemHeight: function(index) {
        return 45;
      },
      
      // アイテムの数
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