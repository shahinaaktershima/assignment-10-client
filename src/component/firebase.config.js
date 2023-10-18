// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBilT9WdHOixR17id7vHAcSCG1l7-htju8",
  authDomain: "brand-shop-21630.firebaseapp.com",
  projectId: "brand-shop-21630",
  storageBucket: "brand-shop-21630.appspot.com",
  messagingSenderId: "276578143724",
  appId: "1:276578143724:web:b59ea53e23a029454444c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;