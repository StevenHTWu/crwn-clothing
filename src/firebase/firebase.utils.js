import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCGabeicUmnz2kycR2VHmF13m7LntEZpzk",
  authDomain: "crwn-db-7ca91.firebaseapp.com",
  databaseURL: "https://crwn-db-7ca91.firebaseio.com",
  projectId: "crwn-db-7ca91",
  storageBucket: "crwn-db-7ca91.appspot.com",
  messagingSenderId: "85266979470",
  appId: "1:85266979470:web:a54369d67353f2018f07df",
  measurementId: "G-GVL593M6VD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
