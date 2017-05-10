'use strict';
 
 /*main module*/
angular.module('shoppingCart', [
    'ngRoute',
    'cart',
    'checkout'
]).
/*coute to cart*/
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}]);