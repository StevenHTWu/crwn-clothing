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

// store the users in firebase authentication to the firestore database:
//    if user doesn't already exist, add it to the firestore database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
