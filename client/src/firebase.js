// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4bbfd.firebaseapp.com",
  projectId: "mern-blog-4bbfd",
  storageBucket: "mern-blog-4bbfd.appspot.com",
  messagingSenderId: "662186134377",
  appId: "1:662186134377:web:08cc08f2c74c033f498bf8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);