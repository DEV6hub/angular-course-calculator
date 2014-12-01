'use strict';

describe('Testing Directives', function () {

	var scope,
		element;

	beforeEach(module('MyApp'));
	beforeEach(inject(function ($rootScope, $compile) {
		scope = $rootScope;
		element = angular.element('<div simple></div>');
		$compile(element)($rootScope);
	}));

	it('should add the simple class', function () {
		expect(element.hasClass('simple')).toBe(true);
	});

});
