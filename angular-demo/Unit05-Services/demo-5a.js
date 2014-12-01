'use strict';

var app = angular.module('MyApp', []);

app.factory('user', [function () {

	var user = {
		firstName : 'Misko',
		lastName : 'Hevery'
	};

	return user;
}]);

app.controller('MyCtrl', ['$scope', 'user', function ($scope, user) {
	$scope.model = {
		user : user
	}
}]);

app.controller('OtherCtrl', ['$scope', 'user', function ($scope, user) {
	$scope.model = {
		user : user
	}
}]);
