// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-jNZrbCt5Mze64O05vSpC6EiAjK84ses",
  authDomain: "login-register-f0e51.firebaseapp.com",
  projectId: "login-register-f0e51",
  storageBucket: "login-register-f0e51.appspot.com",
  messagingSenderId: "788276247322",
  appId: "1:788276247322:web:14b20b1dbcf43f5347caa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
