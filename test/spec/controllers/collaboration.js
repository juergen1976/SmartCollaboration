'use strict';

describe('Controller: CollaborationCtrl', function () {

  // load the controller's module
  beforeEach(module('smartcollaborateApp'));

  var CollaborationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollaborationCtrl = $controller('CollaborationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
