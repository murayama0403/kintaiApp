angular.module('app')
.controller('InputController', ['kinmuService', 'timeDialogService', function(kinmuService, timeDialogService){

  this.data = kinmuService.getCurrentDateData();

  this.inputTime = function(type, dayData) {
    timeDialogService.showDialog(type, dayData);
  };
  
}]);
