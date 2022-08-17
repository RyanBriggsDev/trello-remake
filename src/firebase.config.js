// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC72PBEZHKYnD3M9Rxwbu3dcyNFI4uDw4g",
  authDomain: "trello-remake.firebaseapp.com",
  projectId: "trello-remake",
  storageBucket: "trello-remake.appspot.com",
  messagingSenderId: "971419010085",
  appId: "1:971419010085:web:76ecb23e4492370e2f2bcc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()