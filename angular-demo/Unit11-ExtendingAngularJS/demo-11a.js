'use strict';

// Simple refactor out the directive, filter and factory into a new module and
// add the module dependency here:

var app = angular.module('MyApp', ['ngTouch', 'ngAnimals']);	//*** Add new ngAnimals module dependency

app.controller('AppCtrl', ['$scope', '$http', 'animal', function ($scope, $http, animal) {

	$scope.model = {
		text : 'Free the following:',
		now : new Date(),
		animals : [],
		animal : {}
	};

	animal.put({id : '299834923', name : 'Yet another free duck'});
	$scope.model.animal = animal.get();

	$http.get('data/animals.json')
		.success(function (data) {
			$scope.model.animals = data.animals;
			console.log('$scope.model.animals: ', $scope.model.animals);
		})
		.error(function () {
		}
	);
}]);
