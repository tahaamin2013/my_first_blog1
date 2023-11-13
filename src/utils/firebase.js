// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-bea78.firebaseapp.com",
  projectId: "blog-bea78",
  storageBucket: "blog-bea78.appspot.com",
  messagingSenderId: "278409500532",
  appId: "1:278409500532:web:0c9567bd5de8e2d05bbe21"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);