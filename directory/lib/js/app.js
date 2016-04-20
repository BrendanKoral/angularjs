/**
 * Created by Koral on 4/19/2016.
 */
var myApp = angular.module('myApp', [
   'ngRoute',
   'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when ('/list', {
            templateUrl: 'lib/partials/list.html',
            controller: 'ListController'
        }).
        when('/details/:itemId', {
            templateUrl: 'lib/partials/details.html',
            controller: 'DetailsController'
        }).
        otherwise({
            redirectTo: '/list'
        });
}]);