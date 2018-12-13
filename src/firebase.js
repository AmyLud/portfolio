import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBin2RYZWULi4HtkJXE5x09k5b8kqX-x_I",
    authDomain: "amy-portfolio-a7a1e.firebaseapp.com",
    databaseURL: "https://amy-portfolio-a7a1e.firebaseio.com",
    projectId: "amy-portfolio-a7a1e",
    storageBucket: "",
    messagingSenderId: "964689979906"
  };

firebase.initializeApp(config);

export default firebase;