// Import the functions you need from the SDKs you need
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtsl6i0A2CJqnbz46YOv6_aJ6y7UP4j0A",
  authDomain: "base-de-datos-a443b.firebaseapp.com",
  projectId: "base-de-datos-a443b",
  storageBucket: "base-de-datos-a443b.appspot.com",
  messagingSenderId: "298373804576",
  appId: "1:298373804576:web:cb182b7de088bd3ca1c245"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore (app);
