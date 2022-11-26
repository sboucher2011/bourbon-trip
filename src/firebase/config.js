import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQqxpgYvJ3IWgJMFg6_QH5CisC0YKh6uU",
  authDomain: "bourbon-trail-c1b25.firebaseapp.com",
  projectId: "bourbon-trail-c1b25",
  storageBucket: "bourbon-trail-c1b25.appspot.com",
  messagingSenderId: "157015392930",
  appId: "1:157015392930:web:9ffbb5e6899234022f8dfb",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init servies
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
