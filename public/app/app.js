angular.module('app', ['ngRoute', 'ngResource', 'toaster']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main',
            controller: 'mvMainController'
        })
});