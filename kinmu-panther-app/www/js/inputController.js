angular.module('app')
.controller('InputController', ['timeDialogService', function(timeDialogService){

	this.currentDate = new Date();
	this.inTime = '';
	this.outTime = '';
	this.quickTime = '現在時刻';
	
//	this.inputTime = function(type, dayData) {
//		timeDialogService.showDialog(type, dayData);
//	};
	
}]);
