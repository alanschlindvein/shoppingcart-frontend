'use strict';

angular.module('MapApp')
	.factory('labelsViewFactory', function () {
		var labels = {
			'ADD_TO_CART'   : 'Adicionar ao carrinho',
			'SHOPPING_CART' : 'Carrinho de compras',
			'PRODUCTS'      : 'Produtos'
		};
		return {
			getLabels: function () {
				return labels;
			}
		};
	});
