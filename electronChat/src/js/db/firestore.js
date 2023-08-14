import { initializeApp } from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBWwH2Uex0eNjt_20nHW8FWVSYf7nuV_y0",
  authDomain: "electron-chat-6a9e9.firebaseapp.com",
  projectId: "electron-chat-6a9e9",
  storageBucket: "electron-chat-6a9e9.appspot.com",
  messagingSenderId: "976162580319",
  appId: "1:976162580319:web:ae4fb2a5723281a174b8ea",
  measurementId: "G-KGVTZPNW55",
};

// Initialize Firebase
export default initializeApp(firebaseConfig).firestore();
