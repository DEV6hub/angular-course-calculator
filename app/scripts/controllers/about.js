'use strict';

/**
 * @ngdoc function
 * @name webCalculatorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webCalculatorApp
 */
angular.module('webCalculatorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
