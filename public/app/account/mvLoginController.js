angular.module('app').controller('mvLoginController', function($scope, $http, mvNotifier, mvIdentity, mvAuth, $location) {
    $scope.identity = mvIdentity;
    $scope.signIn = function(username, password) {
        mvAuth.authenticateUser(username, password).then(function(success) {
            if(success) {
                mvNotifier.notify("You've successfully sing in", "success");
            } else {
                mvNotifier.notify("Username/Password combination is not correct", "error");
            }
        })
    };

    $scope.signOut = function() {
        mvAuth.logoutUser().then(function() {
            $scope.username='';
            $scope.password='';
            mvNotifier.notify('You successful logout', 'success');
            $location.path('/');
        });
    }
});