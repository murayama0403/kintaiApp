(function(){
  'use strict';
  
  var module = ons.bootstrap('app', ['onsen']);
  module.controller('AppController', function($scope){
    var now = new Date();
    
    var days = [];
    var date = new Date(now.getFullYear(), now.getMonth(), 1);
    while (date.getMonth() == now.getMonth()) {
      days.push(new Date(date.getTime()));
      date.setDate(date.getDate() + 1);
    }
    
    $scope.now = now;
    $scope.days = days;
  });
  
  ons.ready(function() {
    // Init code here
  });
})();
