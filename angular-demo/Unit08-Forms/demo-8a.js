'use strict';

var app = angular.module('MyApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

	'use strict';

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

	console.log('AppCtrl init');

	$scope.logout = function () {
		$location.path('/');
	};

}]);

app.controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {

	console.log('LoginCtrl init');

	$scope.model = {
		email : '',
		password : ''
	};

	$scope.login = function (loginForm) {

		console.log('loginForm: ', loginForm);

		if (loginForm.$valid) {
			$location.path('/home');
		} else {
			$window.alert('Invalid form!');
		}
	};

}]);

app.controller('HomeCtrl', ['$scope', function ($scope) {
	console.log('HomeCtrl init');
}]);


