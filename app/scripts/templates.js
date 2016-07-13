angular.module('MapApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/container.html',
    "<div class=\"header\" ui-view=\"header\"></div>\n" +
    "<flash-message class=\"message\"></flash-message>\n" +
    "<div class=\"content\" ui-view=\"content\"></div>\n"
  );


  $templateCache.put('views/header.html',
    "<div ng-init=\"initHeaderController()\" class=\"header-container\">\n" +
    "  <div class=\"title\">\n" +
    "    <a ng-href=\"\" class=\"back-button\" ng-click=\"back()\" ng-if=\"headerViewControl.showBackButton\">\n" +
    "      <i class=\"glyphicon glyphicon-menu-left\"></i>\n" +
    "    </a>\n" +
    "    <span>{{headerViewControl.title | soGoToLang}}</span>\n" +
    "  </div>\n" +
    "  <section ng-if=\"!headerViewControl.showBackButton\" class=\"cart pull-right\">\n" +
    "    <a ng-href=\"\" ng-click=\"showCartItems()\">{{::'CART' | soGoToLang}} <span class=\"badge\">{{headerViewControl.amount}}</span></a>\n" +
    "  </section>\n" +
    "</div>"
  );


  $templateCache.put('views/products.html',
    "<div ng-init=\"initProductsController()\" class=\"products\">\n" +
    "  <section class=\"list-group products-list\">\n" +
    "    <div class=\"list-group-item product-item\" ng-init=\"product.quantity = 1\" ng-repeat=\"product in productsViewControl.products\">\n" +
    "      <img class=\"image\" ng-src=\"{{product.image}}\">\n" +
    "      <div class=\"info\">\n" +
    "        <p class=\"name\">{{product.name}}</p>\n" +
    "        <p class=\"price\">{{product.price * product.quantity | currency: '$ '}}</p>\n" +
    "      </div>\n" +
    "      <button class=\"btn btn-primary add-button\" ng-click=\"addToCart(product)\">{{::'ADD_TO_CART' | soGoToLang}}</button>\n" +
    "      <aside class=\"controls\">\n" +
    "        <button class=\"btn btn-default\" ng-click=\"product.quantity = product.quantity+1\">\n" +
    "          <i class=\"glyphicon glyphicon-menu-up\"></i>\n" +
    "        </button>\n" +
    "        <div class=\"quatity\">\n" +
    "          <span class=\"number\">{{product.quantity}}</span>\n" +
    "          <p class=\"controls-label\">Quantidade</p>\n" +
    "        </div>\n" +
    "        <button ng-hide=\"product.quantity == 1\" class=\"btn btn-default\" ng-click=\"product.quantity = product.quantity-1\">\n" +
    "          <i class=\"glyphicon glyphicon-menu-down\"></i>\n" +
    "          </button>\n" +
    "      </aside>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>"
  );


  $templateCache.put('views/shopping.cart.html',
    "<div ng-init=\"initShoppingCartController()\" class=\"shoppingcart\">\n" +
    "  <section class=\"total\">\n" +
    "    <div class=\"total-label\">{{::'TOTAL_CART' | soGoToLang}}</div>\n" +
    "    <p>{{shoppingCartViewController.amount | currency: '$ '}}</p>\n" +
    "  </section>\n" +
    "  <section class=\"list-group shoppingcart-list\">\n" +
    "    <div class=\"list-group-item shoppingcart-list-item\" ng-repeat=\"product in shoppingCartViewController.items\">\n" +
    "      <p class=\"name\">{{product.product_name}}</p>\n" +
    "      <p class=\"price\">{{product.amount * product.quantity | currency: '$ '}}</p>\n" +
    "      <p class=\"name\">{{::'QUANTITY' | soGoToLang}}: <span>{{product.quantity }}</span></p>\n" +
    "      <div class=\"remove-button\" ng-click=\"remove(product, $index)\"><i class=\"glyphicon glyphicon-remove\"></i></div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>"
  );

}]);
