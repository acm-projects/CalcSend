var app_fireBase = {};

(function(){
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAeS-YkVXPbvCBbNGdxgmDw5ykZep-ZD78",
    authDomain: "calcsend-1b252.firebaseapp.com",
    databaseURL: "https://calcsend-1b252.firebaseio.com",
    projectId: "calcsend-1b252",
    storageBucket: "calcsend-1b252.appspot.com",
    messagingSenderId: "1030744159759",
    appId: "1:1030744159759:web:d0746ab20a9a50888f557a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  app_fireBase = firebase;
})()