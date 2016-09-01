angular.module('app')
.controller('InputController', ['timeDialogService', function(timeDialogService){

	this.currentDate = new Date();
	
//	this.inputTime = function(type, dayData) {
//		timeDialogService.showDialog(type, dayData);
//	};
  
}]);
