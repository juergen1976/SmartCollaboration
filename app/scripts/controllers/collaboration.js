'use strict';

angular.module('smartcollaborateApp')
  .controller('CollaborationCtrl', ["$scope","$routeParams","$location","collaborations", function ($scope, $routeParams, $location, collaborations) {
    var collaborationId = $routeParams.collaborationId;
    $scope.collaboration = collaborations.$getRecord(collaborationId);

    $scope.submitCollaboration = function () {
      collaborations.$save($scope.collaboration);
      $location.path('/collaborations');
    };

    $scope.cancel = function() {
      $location.path('/collaborations');
    };
  }]);
