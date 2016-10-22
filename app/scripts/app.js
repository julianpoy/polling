'use strict';

/**
 * @ngdoc overview
 * @name pollingApp
 * @description
 * # pollingApp
 *
 * Main module of the application.
 */
angular
  .module('pollingApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/polling/:id', {
        templateUrl: 'views/polling.html',
        controller: 'PollingCtrl',
        controllerAs: 'polling'
      })
      .when('/newSession', {
        templateUrl: 'views/newsession.html',
        controller: 'NewsessionCtrl',
        controllerAs: 'newSession'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
