'use strict';

angular.module('MapApp')
	.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'FlashProvider', function($stateProvider, $urlRouterProvider, $httpProvider, FlashProvider) {
		FlashProvider.setTimeout(3000);
		FlashProvider.setShowClose(true);
        $httpProvider.defaults.withCredentials = true;
		$urlRouterProvider.otherwise('/main/products');
		$stateProvider.state('main', {
			url: '/main',
			views: {
				'': {templateUrl: 'views/container.html'},
				'header@main': {templateUrl: 'views/header.html', controller: 'HeaderController'}
			}
		})
		.state('main.products', {
			url: '/products',
			views: {
				'content@main': {templateUrl: 'views/products.html', controller: 'ProductsController'}
			}
		})
	    .state('main.shoppingcart', {
	      url: '/shoppingcart',
		    views: {
			    'content@main': {templateUrl: 'views/shopping.cart.html', controller: 'ShoppingCartController'}
		    }
	    });
	}]);
