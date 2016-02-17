angular.module('app')
.service('timeDialogService', [function(){

  var timeDialog;
  ons.ready(function() {
    ons.createDialog('timeDialog.html').then(function(dialog) {
      timeDialog = dialog;
	});
  });

  var data = {};
  this.data = data;
  
  this.showDialog = function(type, dayData) {
	data.type = type;
	data.dayData = dayData;
	timeDialog.show();
  };

  this.selectTime = function(time) {
    if (data.type == 'in') {
      data.dayData.inTime = time;
    }
    else {
      data.dayData.outTime = time;
    }
    timeDialog.hide();
  };

}]);
