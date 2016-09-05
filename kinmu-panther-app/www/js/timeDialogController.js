angular.module('app')
.controller('TimeDialogController', ['timeDialogService', '$location', '$anchorScroll', 'util', function(timeDialogService, $location, $anchorScroll, util){

	this.selectTime = function(time) {
		timeDialogService.selectTime(time);
	};

	this.createTimeSelectList = function() {
		var list = [];
		var index = 0;
		for (var h = 0; h < 24; h++) {
			for (var t = 0; t < 60; t += 15) {
				if ((h == 9 && t == 0)
						|| (h == 17 && t == 45)) {
					list.push('');
					index++;
					list.push('---');
					index++;
				}
				var value = util.padZero(h) + ':' + util.padZero(t);
				if (value == timeDialogService.time) {
					this.defaultIndex = index;
				}
				list.push(value);
				index++;
			}
		}
		return list;
	};

	this.scrollToDefault = function() {
		var scrollTo = this.defaultIndex - 2;
		if (scrollTo <= 0) {
			return;
		}
		$location.hash('time' + scrollTo);
		$anchorScroll();
	};

}]);
