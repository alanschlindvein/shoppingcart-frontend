'use strict';

angular.module('MapApp')
	.config(['$httpProvider', 'FlashProvider', function($httpProvider, FlashProvider) {
		FlashProvider.setTimeout(5000);
		FlashProvider.setShowClose(true);
		$httpProvider.defaults.withCredentials = true;
	}]);
