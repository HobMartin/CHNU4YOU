// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJWCp6iGPUDp6YYl3yE81q0GsMUViHFBY",
  authDomain: "chnu4you.firebaseapp.com",
  projectId: "chnu4you",
  storageBucket: "chnu4you.appspot.com",
  messagingSenderId: "660387791648",
  appId: "1:660387791648:web:a7dd2725e1878561078d45",
  measurementId: "G-3HLYMX3M7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
export { auth, storage };
