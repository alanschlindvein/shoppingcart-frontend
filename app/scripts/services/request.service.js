'use strict';

angular.module('MapApp')
	.service('requestService', ['$http', 'urlFactory', function($http, urlFactory) {

    this.getProducts = function() {
      return $http.get(urlFactory.getUrl('PRODUCTS'));
    };

    this.getShoppingCart = function() {
      return $http.get(urlFactory.getUrl('SHOPPING_CART'));
    };

    this.addItem = function(id, q) {
       return $http({
         url: urlFactory.getUrl('ITEMS'),
         method: "POST",
         params: {product_id: id, quantity: q}
       });
    };

    this.removeItem = function(id) {
      return $http.post(urlFactory.getUrl('ITEMS') + '/' + id);
    };
	}]);
