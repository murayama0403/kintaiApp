angular.module('app')
.controller('InputController', ['timeDialogService', function(timeDialogService){

	var QUICK_NOW = '現在時刻';
	
	this.currentDate = new Date();
	this.inTime = '';
	this.outTime = '';
	this.quickTime = QUICK_NOW;
	
	this.quickIn = function() {
		this.inTime = this.calcQuickTime(true);
	}
	
	this.quickOut = function() {
		this.outTime = this.calcQuickTime(false);
	}
	
	this.calcQuickTime = function(isIn) {
		if (this.quickTime != QUICK_NOW) {
			return this.quickTime;
		}
		return calcQuickNow(isIn);
	}
	
	function calcQuickNow(isIn) {
		var now = new Date();
		if (isIn) {
			now.setMinutes(now.getMinutes() + 15);
		}
		now.setMinutes(Math.floor(now.getMinutes() / 15) * 15);
		
		return padZero(now.getHours()) + ':' + padZero(now.getMinutes())
	}
	
	function padZero(value) {
		return ('0' + value).slice(-2);
	}
	
//	this.inputTime = function(type, dayData) {
//		timeDialogService.showDialog(type, dayData);
//	};
	
}]);
