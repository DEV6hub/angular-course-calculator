'use strict';

var app = angular.module('MyApp', ['ngTouch']);

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

app.directive('simple', function () {
	return {
		restrict : 'A',
		link : function (scope, element) {
			element.addClass('simple');
		}
	};
});

app.filter('formatdate', ['$filter', function ($filter) {
	return function (date) {
		var d = new Date(date),
			returnDate;
		returnDate = $filter('date')(new Date(d.getFullYear(), d.getMonth(), d.getDate()), 'MMMM d, yyyy');
		return (date ? returnDate : '');
	};
}]);

app.factory('animal', function () {
	'use strict';

	var animal = {};

	var emptyAnimal = {
		id : '0',
		name : ''
	};

	var animalService = {
		create : function () {
			angular.copy(emptyAnimal, animal);
		},
		get : function () {
			return animal;
		},
		put : function (newAnimal) {
			angular.copy(newAnimal, animal);
		}
	};

	return animalService;
});


