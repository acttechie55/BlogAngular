//Use to instantiate app, connect factory & controllers and configure app.

var myBlogApp = angular.module('myBlogApp', ['ngRoute', 'ngResource', 'myBlogApp.controllers', 'myBlogApp.services']);

//myBlogApp.controller('BlogController', ['$scope', '$http', function($scope, $http){
	
//}]);

myBlogApp.config(function($routeProvider){
	$routeProvider
		.when('/home', {
		controller: 'listController',
		templateUrl: '../views/blogposts.html'	
	})
		.when('/newpost', {
		controller: 'createController',
		templateUrl: '../views/newpost.html'
	})
		.otherwise ({
		redirectTo: '/home'
	})
});