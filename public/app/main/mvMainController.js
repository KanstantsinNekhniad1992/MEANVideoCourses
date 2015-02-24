angular.module('app').controller('mvMainController', function($scope) {
    $scope.courses = [
        { name: 'C#', featured:true, published: new Date('1/1/2013')},
        { name: 'ASP.NET', featured: false, published: new Date('3/8/2011')},
        { name: 'Js', featured:true, published: new Date('12/7/2013')},
        { name: 'Java', featured:true, published: new Date('1/8/2013')},
        { name: 'Patterns', featured:false, published: new Date('5/1/2013')},
        { name: 'Ruby', featured:true, published: new Date('12/6/2013')},
        { name: 'GitHub', featured:false, published: new Date('12/4/2013')},
        { name: 'C++', featured:true, published: new Date('28/8/2013')}
    ];
});