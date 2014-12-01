'use strict';

var app = angular.module('MyApp', []);

app.directive('suchDirective', [function () {
	return {
		restrict: 'A',
		compile: function (tElement, attributes) { //No access to scope here
			//tElement = template element, meaning uncompiled DOM element
			console.log('This is the compile function.')
			console.log(tElement, attributes);
			//we can manipulate the actual element here
			var newElement = angular.element('<div>' + attributes.suchDirective + '</div>');
			tElement.append(newElement);
		}
	};
}]);
