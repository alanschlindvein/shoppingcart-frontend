'use strict';

angular.module('MapApp')
	.factory('labelsViewFactory', function () {
		var labels = {
			'ADD_TO_CART'   : 'Adicionar ao carrinho',
			'CART'          : 'Carrinho',
			'TOTAL_CART'    : 'Total do carrinho',
			'PRODUCTS'      : 'Produtos',
			'QUANTITY'      : 'Quantidade',
			'SHOPPING_CART' : 'Carrinho de compras'
		};
		return {
			getLabels: function () {
				return labels;
			}
		};
	});
