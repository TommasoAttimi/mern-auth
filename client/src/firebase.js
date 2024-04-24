// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-3a5f6.firebaseapp.com",
  projectId: "mern-auth-3a5f6",
  storageBucket: "mern-auth-3a5f6.appspot.com",
  messagingSenderId: "524183026147",
  appId: "1:524183026147:web:dbddf7d0a193631e8a88d6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
