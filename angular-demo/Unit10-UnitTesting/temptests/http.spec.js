// Tweaked from http://docs.angularjs.org/api/ngMock.$httpBackend

describe('MyController', function () {
	var $httpBackend, rootScope, scope, createController;

	beforeEach(angular.mock.module('MyApp'));

	beforeEach(inject(function($injector) {
		rootScope = $injector.get('$rootScope');
	}));

	beforeEach(angular.mock.inject(function ($rootScope, $controller, _$httpBackend_) {

		$httpBackend = _$httpBackend_;

		$httpBackend.when('GET', '/data/animals.json').respond({
			"animals" : [
				{
					"id" : "73yehdy4e6y4y3e83ehjude8",
					"name" : "Ducks"
				},
				{
					"id" : "qjwmzdqwomz8dqwd8qmrhfvh",
					"name" : "Flamingos"
				}
			]
		});

		scope = $rootScope.$new();

		createController = function () {
			return $controller('AppCtrl', {'$scope' : rootScope });
		};
	}));

	it('should fetch list of animals', function () {
		$httpBackend.expectGET('/data/animals.json');
		var controller = createController();
		$httpBackend.flush();
		expect(scope.model.animals.length).toBe(2);
		expect(scope.model.animals[0].name).toBe('Flamingos');
	});


//	it('should fetch animals', function () {
//		$httpBackend.expectGET('/data/animals.json');
//		var controller = createController();
//		$httpBackend.flush();
//	});

//	afterEach(function () {
//		$httpBackend.verifyNoOutstandingExpectation();
//		$httpBackend.verifyNoOutstandingRequest();
//	});

});
