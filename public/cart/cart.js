'use strict';
 /*cart module*/
angular.module('cart', ['ngRoute'])

 /*route to cart.html*/
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'public/cart/cart.html',
    controller: 'CartCtrl'
  });
}])
 
.controller('CartCtrl', [function() {
     
}]);