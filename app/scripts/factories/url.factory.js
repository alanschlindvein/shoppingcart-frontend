'use strict';

angular.module('MapApp')
	.factory('urlFactory', ['appSettings', function(appSettings) {
		var urlsForRequest = {
			'PRODUCTS'          : '/api/products',
			'SHOPPING_CART'     : '/api/shoppingcart',
			'ITEMS'             : '/api/shoppingcart/items'
		};

		return {
			getUrl: function(URL) {
				return appSettings.getBaseUrl() + urlsForRequest[URL];
			}
		};
	}]);
