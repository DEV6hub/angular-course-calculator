'use strict';

var app = angular.module('MyApp', []);

app.controller('AppCtrl', ['$scope', function ($scope) {
	$scope.model = {
		userName: 'J. Random Flyer',
		flights: [
			{
				'name': 'AC2455',
				'from': 'YYZ',
				'to': 'JFK',
				'depart' : '20:00:00EST',
				'arrive' : '21:30:00EST'
			},
			{	
				'name' : 'AC2456',
				'from': 'YYZ',
				'to': 'MIA',
				'depart' : '17:00:00EST',
				'arrive' : '20:30:00EST'
			}
		]
	}

	$scope.book = function(name) {
		alert($scope.model.userName + ' booked flight: ' + name);
	}
}]);


app.directive('flight', [function () {
	return {
		restrict: 'E',
		scope: {
			name: '@', //access the value as a string
			select: '&', //access the value as an object
			flight: '=' //two way binding between directive and controller
		},
		link: function (scope, element, attrs) {
			var bookButton = element.find('button');
			bookButton.bind('click', function (event) {
				console.log('selected flight: ' + scope.name);
				scope.select({name: scope.name})		
			})
		},
		templateUrl: 'flight-overview.html'
	};
}]);
