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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
