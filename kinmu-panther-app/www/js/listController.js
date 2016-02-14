angular.module('app')
.controller('ListController', ['kinmuService', function(kinmuService){

  var now = new Date();
  this.data = kinmuService.getMonthData(now.getFullYear(), now.getMonth() + 1);
  
  this.inputIn = function(dayData) {
	  // TODO 入力欄表示
	  dayData.inTime = '09:00';
  };
  
  this.inputOut = function(dayData) {
	  // TODO 入力欄表示
	  dayData.outTime = '17:45';
  };
}]);
