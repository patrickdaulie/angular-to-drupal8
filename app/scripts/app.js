'use strict';

/**
 * @ngdoc overview
 * @name angularToDrupal8App
 * @description
 * # angularToDrupal8App
 *
 * Main module of the application.
 */
angular
  .module('angularToDrupal8App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
