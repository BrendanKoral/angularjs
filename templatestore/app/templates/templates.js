angular.module('templateStore.templates',['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/templates', {
            templateUrl: 'templates/templates.html',
            controller: 'TemplatesCtrl'
        }).
        when('/templates/:templateId', {
            templateUrl: 'templates/template-details.html',
            controller: 'TemplatesDetailsCtrl'
        })
}])

.controller('TemplatesCtrl', ['$scope', function ($scope) {
    console.log($scope);
}])

    .controller('TemplatesDetailsCtrl', ['$scope', function ($scope) {
    console.log($scope);
}]);