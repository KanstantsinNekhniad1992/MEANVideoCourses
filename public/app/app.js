angular.module('app', ['ngRoute', 'ngResource', 'toaster']);

angular.module('app').config(function($routeProvider, $locationProvider) {

    var routeRoleChecks = {
        admin: { auth: function (mvAuth) {
            return mvAuth.authorizeCurrentUserForRoute('admin');
            }
        },
        user: {
            auth: function (mvAuth) {
                return mvAuth.authorizeAuthenticatedUserForRoute();
            }
        }
    };

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main',
            controller: 'mvMainController'
        })
        .when('/admin/users', {
            templateUrl: '/partials/users-list',
            controller: 'mvUserListController'
        })
        .when('/signup', {
            templateUrl: '/partials/signup',
            controller: 'mvSignUpController'
        })
        .when('/profile', {
            templateUrl: '/partials/profile',
            controller: 'mvProfileController',
            resolve: routeRoleChecks.user
        })
});