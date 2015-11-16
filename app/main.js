requirejs.config({

    baseUrl: '',

    paths: {
        angular: '../node_modules/angular/angular.min',
//        uiRouter: 'angular-ui-router',
        mwCtrl: 'login/mwController',
        mwDir: 'login/mwDirective',
        mwService: 'login/mwService',
    },
    shim: {
        angular: {
            exports: 'angular'
        },
//        uiRouter: {
//            deps: ['angular'],
//            exports: 'ui-router'
//        }
    },

    //deps: ['./bootstrap']

});

require(['angular', /*'uiRouter',*/ 'mwCtrl', 'mwDir', 'mwService'], function() {
	'use strict';

	angular
	    .module('myWallet', [
//			'ui-router',
			'mw-ctrl',
			'mw-widget',
			'mw-service'
        ]);

//	angular
//    .module('myWallet')
//        .config(function($routeProvider) {
//	        $routeProvider
//	
//	            // route for the home page
//	            .when('/', {
//	                templateUrl : 'login.html',
//	                controller  : 'mwCtrl',
//	                controllerAs: 'loginC'
//	            });
//	    });
});