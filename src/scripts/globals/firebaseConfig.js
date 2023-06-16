// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9TdO-h4PkEyi7D3XDDXY6D-dVOOrL8Xc",
  authDomain: "capstone-konsultasi-remaja.firebaseapp.com",
  databaseURL: "https://capstone-konsultasi-remaja-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "capstone-konsultasi-remaja",
  storageBucket: "capstone-konsultasi-remaja.appspot.com",
  messagingSenderId: "71600070983",
  appId: "1:71600070983:web:c5fde73c6278f0b3ecec62",
  measurementId: "G-C6V0P7V30W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);