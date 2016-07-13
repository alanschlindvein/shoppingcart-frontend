'use strict';

angular.module('MapApp')
	.config(['$httpProvider', 'FlashProvider', function($httpProvider, FlashProvider) {
		FlashProvider.setTimeout(3000000);
		FlashProvider.setShowClose(false);
		$httpProvider.defaults.withCredentials = true;
	}]);
