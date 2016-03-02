(function(){
  'use strict';
  
  var module = ons.bootstrap('app', ['onsen']);
  module.controller('AppController', function($scope){
    $scope.currentMonth = new Date();
    
    // 日付のリスト
    $scope.dateList = {
    
      // itemScopeの設定
      configureItemScope: function(index, itemScope) {
        var indexDay = index + 1;
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
        if (month == 2) {
          if (!(year % 4) && (year % 100) || !(year % 400) ) {
            // 閏年の2月
            return 29;
          } else {
            // 平年の2月
            return 28;
          }
        }
        else if (month == 4 || month == 6 || month == 9 || month == 11) {
          // 30日までの月
          return 30;
        }
        else {
          // 31日までの月
          return 31;
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