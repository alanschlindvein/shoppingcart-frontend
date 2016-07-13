'use strict';

angular.module('MapApp')
	.factory('modelsFactory', function () {
		return {
			appControl: function () {
				return {
					title: ''
				};
			},
			productsModel: function () {
				return {
					products: []
				}
			},
			headerModel: function () {
				return {
					amount: 0,
					title: '',
					showBackButton: false
				}
			}
		}
	});
