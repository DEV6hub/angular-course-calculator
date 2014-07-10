'use strict';

/**
 * @ngdoc directive
 * @name webCalculatorApp.directive:calculatorButton
 * @description
 * # calculatorButton
 */
angular.module('webCalculatorApp')
  .directive('calculatorButton', function () {
    return {
      template: '<button>{{ buttonLabel }}</button>',
      restrict: 'E',
      scope: {
        action: '&',
        buttonLabel: '@'
      },
      link: function postLink(scope, element) {
        //element.text('this is the calculatorButton directive');
        var action = element.find('button');
        //Bind whatever action is passed to the directive to the button
        action.bind('click', function () {
          scope.action({
            buttonId: scope.buttonLabel
          });
        });
      }
    };
  });
