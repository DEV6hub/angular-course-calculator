'use strict';

describe('Testing Service: animal', function () {

	var animalService,
		newAnimal = {
			id : '3azn83zna3nsz8',
			name : 'Another duck!'
		};

	beforeEach(module('MyApp'));

	beforeEach(inject(function (animal) {
		animalService = animal;
	}));

	it('should test service is defined', function () {
		expect(animalService).toBeDefined();
	});

	it('should test service functions are defined', function () {
		expect(animalService.create).toBeDefined();
		expect(typeof animalService.create).toBe('function');
		expect(animalService.get).toBeDefined();
		expect(typeof animalService.get).toBe('function');
		expect(animalService.put).toBeDefined();
		expect(typeof animalService.put).toBe('function');
	});

	it('should test the put and get functions', function () {
		animalService.put(newAnimal);
		var animalObj = animalService.get();
		expect(typeof animalObj).toEqual('object');
		expect(animalObj.id).toBe('3azn83zna3nsz8');
		expect(animalObj.name).toBe('Another duck!');
	});

	it('should test the create function', function () {
		animalService.create();
		var animalObj = animalService.get();
		expect(typeof animalObj).toEqual('object');
		expect(animalObj.id).toBe('0');
		expect(animalObj.name).toBe('');
	});

});
