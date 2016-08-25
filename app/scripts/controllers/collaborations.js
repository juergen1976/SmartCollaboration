'use strict';

angular.module('smartcollaborateApp')
  .controller('CollaborationsCtrl', ["$scope","$location","collaborations", function ($scope, $location, collaborations) {

    $scope.allCollaborations = collaborations;
    $scope.collaboration = {};

    var initializeCollaboration = function() {
      $scope.collaboration = {
        title: '',
        description: '',
        author: '',
        category: ''
      };
    };

    initializeCollaboration();

    $scope.submitCollaboration = function () {
      collaborations.$add({
        title: $scope.collaboration.title,
        description: $scope.collaboration.description,
        author: $scope.collaboration.author,
        category: $scope.collaboration.category
      });
      initializeCollaboration();
    };

    $scope.deleteCollaboration = function(collaboration) {
        collaborations.$remove(collaboration);
    };
  }]);
