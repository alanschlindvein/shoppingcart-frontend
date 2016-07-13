'use strict';

angular.module('MapApp')
  .controller('ProductsController', ['$rootScope', '$scope', 'requestService', 'modelsFactory',
    function ($rootScope, $scope, requestService, modelsFactory) {

      $scope.initProductsController = function () {
        $scope.productsViewControl = modelsFactory.productsModel();
        $rootScope.$emit(':update.header', 'PRODUCTS');
        requestService.getProducts().then(function(result) {
          $scope.productsViewControl.products = result.data;
        }, function(err) {
          console.log(err);
        });
      };

      $scope.addToCart = function(product) {
        requestService.addItem(product.id, 1).then(function(result) {
          $rootScope.$emit(':update.cart');
        }, function(err) {
          console.log(err);
        });
      }
    }
  ]);
