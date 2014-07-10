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
  });
