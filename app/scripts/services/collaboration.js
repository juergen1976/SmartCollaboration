'use strict';

angular.module('smartcollaborateApp')
  .factory("collaborations", ["$firebaseArray",
    function($firebaseArray) {


      var config = {
        apiKey: "AIzaSyDjysQMnu5y7B0GNBuHmR_absjFUFbWxdE",
        authDomain: "smartcollaboration.firebaseapp.com",
        databaseURL: "https://smartcollaboration.firebaseio.com",
        storageBucket: "firebase-smartcollaboration.appspot.com"
      };
      firebase.initializeApp(config);
      var ref = firebase.database().ref();
      var firebaseArray = $firebaseArray(ref);

      return firebaseArray;
    }
  ]);
