//Logic for page actions here. 

var myControllers = angular.module('myBlogApp.controllers', []);

myControllers.controller('blogController', ['$scope', '$location', 'Blog'], function ($scope, $location, Blog) {
 //Have no idea what this does//
   $scope.posts = [];
    Blog.getItems().then(function (data) {
       $scope.items = data;
        for (var i = 0; i < data.length; i++) {
            var post = {
                title: data[i].title,
                body: data[i].body,
                author: data[i].author
            }
            console.log(post);
            $scope.posts.unshift(post)
        }
   }).catch(function (error) {
       alert('error');
   });
});
//create a scope to direct location path for making a new blog//
myControllers.controller('createController', ['$scope', '$location', 'Blog'], function($scope, $location, Blog) {
    $scope.submitButton = function() {
        $location.path('../views/blogposts.html');
 };
});
