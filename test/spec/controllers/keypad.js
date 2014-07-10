'use strict';

describe('Controller: KeypadCtrl', function () {

  // load the controller's module
  beforeEach(module('webCalculatorApp'));

  var KeypadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KeypadCtrl = $controller('KeypadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
