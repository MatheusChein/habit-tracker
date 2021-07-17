import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_X6Lz4qojEQ3q2UZBC9iYFkY12QgNqVU",
  authDomain: "habit-tracker-2021.firebaseapp.com",
  projectId: "habit-tracker-2021",
  storageBucket: "habit-tracker-2021.appspot.com",
  messagingSenderId: "254305387585",
  appId: "1:254305387585:web:c1a45ee3dc54af5f24f2c0",
  measurementId: "G-9R14XP6G3P"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }