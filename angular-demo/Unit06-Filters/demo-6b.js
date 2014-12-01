// *** Start the server! ***

'use strict';

var app = angular.module('MyApp', []);

app.factory('httpService', ['$http', function ($http) {

	var httpService = {

		send : function () {
			var promise = $http({
				method : 'POST',
				url : 'http://localhost:3000/getUsers'
			});
			return promise;
		}
	};

	return httpService;
}]);

app.controller('MyCtrl', ['$scope', 'httpService', function ($scope, httpService) {
	$scope.model = {
		users : []
	}

	$scope.getUsers = function () {
		var promise = httpService.send();
		promise.then(
			function success(result) {
				console.log('result: ', result);
				$scope.model.users = result.data;
			},
			function failure(error) {
				console.log('error: ', error);
			}
		);
	};

}]);

app.filter('titleCase', [function () {
	return function (input) {
		console.log('input: ', input);
		return _.str.capitalize(input);
	};
}]);
