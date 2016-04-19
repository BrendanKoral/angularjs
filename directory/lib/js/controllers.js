/**
 * Created by Koral on 4/19/2016.
 */

var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
   $http.get('lib/js/data.json').success(function(data) {
       $scope.artists = data;
       $scope.artistOrder = 'name';
       //When the data is pulled in, it sets artistOrder field to name
   });
}]);