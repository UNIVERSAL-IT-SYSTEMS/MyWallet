define('mwDir', ['angular'], function (ng) {
	'use strict';

	ng
	    .module('mw-widget', [])
	    .directive('mwLoginView', [mwLogin]);

	function mwLogin() {
		var directive = {
			link: link,
			replace: true,
			template: [
			    '<form>',
			        '<div class="form-row">',
				        '<label>Username:&nbsp;',
				    		'<input type="text" data-ng-model="username">',
				    	'</label>',
			    	'</div>',
			    	'<div class="form-row">',
				    	'<label>Password:&nbsp;',
				    		'<input type="password" data-ng-model="pwd">',
				    	'</label>',
			    	'</div>',
			    	'<button type="submit">Login</button>',
			    '</form>'
            ].join('')
		};
		
		return directive;

		function link(scope, el, attrs) {
		}
	}
});