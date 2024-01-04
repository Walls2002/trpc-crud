// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-D0FdPxJSolqwmbgUpduVI8LPZrtyCP0",
  authDomain: "crud-app-38f4d.firebaseapp.com",
  projectId: "crud-app-38f4d",
  storageBucket: "crud-app-38f4d.appspot.com",
  messagingSenderId: "159384637851",
  appId: "1:159384637851:web:3a014d890246bb0612d13e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, app, firestore, storage };
