//Logic for page actions here. 

var myControllers = angular.module('myBlogApp.controllers', []);

myControllers.controller('createController', ['$scope', '$location', 'Blog', 
function($scope, $location, Blog) {
   
   $scope.switchView = function(view){
			$location.path(view);
		};

		$scope.blogPost = function(){
			$scope.blog.timePretty = moment().format("dddd, MMMM Do YYYY");
			Blog.save($scope.blog).$promise.then(function(data){
				alert('message sent!');
			});
		}
}]);

myControllers.controller('listController', ['$scope', '$location', 'Blog', 
function ($scope, $location, Blog) {
 $scope.switchView = function(view){
			$location.path(view);
		};

		$scope.posts = Blog.query().$promise.then(function(data){
			$scope.blog = data.results;
		});
}]);

