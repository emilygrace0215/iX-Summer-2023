// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf1oef-zpckVBEWcA6X0zPXdU_qpB3sOg",
  authDomain: "ixproject-68b3c.firebaseapp.com",
  projectId: "ixproject-68b3c",
  storageBucket: "ixproject-68b3c.appspot.com",
  messagingSenderId: "642975232225",
  appId: "1:642975232225:web:b5004ccefb60b8f78307a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};