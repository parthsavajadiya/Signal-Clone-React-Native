import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjd0ohP1o1fnzhVB4U499asDsoO4jcFR8",
    authDomain: "signal-clone-22728.firebaseapp.com",
    projectId: "signal-clone-22728",
    storageBucket: "signal-clone-22728.appspot.com",
    messagingSenderId: "909041905185",
    appId: "1:909041905185:web:d7b2fd99598221f2533d60"
  };

  let app;

  if (firebase.apps.length === 0) {
      app = firebase.initializeApp(firebaseConfig);
  } else {
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };