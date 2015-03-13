angular.module('app').controller('mvProfileController', function ($scope, mvAuth, mvIdentity, mvNotifier) {

    $scope.userName = mvIdentity.currentUser.userName;
    $scope.firstName = mvIdentity.currentUser.firstName;
    $scope.lastName = mvIdentity.currentUser.lastName;

    $scope.update = function() {

        var newUserData = {
            userName: $scope.userName,
            firstName: $scope.firstName,
            lastName: $scope.lastName
        };

        if($scope.password && $scope.password.length > 0) {
            newUserData.password = $scope.password;
        };

        mvAuth.updateCurrentUser(newUserData).then(function() {
            mvNotifier.notify('Your user account had been updated', 'success');
        }, function(reason) {
            mvNotifier.notify(reason, 'error')
        });
    }

});