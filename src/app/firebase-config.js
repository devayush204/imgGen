// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnPPsN3BRWQKQsF3KwLEBIHC140G24QcM",
  authDomain: "imggen-44a11.firebaseapp.com",
  projectId: "imggen-44a11",
  storageBucket: "imggen-44a11.appspot.com",
  messagingSenderId: "608547215001",
  appId: "1:608547215001:web:cb21d314601d90635c0a08",
  measurementId: "G-H29JNKZZ29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Auth = getAuth(app)
const Provider = new GoogleAuthProvider()
const db = getFirestore(app)
const storage = getStorage(app)


export {Auth, Provider, db, storage};