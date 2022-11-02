// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUaLgyn372pOW5pvuScEkSAJY3E2BMwFo",
  authDomain: "web-food-yoyaku-app.firebaseapp.com",
  projectId: "web-food-yoyaku-app",
  storageBucket: "web-food-yoyaku-app.appspot.com",
  messagingSenderId: "807587572933",
  appId: "1:807587572933:web:13afae1f616714921754ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;