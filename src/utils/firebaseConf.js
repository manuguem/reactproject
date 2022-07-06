// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3tbKOwuktriHFbl0Jd8z6f1DBrTQTLII",
  authDomain: "ecommerce-75d4e.firebaseapp.com",
  projectId: "ecommerce-75d4e",
  storageBucket: "ecommerce-75d4e.appspot.com",
  messagingSenderId: "60411331681",
  appId: "1:60411331681:web:794021b2b9f3aa93985620",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
