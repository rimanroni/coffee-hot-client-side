// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHL48HUnB03XCkQgi_ML7MEhBPX5GLeus",
  authDomain: "coffee-store-4ed01.firebaseapp.com",
  projectId: "coffee-store-4ed01",
  storageBucket: "coffee-store-4ed01.appspot.com",
  messagingSenderId: "591869661115",
  appId: "1:591869661115:web:096aba6cb4dc5468bcbe9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth; 