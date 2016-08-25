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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CollaborationsCtrl.awesomeThings.length).toBe(3);
  });
});
