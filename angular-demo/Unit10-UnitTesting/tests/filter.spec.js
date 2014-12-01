'use strict';

describe('Testing Filters', function () {

	var formatdate;

	beforeEach(module('MyApp'));

	beforeEach(inject(function ($filter) {
		formatdate = $filter('formatdate');
	}));

	it('should confirm formatdate is defined', function () {
		expect(formatdate).toBeDefined();
	});

	it('should confirm format of a date', function () {
		expect(formatdate(new Date(2014, 7, 1))).toEqual('August 1, 2014');
	});

});
