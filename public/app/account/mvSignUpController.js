angular.module('app').controller('mvSignUpController', function($scope, mvUser, mvNotifier, $location, mvAuth) {

    $scope.signUp = function() {
        var newUserData = {
            userName: $scope.email,
            password: $scope.password,
            firstName: $scope.firstName,
            lastName: $scope.lastName
        };

        mvAuth.createUser(newUserData).then(function() {
            mvNotifier.notify('User account created', 'success');
            $location.path('/');
        }, function(reason) {
            mvNotifier.notify(reason, 'error');
        });
    };

});