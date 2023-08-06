// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBRYeNgeTrBPjyF97H9_SkHwS4bDUMfY0",
  authDomain: "rugged-diagram-382020.firebaseapp.com",
  projectId: "rugged-diagram-382020",
  storageBucket: "rugged-diagram-382020.appspot.com",
  messagingSenderId: "845069881965",
  appId: "1:845069881965:web:0df24b923f135cca436564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };