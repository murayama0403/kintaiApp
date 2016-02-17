angular.module('app')
.controller('ListController', ['kinmuService', 'timeDialogService', function(kinmuService, timeDialogService){

  var now = new Date();
  this.data = kinmuService.getMonthData(now.getFullYear(), now.getMonth() + 1);

  this.inputTime = function(type, dayData) {
    timeDialogService.showDialog(type, dayData);
  };
  
}]);
