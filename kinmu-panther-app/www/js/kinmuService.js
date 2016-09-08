angular.module('app')
.service('kinmuService', ['$localStorage', function($localStorage){
	
	this.TIME_EMPTY = '';
	this.TIME_OFF = '---';
	
	var currentMonth = '201609';
	var query = {};
	query[currentMonth] = {};
	this.data = $localStorage.$default(query);
	
	console.info(this.data);

	$localStorage[currentMonth] = {8: {
		in: '09:00',
		out: '17:45'
	}};

}]);