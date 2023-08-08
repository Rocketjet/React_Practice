// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDidS_-2R51BD-lvGCf7ytZB_UbuejYmKs",
  authDomain: "react-base-auth-itera.firebaseapp.com",
  projectId: "react-base-auth-itera",
  storageBucket: "react-base-auth-itera.appspot.com",
  messagingSenderId: "681754014605",
  appId: "1:681754014605:web:f89dd576dc54b898ff43c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();