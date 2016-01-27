angular.module('app')
.controller('ListController', ['kinmuService', function(kinmuService){

  var now = new Date();
  this.data = kinmuService.getMonthData(now.getFullYear(), now.getMonth() + 1);
  
}]);
