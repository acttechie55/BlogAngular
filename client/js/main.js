//Use to instantiate app, connect factory & controllers and configure app.

var myBlogApp = angular.module('myBlogApp', ['ngRoute', 'ngResource']);
myBlogApp.controller('BlogController', ['$scope', '$http', function($scope, $http){
	
}]);

myBlogApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
	//	controller: 'PostController',
		templateUrl: '../views/blogposts.html'	
	})
		.when('latest', {
	//	controller: 'SinglePostController',
		templateUrl: '../views/newpost.html'
	})
		.otherwise ({
		redirectTo: '/'
	});
});