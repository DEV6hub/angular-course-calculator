/* jshint -W097 */
'use strict';

var app = angular.module('MyApp', []);

app.controller('AppCtrl', ['$scope', function ($scope) {

	$scope.model = {
		typingText : 'nothing yet'
	};

}]);
