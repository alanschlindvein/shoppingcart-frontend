'use strict';

angular.module('MapApp')
  .controller('ProductsController', ['$rootScope', '$scope', 'requestService', 'modelsFactory', 'controllerViewFactory', 'Flash',
    function ($rootScope, $scope, requestService, modelsFactory, controllerViewFactory, Flash) {

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
        requestService.addItem(product.id, product.quantity).then(function(result) {
          $rootScope.$emit(':update.cart');
          Flash.create('success', controllerViewFactory.getLabels('ADDED_ITEM'));
        }, function(err) {
          Flash.create('danger', controllerViewFactory.getLabels('ADDED_ITEM'));
          $window.scrollTo(0, 0);
          console.log(err);
        });
      }
    }
  ]);
