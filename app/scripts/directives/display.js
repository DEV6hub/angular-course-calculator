'use strict';

/**
 * @ngdoc directive
 * @name webCalculatorApp.directive:display
 * @description
 * # display
 */
angular.module('webCalculatorApp')
  .directive('display', function () {
    return {
      template: '<div class="display">{{ show.value }}</div>',
      restrict: 'E',
      scope: {
        show: '='
      },
      link: function postLink() {
        //element.text('this is the display directive');
		
      }
    };
  });
