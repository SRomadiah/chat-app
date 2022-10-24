// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmp_yZkFODRUehBZ29xCIhKpte37mL4bQ",
  authDomain: "chat-app-730fb.firebaseapp.com",
  projectId: "chat-app-730fb",
  storageBucket: "chat-app-730fb.appspot.com",
  messagingSenderId: "305403135748",
  appId: "1:305403135748:web:b6d14c11f23016ddadb251",
  measurementId: "G-KD5W3757N1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();

export default app;
export const storage = getStorage();
export const db = getFirestore();
