var module = angular.module('cometServices', []);

module.service('comet', ['$http', function($http) {
	var service = {
	};
	service.watch = function(success, error) {
		$http({method: 'GET', url: 'http://localhost:3001/messages'}).
		success(function(data, status, headers, config) {
			success();
			service.watch(success, error);
		}).
		error(function(data, status, headers, config) {
			error();
		}); 
	};
	service.post = function(success, error) {
		$http({method: 'POST', url: 'http://localhost:3001/messages'}).
		success(function(data, status, headers, config) {
			success();
		}).
		error(function(data, status, headers, config) {
			error();
		}); 
	};
	return service;
}]);
