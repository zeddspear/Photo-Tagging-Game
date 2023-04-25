// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDCqAr8gajnJ93DpK0lirixSueo5k-xRVM",
  authDomain: "where-s-waldo-fb56e.firebaseapp.com",
  projectId: "where-s-waldo-fb56e",
  storageBucket: "where-s-waldo-fb56e.appspot.com",
  messagingSenderId: "736077919833",
  appId: "1:736077919833:web:e2c58a10b1c74b35f9a348",
  measurementId: "G-2EG1RYZSHW"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
