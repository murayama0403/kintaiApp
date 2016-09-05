angular.module('app')
.controller('InputController', ['timeDialogService', 'util', function(timeDialogService, util){

	var QUICK_NOW = '現在時刻';
	
	this.currentDate = new Date();
	this.inTime = '';
	this.outTime = '';
	this.quickTime = QUICK_NOW;

	////////////////////
	// quick
	
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
		
		return util.padZero(now.getHours()) + ':' + util.padZero(now.getMinutes())
	}
	
	////////////////////
	// selectTime
	
	this.selectInTime = function() {
		var time = this.inTime;
		// TODO kinmuServiceから取得？
		if (time == '' || time == '---') {
			time = '09:00';
		}
		var _this = this;
		timeDialogService.showDialog(time, function(selected) {
			_this.inTime = selected;
		});
		return false;
	}
	
	this.selectOutTime = function() {
		var time = this.outTime;
		// TODO kinmuServiceから取得？
		if (time == '' || time == '---') {
			time = '17:45';
		}
		var _this = this;
		timeDialogService.showDialog(time, function(selected) {
			_this.outTime = selected;
		});
		return false;
	}
	
//	this.inputTime = function(type, dayData) {
//		timeDialogService.showDialog(type, dayData);
//	};
	
}]);
