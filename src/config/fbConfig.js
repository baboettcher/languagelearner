import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBwSsNohen5XYsGWDVVKSMg8MYeBfy27kg",
  authDomain: "adam-hr.firebaseapp.com",
  databaseURL: "https://adam-hr.firebaseio.com",
  projectId: "adam-hr",
  storageBucket: "adam-hr.appspot.com",
  messagingSenderId: "799205757474"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
