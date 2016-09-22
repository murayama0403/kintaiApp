(function() {
    'use strict';

    ons.bootstrap('app', ['onsen', 'LocalStorageModule']);

    angular.module('app').config(['localStorageServiceProvider', function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('kinmuPanther');
    }]);

    ons.ready(function() {
        // Init code here
    });
})();
