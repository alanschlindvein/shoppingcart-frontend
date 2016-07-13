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
    "<div ng-init=\"initProductsController()\">\n" +
    "  <section class=\"list-group\">\n" +
    "    <div class=\"list-group-item\" ng-click=\"addToCart(product)\" ng-repeat=\"product in productsViewControl.products\">\n" +
    "      <img class=\"image\" ng-src=\"{{product.image}}\">\n" +
    "      <p class=\"name\">{{product.name}}</p>\n" +
    "      <p class=\"price\">{{product.price | currency: '$ '}}</p>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>"
  );


  $templateCache.put('views/shopping.cart.html',
    "<div ng-init=\"initShoppingCartController()\">\n" +
    "  <section class=\"list-group\">\n" +
    "    <div class=\"list-group-item\" ng-click=\"remove(product)\" ng-repeat=\"product in shoppingCartViewController.items\">Cras justo odio</div>\n" +
    "  </section>\n" +
    "</div>\n"
  );

}]);
