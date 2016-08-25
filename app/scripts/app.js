'use strict';

/**
 * @ngdoc overview
 * @name smartcollaborateApp
 * @description
 * # smartcollaborateApp
 *
 * Main module of the application.
 */
angular
  .module('smartcollaborateApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/collaborations', {
        templateUrl: 'views/collaborations.html',
        controller: 'CollaborationsCtrl',
        controllerAs: 'collaborations'
      })
      .when('/collaboration/:collaborationId', {
        templateUrl: 'views/collaboration.html',
        controller: 'CollaborationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
