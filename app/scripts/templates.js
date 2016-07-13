angular.module('MapApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/container.html',
    "<div class=\"header\" ui-view=\"header\"></div>\n" +
    "<div class=\"content\" ui-view=\"content\"></div>\n"
  );


  $templateCache.put('views/header.html',
    "<div ng-init=\"initHeaderController()\" class=\"header-container\">\n" +
    "  <button class=\"back-button\" ng-click=\"back()\" ng-if=\"headerViewControl.showBackButton\"><i class=\"glyphicon glyphicon-arrow-left\"></i></button>\n" +
    "  <span class=\"title\">{{headerViewControl.title | soGoToLang}}</span>\n" +
    "  <section class=\"basket pull-right\">\n" +
    "    <a ng-href=\"\" ng-click=\"showCartItems()\">Cart <span class=\"badge\">{{headerViewControl.amount}}</span></a>\n" +
    "  </section>\n" +
    "</div>"
  );


  $templateCache.put('views/products.html',
    "<div ng-init=\"initProductsController()\" class=\"products\">\n" +
    "  <flash-message></flash-message>\n" +
    "  <section class=\"list-group products-list\">\n" +
    "    <div class=\"list-group-item product-item\" ng-init=\"product.quantity = 1\" ng-repeat=\"product in productsViewControl.products\">\n" +
    "      <img class=\"image\" ng-src=\"{{product.image}}\">\n" +
    "      <div class=\"info\">\n" +
    "        <p class=\"name\">{{product.name}}</p>\n" +
    "        <p class=\"price\">{{product.price | currency: '$ '}}</p>\n" +
    "      </div>\n" +
    "      <button class=\"btn btn-primary add-button\" ng-click=\"addToCart(product)\">{{::'ADD_TO_CART' | soGoToLang}}</button>\n" +
    "      <aside class=\"controls\">\n" +
    "        <button class=\"btn btn-default\" ng-click=\"product.quantity = product.quantity+1\"><i class=\"glyphicon glyphicon-arrow-up\"></i></button>\n" +
    "        <span>{{product.quantity}}</span>\n" +
    "        <button ng-hide=\"product.quantity == 1\" class=\"btn btn-default\" ng-click=\"product.quantity = product.quantity-1\"><i class=\"glyphicon glyphicon-arrow-up\"></i></button>\n" +
    "      </aside>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>"
  );


  $templateCache.put('views/shopping.cart.html',
    "<div ng-init=\"initShoppingCartController()\">\n" +
    "  <flash-message></flash-message>\n" +
    "  <section class=\"list-group\">\n" +
    "    <div class=\"list-group-item\" ng-click=\"remove(product)\" ng-repeat=\"product in shoppingCartViewController.items\">\n" +
    "      <p class=\"name\">{{product.product_name}}</p>\n" +
    "      <p class=\"quantity\">{{product.quantity}}</p>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>"
  );

}]);
