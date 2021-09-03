// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUgWPjZ8eE9-psWLwHNOON9QYDkMB5QrM",
  authDomain: "nextjs-blog-f5413.firebaseapp.com",
  projectId: "nextjs-blog-f5413",
  storageBucket: "nextjs-blog-f5413.appspot.com",
  messagingSenderId: "990650746502",
  appId: "1:990650746502:web:27d193e65c93707ab7b307"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;