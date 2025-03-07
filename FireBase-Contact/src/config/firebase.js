// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqeZ_2dmL2b0NHP5gECarwvR1A2sVsbfo",
  authDomain: "vite-contact-ef61b.firebaseapp.com",
  projectId: "vite-contact-ef61b",
  storageBucket: "vite-contact-ef61b.firebasestorage.app",
  messagingSenderId: "352531296595",
  appId: "1:352531296595:web:3d6cc0650bf584943731a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);