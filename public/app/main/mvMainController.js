angular.module('app').controller('mvMainController', function($scope, mvCachedCourse) {
    $scope.courses = mvCachedCourse.query();
});