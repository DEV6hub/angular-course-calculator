'use strict';

angular.module('ngAnimals', [])

	.directive('simple', function () {
		return {
			restrict : 'A',
			link : function (scope, element) {
				element.addClass('simple');
			}
		};
	})

	.filter('formatdate', ['$filter', function ($filter) {
		return function (date) {
			var d = new Date(date),
				returnDate;
			returnDate = $filter('date')(new Date(d.getFullYear(), d.getMonth(), d.getDate()), 'MMMM d, yyyy');
			return (date ? returnDate : '');
		};
	}])

	.factory('animal', function () {
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
	}
);
