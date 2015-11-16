define('mwCtrl', ['angular'], function (ng) {
	'use strict';

	ng
	    .module('mw-ctrl', [])
	    .controller('mwController', mwCtrl);

	mwCtrl.$inject = ['mwDataService', '$interval', '$timeout'];

	function mwCtrl(mwDataService, $interval, $timeout) {
		var self = this;

		//Properties

		// Methods
	}
});