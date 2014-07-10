'use strict';

/**
 * @ngdoc function
 * @name webCalculatorApp.controller:OperatorCtrl
 * @description
 * # OperatorCtrl
 * Controller of the webCalculatorApp
 */
angular.module('webCalculatorApp')
  .controller('OperatorCtrl', function ($scope) {
    $scope.keyPress = function (buttonId) {
      //Note: usually one would create a single keypad controller. This is simplified for demo purposes. 
      //Feel free to take a challenge and combine keypadctrl and operatorctrl into one
      console.log('this OPERATOR key was pressed:' + buttonId);
      
    };
  });
