var app_fireBase = {};

(function(){
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDkO5CjjfJzq9PLmvFucq38-i5CR0u8fSc",
    authDomain: "compassignemnt1.firebaseapp.com",
    databaseURL: "https://compassignemnt1.firebaseio.com",
    projectId: "compassignemnt1",
    storageBucket: "compassignemnt1.appspot.com",
    messagingSenderId: "850612686910"
  };
  firebase.initializeApp(config);

  app_fireBase = firebase;


})()