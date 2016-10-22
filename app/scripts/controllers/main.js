'use strict';

/**
 * @ngdoc function
 * @name pollingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pollingApp
 */
angular.module('pollingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.newSession = function(){
      window.location.href = "/#/newSession"
    }
  });
