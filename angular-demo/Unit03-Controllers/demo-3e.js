/* jshint -W097 */
'use strict';

var app = angular.module('MyApp', []);

app.controller('AppCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.model = {
		sports: [
			'Basketball',
			'Tennis',
			'Hockey',
			'Soccer',
			'Baseball'
		]
	};

	$scope.getUserInput = function () {
		alert($scope.model.userInput);
	};
}]);