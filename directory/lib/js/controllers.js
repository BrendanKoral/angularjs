/**
 * Created by Koral on 4/19/2016.
 */

var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
   $scope.author = {
       'name':'Brendan Koral',
       'title': 'Front End Web Dev',
       'company': 'BK Dev'
       
   } 
});