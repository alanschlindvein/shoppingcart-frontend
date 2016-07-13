'use strict';

angular.module('MapApp')
	.factory('controllerViewFactory', function () {
		var labels = {
			'ADDED_ITEM'                : 'Item adicionado ao carrinho',
			'ADDED_ITEM_FAILED'         : 'Não foi possível adicionar o item ao carrinho. Tente novamente.',
			'REMOVED_ITEM'              : 'O item foi removido',
			'REMOVED_ITEM_FAILED'       : 'Não foi possível remover o item do carrinho. Tente novamente.'
		};
		return {
			getLabels: function (label) {
				return labels[label];
			}
		};
	});
