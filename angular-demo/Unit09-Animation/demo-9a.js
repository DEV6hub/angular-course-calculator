'use strict';

var app = angular.module('MyApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl : 'view/partials/login.html',
			controller : 'LoginCtrl'
		})
		.when('/home', {
			templateUrl : 'view/partials/home.html',
			controller : 'HomeCtrl'
		})
		.otherwise({redirectTo : '/login'});
}]);

app.controller('AppCtrl', ['$scope', '$location', function ($scope, $location) {
	$scope.logout = function () {
		$location.path('/');
	};
}]);

app.controller('LoginCtrl', ['$scope', '$location', function ($scope, $location) {
	$scope.model = {
		email : 'oliverm@yahoo.com',
		password : 'password'
	};

	$scope.login = function () {
		$location.path('/home');
	};
}]);

app.controller('HomeCtrl', ['$scope', function ($scope) {
	console.log('HomeCtrl init');
}]);
