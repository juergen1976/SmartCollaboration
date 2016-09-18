'use strict';

angular.module('smartcollaborateApp')
  .controller('CollaborationsCtrl', ["$scope","$location","collaborations", function ($scope, $location, collaborations) {

    collaborations.$loaded()
      .then(function(x) {
        setTimeout(function () {
          $scope.callbackFunc();
        },0)
        });


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

    $scope.callbackFunc = function() {
      $scope.elements = document.querySelectorAll(".post-it");
      for (var i = 0; i < $scope.elements.length; i++) {
        if ($scope.isElementInViewport($scope.elements[i])) {
          $scope.elements[i].classList.add("visible");
        }

        /* Else-Bedinung entfernen, um .visible nicht wieder zu löschen, wenn das Element den Viewport verlässt. */
        else {
          $scope.elements[i].classList.remove("visible");
        }
      }
    };

    $scope.isElementInViewport = function(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    window.addEventListener("load", $scope.callbackFunc);
    window.addEventListener("scroll", $scope.callbackFunc);
    window.addEventListener("onresize", $scope.callbackFunc);
  }]);
