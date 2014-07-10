'use strict';

/**
 * @ngdoc function
 * @name webCalculatorApp.controller:KeypadCtrl
 * @description
 * # KeypadCtrl
 * Controller of the webCalculatorApp
 */
angular.module('webCalculatorApp')
  .controller('KeypadCtrl', function ($scope) {
    $scope.keyPress = function (buttonId) {
      //Note: usually one would create a single keypad controller. This is simplified for demo purposes. 
      //Feel free to take a challenge and combine keypadctrl and operatorctrl into one
      console.log('this KEYPAD key was pressed:' + buttonId);
      
      //emit (upwards) the keypad button press event!
      $scope.$emit('pressed.keypad.button', {
        buttonId: buttonId
      });
      
    };
  });
