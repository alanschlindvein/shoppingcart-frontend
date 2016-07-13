'use strict';

angular.module('MapApp')
  .controller('ShoppingCartController', ['$rootScope', '$scope', 'dataHolderService', 'requestService',
    function ($rootScope, $scope, dataHolderService, requestService) {

      $scope.initShoppingCartController = function () {
        $scope.shoppingCartViewController = dataHolderService.get('shoppingcart');
          $rootScope.$emit(':update.header', 'SHOPPING_CART');
      };

        $scope.remove = function (product) {
            requestService.removeItem(product.id).then(function(result) {
                console.log(result);
            }, function(err) {
                console.log(err);
            });
        }
    }
  ]);