angular.module('app')
.controller('TimeDialogController', ['timeDialogService', '$location', '$anchorScroll', function(timeDialogService, $location, $anchorScroll){

  this.data = timeDialogService.data;
  
  this.typeString = function() {
	if (this.data.type == 'in') {
	  return '出勤';
	}
	else {
	  return '退勤';
	}
  }
  
  this.selectTime = function(time) {
	timeDialogService.selectTime(time);
  };
  
  this.createTimeSelectList = function() {
    var list = [];
    for (var h = 0; h < 24; h++) {
      for (var t = 0; t < 60; t += 15) {
    	if ((this.data.type == 'in' && (h == 9 && t == 0))
    			|| (this.data.type == 'out' && (h == 17 && t == 45))) {
    		list.push('');
    		list.push('---');
    	}
    	list.push(padLeft(h) + ':' + padLeft(t));
      }
    }
    return list;
  };
  
  this.scrollToDefault = function() {
    $location.hash('time-');
    $anchorScroll();
  };
  
  function padLeft(i) {
	if (i < 10) {
	  return '0' + i;
	}
	return i;
  }
	  
}]);
