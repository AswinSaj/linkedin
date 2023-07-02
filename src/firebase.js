import firebase from "firebase";
// import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsIZBM13RBr0NOCpWp4hyS7DoWR0l9xek",
  authDomain: "linkedin-clone-6e7da.firebaseapp.com",
  projectId: "linkedin-clone-6e7da",
  storageBucket: "linkedin-clone-6e7da.appspot.com",
  messagingSenderId: "612829678034",
  appId: "1:612829678034:web:718ad4220c956ea822a00b",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
