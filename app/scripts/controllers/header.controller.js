'use strict';

angular.module('MapApp')
	.controller('HeaderController', ['$rootScope', '$scope', '$state', 'modelsFactory', 'requestService', 'dataHolderService',
		function ($rootScope, $scope, $state, modelsFactory, requestService, dataHolderService) {

			$rootScope.$on(':update.cart', function () {
				$scope.getShoppingCart();
			});

			$rootScope.$on(':update.header', function (event, state) {
				$scope.headerViewControl.title = state;
				$scope.headerViewControl.showBackButton = (state !== 'PRODUCTS');
			});

			$scope.initHeaderController = function () {
				$scope.headerViewControl = modelsFactory.headerModel();
				var shoopingcart = dataHolderService.get('shoppingcart');
				if(!shoopingcart) {
					$scope.getShoppingCart();
					return;
				}
				$scope.headerViewControl.amount = shoopingcart.items.length;
			};

			$scope.getShoppingCart = function () {
				requestService.getShoppingCart().then(function (result) {
					dataHolderService.save('shoppingcart', result.data);
					$scope.headerViewControl.amount = result.data.items.length;
				}, function (err) {
					console.log(err);
				});
			};

			$scope.back = function() {
				$state.go('main.products');
			};

			$scope.showCartItems = function () {
				$state.go('main.shoppingcart');
			};
		}
	]);
