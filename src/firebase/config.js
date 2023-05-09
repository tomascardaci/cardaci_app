// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS7ktVXr8hHy1czJ2GstFxKj1Pgc0vNUc",
  authDomain: "fusa-fa981.firebaseapp.com",
  projectId: "fusa-fa981",
  storageBucket: "fusa-fa981.appspot.com",
  messagingSenderId: "1069478398114",
  appId: "1:1069478398114:web:cb182d580a13ff3c7faffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app