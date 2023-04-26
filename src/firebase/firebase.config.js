// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbyncTBsTlLOJ8KddTAMnnJCPXcUfWayY",
  authDomain: "the-dragon-news-b2f67.firebaseapp.com",
  projectId: "the-dragon-news-b2f67",
  storageBucket: "the-dragon-news-b2f67.appspot.com",
  messagingSenderId: "297442276064",
  appId: "1:297442276064:web:e2b17fd0afa03f477d1685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;