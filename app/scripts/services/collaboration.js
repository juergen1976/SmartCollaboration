'use strict';

angular.module('smartcollaborateApp')
  .factory("collaborations", ["$firebaseArray",
    function($firebaseArray) {
      var ref = new Firebase("https://smartcollaboration.firebaseio.com/collaborations");
      return $firebaseArray(ref);
    }
  ]);
