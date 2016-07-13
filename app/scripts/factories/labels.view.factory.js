'use strict';

angular.module('MapApp')
	.factory('labelsViewFactory', function () {
		var labels = {
			'SHOPPING_CART' : 'Carrinho de compras',
			'PRODUCTS'      : 'Produtos'
		};
		return {
			getLabels: function () {
				return labels;
			}
		};
	});
