import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB6lXT2iekdqrqnF3okOTWTQaO6ytoj5WA",
  authDomain: "insta-picgram.firebaseapp.com",
  databaseURL: "https://insta-picgram.firebaseio.com",
  projectId: "insta-picgram",
  storageBucket: "insta-picgram.appspot.com",
  messagingSenderId: "582137232481",
  appId: "1:582137232481:web:013773526438c5941ffe20",
  measurementId: "G-SL3GK4WHJY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
