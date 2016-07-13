'use strict';

angular.module('MapApp')
  .controller('ShoppingCartController', ['$rootScope', '$scope', 'dataHolderService', 'requestService', 'controllerViewFactory', 'Flash',
    function ($rootScope, $scope, dataHolderService, requestService, controllerViewFactory, Flash) {

      var self = this;

        this.getShoppingCart = function () {
            requestService.getShoppingCart().then(function (result) {
                dataHolderService.save('shoppingcart', result.data);
                $scope.shoppingCartViewController = result.data
            }, function (err) {
                console.log(err);
            });
        };

      $scope.initShoppingCartController = function () {
        $scope.shoppingCartViewController = dataHolderService.get('shoppingcart');
          $rootScope.$emit(':update.header', 'SHOPPING_CART');
      };

        $scope.remove = function (product, index) {
            requestService.removeItem(product.id).then(function(result) {
                Flash.create('success', controllerViewFactory.getLabels('REMOVED_ITEM'));
                $scope.shoppingCartViewController.items.splice(index, 1);
                self.getShoppingCart();
            }, function(err) {
                Flash.create('danger', controllerViewFactory.getLabels('REMOVED_ITEM_FAILED'));
                console.log(err);
            });
        }
    }
  ]);