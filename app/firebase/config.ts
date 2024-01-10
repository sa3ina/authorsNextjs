// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAqijcrccmkX5J8zJLHkAQjsxt8TuT6ZQ",
  authDomain: "authors-23592.firebaseapp.com",
  databaseURL: "https://authors-23592-default-rtdb.firebaseio.com",
  projectId: "authors-23592",
  storageBucket: "authors-23592.appspot.com",
  messagingSenderId: "446369706011",
  appId: "1:446369706011:web:ad0d36b553eb5be55508be",
  measurementId: "G-23B4SHXLSR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
