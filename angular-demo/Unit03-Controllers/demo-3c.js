/* jshint -W097 */
'use strict';

var app = angular.module('MyApp', []);

app.controller('AppCtrl', ['$rootScope', '$scope', function ($scope, $rootScope) {

	$scope.model = {
		typingText : 'nothing yet'
	};

	$scope.$on('my.custom.event', function (event, data) {
		console.log('data', data);
		$scope.model.typingText = data.text;

		$rootScope.$broadcast('my.custom.event.success', {text : 'Got it at ' + (new Date())});
	});

}]);

app.controller('InnerCtrl', ['$scope', function ($scope) {

	$scope.model = {
		ackCount : 0,
		lastMessage : ''
	};

	$scope.emitEvent = function () {
		$scope.$emit('my.custom.event', {text : 'Hello from the inner scope!'});
	}

	$scope.$on('my.custom.event.success', function (event, data) {
		$scope.model.ackCount++;
		$scope.model.lastMessage = data.text;
	});


}]);
