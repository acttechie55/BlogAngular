//The action to call the parse service should be here.

var myFactories = angular.module('myBlogApp.services', ['ngResource']);
myFactories.factory('Blog', ['$resource', function($resource) {
	var reqURL = 'https://api.parse.com/1/classes/BlogPost/'
	var reqHeaders = { 
   		"X-Parse-Application-Id": "TsLHqTChMOhoOf8Cy4c1FKyvA7GH2TZnql9o5ZBX",
  		"X-Parse-REST-API-Key": "MLkNeIT3hMxAICq1DSmAMnOwjfHI8opRmCDBzMQB",
   		"Content-Type": "application/json"
	}
		var Posts = $resource(reqURL, {}, {
		'query': {
			headers: reqHeaders
		},
		'save' : {
			method: 'POST',
			headers: reqHeaders
		},
		'get': {
			headers: reqHeaders
		}
	});

	return Posts;
}]);


