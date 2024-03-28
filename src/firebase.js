import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2oyNQn9GlLv6EfV9soiMJsXnO9YpMrUY",
  authDomain: "slack-clone-practice-eeb94.firebaseapp.com",
  projectId: "slack-clone-practice-eeb94",
  storageBucket: "slack-clone-practice-eeb94.appspot.com",
  messagingSenderId: "281638533334",
  appId: "1:281638533334:web:48fa38046f63097b6b3177",
  measurementId: "G-2M2QTVK52L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
