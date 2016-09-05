angular.module('app')
.service('timeDialogService', [function(){

  var timeDialog;
  var time;
  ons.ready(function() {
    ons.createDialog('timeDialog.html').then(function(dialog) {
      timeDialog = dialog;
	});
  });

  this.showDialog = function(time, onSuccess) {
	this.time = time;
	this.onSuccess = onSuccess;
	timeDialog.show();
  };

  this.selectTime = function(time) {
	  this.onSuccess(time);
	  timeDialog.hide();
  };

}]);
