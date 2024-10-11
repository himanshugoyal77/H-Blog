// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "h-node-blog.firebaseapp.com",
  projectId: "h-node-blog",
  storageBucket: "h-node-blog.appspot.com",
  messagingSenderId: "311355107429",
  appId: "1:311355107429:web:30c2a0125794f62438be8c",
  measurementId: "G-EMKYESCTWH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
