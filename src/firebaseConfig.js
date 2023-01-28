// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwRbJM0f5LAXbFs7bR1wIF9xHeTy80bl8",
  authDomain: "hackalpana-b2f94.firebaseapp.com",
  projectId: "hackalpana-b2f94",
  storageBucket: "hackalpana-b2f94.appspot.com",
  messagingSenderId: "889427461871",
  appId: "1:889427461871:web:4165d47dff9f987943fd1a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
