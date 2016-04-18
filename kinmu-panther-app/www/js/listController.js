angular.module('app')
.controller('ListController', ['kinmuService', 'timeDialogService', function(kinmuService, timeDialogService){

  this.data = kinmuService.getCurrentMonthData();

  this.inputTime = function(type, dayData) {
    timeDialogService.showDialog(type, dayData);
  };
  
}]);
