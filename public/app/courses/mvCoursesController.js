angular.module('app').controller('mvCoursesController', function($scope, mvCachedCourse) {
    $scope.courses =  mvCachedCourse.query();

    $scope.sortOptions = [
        {value: 'title', text: 'Sort by Title'},
        {value: 'published', text: 'Sort by Published Date'}
    ];

    $scope.sortOrder = $scope.sortOptions[0].value;
});