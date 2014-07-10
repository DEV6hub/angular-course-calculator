'use strict';

describe('Controller: OperatorCtrl', function () {

  // load the controller's module
  beforeEach(module('webCalculatorApp'));

  var OperatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OperatorCtrl = $controller('OperatorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
