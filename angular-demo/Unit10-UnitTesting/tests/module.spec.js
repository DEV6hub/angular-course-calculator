'use strict';

describe('Testing Module: MyApp', function () {

	var myApp,
		dependencies,
		hasModule = function (m) {
			return dependencies.indexOf(m) >= 0;
		};

	beforeEach(module('MyApp'));

	beforeEach(function () {
		myApp = angular.module('MyApp');
		dependencies = myApp.value('MyApp').requires;
	});

	it('should be registered', function () {
		expect(myApp).toBeDefined();
		expect(myApp.name).toEqual('MyApp');
		expect(dependencies).toEqual(jasmine.any(Array));
		expect(myApp._invokeQueue).toEqual(jasmine.any(Array));
		expect(myApp._runBlocks).toEqual(jasmine.any(Array));
	});

	it('should have ngTouch as a dependency', function () {
		expect(hasModule('ngTouch')).toBe(true);
	});

});
