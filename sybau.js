// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALK-K5CLtdFCuyl1o2SHVv8-jMMW74N2M",
  authDomain: "who-am-i-b6d6e.firebaseapp.com",
  projectId: "who-am-i-b6d6e",
  storageBucket: "who-am-i-b6d6e.firebasestorage.app",
  messagingSenderId: "868359013540",
  appId: "1:868359013540:web:a15c0e0374d9f0b8d3d231",
  measurementId: "G-QR8LQ0W0G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);