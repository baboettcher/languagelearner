import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

// to synch with firestore db, import firestore reducer to sync state inthe background
// firebase config passed in index.js
// react-redux@5.1.1 react-redux-firebase@2.1.6 redux-firestore@0.5.7 firebase@5.3.0

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
