'use strict';
 /*checkout module*/
angular.module('checkout', ['ngRoute'])
 
/*route to checkout.html*/
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/checkout', {
        templateUrl: 'public/checkout/checkout.html',
        controller: 'CheckoutCtrl'
    });
}])
 
.controller('CheckoutCtrl', ['$scope', function($scope) {
    
}]);