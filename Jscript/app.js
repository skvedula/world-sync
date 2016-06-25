var sampleApp = angular.module('sampleApp', ['ngRoute']);

sampleApp.config(function($routeProvider) {
    $routeProvider

        .when('/index', {
            templateUrl : '../views/register.html',
            controller  : 'mainController'
        })

        .when('/register', {
            templateUrl : '../views/register.html',
            controller  : 'mainController'
        })

        .when('/search', {
            templateUrl : '../views/search-results.html',
            controller  : 'mainController'
        });
});

sampleApp.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});