(function(){
  'use strict';
  
  var module = ons.bootstrap('app', ['onsen']);
  module.controller('AppController', function($scope){
    $scope.currentMonth = new Date();
    
    // 日付のリスト
    $scope.dateList = {
    
      // itemScopeの設定
      configureItemScope: function(index, itemScope) {
        
        // 定数の初期化
        var WEEK_TABLE = ['日','月','火','水','木','金','土'];
        var SUNDAY = '0';
        var SATURDAY = '6';
        
        // 変数の初期化
        var indexDay = index + 1;
        var indexYear = $scope.currentMonth.getFullYear();
        var indexMonth = $scope.currentMonth.getMonth();
        var indexDate = new Date( indexYear, indexMonth, indexDay );
        var indexDayOfWeek = indexDate.getDay();
        var indexDayKanji = WEEK_TABLE[indexDayOfWeek];
        var dayDivision = 'weekDay';
        
        // 曜日分類の判定
        if (indexDayOfWeek == 0) {
          dayDivision = 'sunday';
        } else if (indexDayOfWeek == 6) {
          dayDivision = 'saturday';
        }
        
        // アイテムを追加
        itemScope.item = {
          day: indexDay,
          dayOfWeek: indexDayKanji,
          dayDivision: dayDivision
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