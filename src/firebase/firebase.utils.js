import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const config = {
  apiKey: "AIzaSyAxHeKFLMdnc4nIKKSuV3-2Lu80UWqZmbk",
  authDomain: "crwn-appdb.firebaseapp.com",
  projectId: "crwn-appdb",
  storageBucket: "crwn-appdb.appspot.com",
  messagingSenderId: "1028932935737",
  appId: "1:1028932935737:web:e060428605a7d4ef8f6de8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
