'use strict';

var app = angular.module('MyApp', []);

app.directive('coolDirective', [function () {
	return {
		restrict: 'E',
		link: function (scope, element) {
			element.bind('mouseover', function () {
				console.log(element);
				console.log(element.children());
				element.children()[0].classList.toggle('alert-success');
				element.children()[0].classList.toggle('alert-danger');
			});
		},
		template: '<div class="alert alert-success">This is stuff and content</div>',
	};
}]);
