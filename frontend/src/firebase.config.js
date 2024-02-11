// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCscpcbW_XTbx8eveyeXKfW8m-sA8Otpzs",
  authDomain: "gaonse-8b7c4.firebaseapp.com",
  projectId: "gaonse-8b7c4",
  storageBucket: "gaonse-8b7c4.appspot.com",
  messagingSenderId: "208553097204",
  appId: "1:208553097204:web:bc87dcd4fac378d89feba1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
