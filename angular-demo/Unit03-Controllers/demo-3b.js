/* jshint -W097 */
'use strict';

var app = angular.module('MyApp', []);

app.controller('AppCtrl', ['$scope', function ($scope) {

	$scope.model = {
		typingText : 'nothing yet'
	};

	$scope.$on('my.custom.event', function (event, data) {
		console.log('data', data);
		$scope.model.typingText = data.text;
	});

}]);

app.controller('InnerCtrl', ['$scope', function ($scope) {

	$scope.emitEvent = function () {
		$scope.$emit('my.custom.event', {text : 'Hello from the inner scope!'});
	};

}]);
