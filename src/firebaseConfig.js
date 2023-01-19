
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHuHgsL_OuZrjMsVxBFhJ7gT32lrwdcu0",
  authDomain: "vue-firebase-ae0ab.firebaseapp.com",
  projectId: "vue-firebase-ae0ab",
  storageBucket: "vue-firebase-ae0ab.appspot.com",
  messagingSenderId: "808953593930",
  appId: "1:808953593930:web:113b122dd447b260be66b3"
};

initializeApp(firebaseConfig);


const auth = getAuth();

export {auth};