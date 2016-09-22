angular.module('app').service('kinmuService', ['localStorageService', function(localStorageService){
    
    this.TIME_EMPTY = '';
    this.TIME_OFF = '---';
    
    var currentMonth = '201609';
    
    this.data = localStorageService.get(currentMonth);
    
    console.info(this.data);

    localStorageService.set(currentMonth, {
        8: {
            in: '09:00',
            out: '17:45'
        }
    });

}]);