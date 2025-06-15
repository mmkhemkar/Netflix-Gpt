// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-3nmddSTz_au6U0ZW6b1NFuUr0u5EYiM",
  authDomain: "netflixgpt-b411c.firebaseapp.com",
  projectId: "netflixgpt-b411c",
  storageBucket: "netflixgpt-b411c.firebasestorage.app",
  messagingSenderId: "80148739987",
  appId: "1:80148739987:web:661d81d9045c89d49f9a66",
  measurementId: "G-5SF7T60K1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
