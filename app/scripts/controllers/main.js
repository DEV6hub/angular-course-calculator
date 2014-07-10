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

    var removeCommmas = function (string) {
      return string.replace(/,/g, '');
    }; //JavaScript Closure


    //Evaluate expressions
    $scope.evaluate = function () {
      $scope.model.expression.push($scope.model.currentNumber);
      $scope.model.currentNumber = [];
      $scope.model.hasDecimal = false;

      var concatExpression = $scope.model.expression.toString();
      var result = 0;

      concatExpression = concatExpression.replace(/,/g, '');
      console.log('my concat expression: ' + concatExpression);

      //check that we have an expression to evaluate!
      if (concatExpression === '') {
        $scope.display.value = 'Error';
      } else {
        result = eval(concatExpression);
        $scope.display.value = result;

        $scope.model.expression = [];

        $scope.model.expression.push(result);
      }


    };

    //Event listener for key presses
    $scope.$on('pressed.keypad.button', function (event, data) {
      var value = data.buttonId;
      console.log('event received from KeyPad in main controller. Button pressed was: ' + value);

      var allowInput = true;
      if (value === '.') {
        if ($scope.model.hasDecimal === true) {
          allowInput = false;
        } else {
          $scope.model.hasDecimal = true;
        }
      }
      if (allowInput) {
        $scope.model.currentNumber.push(value);
        var displayString = $scope.model.currentNumber.toString();
        $scope.display.value = removeCommmas(displayString);
        $scope.$apply();
      }

    });

    //Event listener for operator presses
    $scope.$on('pressed.operation.button', function (event, data) {
      var value = data.buttonId;

      if (value === 'C') {
        $scope.display.value = 0;
        $scope.model.currentNumber = [];
        $scope.model.expression = [];
      } else {
        $scope.display.value = data.buttonId;
        console.log('event received from Operator Pad in main controller. Button pressed was: ' + $scope.display.value);

        //push our number!
        $scope.model.expression.push($scope.model.currentNumber);
        $scope.model.currentNumber = [];
        $scope.model.expression.push(value);

      }
      $scope.$apply();

    });
  });