'use strict';

describe('Testing Controller: MyCtrl', function () {

	var scope, httpBackend, appCtrl;

	beforeEach(module('MyApp'));

	// The injected $httpBackend is from the angular-mocks.js module
	// see http://docs.angularjs.org/api/ngMock.$httpBackend
	beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
		scope = $rootScope.$new();
		scope.model = {};
		httpBackend = $httpBackend;

		// Intercept any calls to this URL and return this mock data.
		httpBackend.expect('GET', 'data/animals.json').respond(
			'{' +
				'	"animals" : [' +
				'		{' +
				'			"id" : "testid1",' +
				'			"name" : "Ducks for testing"' +
				'		},' +
				'		{' +
				'			"id" : "testid2",' +
				'			"name" : "Flamingos for free"' +
				'		}' +
				'	]' +
				'}'
		);

		// Instantiating the Controller makes the HTTP call (see AppCtrl)
		// Instead of making the real HTTP call, the call is intercepted by the httpBackend.expect() above,
		// and returns the mock data: animals[].
		appCtrl = $controller('AppCtrl', { $scope : scope });
	}));

	it('should test controller is defined', function () {
		expect(appCtrl).toBeDefined();
	});

	it('should confirm scope model', function () {
		expect(scope.model).toBeDefined();
		expect(scope.model).toEqual(jasmine.any(Object));
		expect(scope.model.text).toBeDefined();
		expect(scope.model.now).toBeDefined();
		expect(scope.model.animals).toBeDefined();
		expect(scope.model.animal).toBeDefined();
	});

	it('should test http call using mock data', function () {
		// Flushing allows HTTP requests to happen synchronously, greatly simplifying unit testing!
		httpBackend.flush();	// Explicitly call the synchronous HTTP call

		expect(scope.model.animals.length).toBe(2);
		expect(scope.model.animals[0].name).toBe('Ducks for testing');
		expect(scope.model.animals[1].id).toBe('testid2');
	});

});
