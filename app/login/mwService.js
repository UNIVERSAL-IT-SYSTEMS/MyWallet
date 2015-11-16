define('mwService', ['angular'], function (ng) {
	'use strict';

	ng
	    .module('mw-service', [])
	    .service('mwDataService', mwService);
	
	mwService.$inject = ['$q', '$http'];

	function mwService($q, $http) {
		var self = this;

		
		function init() {
			
		}
	}
});