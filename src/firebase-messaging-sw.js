importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAZ82Y4ZbLWvA0gIWU8gBxKMxUFqKyyrWo",
    authDomain: "freelencepwa.firebaseapp.com",
    projectId: "freelencepwa",
    storageBucket: "freelencepwa.appspot.com",
    messagingSenderId: "992324593466",
    appId: "1:992324593466:web:44cc2fccd51e6d19c0d203",
    measurementId: "G-4585LC3D76"
  });
  
  // Retrieve an instance of Firebase Messaging so that it can handle background
  // messages.
  const messaging = firebase.messaging();