//The action to call the parse service should be here.

var myFactories = angular.module('myBlogApp.factories', []);
//what is the meaning of the first argument in myBlogApp.factory 'Blog'	
myFactories.factory('Blog', ['$http', function($http) {
	var reqHeaders = { 
   		"X-Parse-Application-Id": "TsLHqTChMOhoOf8Cy4c1FKyvA7GH2TZnql9o5ZBX",
  		"X-Parse-REST-API-Key": "MLkNeIT3hMxAICq1DSmAMnOwjfHI8opRmCDBzMQB",
   		"Content-Type": "application/json"
	}
	//declare a variable called Parse Factory that is equal to an empty object
	var ParseFactory = {};
	ParseFactory.getItems = function () {
		return $http.get('https://api.parse.com/1/classes/BlogPost/', {
			headers: reqHeaders
		}).then(function(response) {
			return response.data.results;
		});

	};	
	//ParseFactory.postItems = function(postToBlog)
	return ParseFactory;
}]);


