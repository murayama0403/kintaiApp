angular.module('app').service('kinmuService', ['localStorageService', 'util', function(localStorageService, util) {

    this.TIME_EMPTY = '';
    this.TIME_OFF = '---';

    this.saveTime = function(date, inTime, outTime) {
        var monthData = loadMonthData(date);
        monthData[date.getDate()] = {
            inTime : inTime,
            outTime : outTime
        }

        saveMonthData(monthData);
    }

    function loadMonthData(date) {
        var yearMonth = toYearMonth(date);
        var monthData = localStorageService.get(yearMonth);
        if (!monthData) {
            monthData = {
                yearMonth : yearMonth
            };
        }
        return monthData;
    }

    function saveMonthData(data) {
        localStorageService.set(data.yearMonth, data);
    }
    
    function toYearMonth(date) {
        var year = date.getFullYear();
        var month = util.padZero(date.getMonth() + 1);
        return year + '-' + month;
    }

}]);