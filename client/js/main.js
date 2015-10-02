//Use to instantiate app, connect factory & controllers and configure app.

var myBlogApp = angular.module('myBlogApp', ['ngRoute', 'ngResource', 'myBlogApp.controllers', 'myBlogApp.factories']);

//myBlogApp.controller('BlogController', ['$scope', '$http', function($scope, $http){
	
//}]);

myBlogApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
		controller: 'blogController',
		templateUrl: '../views/blogposts.html'	
	})
		.when('/latest', {
		controller: 'createController',
		templateUrl: '../views/newpost.html'
	})
		.otherwise ({
		redirectTo: '/'
	});
});