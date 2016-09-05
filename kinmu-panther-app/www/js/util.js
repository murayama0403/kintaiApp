angular.module('app')
.service('util', [function(){

	this.padZero = function(i) {
		return ('0' + i).slice(-2);
	}
	
}]);