(function(){
  'use strict';
  
  var module = ons.bootstrap('app', ['onsen']);
  module.controller('AppController', function($scope){
  
    function calcDayType(date) {
      // TODO 祝日
      if (date.getDay() == 0) {
        return 'sun'
      }
      if (date.getDay() == 6) {
        return 'sat'
      }
      return ''
    }
    
    var now = new Date();
    
    var days = [];
    var date = new Date(now.getFullYear(), now.getMonth(), 1);
    while (date.getMonth() == now.getMonth()) {
      var currentDate = new Date(date.getTime())
      var dayData = {
        date: currentDate,
        dayType: calcDayType(currentDate)
      };
      console.info(dayData);
      days.push(dayData);
      date.setDate(date.getDate() + 1);
    }
    
    $scope.now = now;
    $scope.days = days;
  });
  
  ons.ready(function() {
    // Init code here
  });
})();
