angular.module('app').controller('InputController', ['timeDialogService', 'kinmuService', 'util', function(timeDialogService, kinmuService, util) {

    var QUICK_NOW = '現在時刻';

    this.currentDate = new Date();
    this.inTime = kinmuService.TIME_EMPTY;
    this.outTime = kinmuService.TIME_EMPTY;
    this.quickTime = QUICK_NOW;

    this.quickIn = function() {
        this.inTime = this.calcQuickTime(true);
        this.saveTime();
    }

    this.quickOut = function() {
        this.outTime = this.calcQuickTime(false);
        this.saveTime();
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

    this.selectInTime = function() {
        var time = this.inTime;
        if (time == kinmuService.TIME_EMPTY || time == kinmuService.TIME_OFF) {
            time = '09:00';
        }
        var _this = this;
        timeDialogService.showDialog(time, function(selected) {
            _this.inTime = selected;
            _this.saveTime();
        });
    }

    this.selectOutTime = function() {
        var time = this.outTime;
        if (time == kinmuService.TIME_EMPTY || time == kinmuService.TIME_OFF) {
            time = '17:45';
        }
        var _this = this;
        timeDialogService.showDialog(time, function(selected) {
            _this.outTime = selected;
            _this.saveTime();
        });
    }

    this.selectQuickTime = function() {
        var time = this.calcQuickTime(false);
        var _this = this;
        timeDialogService.showDialog(time, function(selected) {
            _this.quickTime = selected;
        });
    }
    
    this.saveTime = function() {
        kinmuService.saveTime(this.currentDate, this.inTime, this.outTime);
    }

}]);
