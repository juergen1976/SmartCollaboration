'use strict';

describe('Controller: CollaborationsCtrl', function () {

  // load the controller's module
  beforeEach(module('smartcollaborateApp'));

  var CollaborationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollaborationsCtrl = $controller('CollaborationsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
