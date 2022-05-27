// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8fDBldeWNHHfLCNLPH7toGLKZ7f1lB3s",
  authDomain: "dencemaster-76f1f.firebaseapp.com",
  databaseURL: "https://dencemaster-76f1f-default-rtdb.firebaseio.com",
  projectId: "dencemaster-76f1f",
  storageBucket: "dencemaster-76f1f.appspot.com",
  messagingSenderId: "173109183753",
  appId: "1:173109183753:web:a8fc439f39f31013aa3fd8",
  measurementId: "G-JDJ5QYT8RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);

