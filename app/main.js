requirejs.config({

    baseUrl: '',

    paths: {
        angular: '../node_modules/angular/angular.min',
        mwCtrl: 'login/mwController',
        mwDir: 'login/mwDirective',
        mwService: 'login/mwService',
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    },

    //deps: ['./bootstrap']

});

require(['angular', 'mwCtrl', 'mwDir', 'mwService'], function() {
	'use strict';

	angular
	    .module('myWallet', [
			'mw-ctrl',
			'mw-widget',
			'mw-service'
        ]);
});