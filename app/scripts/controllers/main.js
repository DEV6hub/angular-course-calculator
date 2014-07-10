'use strict';

/**
 * @ngdoc function
 * @name webCalculatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webCalculatorApp
 */
angular.module('webCalculatorApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.model = {
      expression: [],
      currentNumber: [],
      hasDecimal: false
    };
    //initial value of display directive :)
    $scope.display = {
      value: 0
    };
    
    $scope.$on('pressed.keypad.button', function (event, data) {
      var value = data.buttonId;
      console.log('event received from KeyPad in main controller. Button pressed was: '+value);
      $scope.display.value = value;
      
      $scope.$apply(); //tell angular to update the bindings

    });
    
    $scope.$on('pressed.operation.button', function (event, data) {
      var value = data.buttonId;
	  console.log('event received from Operator Pad in main controller. Button pressed was: '+value);
	  $scope.display.value = value;
      
      $scope.$apply(); //tell angular to update the bindings

    });
  });
