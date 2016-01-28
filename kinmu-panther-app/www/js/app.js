(function(){
  'use strict';
  
  var module = ons.bootstrap('app', ['onsen']);
  module.controller('AppController', function($scope){
    $scope.currentMonth = new Date();
  });
  
  ons.ready(function() {
    // Init code here
  });
})();
